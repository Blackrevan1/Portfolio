/* ============================================================
   All site content lives here — edit this file to update copy.
   Nothing in here is hard-coded into the components.
   ============================================================ */

export const profile = {
  name: 'Krishna Bhabat',
  logo: 'krishna',
  role: 'Backend & DevOps Engineer',
  kicker: 'Founding Engineer · Krit Intel',
  // The hero headline. Wrap the accented part in <em></em>.
  headline: "APIs that hold. Databases that don't blink.\n<em>Deploys nobody dreads.</em>",
  summary:
    'I design reliable Spring Boot APIs and clean data layers, then ship them with the containers, CI/CD pipelines and monitoring that keep them alive in production. The boring, load-bearing half of a product — owned end to end.',
  metaStack: ['Java', 'Spring Boot', 'Docker', 'Kubernetes', 'AWS'],
  email: 'krishnab1080@gmail.com',
  phone: '+91 93597 89635',
  phoneHref: '+919359789635',
  location: 'India · Remote',
  github: 'https://github.com/Blackrevan1',
  githubHandle: 'github.com/Blackrevan1',
  linkedin: 'https://www.linkedin.com/in/krishna-bhabat',
  linkedinHandle: 'in/krishna-bhabat',
  company: 'https://kritintel.com',
  companyName: 'Krit Intel',
  resumeUrl: '', // optional: drop a PDF in /public and set e.g. '/Krishna_Bhabat.pdf'
}

export const nav = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Work', id: 'work' },
  { label: 'Stack', id: 'stack' },
  { label: 'Contact', id: 'contact' },
]

// Hero terminal — rendered as a fake source file with syntax tokens.
// Each line is an array of { t: token-class, s: text } segments.
export const terminal = {
  title: 'engineer.ts',
  lines: [
    [{ t: 'kw', s: 'const' }, { t: 'var', s: ' engineer' }, { t: 'key', s: ' = {' }],
    [{ t: 'key', s: '  focus' }, { t: 'key', s: ': ' }, { t: 'str', s: '"backend systems + the infra to run them"' }, { t: 'key', s: ',' }],
    [{ t: 'key', s: '  builds' }, { t: 'key', s: ': [' }, { t: 'str', s: '"REST APIs"' }, { t: 'key', s: ', ' }, { t: 'str', s: '"auth"' }, { t: 'key', s: ', ' }, { t: 'str', s: '"data layers"' }, { t: 'key', s: '],' }],
    [{ t: 'key', s: '  ships' }, { t: 'key', s: ': [' }, { t: 'str', s: '"docker"' }, { t: 'key', s: ', ' }, { t: 'str', s: '"k8s"' }, { t: 'key', s: ', ' }, { t: 'str', s: '"jenkins"' }, { t: 'key', s: '],' }],
    [{ t: 'key', s: '  observes' }, { t: 'key', s: ': [' }, { t: 'str', s: '"prometheus"' }, { t: 'key', s: ', ' }, { t: 'str', s: '"grafana"' }, { t: 'key', s: '],' }],
    [{ t: 'key', s: '  uptime' }, { t: 'key', s: ': ' }, { t: 'num', s: '24' }, { t: 'key', s: '/' }, { t: 'num', s: '7' }, { t: 'key', s: ',' }],
    [{ t: 'key', s: '  status' }, { t: 'key', s: ': ' }, { t: 'str', s: '"available for work"' }, { t: 'cursor', s: '' }],
    [{ t: 'key', s: '}' }],
  ],
}

export const highlights = [
  { value: '2022', label: 'Building & shipping backends since', detail: 'Java · Spring Boot' },
  { value: '6+', label: 'Backend & infra projects shipped', detail: 'APIs, pipelines, storage' },
  { value: '78%', label: 'Forecasting-accuracy lift on ML models', detail: 'XGBoost · HighRadius' },
  { value: '24/7', label: 'Self-hosted systems, secured & monitored', detail: 'Cloudflare · Prometheus' },
]

