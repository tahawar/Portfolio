export const profile = {
  name: 'Tahawar Ihsan',
  title: 'AI/ML Engineer',
  location: 'Lahore, Pakistan',
  email: 'tahawarihsan@gmail.com',
  phone: '+92 306 6206308',
  available: true,
  links: {
    github: 'https://github.com/tahawar',
    linkedin: 'https://www.linkedin.com/in/tahawar-ihsan',
    twitter: 'https://x.com/tahawarihsan',
    medium: 'https://medium.com/@tahawarihsan',
    cv: '/Tahawar_ihsan_CV.pdf',
  },
};

export const heroRoles = [
  'AI/ML Engineer',
  'LangGraph Architect',
  'Agentic AI Engineer',
  'RAG Systems Builder',
  'LLM Orchestration Engineer',
];

export const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '5+', label: 'Enterprise Clients' },
  { value: '15+', label: 'Projects Shipped' },
];

export const about = {
  paragraphs: [
    `I'm an AI/ML Engineer with 2+ years of experience building production GenAI systems for enterprise clients including BMW and Mercedes. I work at the intersection of research and engineering — designing agentic AI workflows, RAG pipelines, and LLM orchestration that are reliable, auditable, and cost-efficient.`,
    `At NetSol Technologies, I lead AI module development for Check and CDE (Credit Decision Engine) — shipping agentic chatbot systems, real-time voice agents, document extraction pipelines, and multi-tenant SaaS architecture that serves global automotive finance customers.`,
  ],
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: 'AI/ML Engineer · AI Core Team',
    company: 'NetSol Technologies Ltd.',
    location: 'Lahore, Pakistan',
    period: 'Aug 2024 — Present',
    current: true,
    summary:
      'Leading AI module development for Check and CDE (Credit Decision Engine), serving global automotive finance customers including BMW and Mercedes.',
    bullets: [
      'Designed agentic chatbot systems using LangGraph, LiteLLM (model routing, key management, cost control), and MCP ContextForge for safe, structured tool-calling.',
      'Built event-driven orchestration pipelines with n8n, RabbitMQ, and Celery to automate multi-step credit evaluation.',
      'Designed multi-tenant architecture for Check, enabling secure tenant-based login, configuration, and data separation.',
      'Built document extraction Flows using AWS Textract with custom validation to process monthly rate charts.',
      'Developed a POC real-time voice agent with LiveKit (WebRTC), Vapi, Deepgram streaming ASR, and ElevenLabs low-latency TTS.',
      'Built bank statement analysis workflows generating structured insights for risk and affordability decisions.',
      'Improved LLM observability with Langfuse, DSPy, and Logfire for compliance-ready auditing.',
      'Developed NLP-driven retrieval systems for BMW and Mercedes using MongoDB Atlas Vector Search and Pinecone.',
    ],
    stack: [
      'LangGraph',
      'LiteLLM',
      'MCP',
      'FastAPI',
      'Python',
      'Pinecone',
      'AWS Bedrock',
      'AWS Textract',
      'Docker',
      'RabbitMQ',
      'Celery',
      'n8n',
      'Langfuse',
      'DSPy',
    ],
  },
  {
    role: 'Machine Learning & Python Engineer',
    company: 'Codrivity UK',
    location: 'Islamabad, Pakistan',
    period: 'Jul 2023 — Jul 2024',
    summary:
      'Built AI-driven products and ML pipelines for HR-tech and conversational AI in an Agile environment.',
    bullets: [
      'Led OnboardIQ development — AI recruitment platform achieving 95% accuracy in candidate screening.',
      'Built Lumina Chatbot (Django-based) for enhanced user engagement and conversational quality.',
      'Developed algorithm to auto-generate interview questions, reducing HR prep time by 40%.',
      'Deployed on AWS Lambda, ECS, and S3 for scalable performance.',
      'Documented APIs using Postman, Swagger UI, and Redocly.',
    ],
    stack: ['Python', 'Django', 'FastAPI', 'TensorFlow', 'AWS Lambda', 'AWS ECS', 'AWS S3'],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'JavaScript', 'C/C++'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Django', 'Flask', 'REST APIs', 'Node.js'],
  },
  {
    category: 'LLMs & Agentic AI',
    items: [
      'LangChain',
      'LangGraph',
      'LiteLLM',
      'MCP',
      'DSPy',
      'RAG',
      'Prompt Engineering',
    ],
  },
  {
    category: 'Models',
    items: ['OpenAI', 'Anthropic Claude', 'Llama', 'Hugging Face'],
  },
  {
    category: 'Vector & Data',
    items: [
      'Pinecone',
      'MongoDB Atlas Vector Search',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
    ],
  },
  {
    category: 'Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NumPy', 'Pandas'],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      'AWS Lambda',
      'AWS ECS',
      'AWS S3',
      'AWS Bedrock',
      'AWS Textract',
      'Docker',
      'Azure DevOps',
    ],
  },
  {
    category: 'Orchestration',
    items: ['RabbitMQ', 'Celery', 'n8n'],
  },
  {
    category: 'Observability',
    items: ['Langfuse', 'Logfire', 'Pytest', 'Postman', 'Locust'],
  },
];

