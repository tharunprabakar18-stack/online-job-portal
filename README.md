# CareerSpring — Premium Minimalist Online Job Portal

**CareerSpring** is a modern, high-craft web application designed for browsing curated career opportunities, tracking candidate applications, saving roles, and managing employer job listings.

Built strictly using vanilla **HTML5**, **CSS3**, and **JavaScript (ES6+)**, CareerSpring features an editorial-inspired design system with off-white backgrounds, bold black typography, and lime-green accents.

---

## 🎨 UI Aesthetic & Visual Style
- **Canvas Palette:** Architectural off-white canvas (`#FAF9F5`, `#F3F1E8`), stark white cards (`#FFFFFF`), and charcoal black borders (`#0F0F0F`).
- **Accent Identity:** Electric lime-green (`#CCFF00`, `#B8E600`) for high-intent call-to-actions, category tags, and status highlights.
- **Typography:** Contemporary high-contrast editorial hierarchy powered by **Space Grotesk** (display headlines), **Plus Jakarta Sans** (interface and body), and **JetBrains Mono** (monospaced job codes, salaries, and metadata).
- **Editorial Cards:** Distinctive card layouts with company monogram tiles, clear compensation figures, and interactive bookmark actions.

---

## 🚀 Key Features

### 1. Curated Role Discovery & Search
- Pre-populated with 8 fictional positions across engineering, product design, infrastructure, product management, AI research, and marketing.
- Search instantly across **job titles**, **company names**, and **skills/keywords**.
- Location selector supporting **Remote Worldwide**, **San Francisco**, **New York**, **London**, **Berlin**, and **Austin**.

### 2. Multi-Faceted Filter Sidebar
- **Discipline / Category:** Engineering, Design & Creative, Product Management, Marketing & Growth, Data & AI Research, Finance & Ops.
- **Employment Type:** Full-Time, Freelance/Contract, Part-Time.
- **Workplace Model:** 100% Remote, Hybrid (Flexible), On-Site Studio.
- Sort listings by **Latest Posted**, **Highest Salary**, or **Alphabetical Order**.

### 3. Detailed Job Specification Modal
- Inspect full role responsibilities, required qualifications, benefits cloud, annual compensation ranges, and workplace policies.
- Direct quick-apply action and bookmark toggle right within the modal.

### 4. Candidate Application Form & Strict Duplicate Prevention
- Candidate submission with validation for full name, email, phone number, portfolio URL, experience level, and cover note.
- **Strict Duplicate Check:** Uses applicant email against the current job ID. If a candidate has already applied for the same position with that email, submission is rejected with an inline error and a warning notification.

### 5. Application Tracking Pipeline
- Track application status progression (**Applied**, **Under Review**, **Shortlisted**, **Interview**).
- Option to withdraw applications if needed.
- Stored reliably in browser `localStorage`.

### 6. Saved / Favorite Jobs
- Bookmark any role with the star button on cards or inside the job drawer.
- View and manage saved opportunities in a dedicated tab with live counter badges.

### 7. Demo Employer Studio (CRUD)
- **Publish New Roles:** Form to add vacancies with role title, company, location, category, employment type, salary, overview, requirements, and keyword tags.
- **Edit Listings:** Update existing postings at any time.
- **Delete Postings:** Remove vacancies with automatic cleanup.
- **Applicant Counter:** Real-time indicator showing candidate application volume per vacancy.

### 8. CSV Export
- Export full candidate application logs to a clean, standard `.csv` file formatted with UTF-8 BOM for immediate Microsoft Excel / Google Sheets compatibility.

### 9. Demo Disclaimer
- Prominently labeled simulation platform. Fictional sample jobs and simulated hiring pipelines for demonstration and testing purposes.

---

## 💻 How to Run on Windows

You can run CareerSpring directly in any modern browser (Chrome, Edge, Firefox, Brave) without installing Node.js, databases, or third-party dependencies.

### Option 1: Direct File Launch (Quickest)
1. Open File Explorer and navigate to:
   ```
   C:\Users\THARUN\Downloads\tharun projects\online-job-portal
   ```
2. Double-click `index.html` (or right-click &rarr; **Open with** &rarr; **Google Chrome** / **Microsoft Edge**).

### Option 2: Run via Local HTTP Server (Recommended)
Running through an HTTP server ensures optimal module loading and browser cache behavior:

#### Using Python (Built-in on Windows):
```powershell
cd "c:\Users\THARUN\Downloads\tharun projects\online-job-portal"
python -m http.server 8115
```
Then open your browser to:
```
http://localhost:8115
```

#### Using PowerShell Start-Process:
```powershell
Start-Process "http://localhost:8115"
```

---

## 📂 Project Architecture

```
online-job-portal/
├── index.html       # Semantic HTML5 structure, navigation, views, and modal drawers
├── style.css        # Minimalist editorial off-white design system, animations, responsive grid
├── script.js        # State manager, search/filtering, duplicate prevention, modals, CSV export
└── README.md        # Comprehensive documentation and Windows run guide
```

---

## 🔒 Data Persistence & Reset
- All job modifications, favorites, and submitted applications persist across browser refreshes via `localStorage`.
- Click the **"Reset Demo Jobs"** button in the sidebar footer anytime to restore the default sample dataset.
