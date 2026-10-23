/**
 * CareerSpring - Minimalist Editorial Online Job Portal
 * Handles Job Listings, Search & Filters, Bookmarks, Application Submissions,
 * Duplicate Prevention, Application Status Tracking, Employer CRUD, and CSV Export.
 */

(function () {
  'use strict';

  // --- Initial Curated Demo Job Listings ---
  const DEFAULT_JOBS = [
    {
      id: 'JOB-2026-101',
      title: 'Staff Systems Engineer (Distributed Infra)',
      company: 'Stripe',
      companyMonogram: 'S',
      location: 'San Francisco, CA',
      category: 'Engineering',
      jobType: 'Full-Time',
      workplace: 'Remote',
      salary: '$190,000 - $240,000 / yr',
      salaryNumeric: 240000,
      datePosted: '2026-10-21',
      overview: 'We are looking for a Staff Systems Engineer to lead the architecture of our core distributed ledger orchestration pipelines, serving millions of transactions per second across global regions.',
      responsibilities: [
        'Architect and scale multi-region consensus systems with ultra-low latency guarantees.',
        'Partner with security, reliability, and platform engineering teams on fault-tolerance strategies.',
        'Mentor senior engineers and define engineering best practices for mission-critical services.',
        'Spearhead post-mortem investigations and capacity planning frameworks.'
      ],
      requirements: [
        '8+ years building high-throughput distributed systems in Go, Rust, or C++.',
        'Deep expertise in Raft, Paxos, Kafka, and distributed consensus mechanisms.',
        'Track record of designing systems with 99.999% availability SLAs.',
        'Strong communication skills and empathy for developer tooling.'
      ],
      tags: ['Distributed Systems', 'Go', 'Rust', 'Kafka', 'Consensus', 'Staff'],
      benefits: ['Competitive Equity Grant', 'Flexible Remote Stipend ($3,000)', 'Full Health & Dental Coverage', 'Unlimited PTO', 'Annual Learning Budget']
    },
    {
      id: 'JOB-2026-102',
      title: 'Principal Design Systems Architect',
      company: 'Figma',
      companyMonogram: 'F',
      location: 'New York, NY',
      category: 'Design & Creative',
      jobType: 'Full-Time',
      workplace: 'Hybrid',
      salary: '$180,000 - $220,000 / yr',
      salaryNumeric: 220000,
      datePosted: '2026-10-20',
      overview: 'Lead the evolution of our universal component architecture, tokens pipeline, and typography systems across web, desktop, and mobile products at Figma.',
      responsibilities: [
        'Define the multi-platform design tokens specification and automated sync pipelines.',
        'Partner with product teams to translate complex creative workflows into accessible components.',
        'Establish WCAG AAA accessibility standards across all core canvas interactions.',
        'Publish internal design patterns documentation and host design system workshops.'
      ],
      requirements: [
        '7+ years leading design systems in large-scale modern software products.',
        'Mastery of Figma components, auto-layout, design tokens, and CSS architecture.',
        'Proficiency prototyping with HTML, CSS, and modern TypeScript.',
        'Strong portfolio showcasing design systems from 0 to scale.'
      ],
      tags: ['Design Systems', 'Figma', 'Accessibility', 'Tokens', 'TypeScript', 'Principal'],
      benefits: ['Generous Equity', 'Home Office Stipend', 'Comprehensive Wellness Benefits', 'Parental Leave (16 Weeks)', 'Conference Allowance']
    },
    {
      id: 'JOB-2026-103',
      title: 'Senior Full Stack Engineer (Next.js & Edge)',
      company: 'Vercel',
      companyMonogram: 'V',
      location: 'Remote',
      category: 'Engineering',
      jobType: 'Full-Time',
      workplace: 'Remote',
      salary: '$160,000 - $195,000 / yr',
      salaryNumeric: 195000,
      datePosted: '2026-10-22',
      overview: 'Build next-generation developer platform experiences, edge caching primitives, and real-time dashboard analytics that power the modern web.',
      responsibilities: [
        'Develop real-time deployment analytics and developer telemetry pipelines.',
        'Optimize Next.js edge runtime integrations and streaming SSR performance.',
        'Collaborate with product designers to ship polished, micro-animated interfaces.',
        'Author open-source guides, examples, and developer documentation.'
      ],
      requirements: [
        '5+ years with React, Next.js, Node.js, and TypeScript in production.',
        'Hands-on experience with Edge computing, WebSockets, and distributed caching.',
        'Eye for design fidelity and passion for delightful developer experiences.',
        'Experience building developer-facing APIs or developer platforms.'
      ],
      tags: ['Next.js', 'React', 'TypeScript', 'Edge Compute', 'Vercel', 'Full Stack'],
      benefits: ['Work from Anywhere', 'Top-tier Equipment Package', 'Health & Vision Insurance', 'Annual Wellness Allowance', 'Quarterly Co-working Stipend']
    },
    {
      id: 'JOB-2026-104',
      title: 'Senior Product Manager - Developer Workflows',
      company: 'Linear',
      companyMonogram: 'L',
      location: 'San Francisco, CA',
      category: 'Product Management',
      jobType: 'Full-Time',
      workplace: 'Remote',
      salary: '$170,000 - $210,000 / yr',
      salaryNumeric: 210000,
      datePosted: '2026-10-18',
      overview: 'Shape the roadmap for issue tracking, git automations, and velocity insights for the world\'s most discerning engineering organizations.',
      responsibilities: [
        'Synthesize customer feedback from thousands of high-growth technical teams into cohesive roadmaps.',
        'Define product specs with unmatched clarity, focusing on keyboard-first navigation and speed.',
        'Partner closely with founders and engineers during fast product iterations.',
        'Analyze product adoption metrics and run targeted beta programs.'
      ],
      requirements: [
        '4+ years in product management focused on technical, B2B SaaS, or developer tools.',
        'Technical background (CS degree or previous software engineering experience).',
        'Strong taste for software craft, minimalism, and performance.',
        'Exceptional written communication and narrative writing skills.'
      ],
      tags: ['Product Management', 'DevTools', 'SaaS', 'Agile', 'Strategy', 'Senior'],
      benefits: ['Equity Ownership', 'Flexible Working Hours', 'Company Retreats (Twice Yearly)', 'Health Insurance', 'Latest Tech Setup']
    },
    {
      id: 'JOB-2026-105',
      title: 'Machine Learning & LLM Systems Engineer',
      company: 'Supabase',
      companyMonogram: 'SB',
      location: 'Austin, TX',
      category: 'Data & AI',
      jobType: 'Full-Time',
      workplace: 'Hybrid',
      salary: '$175,000 - $215,000 / yr',
      salaryNumeric: 215000,
      datePosted: '2026-10-19',
      overview: 'Join the AI team to build managed pgvector infrastructure, semantic search indexing, and automated database tuning models for hundreds of thousands of developers.',
      responsibilities: [
        'Design high-scale vector indexing pipelines on Postgres and pgvector.',
        'Benchmark and optimize HNSW and IVFFlat embedding index performance.',
        'Build APIs and client SDKs for semantic retrieval and context augmentation.',
        'Write detailed technical blogs and open-source demonstration repositories.'
      ],
      requirements: [
        '5+ years engineering experience with Python, Rust, or C++ and PostgreSQL internals.',
        'Solid foundation in vector mathematics, embeddings, and nearest-neighbor search.',
        'Experience fine-tuning models or deploying LLM inference pipelines.',
        'Commitment to open-source software and developer community collaboration.'
      ],
      tags: ['AI', 'pgvector', 'PostgreSQL', 'Machine Learning', 'Python', 'Rust'],
      benefits: ['Remote Flexibility', 'Stock Options', 'Comprehensive Health Plan', '401(k) Matching', 'Education Budget']
    },
    {
      id: 'JOB-2026-106',
      title: 'Senior Brand & Editorial Designer',
      company: 'Notion',
      companyMonogram: 'N',
      location: 'New York, NY',
      category: 'Design & Creative',
      jobType: 'Full-Time',
      workplace: 'On-Site',
      salary: '$135,000 - $165,000 / yr',
      salaryNumeric: 165000,
      datePosted: '2026-10-17',
      overview: 'Craft the visual storytelling, editorial illustrations, campaign identities, and interactive web experiences that define Notion\'s distinct aesthetic worldwide.',
      responsibilities: [
        'Lead creative concepting for global marketing campaigns, product launches, and editorial stories.',
        'Collaborate with copywriters and marketing teams to produce compelling digital collateral.',
        'Maintain and expand Notion\'s iconic monochrome and hand-drawn illustration visual language.',
        'Design responsive landing pages and campaign microsites with meticulous typographic craft.'
      ],
      requirements: [
        '5+ years in brand design, editorial art direction, or agency creative teams.',
        'World-class portfolio demonstrating typography, grid systems, and visual identity craft.',
        'Fluency in Figma, Adobe Creative Cloud, and web animation principles.',
        'Experience designing for both high-impact digital campaigns and print.'
      ],
      tags: ['Brand Design', 'Typography', 'Illustration', 'Art Direction', 'Editorial'],
      benefits: ['Catered Meals & Barista', 'Comprehensive Medical & Dental', 'Generous Commuter Benefits', 'Creative Sabbatical', 'Fitness Reimbursement']
    },
    {
      id: 'JOB-2026-107',
      title: 'Growth & Lifecycle Marketing Specialist',
      company: 'Datadog',
      companyMonogram: 'DD',
      location: 'London, UK',
      category: 'Marketing & Growth',
      jobType: 'Full-Time',
      workplace: 'Hybrid',
      salary: '£95,000 - £120,000 / yr',
      salaryNumeric: 145000,
      datePosted: '2026-10-16',
      overview: 'Develop data-driven customer lifecycle campaigns, onboarding optimization experiments, and multi-channel retention strategies for technical buyers.',
      responsibilities: [
        'Architect personalized onboarding email flows and product activation funnels.',
        'Run rigorous A/B and multivariate tests on conversion funnels and landing pages.',
        'Analyze cohort retention and customer lifetime value using SQL and BI dashboards.',
        'Partner with product growth teams to eliminate friction in trial-to-paid conversion.'
      ],
      requirements: [
        '4+ years in growth marketing or lifecycle marketing for high-velocity B2B SaaS.',
        'Strong analytical skills with SQL, Google Analytics, and customer data platforms (Segment, Braze).',
        'Proven track record of moving activation and expansion metrics.',
        'Excellent technical copywriting and messaging skills targeted at engineers.'
      ],
      tags: ['Growth', 'Lifecycle Marketing', 'SaaS', 'SQL', 'Experimentation', 'Analytics'],
      benefits: ['UK Pension Plan', 'Private Medical Cover', 'Hybrid Office Perks', 'Stock Purchase Plan (ESPP)', 'Cycle to Work Scheme']
    },
    {
      id: 'JOB-2026-108',
      title: 'Cloud Security & Infrastructure Consultant',
      company: 'Arc Studio',
      companyMonogram: 'A',
      location: 'Berlin, Germany',
      category: 'Engineering',
      jobType: 'Contract',
      workplace: 'Remote',
      salary: '€85 - €115 / hr',
      salaryNumeric: 175000,
      datePosted: '2026-10-15',
      overview: '6-month contract to conduct comprehensive infrastructure-as-code audits, IAM least-privilege refactoring, and automated compliance pipeline setups for European SaaS clients.',
      responsibilities: [
        'Audit AWS and GCP cloud environments for SOC2, ISO 27001, and GDPR posture.',
        'Refactor Terraform modules to enforce automated policy-as-code (OPA / Sentinel).',
        'Implement zero-trust network access (ZTNA) and mutual TLS gateway rules.',
        'Provide actionable executive reports and lead technical remediation workshops.'
      ],
      requirements: [
        '6+ years in cloud security, DevOps, and cloud infrastructure consulting.',
        'Deep expertise in AWS, GCP, Kubernetes, Terraform, and container security.',
        'Relevant certifications (AWS Security Specialist, CISSP, or CKS) preferred.',
        'Fluency in English; consulting or client-facing advisory experience.'
      ],
      tags: ['Cloud Security', 'Terraform', 'AWS', 'Kubernetes', 'Consulting', 'Contract'],
      benefits: ['Flexible Daily Working Hours', '100% Remote across EU timezones', 'Competitive Hourly Rate', 'Prompt Weekly Invoicing']
    }
  ];

  // --- Initial Demo Candidate Applications ---
  const DEFAULT_APPLICATIONS = [
    {
      id: 'APP-8401',
      jobId: 'JOB-2026-101',
      jobTitle: 'Staff Systems Engineer (Distributed Infra)',
      company: 'Stripe',
      applicantName: 'Alex Rivera',
      applicantEmail: 'alex.rivera@example.com',
      applicantPhone: '+1 (555) 349-8812',
      applicantPortfolio: 'https://github.com/alexrivera-eng',
      applicantExperience: '7+ Years',
      applicantCoverNote: 'I have spent the last 5 years scaling high-availability Raft and Kafka clusters at a fintech unicorn. Excited to contribute to Stripe\'s global ledger layer.',
      appliedDate: '2026-10-22',
      status: 'Under Review'
    },
    {
      id: 'APP-8402',
      jobId: 'JOB-2026-103',
      jobTitle: 'Senior Full Stack Engineer (Next.js & Edge)',
      company: 'Vercel',
      applicantName: 'Jordan Vance',
      applicantEmail: 'jordan.vance@example.com',
      applicantPhone: '+1 (555) 782-9014',
      applicantPortfolio: 'https://jordanvance.dev',
      applicantExperience: '4-6 Years',
      applicantCoverNote: 'Passionate about server components, streaming edge architectures, and creating developer tools with sub-second feedback loops.',
      appliedDate: '2026-10-23',
      status: 'Shortlisted'
    }
  ];

  // --- State Management ---
  const STORAGE_KEYS = {
    JOBS: 'careerspring_jobs_v1',
    SAVED: 'careerspring_saved_v1',
    APPS: 'careerspring_apps_v1'
  };

  let jobs = [];
  let savedJobIds = [];
  let applications = [];
  let currentViewingJobId = null;

  // --- DOM Elements ---
  const elements = {
    // Nav
    mainNav: document.getElementById('mainNav'),
    tabExplore: document.getElementById('tabExplore'),
    tabSaved: document.getElementById('tabSaved'),
    tabApplications: document.getElementById('tabApplications'),
    tabEmployer: document.getElementById('tabEmployer'),
    badgeSavedCount: document.getElementById('badgeSavedCount'),
    badgeApplicationsCount: document.getElementById('badgeApplicationsCount'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    brandLogo: document.getElementById('brandLogo'),
    btnTopPostJob: document.getElementById('btnTopPostJob'),
    btnExportCSV: document.getElementById('btnExportCSV'),
    btnExportAppsCSV: document.getElementById('btnExportAppsCSV'),

    // Views
    viewExplore: document.getElementById('view-explore'),
    viewSaved: document.getElementById('view-saved'),
    viewApplications: document.getElementById('view-applications'),
    viewEmployer: document.getElementById('view-employer'),

    // Search & Filter
    jobSearchKeyword: document.getElementById('jobSearchKeyword'),
    quickLocationFilter: document.getElementById('quickLocationFilter'),
    btnExecuteSearch: document.getElementById('btnExecuteSearch'),
    btnResetAllFilters: document.getElementById('btnResetAllFilters'),
    btnResetDemoJobs: document.getElementById('btnResetDemoJobs'),
    sortBySelect: document.getElementById('sortBySelect'),
    feedTitle: document.getElementById('feedTitle'),
    jobsResultCount: document.getElementById('jobsResultCount'),
    jobCardsList: document.getElementById('jobCardsList'),
    jobsEmptyState: document.getElementById('jobsEmptyState'),
    btnEmptyReset: document.getElementById('btnEmptyReset'),

    // Saved Jobs View
    savedJobsList: document.getElementById('savedJobsList'),
    savedEmptyState: document.getElementById('savedEmptyState'),

    // Applications View
    applicationsTableBody: document.getElementById('applicationsTableBody'),
    applicationsEmptyState: document.getElementById('applicationsEmptyState'),

    // Employer View
    employerTableBody: document.getElementById('employerTableBody'),
    btnStudioNewJob: document.getElementById('btnStudioNewJob'),

    // Job Detail Modal
    jobDetailModal: document.getElementById('jobDetailModal'),
    btnCloseDetailModal: document.getElementById('btnCloseDetailModal'),
    detailCompanyTag: document.getElementById('detailCompanyTag'),
    detailJobId: document.getElementById('detailJobId'),
    detailJobTitle: document.getElementById('detailJobTitle'),
    detailMetaBadges: document.getElementById('detailMetaBadges'),
    detailSalary: document.getElementById('detailSalary'),
    detailWorkplace: document.getElementById('detailWorkplace'),
    detailCategory: document.getElementById('detailCategory'),
    detailDatePosted: document.getElementById('detailDatePosted'),
    detailOverviewText: document.getElementById('detailOverviewText'),
    detailResponsibilitiesList: document.getElementById('detailResponsibilitiesList'),
    detailRequirementsList: document.getElementById('detailRequirementsList'),
    detailBenefitsCloud: document.getElementById('detailBenefitsCloud'),
    btnDetailSaveBookmark: document.getElementById('btnDetailSaveBookmark'),
    detailBookmarkIcon: document.getElementById('detailBookmarkIcon'),
    detailBookmarkText: document.getElementById('detailBookmarkText'),
    btnDetailApplyCTA: document.getElementById('btnDetailApplyCTA'),

    // Application Modal
    applicationModal: document.getElementById('applicationModal'),
    btnCloseApplyModal: document.getElementById('btnCloseApplyModal'),
    btnCancelApplyModal: document.getElementById('btnCancelApplyModal'),
    applyModalJobTitle: document.getElementById('applyModalJobTitle'),
    applyModalCompany: document.getElementById('applyModalCompany'),
    jobApplicationForm: document.getElementById('jobApplicationForm'),
    applyJobId: document.getElementById('applyJobId'),
    applicantName: document.getElementById('applicantName'),
    applicantEmail: document.getElementById('applicantEmail'),
    applicantPhone: document.getElementById('applicantPhone'),
    applicantPortfolio: document.getElementById('applicantPortfolio'),
    applicantExperience: document.getElementById('applicantExperience'),
    applicantCoverNote: document.getElementById('applicantCoverNote'),
    errApplicantName: document.getElementById('errApplicantName'),
    errApplicantEmail: document.getElementById('errApplicantEmail'),
    errApplicantPhone: document.getElementById('errApplicantPhone'),
    errApplicantCoverNote: document.getElementById('errApplicantCoverNote'),

    // Employer Job Modal
    employerJobModal: document.getElementById('employerJobModal'),
    btnCloseEmployerModal: document.getElementById('btnCloseEmployerModal'),
    btnCancelEmployerModal: document.getElementById('btnCancelEmployerModal'),
    employerModalTitle: document.getElementById('employerModalTitle'),
    employerJobForm: document.getElementById('employerJobForm'),
    employerJobId: document.getElementById('employerJobId'),
    jobTitleInput: document.getElementById('jobTitleInput'),
    companyInput: document.getElementById('companyInput'),
    locationInput: document.getElementById('locationInput'),
    categoryInput: document.getElementById('categoryInput'),
    jobTypeInput: document.getElementById('jobTypeInput'),
    workplaceInput: document.getElementById('workplaceInput'),
    salaryInput: document.getElementById('salaryInput'),
    overviewInput: document.getElementById('overviewInput'),
    requirementsInput: document.getElementById('requirementsInput'),
    tagsInput: document.getElementById('tagsInput'),
    btnSaveEmployerJob: document.getElementById('btnSaveEmployerJob'),
    errJobTitle: document.getElementById('errJobTitle'),
    errCompany: document.getElementById('errCompany'),
    errLocation: document.getElementById('errLocation'),
    errSalary: document.getElementById('errSalary'),
    errOverview: document.getElementById('errOverview'),

    // Toast Container
    toastContainer: document.getElementById('toastContainer')
  };

  // --- Initialization ---
  function init() {
    loadState();
    setupNavigation();
    setupFilterEvents();
    setupModals();
    setupForms();
    renderAll();
  }

  // --- LocalStorage State Handling ---
  function loadState() {
    try {
      const storedJobs = localStorage.getItem(STORAGE_KEYS.JOBS);
      jobs = storedJobs ? JSON.parse(storedJobs) : JSON.parse(JSON.stringify(DEFAULT_JOBS));

      const storedSaved = localStorage.getItem(STORAGE_KEYS.SAVED);
      savedJobIds = storedSaved ? JSON.parse(storedSaved) : ['JOB-2026-101', 'JOB-2026-104'];

      const storedApps = localStorage.getItem(STORAGE_KEYS.APPS);
      applications = storedApps ? JSON.parse(storedApps) : JSON.parse(JSON.stringify(DEFAULT_APPLICATIONS));
    } catch (e) {
      console.warn('Error reading from localStorage, using fallback defaults:', e);
      jobs = JSON.parse(JSON.stringify(DEFAULT_JOBS));
      savedJobIds = ['JOB-2026-101'];
      applications = JSON.parse(JSON.stringify(DEFAULT_APPLICATIONS));
    }
  }

  function saveJobsToStorage() {
    localStorage.setItem(STORAGE_KEYS.JOBS, JSON.stringify(jobs));
  }

  function saveSavedToStorage() {
    localStorage.setItem(STORAGE_KEYS.SAVED, JSON.stringify(savedJobIds));
    updateBadges();
  }

  function saveAppsToStorage() {
    localStorage.setItem(STORAGE_KEYS.APPS, JSON.stringify(applications));
    updateBadges();
  }

  function resetToFactoryDemo() {
    if (confirm('Reset CareerSpring demo listings and applications back to the factory sample data?')) {
      jobs = JSON.parse(JSON.stringify(DEFAULT_JOBS));
      savedJobIds = ['JOB-2026-101', 'JOB-2026-104'];
      applications = JSON.parse(JSON.stringify(DEFAULT_APPLICATIONS));
      saveJobsToStorage();
      saveSavedToStorage();
      saveAppsToStorage();
      renderAll();
      showToast('Demo data successfully reset to factory defaults', 'success');
    }
  }

  // --- Navigation & View Tabs ---
  function setupNavigation() {
    const navItems = [
      elements.tabExplore,
      elements.tabSaved,
      elements.tabApplications,
      elements.tabEmployer
    ];

    navItems.forEach(item => {
      if (!item) return;
      item.addEventListener('click', () => {
        const targetTab = item.getAttribute('data-tab');
        switchTab(targetTab);
        if (elements.mainNav) {
          elements.mainNav.classList.remove('mobile-open');
        }
      });
    });

    if (elements.brandLogo) {
      elements.brandLogo.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab('explore');
      });
    }

    if (elements.mobileMenuBtn && elements.mainNav) {
      elements.mobileMenuBtn.addEventListener('click', () => {
        elements.mainNav.classList.toggle('mobile-open');
      });
    }

    if (elements.btnTopPostJob) {
      elements.btnTopPostJob.addEventListener('click', () => {
        openEmployerModal();
      });
    }

    if (elements.btnStudioNewJob) {
      elements.btnStudioNewJob.addEventListener('click', () => {
        openEmployerModal();
      });
    }

    if (elements.btnExportCSV) {
      elements.btnExportCSV.addEventListener('click', exportApplicationsCSV);
    }
    if (elements.btnExportAppsCSV) {
      elements.btnExportAppsCSV.addEventListener('click', exportApplicationsCSV);
    }

    if (elements.btnResetDemoJobs) {
      elements.btnResetDemoJobs.addEventListener('click', resetToFactoryDemo);
    }

    if (elements.btnEmptyReset) {
      elements.btnEmptyReset.addEventListener('click', resetAllFilters);
    }
  }

  function switchTab(tabName) {
    const views = {
      explore: elements.viewExplore,
      saved: elements.viewSaved,
      applications: elements.viewApplications,
      employer: elements.viewEmployer
    };

    const tabs = {
      explore: elements.tabExplore,
      saved: elements.tabSaved,
      applications: elements.tabApplications,
      employer: elements.tabEmployer
    };

    Object.keys(views).forEach(key => {
      if (views[key]) {
        if (key === tabName) {
          views[key].classList.add('active');
        } else {
          views[key].classList.remove('active');
        }
      }
    });

    Object.keys(tabs).forEach(key => {
      if (tabs[key]) {
        if (key === tabName) {
          tabs[key].classList.add('active');
        } else {
          tabs[key].classList.remove('active');
        }
      }
    });

    // Refresh views if needed
    if (tabName === 'saved') {
      renderSavedJobs();
    } else if (tabName === 'applications') {
      renderApplicationsTable();
    } else if (tabName === 'employer') {
      renderEmployerTable();
    } else if (tabName === 'explore') {
      renderJobsFeed();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.switchTab = switchTab; // Expose globally for inline onclicks

  function updateBadges() {
    if (elements.badgeSavedCount) {
      elements.badgeSavedCount.textContent = savedJobIds.length;
    }
    if (elements.badgeApplicationsCount) {
      elements.badgeApplicationsCount.textContent = applications.length;
    }
  }

  // --- Filtering & Search Events ---
  function setupFilterEvents() {
    if (elements.jobSearchKeyword) {
      elements.jobSearchKeyword.addEventListener('input', () => {
        renderJobsFeed();
      });
      elements.jobSearchKeyword.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          renderJobsFeed();
        }
      });
    }

    if (elements.quickLocationFilter) {
      elements.quickLocationFilter.addEventListener('change', () => {
        renderJobsFeed();
      });
    }

    if (elements.btnExecuteSearch) {
      elements.btnExecuteSearch.addEventListener('click', () => {
        renderJobsFeed();
      });
    }

    if (elements.sortBySelect) {
      elements.sortBySelect.addEventListener('change', () => {
        renderJobsFeed();
      });
    }

    // Radio filters
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        renderJobsFeed();
      });
    });

    if (elements.btnResetAllFilters) {
      elements.btnResetAllFilters.addEventListener('click', resetAllFilters);
    }
  }

  function resetAllFilters() {
    if (elements.jobSearchKeyword) elements.jobSearchKeyword.value = '';
    if (elements.quickLocationFilter) elements.quickLocationFilter.value = 'ALL';
    if (elements.sortBySelect) elements.sortBySelect.value = 'newest';

    const categoryAll = document.querySelector('input[name="filterCategory"][value="ALL"]');
    if (categoryAll) categoryAll.checked = true;

    const typeAll = document.querySelector('input[name="filterJobType"][value="ALL"]');
    if (typeAll) typeAll.checked = true;

    const workplaceAll = document.querySelector('input[name="filterWorkplace"][value="ALL"]');
    if (workplaceAll) workplaceAll.checked = true;

    renderJobsFeed();
    showToast('Filters cleared', 'success');
  }

  function getActiveFilters() {
    const keyword = elements.jobSearchKeyword ? elements.jobSearchKeyword.value.trim().toLowerCase() : '';
    const quickLocation = elements.quickLocationFilter ? elements.quickLocationFilter.value : 'ALL';
    
    const categoryEl = document.querySelector('input[name="filterCategory"]:checked');
    const category = categoryEl ? categoryEl.value : 'ALL';

    const jobTypeEl = document.querySelector('input[name="filterJobType"]:checked');
    const jobType = jobTypeEl ? jobTypeEl.value : 'ALL';

    const workplaceEl = document.querySelector('input[name="filterWorkplace"]:checked');
    const workplace = workplaceEl ? workplaceEl.value : 'ALL';

    const sortBy = elements.sortBySelect ? elements.sortBySelect.value : 'newest';

    return { keyword, quickLocation, category, jobType, workplace, sortBy };
  }

  function filterAndSortJobs(jobsArray, filters) {
    let result = jobsArray.filter(job => {
      // 1. Keyword match in title, company, overview, or tags
      if (filters.keyword) {
        const titleMatch = job.title.toLowerCase().includes(filters.keyword);
        const companyMatch = job.company.toLowerCase().includes(filters.keyword);
        const overviewMatch = (job.overview || '').toLowerCase().includes(filters.keyword);
        const tagsMatch = (job.tags || []).some(t => t.toLowerCase().includes(filters.keyword));
        if (!titleMatch && !companyMatch && !overviewMatch && !tagsMatch) {
          return false;
        }
      }

      // 2. Location quick selector
      if (filters.quickLocation && filters.quickLocation !== 'ALL') {
        if (filters.quickLocation === 'Remote') {
          if (job.workplace !== 'Remote' && !job.location.toLowerCase().includes('remote')) {
            return false;
          }
        } else {
          if (!job.location.toLowerCase().includes(filters.quickLocation.toLowerCase())) {
            return false;
          }
        }
      }

      // 3. Category
      if (filters.category && filters.category !== 'ALL') {
        if (job.category !== filters.category) return false;
      }

      // 4. Job Type
      if (filters.jobType && filters.jobType !== 'ALL') {
        if (job.jobType !== filters.jobType) return false;
      }

      // 5. Workplace Model
      if (filters.workplace && filters.workplace !== 'ALL') {
        if (job.workplace !== filters.workplace) return false;
      }

      return true;
    });

    // Sort
    result.sort((a, b) => {
      if (filters.sortBy === 'salary_desc') {
        return (b.salaryNumeric || 0) - (a.salaryNumeric || 0);
      }
      if (filters.sortBy === 'title_asc') {
        return a.title.localeCompare(b.title);
      }
      if (filters.sortBy === 'company_asc') {
        return a.company.localeCompare(b.company);
      }
      // 'newest' default
      return new Date(b.datePosted || '2026-01-01') - new Date(a.datePosted || '2026-01-01');
    });

    return result;
  }

  // --- Render Functions ---
  function renderAll() {
    updateBadges();
    renderJobsFeed();
    renderSavedJobs();
    renderApplicationsTable();
    renderEmployerTable();
  }

  function renderJobsFeed() {
    if (!elements.jobCardsList) return;

    const filters = getActiveFilters();
    const filteredJobs = filterAndSortJobs(jobs, filters);

    if (elements.jobsResultCount) {
      elements.jobsResultCount.textContent = `${filteredJobs.length} ${filteredJobs.length === 1 ? 'Role' : 'Roles'} Open`;
    }

    if (filteredJobs.length === 0) {
      elements.jobCardsList.innerHTML = '';
      if (elements.jobsEmptyState) elements.jobsEmptyState.classList.remove('hidden');
      return;
    }

    if (elements.jobsEmptyState) elements.jobsEmptyState.classList.add('hidden');

    elements.jobCardsList.innerHTML = filteredJobs.map(job => createJobCardHTML(job)).join('');
    attachJobCardListeners(elements.jobCardsList);
  }

  function renderSavedJobs() {
    if (!elements.savedJobsList) return;

    const savedJobs = jobs.filter(j => savedJobIds.includes(j.id));

    if (savedJobs.length === 0) {
      elements.savedJobsList.innerHTML = '';
      if (elements.savedEmptyState) elements.savedEmptyState.classList.remove('hidden');
      return;
    }

    if (elements.savedEmptyState) elements.savedEmptyState.classList.add('hidden');

    elements.savedJobsList.innerHTML = savedJobs.map(job => createJobCardHTML(job)).join('');
    attachJobCardListeners(elements.savedJobsList);
  }

  function createJobCardHTML(job) {
    const isSaved = savedJobIds.includes(job.id);
    const monogram = job.companyMonogram || job.company.substring(0, 2).toUpperCase();
    const tags = job.tags || [job.category, job.jobType, job.workplace];

    return `
      <article class="editorial-job-card" data-job-id="${job.id}">
        <div class="card-top-row">
          <div class="company-identity">
            <div class="company-avatar-box">${monogram}</div>
            <div class="company-meta-col">
              <span class="company-name">${escapeHTML(job.company)}</span>
              <span class="company-location">${escapeHTML(job.location)}</span>
            </div>
          </div>
          <div class="card-quick-actions">
            <button class="btn-card-save ${isSaved ? 'saved' : ''}" data-action="toggle-save" data-id="${job.id}" title="${isSaved ? 'Remove from Saved' : 'Save Job'}">
              ${isSaved ? '&#9733;' : '&#9734;'}
            </button>
          </div>
        </div>

        <div class="card-center-row">
          <h3 class="job-headline" data-action="view-details" data-id="${job.id}">
            ${escapeHTML(job.title)}
          </h3>
          <p class="job-brief-excerpt">${escapeHTML(job.overview || '')}</p>
        </div>

        <div class="card-tags-row">
          <span class="tag-pill tag-lime">${escapeHTML(job.category)}</span>
          <span class="tag-pill tag-model">${escapeHTML(job.workplace)}</span>
          <span class="tag-pill">${escapeHTML(job.jobType)}</span>
          ${tags.slice(0, 3).map(t => `<span class="tag-pill">${escapeHTML(t)}</span>`).join('')}
        </div>

        <div class="card-bottom-row">
          <div class="card-salary-block">
            <span class="salary-figure">${escapeHTML(job.salary)}</span>
            <span class="salary-period">Posted ${formatDate(job.datePosted)}</span>
          </div>
          <div class="card-action-group">
            <button class="btn btn-secondary-minimal btn-sm" data-action="view-details" data-id="${job.id}">
              Job Specs
            </button>
            <button class="btn btn-lime btn-sm" data-action="apply-now" data-id="${job.id}">
              Apply &rarr;
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function attachJobCardListeners(container) {
    if (!container) return;

    const saveBtns = container.querySelectorAll('[data-action="toggle-save"]');
    saveBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const jobId = btn.getAttribute('data-id');
        toggleSaveJob(jobId);
      });
    });

    const viewBtns = container.querySelectorAll('[data-action="view-details"]');
    viewBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const jobId = btn.getAttribute('data-id');
        openJobDetailModal(jobId);
      });
    });

    const applyBtns = container.querySelectorAll('[data-action="apply-now"]');
    applyBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const jobId = btn.getAttribute('data-id');
        openApplyModal(jobId);
      });
    });
  }

  function toggleSaveJob(jobId) {
    const index = savedJobIds.indexOf(jobId);
    const targetJob = jobs.find(j => j.id === jobId);
    const title = targetJob ? targetJob.title : 'Position';

    if (index > -1) {
      savedJobIds.splice(index, 1);
      showToast(`Removed "${title}" from saved jobs`, 'info');
    } else {
      savedJobIds.push(jobId);
      showToast(`Saved "${title}" to your favorites`, 'success');
    }

    saveSavedToStorage();
    renderJobsFeed();
    renderSavedJobs();

    // If modal is open for this job, sync its button
    if (currentViewingJobId === jobId) {
      updateDetailModalBookmarkBtn(jobId);
    }
  }

  // --- Applications Table (Candidate View) ---
  function renderApplicationsTable() {
    if (!elements.applicationsTableBody) return;

    if (applications.length === 0) {
      elements.applicationsTableBody.innerHTML = '';
      if (elements.applicationsEmptyState) elements.applicationsEmptyState.classList.remove('hidden');
      return;
    }

    if (elements.applicationsEmptyState) elements.applicationsEmptyState.classList.add('hidden');

    elements.applicationsTableBody.innerHTML = applications.map(app => {
      const statusClass = getStatusBadgeClass(app.status);
      return `
        <tr>
          <td><strong class="font-mono">${escapeHTML(app.id)}</strong></td>
          <td>
            <strong>${escapeHTML(app.jobTitle)}</strong>
            <div class="text-dim text-sm">${escapeHTML(app.company)}</div>
          </td>
          <td class="font-mono text-sm">${escapeHTML(app.applicantEmail)}</td>
          <td>${formatDate(app.appliedDate)}</td>
          <td>
            <span class="status-pill ${statusClass}">${escapeHTML(app.status || 'Applied')}</span>
          </td>
          <td class="text-right">
            <button class="btn btn-secondary-minimal btn-sm" onclick="CareerSpring.withdrawApplication('${app.id}')" title="Withdraw Application">
              Withdraw
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  function getStatusBadgeClass(status) {
    switch (status) {
      case 'Under Review': return 'status-review';
      case 'Shortlisted': return 'status-shortlisted';
      case 'Interview': return 'status-interview';
      default: return 'status-applied';
    }
  }

  function withdrawApplication(appId) {
    const target = applications.find(a => a.id === appId);
    if (!target) return;

    if (confirm(`Are you sure you want to withdraw your candidate application for "${target.jobTitle}"?`)) {
      applications = applications.filter(a => a.id !== appId);
      saveAppsToStorage();
      renderApplicationsTable();
      renderEmployerTable();
      showToast('Application record withdrawn successfully', 'info');
    }
  }

  // --- Employer Studio Table ---
  function renderEmployerTable() {
    if (!elements.employerTableBody) return;

    elements.employerTableBody.innerHTML = jobs.map(job => {
      const applicantCount = applications.filter(a => a.jobId === job.id).length;
      return `
        <tr>
          <td><strong class="font-mono text-dim">${escapeHTML(job.id)}</strong></td>
          <td>
            <strong>${escapeHTML(job.title)}</strong>
            <div class="text-dim text-sm">${escapeHTML(job.category)}</div>
          </td>
          <td>${escapeHTML(job.company)}</td>
          <td>${escapeHTML(job.location)}</td>
          <td><span class="tag-pill">${escapeHTML(job.jobType)}</span></td>
          <td class="font-mono text-sm">${escapeHTML(job.salary)}</td>
          <td>
            <span class="tag-pill tag-lime"><strong>${applicantCount}</strong> ${applicantCount === 1 ? 'applicant' : 'applicants'}</span>
          </td>
          <td class="text-right">
            <div class="flex-align-gap" style="justify-content: flex-end;">
              <button class="btn btn-secondary-minimal btn-sm" onclick="CareerSpring.editEmployerJob('${job.id}')">
                Edit
              </button>
              <button class="btn btn-secondary-minimal btn-sm" style="color: var(--danger-color);" onclick="CareerSpring.deleteEmployerJob('${job.id}')">
                Delete
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  function editEmployerJob(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;
    openEmployerModal(job);
  }

  function deleteEmployerJob(jobId) {
    const target = jobs.find(j => j.id === jobId);
    if (!target) return;

    if (confirm(`Are you sure you want to delete the job listing for "${target.title}"? This cannot be undone.`)) {
      jobs = jobs.filter(j => j.id !== jobId);
      savedJobIds = savedJobIds.filter(id => id !== jobId);
      saveJobsToStorage();
      saveSavedToStorage();
      renderAll();
      showToast(`Deleted job listing: ${target.title}`, 'info');
    }
  }

  // --- Modals Logic ---
  function setupModals() {
    // Job detail modal close
    if (elements.btnCloseDetailModal) {
      elements.btnCloseDetailModal.addEventListener('click', closeJobDetailModal);
    }
    if (elements.jobDetailModal) {
      elements.jobDetailModal.addEventListener('click', (e) => {
        if (e.target === elements.jobDetailModal) closeJobDetailModal();
      });
    }

    // Application modal close
    if (elements.btnCloseApplyModal) {
      elements.btnCloseApplyModal.addEventListener('click', closeApplyModal);
    }
    if (elements.btnCancelApplyModal) {
      elements.btnCancelApplyModal.addEventListener('click', closeApplyModal);
    }
    if (elements.applicationModal) {
      elements.applicationModal.addEventListener('click', (e) => {
        if (e.target === elements.applicationModal) closeApplyModal();
      });
    }

    // Employer modal close
    if (elements.btnCloseEmployerModal) {
      elements.btnCloseEmployerModal.addEventListener('click', closeEmployerModal);
    }
    if (elements.btnCancelEmployerModal) {
      elements.btnCancelEmployerModal.addEventListener('click', closeEmployerModal);
    }
    if (elements.employerJobModal) {
      elements.employerJobModal.addEventListener('click', (e) => {
        if (e.target === elements.employerJobModal) closeEmployerModal();
      });
    }

    // Detail modal CTA buttons
    if (elements.btnDetailSaveBookmark) {
      elements.btnDetailSaveBookmark.addEventListener('click', () => {
        if (currentViewingJobId) {
          toggleSaveJob(currentViewingJobId);
        }
      });
    }

    if (elements.btnDetailApplyCTA) {
      elements.btnDetailApplyCTA.addEventListener('click', () => {
        const jobId = currentViewingJobId;
        closeJobDetailModal();
        if (jobId) {
          openApplyModal(jobId);
        }
      });
    }

    // ESC key closes any open modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeJobDetailModal();
        closeApplyModal();
        closeEmployerModal();
      }
    });
  }

  function openJobDetailModal(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    currentViewingJobId = jobId;

    if (elements.detailCompanyTag) elements.detailCompanyTag.textContent = job.company;
    if (elements.detailJobId) elements.detailJobId.textContent = job.id;
    if (elements.detailJobTitle) elements.detailJobTitle.textContent = job.title;
    if (elements.detailSalary) elements.detailSalary.textContent = job.salary;
    if (elements.detailWorkplace) elements.detailWorkplace.textContent = job.workplace;
    if (elements.detailCategory) elements.detailCategory.textContent = job.category;
    if (elements.detailDatePosted) elements.detailDatePosted.textContent = formatDate(job.datePosted);
    if (elements.detailOverviewText) elements.detailOverviewText.textContent = job.overview || 'No overview provided.';

    // Meta Badges
    if (elements.detailMetaBadges) {
      elements.detailMetaBadges.innerHTML = `
        <span class="tag-pill tag-lime">${escapeHTML(job.category)}</span>
        <span class="tag-pill tag-model">${escapeHTML(job.workplace)}</span>
        <span class="tag-pill">${escapeHTML(job.jobType)}</span>
        <span class="tag-pill">${escapeHTML(job.location)}</span>
      `;
    }

    // Responsibilities
    if (elements.detailResponsibilitiesList) {
      const resp = job.responsibilities && job.responsibilities.length ? job.responsibilities : [
        'Collaborate with multi-disciplinary stakeholders to define technical requirements.',
        'Deliver reliable and well-tested features that meet performance specifications.',
        'Contribute to design sprints, code reviews, and architectural RFC discussions.'
      ];
      elements.detailResponsibilitiesList.innerHTML = resp.map(r => `<li>${escapeHTML(r)}</li>`).join('');
    }

    // Requirements
    if (elements.detailRequirementsList) {
      const reqs = job.requirements && job.requirements.length ? job.requirements : [
        '3+ years relevant industry experience in a fast-paced environment.',
        'Strong problem-solving capability and attention to detail.',
        'Demonstrated ability to communicate effectively in written and spoken technical forums.'
      ];
      elements.detailRequirementsList.innerHTML = reqs.map(r => `<li>${escapeHTML(r)}</li>`).join('');
    }

    // Benefits
    if (elements.detailBenefitsCloud) {
      const ben = job.benefits && job.benefits.length ? job.benefits : [
        'Competitive Salary & Equity',
        'Health, Dental, & Vision Coverage',
        'Remote Work Stipend',
        'Flexible Time Off',
        'Professional Development Budget'
      ];
      elements.detailBenefitsCloud.innerHTML = ben.map(b => `<span class="benefit-pill">${escapeHTML(b)}</span>`).join('');
    }

    updateDetailModalBookmarkBtn(jobId);

    if (elements.jobDetailModal) {
      elements.jobDetailModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function updateDetailModalBookmarkBtn(jobId) {
    const isSaved = savedJobIds.includes(jobId);
    if (elements.detailBookmarkIcon) {
      elements.detailBookmarkIcon.innerHTML = isSaved ? '&#9733;' : '&#9734;';
    }
    if (elements.detailBookmarkText) {
      elements.detailBookmarkText.textContent = isSaved ? 'Saved to Bookmarks' : 'Bookmark Job';
    }
    if (elements.btnDetailSaveBookmark) {
      if (isSaved) {
        elements.btnDetailSaveBookmark.classList.add('btn-lime');
        elements.btnDetailSaveBookmark.classList.remove('btn-secondary-minimal');
      } else {
        elements.btnDetailSaveBookmark.classList.remove('btn-lime');
        elements.btnDetailSaveBookmark.classList.add('btn-secondary-minimal');
      }
    }
  }

  function closeJobDetailModal() {
    if (elements.jobDetailModal) {
      elements.jobDetailModal.classList.remove('open');
    }
    currentViewingJobId = null;
    document.body.style.overflow = '';
  }

  // --- Candidate Application Modal & Duplicate Prevention ---
  function openApplyModal(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    clearApplicationErrors();
    if (elements.jobApplicationForm) elements.jobApplicationForm.reset();

    if (elements.applyJobId) elements.applyJobId.value = job.id;
    if (elements.applyModalJobTitle) elements.applyModalJobTitle.textContent = job.title;
    if (elements.applyModalCompany) elements.applyModalCompany.textContent = `${job.company} — ${job.location} (${job.workplace})`;

    if (elements.applicationModal) {
      elements.applicationModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    if (elements.applicantName) {
      setTimeout(() => elements.applicantName.focus(), 50);
    }
  }

  function closeApplyModal() {
    if (elements.applicationModal) {
      elements.applicationModal.classList.remove('open');
    }
    clearApplicationErrors();
    document.body.style.overflow = '';
  }

  function clearApplicationErrors() {
    ['errApplicantName', 'errApplicantEmail', 'errApplicantPhone', 'errApplicantCoverNote'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });
    ['applicantName', 'applicantEmail', 'applicantPhone', 'applicantCoverNote'].forEach(id => {
      const input = document.getElementById(id);
      if (input) input.classList.remove('input-error');
    });
  }

  function setupForms() {
    // 1. Candidate Application Submission Form
    if (elements.jobApplicationForm) {
      elements.jobApplicationForm.addEventListener('submit', handleApplicationSubmit);
    }

    // 2. Employer Job Posting Form
    if (elements.employerJobForm) {
      elements.employerJobForm.addEventListener('submit', handleEmployerJobSubmit);
    }
  }

  function handleApplicationSubmit(e) {
    e.preventDefault();
    clearApplicationErrors();

    const jobId = elements.applyJobId ? elements.applyJobId.value : '';
    const name = elements.applicantName ? elements.applicantName.value.trim() : '';
    const email = elements.applicantEmail ? elements.applicantEmail.value.trim() : '';
    const phone = elements.applicantPhone ? elements.applicantPhone.value.trim() : '';
    const portfolio = elements.applicantPortfolio ? elements.applicantPortfolio.value.trim() : '';
    const experience = elements.applicantExperience ? elements.applicantExperience.value : '4-6 Years';
    const coverNote = elements.applicantCoverNote ? elements.applicantCoverNote.value.trim() : '';

    let hasError = false;

    if (!name) {
      setFieldError('applicantName', 'errApplicantName', 'Please provide your full legal name.');
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setFieldError('applicantEmail', 'errApplicantEmail', 'Please enter a valid candidate email address.');
      hasError = true;
    }

    if (!phone || phone.length < 7) {
      setFieldError('applicantPhone', 'errApplicantPhone', 'Please provide a valid contact phone number.');
      hasError = true;
    }

    if (!coverNote || coverNote.length < 20) {
      setFieldError('applicantCoverNote', 'errApplicantCoverNote', 'Please provide at least a brief 20-character summary of your interest.');
      hasError = true;
    }

    if (hasError) return;

    // --- CRITICAL REQUIREMENT: PREVENT DUPLICATE APPLICATIONS USING APPLICANT EMAIL ---
    const isDuplicate = applications.some(app => 
      app.jobId === jobId && 
      app.applicantEmail.trim().toLowerCase() === email.toLowerCase()
    );

    if (isDuplicate) {
      setFieldError(
        'applicantEmail', 
        'errApplicantEmail', 
        'Duplicate blocked: You have already submitted an application for this role with this email.'
      );
      showToast('Duplicate application detected! You cannot apply twice for the same vacancy with this email address.', 'error');
      return;
    }

    const targetJob = jobs.find(j => j.id === jobId);
    const newApplication = {
      id: `APP-${Math.floor(1000 + Math.random() * 9000)}`,
      jobId: jobId,
      jobTitle: targetJob ? targetJob.title : 'Position',
      company: targetJob ? targetJob.company : 'Company',
      applicantName: name,
      applicantEmail: email,
      applicantPhone: phone,
      applicantPortfolio: portfolio || 'N/A',
      applicantExperience: experience,
      applicantCoverNote: coverNote,
      appliedDate: new Date().toISOString().split('T')[0],
      status: 'Applied'
    };

    applications.unshift(newApplication);
    saveAppsToStorage();
    renderApplicationsTable();
    renderEmployerTable();

    closeApplyModal();
    showToast(`Application submitted successfully for ${newApplication.jobTitle}!`, 'success');

    // Prompt user to view status in My Applications
    setTimeout(() => {
      switchTab('applications');
    }, 400);
  }

  function setFieldError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(errorId);
    if (input) input.classList.add('input-error');
    if (errorEl) errorEl.textContent = message;
  }

  // --- Employer Studio Modal & Job CRUD ---
  function openEmployerModal(existingJob = null) {
    clearEmployerErrors();
    if (elements.employerJobForm) elements.employerJobForm.reset();

    if (existingJob) {
      if (elements.employerModalTitle) elements.employerModalTitle.textContent = `Edit Job: ${existingJob.title}`;
      if (elements.employerJobId) elements.employerJobId.value = existingJob.id;
      if (elements.jobTitleInput) elements.jobTitleInput.value = existingJob.title;
      if (elements.companyInput) elements.companyInput.value = existingJob.company;
      if (elements.locationInput) elements.locationInput.value = existingJob.location;
      if (elements.categoryInput) elements.categoryInput.value = existingJob.category;
      if (elements.jobTypeInput) elements.jobTypeInput.value = existingJob.jobType;
      if (elements.workplaceInput) elements.workplaceInput.value = existingJob.workplace;
      if (elements.salaryInput) elements.salaryInput.value = existingJob.salary;
      if (elements.overviewInput) elements.overviewInput.value = existingJob.overview || '';
      if (elements.requirementsInput) {
        elements.requirementsInput.value = (existingJob.requirements || []).join('\n');
      }
      if (elements.tagsInput) {
        elements.tagsInput.value = (existingJob.tags || []).join(', ');
      }
      if (elements.btnSaveEmployerJob) {
        elements.btnSaveEmployerJob.innerHTML = '<span>Save Listing Changes</span>';
      }
    } else {
      if (elements.employerModalTitle) elements.employerModalTitle.textContent = 'Post New Opportunity';
      if (elements.employerJobId) elements.employerJobId.value = '';
      if (elements.btnSaveEmployerJob) {
        elements.btnSaveEmployerJob.innerHTML = '<span>Publish Job Listing</span>';
      }
    }

    if (elements.employerJobModal) {
      elements.employerJobModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    if (elements.jobTitleInput) {
      setTimeout(() => elements.jobTitleInput.focus(), 50);
    }
  }

  function closeEmployerModal() {
    if (elements.employerJobModal) {
      elements.employerJobModal.classList.remove('open');
    }
    clearEmployerErrors();
    document.body.style.overflow = '';
  }

  function clearEmployerErrors() {
    ['errJobTitle', 'errCompany', 'errLocation', 'errSalary', 'errOverview'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });
    ['jobTitleInput', 'companyInput', 'locationInput', 'salaryInput', 'overviewInput'].forEach(id => {
      const input = document.getElementById(id);
      if (input) input.classList.remove('input-error');
    });
  }

  function handleEmployerJobSubmit(e) {
    e.preventDefault();
    clearEmployerErrors();

    const jobId = elements.employerJobId ? elements.employerJobId.value : '';
    const title = elements.jobTitleInput ? elements.jobTitleInput.value.trim() : '';
    const company = elements.companyInput ? elements.companyInput.value.trim() : '';
    const location = elements.locationInput ? elements.locationInput.value.trim() : '';
    const category = elements.categoryInput ? elements.categoryInput.value : 'Engineering';
    const jobType = elements.jobTypeInput ? elements.jobTypeInput.value : 'Full-Time';
    const workplace = elements.workplaceInput ? elements.workplaceInput.value : 'Remote';
    const salary = elements.salaryInput ? elements.salaryInput.value.trim() : '';
    const overview = elements.overviewInput ? elements.overviewInput.value.trim() : '';
    const rawReqs = elements.requirementsInput ? elements.requirementsInput.value.trim() : '';
    const rawTags = elements.tagsInput ? elements.tagsInput.value.trim() : '';

    let hasError = false;

    if (!title) {
      setFieldError('jobTitleInput', 'errJobTitle', 'Role title is required.');
      hasError = true;
    }
    if (!company) {
      setFieldError('companyInput', 'errCompany', 'Company name is required.');
      hasError = true;
    }
    if (!location) {
      setFieldError('locationInput', 'errLocation', 'Location or Remote flag is required.');
      hasError = true;
    }
    if (!salary) {
      setFieldError('salaryInput', 'errSalary', 'Salary range is required.');
      hasError = true;
    }
    if (!overview || overview.length < 15) {
      setFieldError('overviewInput', 'errOverview', 'Please provide a clear role overview (at least 15 characters).');
      hasError = true;
    }

    if (hasError) return;

    const requirements = rawReqs ? rawReqs.split('\n').map(r => r.trim()).filter(Boolean) : [
      'Strong relevant background in required technical discipline.',
      'Excellent collaborative and problem solving mindset.'
    ];

    const tags = rawTags ? rawTags.split(',').map(t => t.trim()).filter(Boolean) : [category, jobType, workplace];

    // Estimate numeric salary for sorting
    const numericMatch = salary.replace(/[^0-9]/g, ' ');
    const numbers = numericMatch.trim().split(/\s+/).map(n => parseInt(n, 10)).filter(n => !isNaN(n));
    const salaryNumeric = numbers.length ? Math.max(...numbers) : 120000;

    if (jobId) {
      // Edit existing
      const existing = jobs.find(j => j.id === jobId);
      if (existing) {
        existing.title = title;
        existing.company = company;
        existing.companyMonogram = company.substring(0, 2).toUpperCase();
        existing.location = location;
        existing.category = category;
        existing.jobType = jobType;
        existing.workplace = workplace;
        existing.salary = salary;
        existing.salaryNumeric = salaryNumeric;
        existing.overview = overview;
        existing.requirements = requirements;
        existing.tags = tags;
        showToast(`Job listing updated: ${title}`, 'success');
      }
    } else {
      // Create new
      const newId = `JOB-2026-${Math.floor(100 + Math.random() * 900)}`;
      const newJob = {
        id: newId,
        title,
        company,
        companyMonogram: company.substring(0, 2).toUpperCase(),
        location,
        category,
        jobType,
        workplace,
        salary,
        salaryNumeric,
        datePosted: new Date().toISOString().split('T')[0],
        overview,
        responsibilities: [
          `Lead high impact projects across the ${category} organization.`,
          'Collaborate with cross-functional partners to execute on product roadmap.',
          'Uphold high standards for code quality, architectural durability, and customer focus.'
        ],
        requirements,
        tags,
        benefits: ['Flexible Work Environment', 'Competitive Health Benefits', 'Equity Participation', 'Learning & Development Budget']
      };
      jobs.unshift(newJob);
      showToast(`New job opportunity published: ${title}`, 'success');
    }

    saveJobsToStorage();
    renderAll();
    closeEmployerModal();
    switchTab('employer');
  }

  // --- CSV Export of Application Records ---
  function exportApplicationsCSV() {
    if (!applications || applications.length === 0) {
      showToast('No candidate applications available to export.', 'info');
      return;
    }

    const headers = [
      'Application ID',
      'Job ID',
      'Job Title',
      'Company',
      'Applicant Name',
      'Applicant Email',
      'Applicant Phone',
      'Experience Level',
      'Portfolio / URL',
      'Applied Date',
      'Status',
      'Cover Note Excerpt'
    ];

    const rows = applications.map(app => {
      return [
        app.id,
        app.jobId,
        `"${escapeCSV(app.jobTitle)}"`,
        `"${escapeCSV(app.company)}"`,
        `"${escapeCSV(app.applicantName)}"`,
        `"${escapeCSV(app.applicantEmail)}"`,
        `"${escapeCSV(app.applicantPhone)}"`,
        `"${escapeCSV(app.applicantExperience)}"`,
        `"${escapeCSV(app.applicantPortfolio)}"`,
        app.appliedDate,
        app.status,
        `"${escapeCSV(app.applicantCoverNote || '')}"`
      ].join(',');
    });

    // Add BOM for Excel UTF-8 support
    const csvContent = '\uFEFF' + headers.join(',') + '\r\n' + rows.join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `careerspring_candidate_applications_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast(`Exported ${applications.length} candidate applications to CSV`, 'success');
  }

  function escapeCSV(text) {
    if (!text) return '';
    return String(text).replace(/"/g, '""').replace(/[\r\n]+/g, ' ');
  }

  // --- Toast Notifications ---
  function showToast(message, type = 'info') {
    if (!elements.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = 'ℹ️';
    if (type === 'success') icon = '✓';
    if (type === 'error') icon = '⚠';

    toast.innerHTML = `
      <span style="font-weight: 700; color: ${type === 'success' ? 'var(--lime-accent)' : 'inherit'};">${icon}</span>
      <span>${escapeHTML(message)}</span>
    `;

    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 200ms ease';
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 200);
    }, 3500);
  }

  // --- Utility Helpers ---
  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatDate(dateStr) {
    if (!dateStr) return 'Recently';
    try {
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        const year = parts[0];
        const monthNum = parseInt(parts[1], 10) - 1;
        const day = parts[2];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[monthNum]} ${day}, ${year}`;
      }
      return dateStr;
    } catch {
      return dateStr;
    }
  }

  // Expose API for inline button handlers
  window.CareerSpring = {
    editEmployerJob,
    deleteEmployerJob,
    withdrawApplication,
    exportCSV: exportApplicationsCSV,
    openApplyModal,
    openJobDetailModal,
    toggleSaveJob
  };

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
