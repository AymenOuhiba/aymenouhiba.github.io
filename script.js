const root = document.documentElement;
const revealItems = document.querySelectorAll('.reveal');
const header = document.getElementById('site-header');
const heroBg = document.querySelector('.hero-bg');
const heroWords = document.querySelectorAll('[data-split] span');
const magneticTargets = document.querySelectorAll('.magnetic');
const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
const themeToggleButton = document.getElementById('theme-toggle');
const languageButtons = document.querySelectorAll('.lang-button');
const headerNavLinks = document.querySelectorAll('#site-header nav a[href^="#"]');

const I18N = {
  en: {
    meta: {
      description: 'Portfolio of Aymen Ouhiba, AI Engineer specialized in LLM, RAG, and Azure.',
      title: 'Aymen Ouhiba | AI Engineer',
    },
    nav: {
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'AI Engineer',
      intro: 'AI Engineer graduated from Telecom Paris, Azure AI Engineer certified (AI-102), specialized in LLMs, RAG pipelines, and LangGraph agents on Azure with 3+ years delivering production AI systems.',
      tag1: 'Azure AI Engineer (AI-102)',
      tag2: 'Agentic AI',
      tag3: 'Paris, France',
      ctaPrimary: 'Let\'s Build Together',
      ctaSecondary: 'Download CV',
      scroll: 'Scroll',
    },
    ticker: {
      1: '3+ years in software, data & AI',
      2: 'Azure OpenAI • Azure AI Search • LangGraph',
      3: 'Airflow • Spark • Snowflake • Docker',
      4: 'RAG • LLM Evaluation • MLOps',
      5: 'AI Engineer @ ALTEN • ex-VERMEG • ex-SAEGUS • ex-AXE FINANCE',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Professional Experience',
      e1company: 'ALTEN',
      e1role: 'AI R&D Engineer',
      e1period: 'Sep 2025 - Mar 2026',
      e1location: 'Sophia Antipolis, France',
      e1title: 'AI R&D Engineer · ALTEN',
      e1desc: 'Designed an interactive branching-story system powered by LLMs, structured narrative graph states, Azure AI Search RAG pipelines, MCP tool orchestration, and an 8-criteria LLM evaluation framework. Reduced Azure OpenAI token usage by 40% with dynamic truncation.',
      e2company: 'SAEGUS',
      e2role: 'AI Engineer',
      e2period: 'Jan 2025 - Jun 2025',
      e2location: 'Paris, France',
      e2title: 'AI Engineer · SAEGUS',
      e2desc: 'Built a multimodal emotion analysis pipeline for French parliamentary debates, reaching 87% classification precision, with fine-tuned CamemBERT models and automated workflows across video, text, and audio.',
      e3company: 'VERMEG',
      e3role: 'Junior Data Engineer <span class="role-note">CDI</span>',
      e3period: 'Sep 2023 - Sep 2024',
      e3location: 'Tunis, Tunisia',
      e3title: 'Junior Data Engineer CDI · VERMEG',
      e3desc: 'Industrialized data and AI pipelines in FinTech contexts for analytics and decision-making, with Snowflake architecture, ETL/ELT orchestration (Airflow, PySpark), and analytics datasets ready for business reporting.',
      e4company: 'SATORIPOP',
      e4role: 'Junior Data Science & AI Consultant',
      e4period: 'Feb 2023 - Aug 2023',
      e4location: 'Sousse, Tunisia',
      e4title: 'Junior Data Science & AI Consultant · SATORIPOP',
      e4desc: 'Built an end-to-end sentiment analysis and named entity recognition solution for Tunisian dialect data, including scraping and preparation of 4,000 texts, then pretraining and fine-tuning BERT and RoBERTa models reaching 93% F1-score on real Carrefour Tunisia data.',
      e5company: 'AXE FINANCE',
      e5role: 'Data Scientist <span class="role-note">Apprenticeship</span>',
      e5period: 'Sep 2020 - Aug 2022',
      e5location: 'Tunis, Tunisia',
      e5title: 'Data Scientist Apprenticeship · AXE FINANCE',
      e5desc: 'Delivered AI/ML missions for enterprise credit risk monitoring, including financial NLP with BERT, OCR automation for PDF financial statements, and explainable credit decision frameworks with SHAP and LIME.',
      e6company: 'ENOVA ROBOTICS',
      e6role: 'Computer Vision R&D Engineer',
      e6period: 'Jan 2020 - Jun 2020',
      e6location: 'Sousse, Tunisia',
      e6title: 'Computer Vision R&D Engineer · ENOVA ROBOTICS',
      e6desc: 'Built a real-time fire detection system on surveillance camera streams using image preprocessing, transfer learning with InceptionV3, and deployment for live inference.',
    },
    projects: {
      eyebrow: 'Selected Work',
      title: 'Projects',
      p1: 'End-to-end football intelligence stack processing 5,000+ frames with YOLOv8 tracking, event analytics, and agentic LLM reporting in a reproducible Docker workflow.',
      p1meta: 'CV + Agents + LLM',
      p2: 'Business-ready Text-to-SQL assistant tested on a 1M-row dataset with offline Ollama inference, guarded query execution, and exportable analytics insights.',
      p2meta: 'LLM + SQL + Security',
      p3: 'Production-style batch pipeline orchestrating 10 monthly datasets with PySpark cleaning, Airflow DAGs, PostgreSQL storage, and delay prediction workflow.',
      p3meta: 'Airflow + Spark + PostgreSQL',
      p4: 'MLOps implementation integrating Airflow, MinIO, Streamlit, automated tests, and CI/CD to deliver reproducible Dockerized ML workflows.',
      p4meta: 'MLOps + CI/CD',
      more: 'View more projects',
    },
    skills: {
      eyebrow: 'Technical Skills',
      title: 'Core Stack',
      programming: 'Programming',
      ai: 'AI Engineering',
      data: 'Data Engineering',
      cloud: 'Cloud & MLOps',
      genai: 'Generative & Agentic AI',
      frameworks: 'AI / ML Frameworks',
      languagesCard: 'Programming Languages',
      cloudDevops: 'Cloud & DevOps',
      dataDb: 'Data & Databases',
      nlpAnalytics: 'NLP & Analytics',
    },
    education: {
      eyebrow: 'Education',
      title: 'Academic Foundation',
      lead: 'Dual engineering pathway in AI and computer science across France and Tunisia.',
      e1school: 'Telecom Paris',
      e1title: 'Advanced Master\'s in AI - Data & MLOps Expert',
      e1period: '📅 2024 - 2026',
      e1location: '📍 Paris, France',
      e1desc: 'Advanced training focused on applied AI, data platforms, and production MLOps practices.',
      e2school: 'ESPRIT',
      e2title: 'Engineering Degree in Computer Science',
      e2period: '📅 2020 - 2023',
      e2location: '📍 Tunis, Tunisia',
      e2desc: 'Engineering curriculum covering software architecture, machine learning, and data systems.',
      e3school: 'ISSAT Sousse',
      e3title: 'Bachelor\'s Degree in Computer Science',
      e3period: '📅 2017 - 2020',
      e3location: '📍 Sousse, Tunisia',
      e3desc: 'Strong fundamentals in computer science, algorithms, databases, and programming.',
    },
    about: {
      eyebrow: 'About',
      title1: 'Building AI and data systems that are',
      title2: 'useful, measurable, and production-ready.',
      text: 'AI Engineer graduated from Telecom Paris and certified Azure AI Engineer (AI-102). I specialize in LLMs, RAG pipelines, and LangGraph agents on Azure, with 3+ years building production AI systems.',
      badge1: 'Microsoft Certified: Azure AI Engineer Associate (AI-102)',
      badge2: 'DeepLearning.AI: Agentic AI',
      meta1: '<strong>Education:</strong> Telecom Paris (MS AI, Data & MLOps) · ESPRIT (Engineering Degree)',
      meta2: '<strong>Languages:</strong> French (Bilingual), English (Bilingual), Arabic (Native)',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let\'s Build Intelligent Products.',
    },
    form: {
      eyebrow: 'Send a Message',
      title: 'Let\'s talk about your project.',
      name: 'Name *',
      email: 'Email *',
      subject: 'Subject *',
      message: 'Message *',
      submit: 'Send Message',
      sent: 'Message draft ready in Gmail. Send it there when you are ready.',
      blocked: 'Your browser blocked the Gmail tab. Please allow popups and try again.',
    },
    legal: {
      eyebrow: 'Legal',
      title: 'Privacy & Terms',
      privacyTitle: 'Privacy Policy',
      privacyText: 'This website does not use trackers or sell personal data. If you contact me through the form, your message content is only used to respond to your request.',
      termsTitle: 'Terms of Service',
      termsText: 'The portfolio content is provided for professional information. Reuse of text, visuals, or code samples requires prior permission from the author.',
    },
    footer: {
      brand: 'Portfolio',
      role: 'AI Engineering Professional',
      tagline: 'Building innovative solutions with modern technologies',
      quick: 'Quick Links',
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      get: 'Get In Touch',
      email: '<strong>Email:</strong><br />aymenouhiba@gmail.com',
      location: '<strong>Location:</strong><br />Paris, France',
      connect: 'Connect',
      rights: '© <span id="year"></span> Portfolio. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    theme: {
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
    },
  },
  fr: {
    meta: {
      description: 'Portfolio de Aymen Ouhiba, Ingenieur IA specialise en LLM, RAG et Azure.',
      title: 'Aymen Ouhiba | Ingenieur IA',
    },
    nav: {
      experience: 'Experience',
      projects: 'Projets',
      skills: 'Competences',
      education: 'Formation',
      about: 'A propos',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Ingenieur IA',
      intro: 'Ingenieur IA diplome de Telecom Paris, certifie Azure AI Engineer (AI-102), specialise dans les LLM, les pipelines RAG et les agents LangGraph sur Azure, avec plus de 3 ans d\'experience en production.',
      tag1: 'Azure AI Engineer (AI-102)',
      tag2: 'Agentic AI',
      tag3: 'Paris, France',
      ctaPrimary: 'Construisons ensemble',
      ctaSecondary: 'Telecharger CV',
      scroll: 'Defiler',
    },
    ticker: {
      1: '3+ ans en software, data et IA',
      2: 'Azure OpenAI • Azure AI Search • LangGraph',
      3: 'Airflow • Spark • Snowflake • Docker',
      4: 'RAG • Evaluation LLM • MLOps',
      5: 'AI Engineer @ ALTEN • ex-VERMEG • ex-SAEGUS • ex-AXE FINANCE',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Experiences professionnelles',
      e1company: 'ALTEN',
      e1role: 'Ingenieur R&D en IA',
      e1period: 'Sep 2025 - Mar 2026',
      e1location: 'Sophia Antipolis, France',
      e1title: 'Ingenieur R&D en IA · ALTEN',
      e1desc: 'Conception d\'un systeme narratif a embranchements pilote par LLM, avec graphe narratif structure, pipeline RAG Azure AI Search, orchestration des outils via MCP et cadre d\'evaluation LLM sur 8 criteres. Reduction de 40% des tokens Azure OpenAI via troncature dynamique.',
      e2company: 'SAEGUS',
      e2role: 'AI Engineer',
      e2period: 'Jan 2025 - Jun 2025',
      e2location: 'Paris, France',
      e2title: 'AI Engineer · SAEGUS',
      e2desc: 'Analyse multimodale des emotions sur les debats de l\'Assemblee nationale francaise, avec 87% de precision de classification, fine-tuning CamemBERT et workflows automatises sur la video, le texte et l\'audio.',
      e3company: 'VERMEG',
      e3role: 'Junior Data Engineer <span class="role-note">CDI</span>',
      e3period: 'Sep 2023 - Sep 2024',
      e3location: 'Tunis, Tunisie',
      e3title: 'Junior Data Engineer CDI · VERMEG',
      e3desc: 'Industrialisation de pipelines data/IA en contexte FinTech pour l\'analytique et la prise de decision, avec architecture Snowflake, orchestration ETL/ELT (Airflow, PySpark) et production de datasets exploitables par le metier.',
      e4company: 'SATORIPOP',
      e4role: 'Consultant Junior Data Science & IA',
      e4period: 'Fev 2023 - Aout 2023',
      e4location: 'Sousse, Tunisie',
      e4title: 'Junior Data Science & AI Consultant · SATORIPOP',
      e4desc: 'Developpement d\'une solution de sentiment analysis et de NER pour le dialecte tunisien, incluant la collecte/scraping et la preparation de 4 000 textes, puis le pre-entrainement et le fine-tuning de BERT et RoBERTa, avec 93% de F1-score sur donnees Carrefour Tunisie.',
      e5company: 'AXE FINANCE',
      e5role: 'Data Scientist <span class="role-note">Alternance</span>',
      e5period: 'Sep 2020 - Aout 2022',
      e5location: 'Tunis, Tunisie',
      e5title: 'Data Scientist Alternance · AXE FINANCE',
      e5desc: 'Missions IA/ML pour le monitoring du risque credit entreprise, incluant NLP financier avec BERT, automatisation OCR de bilans PDF, et explicabilite des decisions credit avec SHAP et LIME.',
      e6company: 'ENOVA ROBOTICS',
      e6role: 'Ingenieur R&D Computer Vision',
      e6period: 'Jan 2020 - Juin 2020',
      e6location: 'Sousse, Tunisie',
      e6title: 'Ingenieur R&D Computer Vision · ENOVA ROBOTICS',
      e6desc: 'Conception d\'un systeme de detection d\'incendie en temps reel sur flux de cameras, avec pretraitement d\'images, transfer learning InceptionV3, et deploiement pour inference live.',
    },
    projects: {
      eyebrow: 'Travaux selectionnes',
      title: 'Projets',
      p1: 'Stack football intelligence de bout en bout traitant plus de 5 000 frames avec tracking YOLOv8, analytics d\'evenements et reporting LLM agentique dans un workflow Docker reproductible.',
      p1meta: 'CV + Agents + LLM',
      p2: 'Assistant Text-to-SQL oriente metier teste sur un dataset de 1 million de lignes, avec inference Ollama offline, execution securisee et insights exportables.',
      p2meta: 'LLM + SQL + Securite',
      p3: 'Pipeline batch oriente production orchestrant 10 jeux de donnees mensuels avec nettoyage PySpark, DAGs Airflow, stockage PostgreSQL et workflow de prediction de retards.',
      p3meta: 'Airflow + Spark + PostgreSQL',
      p4: 'Implementation MLOps combinant Airflow, MinIO, Streamlit, tests automatises et CI/CD pour livrer des workflows ML Docker reproductibles.',
      p4meta: 'MLOps + CI/CD',
      more: 'Voir plus de projets',
    },
    skills: {
      eyebrow: 'Competences techniques',
      title: 'Stack principale',
      programming: 'Programmation',
      ai: 'AI Engineering',
      data: 'Data Engineering',
      cloud: 'Cloud & MLOps',
      genai: 'IA Generative & Agentique',
      frameworks: 'Frameworks IA / ML',
      languagesCard: 'Langages de programmation',
      cloudDevops: 'Cloud & DevOps',
      dataDb: 'Data & Bases de donnees',
      nlpAnalytics: 'NLP & Analytics',
    },
    education: {
      eyebrow: 'Formation',
      title: 'Parcours academique',
      lead: 'Double parcours d\'ingenierie en IA et informatique entre la France et la Tunisie.',
      e1school: 'Telecom Paris',
      e1title: 'Mastère specialise IA - Expert Data & MLOps',
      e1period: '📅 2024 - 2026',
      e1location: '📍 Paris, France',
      e1desc: 'Formation avancee orientee IA appliquee, plateformes data et pratiques MLOps de production.',
      e2school: 'ESPRIT',
      e2title: 'Diplome d\'ingenieur en informatique',
      e2period: '📅 2020 - 2023',
      e2location: '📍 Tunis, Tunisie',
      e2desc: 'Cursus d\'ingenierie couvrant architecture logicielle, machine learning et systemes data.',
      e3school: 'ISSAT Sousse',
      e3title: 'Licence en informatique',
      e3period: '📅 2017 - 2020',
      e3location: '📍 Sousse, Tunisie',
      e3desc: 'Bases solides en informatique, algorithmes, bases de donnees et programmation.',
    },
    about: {
      eyebrow: 'A propos',
      title1: 'Concevoir des systemes IA et data',
      title2: 'utiles, mesurables et industrialisables.',
      text: 'Ingenieur IA diplome de Telecom Paris et certifie Azure AI Engineer (AI-102). Je suis specialise dans les LLM, les pipelines RAG et les agents LangGraph sur Azure, avec plus de 3 ans d\'experience en production.',
      badge1: 'Certification Microsoft: Azure AI Engineer Associate (AI-102)',
      badge2: 'DeepLearning.AI: Agentic AI',
      meta1: '<strong>Formation:</strong> Telecom Paris (MS IA, Data & MLOps) · ESPRIT (Diplome d\'ingenieur)',
      meta2: '<strong>Langues:</strong> Francais (bilingue), Anglais (bilingue), Arabe (langue maternelle)',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Construisons des produits intelligents.',
    },
    form: {
      eyebrow: 'Envoyer un message',
      title: 'Parlons de votre projet.',
      name: 'Nom *',
      email: 'Email *',
      subject: 'Sujet *',
      message: 'Message *',
      submit: 'Envoyer le message',
      sent: 'Brouillon de message ouvert dans Gmail. Vous pouvez l\'envoyer des maintenant.',
      blocked: 'Votre navigateur a bloque l\'ouverture de Gmail. Autorisez les popups puis reessayez.',
    },
    legal: {
      eyebrow: 'Legal',
      title: 'Confidentialite & Conditions',
      privacyTitle: 'Politique de confidentialite',
      privacyText: 'Ce site n\'utilise pas de trackers et ne revend pas de donnees personnelles. Si vous me contactez via le formulaire, votre message est utilise uniquement pour vous repondre.',
      termsTitle: 'Conditions d\'utilisation',
      termsText: 'Le contenu de ce portfolio est fourni a titre informatif et professionnel. Toute reutilisation de textes, visuels ou extraits de code requiert l\'autorisation prealable de l\'auteur.',
    },
    footer: {
      brand: 'Portfolio',
      role: 'Professionnel en ingenierie IA',
      tagline: 'Construire des solutions innovantes avec des technologies modernes',
      quick: 'Liens rapides',
      home: 'Accueil',
      about: 'A propos',
      experience: 'Experience',
      projects: 'Projets',
      contact: 'Contact',
      get: 'Me contacter',
      email: '<strong>Email:</strong><br />aymenouhiba@gmail.com',
      location: '<strong>Localisation:</strong><br />Paris, France',
      connect: 'Reseaux',
      rights: '© <span id="year"></span> Portfolio. Tous droits reserves.',
      privacy: 'Politique de confidentialite',
      terms: 'Conditions d\'utilisation',
    },
    theme: {
      switchToLight: 'Passer en mode clair',
      switchToDark: 'Passer en mode sombre',
    },
  },
};

