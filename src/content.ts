// All page copy, in both languages. English is the default; `?lang=pt` switches.

const links = {
  email: "erickalvarengabonifacio@hotmail.com",
  phone: "+55 (11) 99381-1704",
  linkedin: "https://www.linkedin.com/in/erickbonifacio",
  github: "https://github.com/Erick-Bonifacio",
};

const kisStack = ["Java (Spring Boot)", "React Native (Expo)", "Google Cloud", "Terraform", "PostgreSQL", "Playwright", "GitHub Actions", "Docker"];
const supportStack = ["PHP (Laravel)", "JavaScript (jQuery)", "PostgreSQL", "Git", "Docker"];

const en = {
  title: "Erick Bonifacio — Full Stack Developer",
  switchLang: { label: "PT", aria: "Ver em português", to: "?lang=pt" },
  themeAria: "Toggle theme",
  nav: [
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    badge: "Itajubá, MG · Open to remote or on-site",
    h1: ["Erick Bonifacio,", "full stack developer."],
    lead: "I build and run production systems end to end. Currently the lead developer of a web and mobile auction platform with around 6,000 users and US$ 500K in annual transaction volume.",
    primary: "Get in touch",
    secondary: "Download résumé",
  },
  cvFile: "/cv/Erick-Bonifacio-Full-Stack-Developer.pdf",
  stats: [
    { n: "~6k", label: "users on the platform I lead" },
    { n: "US$ 500K", label: "in annual transaction volume" },
    { n: "10x", label: "faster under high load" },
    { n: "0 → 80%", label: "test coverage, built from scratch" },
  ],
  experience: {
    eyebrow: "Career",
    h2: "Experience.",
    lead: "2+ years building and maintaining production systems, across back-end, mobile, cloud and generative AI.",
    items: [
      {
        date: "Jan 2026 – Present",
        title: "Full Stack Developer, KIS Solutions.",
        note: "Development intern from Jul 2025 to Jan 2026, hired full-time after 6 months.",
        bullets: [
          "Lead developer of the web and mobile systems covering the full auction workflow, serving around 6,000 users and US$ 500K in annual transactions. Own the full cycle, from gathering requirements with the client to architecture, implementation, deployment and operations on Google Cloud.",
          "Made the platform up to 10x faster under high load, supporting around 2,000 concurrent users.",
          "Built the testing strategy from scratch, raising coverage from 0% to about 80% with Playwright, and automated CI with GitHub Actions, sustaining releases every 45 days (about 9 new features per year).",
          "Automated the renaming of about 250 entities per shift with generative AI, eliminating about 50 minutes of manual work every shift.",
          "In the company-wide AI Enablement initiative, which sets standards for AI usage, helped build a system that distributes and updates rules across teams through top-down and bottom-up flows.",
          "Technically assessed 20+ candidates across seniority levels, playing a key role in multiple company hiring processes.",
        ],
        tags: kisStack,
      },
      {
        date: "May 2024 – Jul 2025",
        title: "Software Development Intern, Support Informática.",
        note: "",
        bullets: [
          "Built an integration API (middleware) with automated tests that automated the registration of patients from other municipalities treated at local clinics, replacing a manual process spread across several different tools.",
          "Fixed bugs and shipped new features in systems used by the company's clients.",
        ],
        tags: supportStack,
      },
    ],
  },
  skills: {
    eyebrow: "Tech stack",
    h2: "Skills.",
    groups: [
      { label: "Back-end", text: "Java, Spring Boot, PHP, Laravel, REST APIs and system integration." },
      { label: "Mobile and web", text: "React Native (Expo), JavaScript, jQuery, HTML, CSS." },
      { label: "Data", text: "PostgreSQL and relational databases." },
      { label: "Cloud and DevOps", text: "Google Cloud (GCP), Terraform, Docker, CI/CD with GitHub Actions, Git." },
      { label: "Testing", text: "Playwright (end-to-end) and unit testing." },
      { label: "AI", text: "AI-assisted development as a daily practice, prompt and context engineering, defining AI usage rules and standards for teams, generative AI for process automation." },
    ],
  },
  projects: {
    eyebrow: "Side work",
    h2: "Projects.",
    visit: "Visit site",
    code: "View code",
    prev: "Previous project",
    next: "Next project",
    items: [
      {
        title: "Rentool",
        text: "Marketplace for renting tools from people nearby, instead of buying something you will use twice. Covers authentication, user and tool management, the rental flow, payments, availability and notifications, from front-end to back-end and database.",
        img: "/rentool.webp",
        alt: "Screenshot of the Rentool home page",
        href: "https://www.rentool.com.br/",
        repo: "", // public repository URL; the "view code" link shows only when set
        tags: ["Marketplace", "Full stack", "Payments"],
      },
      {
        title: "Atlas Vivo",
        text: "Free, browser-based 3D platform in Portuguese for high school students to learn the human body, built as a team project at UNIFEI. Lessons and the 3D model are linked both ways, with microscopic views, a study path, quizzes and 127 entrance-exam questions curated from 1,555 with an AI-assisted pipeline.",
        img: "/atlas-vivo.webp",
        alt: "Screenshot of the Atlas Vivo 3D learning platform",
        href: "https://atlas-vivo-seven.vercel.app/",
        repo: "", // public repository URL; the "view code" link shows only when set
        tags: ["3D", "Education", "AI-assisted curation"],
      },
      {
        title: "Scan It Simple",
        text: "Custom QR codes that never expire, with scan statistics. JWT authentication and email delivery over SMTP.",
        img: "/scan-it-simple.webp",
        alt: "Screenshot of the Scan It Simple QR code generator",
        href: "https://scan-it-simple.vercel.app/",
        repo: "", // public repository URL; the "view code" link shows only when set
        tags: ["React", "Flask", "PostgreSQL", "Vercel"],
      },
    ],
  },
  more: {
    eyebrow: "Background",
    h2: "Education and more.",
    education: { label: "Education", degree: "B.S. in", field: "Information Systems", text: "Federal University of Itajubá (UNIFEI)", meta: "Mar 2023 – Jul 2027 (expected)" },
    languages: {
      label: "Languages",
      items: [
        { name: "Portuguese", level: "Native." },
        { name: "English", level: "Upper-intermediate, used daily with international teams and clients." },
      ],
    },
    extra: { label: "Extracurricular", title: "UNIFEI Entrepreneurship Center (CEU)", text: "Led Cria, an introductory entrepreneurship event for young people in the Itajubá community." },
  },
  contact: {
    eyebrow: "Contact",
    h2: "Let's talk.",
    text: "Open to remote or on-site roles. Email is the fastest way to reach me.",
    primary: "Send an email",
    secondary: "Download résumé",
    location: "Itajubá, Minas Gerais, Brazil",
  },
  footer: "Erick Bonifacio, 2026.",
};

