exports.handler = async () => {
  const TOKEN = process.env.GH_TOKEN;
  if (!TOKEN) return { statusCode: 500, body: JSON.stringify({ error: 'GH_TOKEN not configured' }) };

  const LOGIN = 'rustadadam';
  const START_YEAR = 2023;
  const currentYear = new Date().getFullYear();

  const GQL = `query($login:String!,$from:DateTime!,$to:DateTime!){
    user(login:$login){
      contributionsCollection(from:$from,to:$to){
        totalCommitContributions
        restrictedContributionsCount
      }
    }
  }`;

  const now = new Date().toISOString();
  const years = Array.from({ length: currentYear - START_YEAR + 1 }, (_, i) => START_YEAR + i);

  const counts = await Promise.all(years.map(async y => {
    const from = `${y}-01-01T00:00:00Z`;
    const to   = y === currentYear ? now : `${y}-12-31T23:59:59Z`;
    const r = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { Authorization: `bearer ${TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: GQL, variables: { login: LOGIN, from, to } }),
    });
    const d = await r.json();
    const c = d?.data?.user?.contributionsCollection;
    return c ? c.totalCommitContributions + c.restrictedContributionsCount : 0;
  }));

  const total = counts.reduce((a, b) => a + b, 0);
  return {
    statusCode: 200,
    headers: { 'Cache-Control': 'public, s-maxage=3600', 'Content-Type': 'application/json' },
    body: JSON.stringify({ total }),
  };
};