const getTranslationValue = (source, path) => {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), source);
};

const applyTranslations = (lang) => {
  const dict = I18N[lang] || I18N.en;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    const value = getTranslationValue(dict, key);
    if (typeof value === 'string') {
      node.innerHTML = value;
    }
  });

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.meta?.description) {
    metaDesc.setAttribute('content', dict.meta.description);
  }

  if (dict.meta?.title) {
    document.title = dict.meta.title;
  }

  document.documentElement.lang = lang;

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
};

let currentLang = 'en';
applyTranslations(currentLang);

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const lang = button.dataset.lang === 'fr' ? 'fr' : 'en';
    currentLang = lang;
    applyTranslations(lang);
    updateThemeButton(document.body.dataset.theme === 'light' ? 'light' : 'dark');
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
});
const initialTheme = 'dark';
document.body.dataset.theme = initialTheme;

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

const updateThemeButton = (theme) => {
  if (!themeToggleButton) return;

  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const dict = I18N[currentLang] || I18N.en;
  const label = nextTheme === 'light' ? dict.theme.switchToLight : dict.theme.switchToDark;
  themeToggleButton.setAttribute('aria-label', label);
  themeToggleButton.setAttribute('title', label);
};

updateThemeButton(initialTheme);

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', () => {
    const current = document.body.dataset.theme === 'light' ? 'light' : 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = next;
    updateThemeButton(next);
  });
}