const pt: typeof en = {
  title: "Erick Bonifacio — Desenvolvedor Full Stack",
  switchLang: { label: "EN", aria: "View in English", to: "/" },
  themeAria: "Alternar tema",
  nav: [
    { href: "#experience", label: "Experiência" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ],
  hero: {
    badge: "Itajubá, MG · Remoto ou presencial",
    h1: ["Erick Bonifacio,", "desenvolvedor full stack."],
    lead: "Construo e opero sistemas em produção de ponta a ponta. Hoje sou o desenvolvedor principal de uma plataforma web e mobile de leilões com cerca de 6 mil usuários e US$ 500 mil movimentados por ano.",
    primary: "Falar comigo",
    secondary: "Baixar currículo",
  },
  cvFile: "/cv/Erick-Bonifacio-Desenvolvedor-Full-Stack.pdf",
  stats: [
    { n: "~6 mil", label: "usuários na plataforma que lidero" },
    { n: "US$ 500 mil", label: "movimentados nela por ano" },
    { n: "10x", label: "mais rápida sob alta carga" },
    { n: "0 → 80%", label: "de cobertura de testes, criada do zero" },
  ],
  experience: {
    eyebrow: "Carreira",
    h2: "Experiência.",
    lead: "Mais de dois anos construindo e mantendo sistemas em produção, em back-end, mobile, cloud e IA generativa.",
    items: [
      {
        date: "01/2026 – atual",
        title: "Desenvolvedor Full Stack, KIS Solutions.",
        note: "Estagiário de desenvolvimento de 07/2025 a 01/2026, efetivado após 6 meses.",
        bullets: [
          "Desenvolvedor principal dos sistemas web e mobile que cobrem o fluxo completo de leilões: cerca de 6 mil usuários e US$ 500 mil movimentados por ano. Conduzo o ciclo completo, do levantamento de requisitos com o cliente à arquitetura, implementação, deploy e operação no Google Cloud.",
          "Deixei a plataforma até 10x mais rápida em cenários de alta carga, sustentando cerca de 2 mil usuários simultâneos.",
          "Criei a estratégia de testes do zero, levando a cobertura de 0% para cerca de 80% com Playwright, e automatizei o CI com GitHub Actions, sustentando releases a cada 45 dias (cerca de 9 novas funcionalidades por ano).",
          "Automatizei com IA generativa a renomeação de cerca de 250 entidades por turno, eliminando cerca de 50 minutos de trabalho manual a cada turno.",
          "Na iniciativa de AI Enablement, que define padrões de uso de IA para toda a empresa, ajudei a construir um sistema que distribui e atualiza regras entre os times nos fluxos top-down e bottom-up.",
          "Avaliei tecnicamente mais de 20 candidatos de diferentes níveis, com papel decisivo em diversos processos seletivos da empresa.",
        ],
        tags: kisStack,
      },
      {
        date: "05/2024 – 07/2025",
        title: "Estagiário de Desenvolvimento, Support Informática.",
        note: "",
        bullets: [
          "Desenvolvi uma API de integração (middleware), com testes automatizados, que automatizou o cadastro de beneficiários de outros municípios atendidos nas clínicas da cidade. Antes, esse cadastro era feito à mão em várias ferramentas diferentes.",
          "Corrigi bugs e implementei novas funcionalidades em sistemas usados pelos clientes da empresa.",
        ],
        tags: supportStack,
      },
    ],
  },
  skills: {
    eyebrow: "Stack",
    h2: "Habilidades.",
    groups: [
      { label: "Back-end", text: "Java, Spring Boot, PHP, Laravel, APIs REST e integração de sistemas." },
      { label: "Mobile e web", text: "React Native (Expo), JavaScript, jQuery, HTML, CSS." },
      { label: "Dados", text: "PostgreSQL e bancos relacionais." },
      { label: "Cloud e DevOps", text: "Google Cloud (GCP), Terraform, Docker, CI/CD com GitHub Actions, Git." },
      { label: "Testes", text: "Playwright (end-to-end) e testes unitários." },
      { label: "IA", text: "Desenvolvimento assistido por IA no dia a dia, engenharia de prompt e de contexto, criação de regras e padrões de uso de IA para times, IA generativa aplicada à automação de processos." },
    ],
  },
  projects: {
    eyebrow: "Projetos pessoais",
    h2: "Projetos.",
    visit: "Ver site",
    code: "Ver código",
    prev: "Projeto anterior",
    next: "Próximo projeto",
    items: [
      {
        title: "Rentool",
        text: "Marketplace para alugar ferramentas de pessoas próximas, em vez de comprar algo que você vai usar duas vezes. Cobre autenticação, gestão de usuários e ferramentas, fluxo de aluguel, pagamentos, disponibilidade e notificações, do frontend ao backend e banco de dados.",
        img: "/rentool.webp",
        alt: "Captura de tela da página inicial do Rentool",
        href: "https://www.rentool.com.br/",
        repo: "", // public repository URL; the "view code" link shows only when set
        tags: ["Marketplace", "Full stack", "Pagamentos"],
      },
      {
        title: "Atlas Vivo",
        text: "Plataforma 3D gratuita, no navegador e em português, para alunos do ensino médio aprenderem o corpo humano, feita em equipe na UNIFEI. As aulas e o modelo 3D se conectam nos dois sentidos, com vistas microscópicas, trilha de estudo, quizzes e 127 questões de vestibular curadas a partir de 1.555 com um pipeline assistido por IA.",
        img: "/atlas-vivo.webp",
        alt: "Captura de tela da plataforma 3D Atlas Vivo",
        href: "https://atlas-vivo-seven.vercel.app/",
        repo: "", // public repository URL; the "view code" link shows only when set
        tags: ["3D", "Educação", "Curadoria com IA"],
      },
      {
        title: "Scan It Simple",
        text: "QR Codes personalizados que não expiram, com estatísticas de scans. Autenticação JWT e envio de emails por SMTP.",
        img: "/scan-it-simple.webp",
        alt: "Captura de tela do gerador de QR Codes Scan It Simple",
        href: "https://scan-it-simple.vercel.app/",
        repo: "", // public repository URL; the "view code" link shows only when set
        tags: ["React", "Flask", "PostgreSQL", "Vercel"],
      },
    ],
  },
  more: {
    eyebrow: "Trajetória",
    h2: "Formação e mais.",
    education: { label: "Formação", degree: "Bacharelado em", field: "Sistemas de Informação", text: "Universidade Federal de Itajubá (UNIFEI)", meta: "03/2023 – 07/2027 (previsão)" },
    languages: {
      label: "Idiomas",
      items: [
        { name: "Português", level: "Nativo." },
        { name: "Inglês", level: "Intermediário-avançado, com uso diário com times e clientes internacionais." },
      ],
    },
    extra: { label: "Extracurricular", title: "Centro de Empreendedorismo da UNIFEI (CEU)", text: "Liderei o Cria, evento de introdução ao empreendedorismo para jovens da comunidade de Itajubá." },
  },
  contact: {
    eyebrow: "Contato",
    h2: "Vamos conversar.",
    text: "Aberto a vagas remotas ou presenciais. O email é o jeito mais rápido de falar comigo.",
    primary: "Enviar email",
    secondary: "Baixar currículo",
    location: "Itajubá, Minas Gerais, Brasil",
  },
  footer: "Erick Bonifacio, 2026.",
};

export const content = { en, pt };
export { links };
