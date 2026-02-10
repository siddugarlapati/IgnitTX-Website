
import { Roadmap, AITool, TechRequest, Project, Workshop } from './types';

export const ROADMAPS: Roadmap[] = [
  {
    id: 'system-architect',
    title: 'System Architect',
    role: 'Designing high-availability, planetary-scale distributed systems.',
    description: 'The pinnacle of engineering mastery: balancing CAP theorem, trade-offs, and scalability.',
    relevance: 'Focuses on architectural patterns, disaster recovery, and global synchronization.',
    steps: [
      { title: 'Foundational Patterns', description: 'Monolithic vs Microservices, Event-driven architecture, and Load Balancing.', tools: ['Nginx', 'HAProxy', 'DNS'] },
      { title: 'Data Consistency', description: 'Understanding ACID vs BASE, Consensus algorithms, and Distributed Locks.', tools: ['Raft', 'Paxos', 'Zookeeper'] },
      { title: 'Scalability & Perf', description: 'Horizontal vs Vertical scaling, Sharding, and Caching strategies.', tools: ['Redis', 'CDN', 'Partitioning'] },
      { title: 'Reliability Engineering', description: 'Chaos engineering, SRE principles, and multi-region failover.', tools: ['Terraform', 'Vault'] }
    ]
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineering',
    role: 'Building production-grade machine learning pipelines and neural systems.',
    description: 'Moving from research notebooks to engineering robust AI-driven applications.',
    relevance: 'Intersection of high-performance compute and statistical modeling.',
    steps: [
      { title: 'Math & Data Core', description: 'Linear Algebra, Statistics, and Exploratory Data Analysis.', tools: ['NumPy', 'Pandas', 'Matplotlib'] },
      { title: 'Machine Learning', description: 'Supervised/Unsupervised learning and Feature Engineering.', tools: ['Scikit-learn', 'XGBoost'] },
      { title: 'Deep Learning', description: 'Neural Network architectures, Backpropagation, and GPU compute.', tools: ['PyTorch', 'TensorFlow'] },
      { title: 'MLOps', description: 'Model versioning, Deployment, and Monitoring at scale.', tools: ['MLflow', 'DVC', 'Kubeflow'] }
    ]
  },
  {
    id: 'llm-eng',
    title: 'LLM Engineering',
    role: 'Developing Generative AI layers and intelligent agentic workflows.',
    description: 'Mastering RAG, Fine-tuning, and Prompt Orchestration.',
    relevance: 'The future of software interaction: Agentic systems and semantic reasoning.',
    steps: [
      { title: 'Prompt Orchestration', description: 'Building multi-agent systems and stateful AI chains.', tools: ['LangChain', 'LangGraph'] },
      { title: 'Vector Retrieval', description: 'Semantic search, Embeddings, and Vector database management.', tools: ['Pinecone', 'Chroma', 'Weaviate'] },
      { title: 'Model Optimization', description: 'Quantization and fine-tuning (PEFT) for specialized tasks.', tools: ['LoRA', 'HuggingFace'] },
      { title: 'Deployment', description: 'GPU-optimized serving and high-concurrency token-stream management.', tools: ['vLLM', 'Ollama'] }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Architecture',
    role: 'Building resilient, high-performance UI systems with atomic precision.',
    description: 'Mastering the modern browser engine and distributed UI state.',
    relevance: 'Performance-first UIs, Server Components, and Edge Runtime optimization.',
    steps: [
      { title: 'Core Internals', description: 'Browser paint cycles, Event Loop, and Modern JS (ES14+).', tools: ['JavaScript', 'PostCSS'] },
      { title: 'Framework Scale', description: 'Component Composition and deep-dive into Reconciliation.', tools: ['React 19', 'Next.js', 'TypeScript'] },
      { title: 'Client Context', description: 'Distributed client state and optimistic UI patterns.', tools: ['Zustand', 'TanStack Query'] },
      { title: 'E2E Excellence', description: 'Automated testing and performance profiling.', tools: ['Playwright', 'Vitest'] }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Systems',
    role: 'Architecting fault-tolerant infrastructure and high-traffic kernels.',
    description: 'From binary protocols to global-scale distributed databases.',
    relevance: 'Practical application of OS, Networking, and Distributed Computing.',
    steps: [
      { title: 'Language Runtime', description: 'High-concurrency languages and low-level Linux POSIX.', tools: ['Go', 'Rust', 'Linux'] },
      { title: 'Persistence Layer', description: 'Relational ACID properties vs NoSQL eventual consistency.', tools: ['PostgreSQL', 'Redis', 'Elastic'] },
      { title: 'Service Comms', description: 'Binary protocols, gRPC, and Message Brokers.', tools: ['gRPC', 'Kafka', 'RabbitMQ'] },
      { title: 'Cloud Infrastructure', description: 'Containers, Orchestration, and Automated Pipelines.', tools: ['Docker', 'Kubernetes'] }
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    role: 'Engineering visual systems and high-fidelity user interactions.',
    description: 'Mastering the bridge between human psychology and digital interfaces.',
    relevance: 'Gestalt principles, Typography systems, and Atomic Design at scale.',
    steps: [
      { title: 'Visual Systems', description: 'Color theory, Typography, and Layout grids for complex apps.', tools: ['Figma', 'Adobe CC'] },
      { title: 'Design Engineering', description: 'Building scalable design libraries and documentation.', tools: ['Storybook', 'Design Tokens'] },
      { title: 'Motion & Flow', description: 'High-fidelity prototyping and animation timing.', tools: ['Framer', 'After Effects'] },
      { title: 'User Validation', description: 'Usability testing, Heatmapping, and Data-driven design.', tools: ['Hotjar', 'Mixpanel'] }
    ]
  },
  {
    id: 'systems-oops',
    title: 'Systems & OOPS',
    role: 'Mastering the core of enterprise software and memory-safe design.',
    description: 'Deep dive into Object Oriented Programming and Low-level optimization.',
    relevance: 'SOLID principles and Design Patterns in large-scale system architecture.',
    steps: [
      { title: 'OOPS Mastery', description: 'Inheritance, Polymorphism, and Advanced Behavioral Patterns.', tools: ['Java', 'C++', 'SOLID'] },
      { title: 'Memory Dynamics', description: 'Stack/Heap allocation and GC internals.', tools: ['Valgrind', 'GDB'] },
      { title: 'Concurrency', description: 'Multi-threading, Mutexes, and Thread Safety.', tools: ['POSIX Threads', 'Sync'] },
      { title: 'Code Refactoring', description: 'Technical debt management and testable architecture.', tools: ['SonarQube', 'Clean Code'] }
    ]
  },
  {
    id: 'data-eng',
    title: 'Data Engineering',
    role: 'Designing data pipelines and high-throughput processing engines.',
    description: 'Mastering ETL/ELT, Big Data, and Lakehouse architectures.',
    relevance: 'Focus on data quality, latency, and massive-scale warehousing.',
    steps: [
      { title: 'Processing Core', description: 'Batch vs Stream processing and distributed compute.', tools: ['Apache Spark', 'Flink', 'Kafka'] },
      { title: 'Data Warehousing', description: 'Columnar storage and MPP databases.', tools: ['Snowflake', 'BigQuery', 'dbt'] },
      { title: 'Orchestration', description: 'DAG management and workflow scheduling.', tools: ['Airflow', 'Dagster'] },
      { title: 'Quality & Governance', description: 'Data observability and schema evolution.', tools: ['Great Expectations', 'Iceberg'] }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    role: 'Defending the digital perimeter and securing the software kernel.',
    description: 'Focus on offensive/defensive security and secure SDLC.',
    relevance: 'Zero-trust networking and application security auditing.',
    steps: [
      { title: 'SecOps Basics', description: 'Network monitoring and traffic analysis.', tools: ['Wireshark', 'Nmap', 'Suricata'] },
      { title: 'App Security', description: 'OWASP Top 10 and automated vulnerability scanning.', tools: ['Burp Suite', 'Snyk'] },
      { title: 'Identity & Access', description: 'AuthN/AuthZ patterns and secrets management.', tools: ['OAuth2', 'JWT', 'Vault'] },
      { title: 'Cloud Security', description: 'Post-quantum crypto and zero-trust architecture.', tools: ['IAM', 'EDR', 'TLS'] }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & SRE',
    role: 'Automating reliability and scaling the developer experience.',
    description: 'The bridge between development and infrastructure operations.',
    relevance: 'Infrastructure-as-Software and Zero-downtime paradigms.',
    steps: [
      { title: 'IaC Patterns', description: 'Declarative resource provisioning.', tools: ['Terraform', 'Pulumi', 'Ansible'] },
      { title: 'CI/CD Flow', description: 'Automated testing and deployment pipelines.', tools: ['GitHub Actions', 'ArgoCD'] },
      { title: 'Monitoring', description: 'Distributed tracing and observability metrics.', tools: ['Prometheus', 'Grafana', 'ELK'] },
      { title: 'Network Engine', description: 'Service mesh and VPC architecture.', tools: ['Istio', 'Envoy'] }
    ]
  }
];

export const AI_TOOLS: AITool[] = [
  {
    id: 'ai-study-offline',
    title: 'AI Study (Local Core)',
    capability: 'Next-gen learning environment that works completely offline using local LLM sharding.',
    outcome: '100% Privacy. Zero Latency.',
    icon: 'Terminal'
  },
  {
    id: 'backlog-booster',
    title: 'Study Booster (Backlogs)',
    capability: 'Intelligent backlog recovery system that synthesizes missing knowledge into 5-minute sprints.',
    outcome: 'Actionable, compressed learning nodes.',
    icon: 'Zap'
  },
  {
    id: 'skill-mastery',
    title: 'Skill Mastery (Code Mentor)',
    capability: 'Direct bridge to high-paying jobs with real-time architectural feedback from a virtual senior mentor.',
    outcome: 'Bridge the seniority gap.',
    icon: 'Command'
  }
];

export const ON_DEMAND_REQUESTS: TechRequest[] = [
  { id: 'req-1', topic: 'LLM Fine-tuning', field: 'AI Engineering', count: 18, type: 'ONLINE', status: 'SYNCING' },
  { id: 'req-2', topic: 'Rust Systems Programming', field: 'Systems Engineering', count: 42, type: 'OFFLINE', status: 'PREPARING_CLUSTER' },
  { id: 'req-3', topic: 'Advanced Kubernetes', field: 'DevOps', count: 8, type: 'ONLINE', status: 'QUEUED' }
];

export const PROJECTS: Project[] = [
  {
    id: 'ignite-core',
    title: 'Ignite Core Kernel',
    category: 'SYSTEMS',
    problem: 'Standardization of cross-platform local LLM execution hooks.',
    stack: ['Rust', 'WebAssembly', 'C++'],
    maintainers: ['@ignitext', '@core_dev']
  },
  {
    id: 'synth-ui',
    title: 'Synthetic UI Library',
    category: 'FRONTEND',
    problem: 'High-performance atomic state visualization for large neural datasets.',
    stack: ['React', 'TypeScript', 'Three.js'],
    maintainers: ['@ui_guru', '@dx_lead']
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'ws-kernel-01',
    title: 'High-Performance Kernel Modules',
    duration: '16 Hours',
    prerequisites: ['C Systems Programming', 'OS Fundamentals'],
    outcome: 'Deploy a custom linux kernel module with memory protection.',
    github: 'https://github.com/ignitext/kernel-workshop'
  },
  {
    id: 'ws-rag-01',
    title: 'Enterprise RAG Orchestration',
    duration: '12 Hours',
    prerequisites: ['Python', 'Vector DB Basics'],
    outcome: 'Production-ready RAG pipeline with semantic caching.',
    github: 'https://github.com/ignitext/rag-workshop'
  }
];