export type Project = {
  title: string;
  company?: string;
  category: 'enterprise' | 'personal' | 'academic';
  description: string;
  stack: string[];
  link?: { label: string; href: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Credit Decision Engine',
    company: 'NetSol Technologies',
    category: 'enterprise',
    description:
      'Enterprise agentic AI for underwriting with human-in-the-loop review, explainable outputs, and structured tool-calling across business logic services.',
    stack: ['LangGraph', 'LiteLLM', 'MCP', 'RabbitMQ', 'Celery', 'FastAPI', 'n8n'],
    featured: true,
  },
  {
    title: 'Real-Time Voice Agent',
    company: 'NetSol Technologies',
    category: 'enterprise',
    description:
      'Streaming voice agent POC with sub-second latency using LiveKit (WebRTC), Vapi orchestration, Deepgram ASR, and ElevenLabs TTS.',
    stack: ['LiveKit', 'Vapi', 'Deepgram', 'ElevenLabs', 'WebRTC'],
  },
  {
    title: 'NLP Retrieval for BMW & Mercedes',
    company: 'NetSol Technologies',
    category: 'enterprise',
    description:
      'Semantic search and real-time QA over automotive enterprise datasets using MongoDB Atlas Vector Search, Pinecone, AWS Bedrock, and SageMaker.',
    stack: ['MongoDB Atlas', 'Pinecone', 'AWS Bedrock', 'SageMaker', 'NLP'],
  },
  {
    title: 'Document Extraction Pipeline',
    company: 'NetSol Technologies',
    category: 'enterprise',
    description:
      'Production document AI workflow using AWS Textract with custom validation and post-processing for rate chart extraction.',
    stack: ['AWS Textract', 'FastAPI', 'Python', 'Document AI'],
  },
  {
    title: 'OnboardIQ',
    company: 'Codrivity UK',
    category: 'enterprise',
    description:
      'AI-powered candidate screening platform achieving 95% accuracy. Auto-generated interview questions reduced HR prep time by 40%.',
    stack: ['Python', 'Django', 'AWS Lambda', 'NLP'],
  },
  {
    title: 'Secure ML with Homomorphic Encryption',
    category: 'academic',
    description:
      'Final Year Project implementing privacy-preserving ML inference on encrypted data without decryption.',
    stack: ['Python', 'Cryptography', 'Privacy', 'ML'],
  },
  {
    title: 'LangChain CSV Chatbot',
    category: 'personal',
    description:
      'Natural language interface for querying CSV data, enabling non-technical users to extract insights conversationally.',
    stack: ['LangChain', 'OpenAI', 'Python', 'NLP'],
    link: { label: 'GitHub', href: 'https://github.com/tahawar' },
  },
  {
    title: 'Pakistan NA Attendance',
    category: 'personal',
    description:
      'Data analysis of National Assembly attendance records (2018–2022) for civic engagement and voter awareness.',
    stack: ['Python', 'Pandas', 'Data Viz'],
    link: {
      label: 'GitHub',
      href: 'https://github.com/tahawar/attendence-of-members-of-pakistan-s-na',
    },
  },
  {
    title: 'Heart Disease Prediction',
    category: 'personal',
    description:
      'ML classification model for cardiovascular risk prediction using ensemble methods.',
    stack: ['Scikit-learn', 'Python', 'Healthcare'],
    link: {
      label: 'GitHub',
      href: 'https://github.com/tahawar/Project-Predicting-Heart-Disease-with-Classification-Machine-Learning',
    },
  },
];

export const education = [
  {
    degree: 'Bachelor of Science · Computer Science',
    school: 'National University of Computer and Emerging Sciences (FAST-NUCES)',
    location: 'Lahore, Pakistan',
    period: '2019 — 2023',
    note: 'Student Coordinator, Final Year Project lab',
  },
];

export const certifications = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Stanford Online & DeepLearning.AI (Coursera)',
    link: 'https://www.coursera.org/account/accomplishments/specialization/3VKCZEC7XEBZ',
  },
  {
    name: 'Advanced Learning Algorithms',
    issuer: 'Coursera',
  },
  {
    name: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'Stanford Online',
  },
];