export const about = {
  narrative: [
    'Products rarely fall over because of the feature nobody built. They fall over because of the layer nobody <strong>owned</strong> — the endpoint that skipped validation, the database with no connection pool, the deploy that only one person knew how to do by hand.',
    'That layer is what I do. I build <strong>backend services</strong> in Java and Spring Boot — properly validated APIs, sane data models, real authentication — and I wrap them in the <strong>DevOps</strong> that makes shipping them repeatable and boring: Docker, Kubernetes, CI/CD, and observability you can actually read.',
    'At <strong>Krit Intel</strong> I own the backend and infrastructure. My co-founders push product and AI; I make sure what we ship has a spine and stays up.',
    "Lately I've been leveling up as an <strong>AI/ML engineer</strong> — leaning on the backend and infra I already know to focus on model serving, LLM-powered features and MLOps. Same instinct as always: make the smart part actually ship, and stay up.",
  ],
  signature: '// reliable by default, not by accident',
  strengths: [
    {
      index: '01',
      icon: 'server',
      title: 'Backend that behaves',
      body: 'Spring Boot REST APIs with real input validation, error handling and auth. JPA + PostgreSQL data layers, connection pooling and query tuning — so the API is fast and predictable under load.',
    },
    {
      index: '02',
      icon: 'ship',
      title: 'Ships itself',
      body: 'Docker images, Kubernetes orchestration and Jenkins CI/CD pipelines. Deploys become a push, not a heroic manual ritual — fewer errors, faster releases, easy rollbacks.',
    },
    {
      index: '03',
      icon: 'shield',
      title: 'Open, but not exposed',
      body: 'Self-hosted systems reached the internet safely via Cloudflare Tunnel, with Keycloak SSO and OAuth2 / RBAC on top. Access is centralized and role-scoped by default.',
    },
    {
      index: '04',
      icon: 'activity',
      title: 'You can see it',
      body: 'Prometheus + Grafana dashboards on health, latency and resource use — so problems show up on a graph before they show up in your inbox.',
    },
  ],
}

export const experience = [
  {
    role: 'Backend & DevOps Engineer',
    company: 'Stealth Startup',
    companyUrl: '',
    period: '2025 — Present',
    location: 'Remote',
    points: [
      'Own the backend and infrastructure end-to-end for an early-stage product — API design, data modeling, containerization, CI/CD and cloud deployment.',
      'Built secure Spring Boot REST APIs with thorough input validation, session management and role-based access control; integrated Keycloak SSO for centralized identity.',
      'Self-hosted the platform on bare-metal and exposed it to the internet securely through Cloudflare Tunnel — no open inbound ports.',
      'Containerized services with Docker and orchestrated them on Kubernetes; automated builds and releases through Jenkins CI/CD pipelines.',
      'Ran and secured PostgreSQL and MongoDB, and stood up Prometheus + Grafana monitoring for health, performance and uptime.',
    ],
    tags: ['Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes', 'Jenkins', 'Cloudflare', 'Keycloak', 'Prometheus'],
  },
  {
    role: 'Product & Engineering Intern',
    company: 'HighRadius',
    companyUrl: '',
    period: 'Jan 2022 — May 2022',
    location: 'Remote',
    points: [
      'Implemented server-side logic with Java Servlets and JDBC for an AI-driven B2B invoice-management platform.',
      'Trained XGBoost models to predict invoice payment behavior, improving forecasting accuracy by ~78%.',
      'Contributed to invoice-processing features that lifted operational efficiency by ~30%.',
    ],
    tags: ['Java', 'JDBC', 'Servlets', 'XGBoost', 'SQL'],
  },
]