if (heroWords.length && !reducedMotion) {
  requestAnimationFrame(() => {
    heroWords.forEach((word) => word.classList.add('in'));
  });
} else {
  heroWords.forEach((word) => {
    word.style.transform = 'translateY(0)';
    word.style.opacity = '1';
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: '0px 0px -8% 0px',
  }
);

revealItems.forEach((item) => observer.observe(item));

const trackedSectionIds = Array.from(headerNavLinks)
  .map((link) => link.getAttribute('href')?.slice(1) || '')
  .filter(Boolean);

const trackedSections = trackedSectionIds
  .map((id) => document.getElementById(id))
  .filter((section) => section);

const setActiveNavLink = (activeId) => {
  headerNavLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${activeId}`;
    link.classList.toggle('is-active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

const updateActiveNavOnScroll = () => {
  if (!trackedSections.length) return;

  const headerOffset = header ? header.offsetHeight : 0;
  const triggerLine = window.scrollY + headerOffset + window.innerHeight * 0.3;
  let activeId = trackedSections[0].id;

  trackedSections.forEach((section) => {
    if (triggerLine >= section.offsetTop) {
      activeId = section.id;
    }
  });

  setActiveNavLink(activeId);
};

headerNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const targetId = link.getAttribute('href')?.slice(1);
    if (targetId) setActiveNavLink(targetId);
  });
});

updateActiveNavOnScroll();

window.addEventListener('scroll', () => {
  const y = window.scrollY;

  header.classList.toggle('is-glass', y > 30);

  if (heroBg && !reducedMotion) {
    heroBg.style.transform = `scale(1.06) translate3d(0, ${Math.min(y * 0.05, 24)}px, 0)`;
  }

  updateActiveNavOnScroll();
});

window.addEventListener('resize', updateActiveNavOnScroll);

if (!reducedMotion) {
  magneticTargets.forEach((el) => {
    const strength = 12;

    el.addEventListener('mousemove', (event) => {
      const rect = el.getBoundingClientRect();
      const relX = event.clientX - (rect.left + rect.width / 2);
      const relY = event.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${(relX / rect.width) * strength}px, ${(relY / rect.height) * strength}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0px, 0px)';
    });
  });
}

if (!isTouch && !reducedMotion && dot && ring) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  const render = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(render);
  };

  render();

  const hoverables = document.querySelectorAll('a, button, .project-item');
  hoverables.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      ring.style.width = '52px';
      ring.style.height = '52px';
      ring.style.borderColor = 'rgba(201, 111, 45, 0.95)';
    });
    item.addEventListener('mouseleave', () => {
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(201, 111, 45, 0.55)';
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

root.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
window.addEventListener('resize', () => {
  root.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
});

const messageForm = document.getElementById('message-form');
const formStatus = document.getElementById('form-status');

if (messageForm) {
  messageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (document.getElementById('msg-name')?.value || '').trim();
    const email = (document.getElementById('msg-email')?.value || '').trim();
    const subject = (document.getElementById('msg-subject')?.value || '').trim();
    const message = (document.getElementById('msg-body')?.value || '').trim();

    const fullSubject = encodeURIComponent(subject);
    const fullBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=aymenouhiba@gmail.com&su=${fullSubject}&body=${fullBody}`;
    const dict = I18N[currentLang] || I18N.en;

    const tab = window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    if (formStatus) {
      formStatus.textContent = tab ? dict.form.sent : dict.form.blocked;
      formStatus.classList.add('is-visible');
    }

    if (tab) {
      messageForm.reset();
    }
  });
}
