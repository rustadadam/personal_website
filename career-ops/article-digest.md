# Article digest (Career-Ops)

Dense proof points for job evaluations, tailored CVs, and interview prep. Every bullet below is tied to a **named source**. If something is not in that source, it is not claimed here.

**Primary sources**

| Source | What to use it for |
|--------|--------------------|
| `Adam_Rustad_Resume.pdf` / `cv.md` | Employment dates, publication list as you present them to employers, GPA, phone |
| `src/components/Projects.tsx` | One-line project blurbs, tech stacks, public URLs |
| `src/components/Achievements.tsx` | Timeline entries (education, internships, publications, launches) |
| `src/components/Skills.tsx` | How you map skills → projects (more granular than the Projects grid) |
| GitHub / Scholar / arXiv | Repos and paper pages linked from the portfolio or résumé PDF |

---

## Reconciliation — resolved

All three discrepancies are now fixed. Notes on what changed and why:

| Topic | Canonical (authoritative source) | What changed |
|-------|----------------------------------|--------------|
| **LumiTube start** | **March 2025** (résumé PDF) | `Achievements.tsx` updated Sept 2024 → March 2025 |
| **GPA** | **3.92** (résumé PDF) | `Achievements.tsx` updated 3.91 → 3.92 |
| **Random Forest-Supervised MA venue** | **IEEE Big Data 2024** (MMAI workshop, Washington D.C., pp. 3309–3312) — confirmed by [arXiv:2411.15179](https://arxiv.org/abs/2411.15179) and Google Scholar | `cv.md` corrected (PDF had it as ICMLA — the PDF had the two 2024 venues **swapped**) |
| **Graph Integration / Diffusion-Based MA venue** | **ICMLA 2024** (Miami FL, pp. 144) — confirmed by [arXiv:2410.22978](https://arxiv.org/abs/2410.22978) and Google Scholar | `cv.md` corrected (PDF had it as "IEEE" — also swapped) |

The résumé PDF had the two Dec 2024 paper venues transposed. The portfolio's `Achievements.tsx` already had the correct venues (IEEE Big Data for Random Forest; ICMLA for Graph Integration). All files now agree with the publisher records.

---

## Work & leadership (from résumé PDF + portfolio timeline)

### LumiTube — co-founder / technical lead

**Links:** [lumitube.org](http://lumitube.org/) (also [www.lumitube.org](https://www.lumitube.org) on the portfolio).

**Résumé PDF (`cv.md`):**

- App uses a **custom AI engine** to customize YouTube-related feeds for children based on **family values**; **parental controls** and **analytics** to support kids’ development.
- **Product execution:** full-cycle development and deployment to **Apple App Store** and **Google Play**.
- **Market fit:** analyzed data from **hundreds of parents** to identify pain points.

**Portfolio — `Projects.tsx`:**

- Co-founded and built a video platform with **AI content filtering** and **customizable parental controls**; **novel ranking algorithms** and **analytics** to personalize content for family values.
- Tech tags: **Flutter**, AI, mobile, analytics.

**Portfolio — `Skills.tsx`:**

- Cross-platform **iOS & Android** apps: video streaming, parental controls, AI filtering.
- DevOps / ops: co-founded startup, **raised funding**, investor networking, scaling (treat fundraising detail as **portfolio-only** until corroborated elsewhere).

**Portfolio — `Achievements.tsx` (timeline):**

- Role framed as **Co-Founder & Technical Lead**; built the technical stack for iOS/Android, **novel AI filtering and ranking algorithms**.

---

### N of 1 AI — AI engineer intern

**Résumé PDF:** June 2025 – Sept 2025, remote. Built **AI agents from the ground up** for highly complex tasks; **shipped code** and **validated products** with user experience.

**Portfolio — `Achievements.tsx`:** Built **agentic AI workflows** end-to-end—pipelines that automated complex tasks and integrated tools for autonomy.

---

### Brigham Young University — research assistant

**Résumé PDF:** Jan 2024 – Present (Provo, UT). **High-dimensional data** and **time series classification**. Algorithms **>10% ahead of prior SOTA** in **manifold learning** and **time series** settings; **scalable, repeatable** pipelines on **large, diverse** datasets.

**Portfolio — `Achievements.tsx`:** Same window (**Jan 2024 – Present**); description emphasizes ML/data analysis and code for **cutting-edge CS research** (no employer name in that line item).

---

### Allset — research intern

**Résumé PDF:** Nov 2023 – Feb 2024 (Lehi, UT). Product work for **AI-based online booking** and **SMS invoicing**; **100+ local businesses** engaged for feedback to improve design.

**Portfolio — `Achievements.tsx`:** AI-driven product concepts and engagement with **local businesses** to validate designs.

---

### Leland Coaching — ML models *(portfolio only; not on `cv.md` / PDF)*

**Sources:** `Projects.tsx`, `Skills.tsx` only (not a separate dated job row on the site).

- **Projects.tsx:** Recommendation models for coach candidates using **profile embeddings** and heuristics; **ensemble** models and **LLM-assisted** neural network; **89% F1** and **99% recall** stated for Leland Coaching.
- **Skills.tsx:** **OpenAI** and **Google Gemini** APIs to score scraped LinkedIn profiles.

---

## Product & engineering projects (portfolio-heavy)

### SoundScribe Pro — audiobook generation

**Links:** [soundscribepro.com](https://www.soundscribepro.com) (portfolio); résumé PDF links [static marketing page](https://www.soundscribepro.com/static/index.html).

**Résumé PDF:** Multi-character audiobooks via a **novel AI pipeline**; **$7,050 saved per book**; **agentic** manuscript analysis for **emotional context**; **full-stack** UI for custom control.

**`Projects.tsx`:** Production platform with **paying customers**; automates narration, mastering, **distribution-ready** outputs; **weeks → hours**. Stack: **AWS**, **Google Cloud**, **Python**, **NLP**, web.

**`Skills.tsx`:** **Serverless** audio pipeline (queued jobs, retries); **~$7,050 per book** cost optimization; **Stripe**, webhooks, entitlements; public launch and paying users.

**Demos:** YouTube demo linked from Projects card (`youtu.be/d8dV8O6ch9c`).

---

### SafeSocial — Chrome extension

**Link:** [Chrome Web Store — Safe Social](https://chromewebstore.google.com/detail/safe-social/jdacdndepggbdjbknoncakkgbbhfoccm).

**Résumé PDF:** Led a **small team**; removes inappropriate content for **teens** on social media; **95% accuracy** model with preserved UX.

**`Projects.tsx`:** **TensorFlow.js**, in-browser **computer vision**, **real-time** filtering of explicit/adult content; **Google API**, **Mixpanel**; high accuracy with **low performance overhead**.

**`Skills.tsx`:** JavaScript, TensorFlow.js, Chrome Extension APIs; leadership copy references **leading several developers** on the extension.

**Demos:** YouTube (`youtu.be/slG7xXj4rG4`).

---

### Manifold alignment research — MASH & SPUD (`mashspud`)

**Links:** [GitHub: rustadadam/mashspud](https://github.com/rustadadam/mashspud) · [Google Scholar](https://scholar.google.com/citations?user=ajI1Nl8AAAAJ&hl=en).

**`Projects.tsx`:** **SPUD** and **MASH** algorithms for cross-domain structure discovery; **multiple papers**; reproducible experiment pipelines. Stack: **Python**, **MATLAB**, scikit-learn, Jupyter.

**`Skills.tsx`:** Library implementing **SPUD & MASH** with reproducible benchmarks; parallel supervised training for Random Forest–supervised manifold alignment; time-series classification pipelines.

**Video:** `youtu.be/NrNHT1rozHk` (Projects).

---

### Text-to-audio / SoundScribe pipeline (repo)

**Link:** [GitHub: rustadadam/SoundScribe](https://github.com/rustadadam/SoundScribe).

**`Projects.tsx`:** One-click text → audiobook pipeline on **AWS** and **Google Cloud**; multiple ML models; **Python**, **Boto3**, NLP.

**`Skills.tsx`:** Lambda/EC2-style automation; containerized Lambdas in pipelines.

---

### Client-to-client chess platform

**Link:** [GitHub: rustadadam/chess](https://github.com/rustadadam/chess).

**`Projects.tsx`:** **Java**, **WebSocket**, **SQL**; real-time multiplayer, validation, **persistent games** for resume-after-network-failure.

**`Skills.tsx`:** WebSocket server; **MySQL** for game storage (spelling “mySQL” / “continous” as on the site).

---

### Twin autoencoders — embedding extension

**Links:** [GitHub: JakeSRhodesLab/TwinAE-MA](https://github.com/JakeSRhodesLab/TwinAE-MA) · [Scholar](https://scholar.google.com/citations?user=ajI1Nl8AAAAJ&hl=en).

**`Projects.tsx`:** Method to **extend aligned embeddings** with twin autoencoders; **graph alignment** and data fusion; **PyTorch**, Joblib, Jupyter, TensorFlow.

**`Skills.tsx`:** Joblib + **SSH** servers for large experiment grids; collaboration with neuroscientists on ML for **Alzheimer’s** (aligns with the **arXiv abstract** for *Guided Manifold Alignment with Geometry-Regularized Twin Autoencoders*, which discusses multi-modal clinical data).

---

## Publications & preprints (with stable links)

Venue lines follow **`cv.md`** (from your résumé PDF). **arXiv** IDs are embedded in your résumé PDF and titles match arXiv metadata.

| Work (short title) | As on résumé | Stable link |
|--------------------|--------------|-------------|
| Graph integration / diffusion-based MA | ICMLA 2024, Miami FL, pp. 144 | [arXiv:2410.22978](https://arxiv.org/abs/2410.22978) |
| Random forest supervised MA | IEEE Big Data 2024 (MMAI workshop), Washington D.C., pp. 3309–3312 | [arXiv:2411.15179](https://arxiv.org/abs/2411.15179) |
| Twin AEs / semi-supervised MA / OOS extension | SAMPTA, 2025 | [OpenReview](https://openreview.net/forum?id=Y53Gdt4IgI) |
| Label-guided imputation / time series | ICMLA, 2025 | [arXiv:2509.22919](https://arxiv.org/abs/2509.22919) |
| Guided MA / geometry-regularized twin AEs | ICDM, 2025 | [arXiv:2509.22913](https://arxiv.org/abs/2509.22913) |
| Generalized Proximity Forest | ACDSA, 2026 | [arXiv:2511.19487](https://arxiv.org/abs/2511.19487) |

**Portfolio — `Achievements.tsx`** adds conference **locations** (e.g., ICDM Washington D.C., ICMLA Florida, SampTA Austria, ACDSA Philippines). Use those **only** where they match your official proceedings record.

---

## Education & programs

**`cv.md` / PDF:** BS Computer Science; minors **Mathematics** & **Entrepreneurship**; June 2021 – May 2026 (expected); **GPA 3.92**, **ACT 31**, Dean’s List.

**`Achievements.tsx`:** **Sandbox Student Innovator** (Sept 2024 – Present)—BYU-affiliated innovation/entrepreneurship program. **AWS Academy Machine Learning Foundations** (Feb 2025).

---

## Community & service

From **`cv.md` / PDF:** **Eagle Scout**; **Food and Care Coalition** (monthly, since Sept 2025); full-time volunteer representative (Oct 2021–2023), including **mission leader**, **70+ hour** weeks.

**`Skills.tsx` (verify before use):** Mission leadership—**~80 missionaries**; conference talks (ICMLA, IEEE, GSP, Red Rock—confirm on LinkedIn).

---

## Portfolio `Skills.tsx` claims to verify externally

The Skills page ties you to **fundraising**, **Stripe**, **Black Rock / stock forecasting**, etc. Those are useful interview prompts but should be **confirmed** (offer letters, demos, LoRs) before hard claims in outbound applications.

---

*Last aligned with `cv.md`, `Adam_Rustad_Resume.pdf`, and `src/components/{Projects,Achievements,Skills}.tsx` in the personal-website repo.*
