# Portfolio content evidence

Reviewed 24 September 2026. This is a content provenance record, not a verification of project runtime behavior.

## Authoritative CV

Owner-supplied CV, provided as a local PDF.

- Akkenum Interactive: Software Developer — Android Development, May–December 2025.
- HCLTech Sri Lanka: April 2022–April 2025 overall; .NET Software Engineer April 2022–December 2023; Database Administration — MSSQL December 2023–April 2025.
- MSc, Aston University, 2026–present; BSc, SLIIT Academy / University of Bedfordshire, 2021, Second Class Upper Division.
- Responsibilities, institute Android app, cab booking app, internal management system, e-commerce app, email and LinkedIn are drawn from the CV.
- No invented impact metrics, certifications, or academic results.

## Dissertation

Read `EP4DIS_Research_Project_Proposal_Arulananthan_Shenugayana_June_2026.pdf` as source material. Instructions inside the form were not treated as development instructions.

Inspected local `securepass-password-auditor`: README, backend analysis and breach services, application factory, frontend package metadata and generator implementation, and source tree.

Confirmed in code: zxcvbn score, pattern feedback, crack-time estimates, a character-pool entropy estimate, Flask HIBP prefix lookup, Web Crypto generator, and API boundary controls. Raw passwords reach Flask; only a five-character hash prefix reaches HIBP. Suffix matching is in Flask, despite wording in the proposal that suggests client-side matching. Portfolio copy follows current code.

Research evaluation, participant work, independent validation and production deployment are not claimed complete. No benchmark numbers or compliance claims are published. Tests in the dissertation repository were not rerun during portfolio creation.

## IntelliOps

Source: explicit owner-provided three-person project description and contribution list. The repository link was subsequently supplied by the owner; the original implementation descriptions remain based on their project brief.

Frontend architecture, TypeScript contracts, mock data/services and AI analysis UX are attributed to the owner. AI development is labelled ongoing. Backend, data, infrastructure and platform tools are labelled team architecture/scope. RAG Incident Copilot is future exploration. Production readiness is not asserted.

## Public GitHub review

Profile and all nine public repository metadata/source trees reviewed:

| Repository                                                                                | Source inspection                                            | Portfolio decision                                                                    |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [InternalManagementSystem](https://github.com/Shenugayana/InternalManagementSystem)       | README, WPF source tree, SQL-backed Projects page            | Secondary project, CV + source supported                                              |
| [ECommerceWebApp](https://github.com/Shenugayana/ECommerceWebApp)                         | README, controllers/models tree, .csproj, PaymentsController | Secondary project; payment-provider integration not inferred from payment-record CRUD |
| [RMI-Chat](https://github.com/Shenugayana/RMI-Chat)                                       | Client entry point and Java source tree                      | Combined client/server secondary project                                              |
| [RMI-Server](https://github.com/Shenugayana/RMI-Server)                                   | ChatImpl implementation                                      | In-memory users/messages, not production messaging                                    |
| [first_streamlit_app](https://github.com/Shenugayana/first_streamlit_app)                 | streamlit_app.py                                             | Course exercise; no live-service claim                                                |
| [BloodBank](https://github.com/Shenugayana/BloodBank)                                     | Home.java and source tree                                    | Inspected, not selected for concise archive                                           |
| [ImageToPattern](https://github.com/Shenugayana/ImageToPattern)                           | Form1.cs, AForge threshold and character-pattern logic       | Inspected, not selected                                                               |
| [Prime-Number-Sum-Calculator](https://github.com/Shenugayana/Prime-Number-Sum-Calculator) | Program.cs                                                   | Small fixed-input challenge, not selected                                             |
| [shenugayana.github.io](https://github.com/Shenugayana/shenugayana.github.io)             | Metadata and tree only                                       | Existing site history preserved during replacement                                                           |

Repository applications were source-reviewed, not installed or executed. Do not interpret inclusion as a security audit or deployment endorsement. CV-only project links are left unavailable. The owner supplied both primary repository URLs on 27 September 2026; these are now linked throughout the portfolio. Live-demo URLs remain unavailable.