export const projects = [
  {
    featured: true,
    icon: 'notes',
    badge: 'Spring Boot',
    name: 'Collaborative Notes Platform',
    description:
      'Multi-user note app with full CRUD, Google Sign-In (OAuth 2.0) and owner-controlled sharing — note owners invite collaborators by Gmail with role-based permissions.',
    impact: 'Secure, permissioned collaboration out of the box',
    stack: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'PostgreSQL', 'OAuth 2.0'],
  },
  {
    featured: false,
    icon: 'database',
    badge: 'Full-stack',
    name: 'PostgreSQL Web Viewer',
    description:
      'Browser-based database client: authenticated, multi-role query execution with dynamic table generation, CSV export and sanitized, real-time queries.',
    impact: 'Safe DB access without a psql prompt',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'REST', 'JavaScript'],
  },
  {
    featured: false,
    icon: 'cloud',
    badge: 'Terraform',
    name: 'EC2 Auto-Scaling (IaC)',
    description:
      'Auto-scaling group on AWS EC2 provisioned entirely with Terraform modules — instances, security groups, load balancers and IAM — scaling on CloudWatch CPU/memory alarms.',
    impact: 'Hands-off scaling, less manual ops',
    stack: ['Terraform', 'AWS EC2', 'CloudWatch', 'IAM', 'ALB'],
  },
  {
    featured: false,
    icon: 'box',
    badge: 'Docker · K8s',
    name: 'S3-Compatible Storage',
    description:
      'Self-hosted, S3-compatible object storage with MinIO. Deployed on Kubernetes with persistent volume claims and helper scripts for pre-signed URLs and bucket management.',
    impact: 'Durable local S3 for dev & test',
    stack: ['MinIO', 'Docker', 'Kubernetes', 'PVC', 'NodePort'],
  },
  {
    featured: false,
    icon: 'pipeline',
    badge: 'DevOps',
    name: 'Self-Hosted Deploy Pipeline',
    description:
      'End-to-end push-to-deploy for a self-hosted product: Jenkins builds Docker images, ships them to Kubernetes, and exposes services to the internet through Cloudflare Tunnel.',
    impact: 'Repeatable deploys on bare-metal',
    stack: ['Jenkins', 'Docker', 'Kubernetes', 'Cloudflare', 'Bash'],
  },
  {
    featured: false,
    icon: 'chart',
    badge: 'ML',
    name: 'Invoice Payment Predictor',
    description:
      'XGBoost model predicting B2B invoice payment behavior, served behind Java/JDBC business logic — turning historical payment data into forward-looking cash-flow signals.',
    impact: '≈78% better forecasting accuracy',
    stack: ['Python', 'XGBoost', 'Java', 'JDBC', 'SQL'],
  },
]

export const skills = [
  {
    group: 'Backend',
    items: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'REST APIs', 'Hibernate', 'Servlets', 'JDBC'],
  },
  {
    group: 'Data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'Connection Pooling', 'Query Tuning'],
  },
  {
    group: 'DevOps',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'CI/CD', 'Cloudflare Tunnel', 'Nginx'],
  },
  {
    group: 'Cloud',
    items: ['AWS EC2', 'S3', 'Lambda', 'RDS', 'CloudWatch', 'CloudFormation'],
  },
  {
    group: 'Observability & Security',
    items: ['Prometheus', 'Grafana', 'ELK', 'Keycloak', 'OAuth2 / SSO', 'RBAC'],
  },
  {
    group: 'Languages & Tools',
    items: ['Python', 'C++', 'C', 'Bash', 'Git', 'Maven', 'Linux', 'Postman'],
  },
  {
    group: 'AI / ML',
    learning: true,
    note: 'Currently leveling up',
    items: ['Python', 'scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'PyTorch', 'LLM apps / RAG', 'MLOps'],
  },
]

export const education = [
  {
    year: '2019 — 2023',
    degree: 'B.Tech, Computer Science & Engineering',
    school: 'Lovely Professional University · Jalandhar, Punjab',
    detail: 'CGPA 7.79',
  },
]

export const certifications = [
  { name: 'AWS Solutions Architect – Associate', by: 'AWS' },
  { name: 'Docker Essentials', by: 'Coursera' },
  { name: 'Spring Boot Fundamentals', by: 'Udemy' },
  { name: 'Machine Learning Specialization', by: 'Coursera · DeepLearning.AI' },
  { name: 'DSA Self-Paced', by: 'GeeksforGeeks' },
]

export const contact = {
  eyebrow: '// get in touch',
  title: "Let's build something that <em>stays up.</em>",
  body:
    "I'm the backend and infrastructure half of Krit Intel, and I take on freelance backend, API and DevOps work. If you need a system built right and shipped so it keeps running, my inbox is open.",
}
