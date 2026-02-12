
import { Roadmap, AITool, TechRequest, Project, Workshop } from './types';

export const ROADMAPS: Roadmap[] = [
  {
    id: 'frontend',
    title: 'Frontend Architecture',
    role: 'Building modern, performant user interfaces',
    description: 'Master React, TypeScript, and modern frontend tooling to build production-ready applications.',
    relevance: 'High demand for frontend developers who can build scalable, accessible, and performant UIs.',
    duration: '6-8 months',
    steps: [
      { title: 'HTML, CSS & JavaScript Fundamentals', description: 'Master the core web technologies, DOM manipulation, ES6+ features, and responsive design principles.', tools: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'Grid'] },
      { title: 'React & Component Architecture', description: 'Learn React hooks, component patterns, state management, and building reusable UI components.', tools: ['React', 'TypeScript', 'Vite', 'React Router'] },
      { title: 'State Management & Data Fetching', description: 'Master global state management, API integration, caching strategies, and optimistic updates.', tools: ['Zustand', 'TanStack Query', 'Axios', 'SWR'] },
      { title: 'Styling & UI Libraries', description: 'Learn modern CSS frameworks, component libraries, and design systems for professional UIs.', tools: ['TailwindCSS', 'Shadcn/ui', 'Framer Motion'] }
    ],
    resources: [
      { title: 'React Official Docs', url: 'https://react.dev', description: 'Official React documentation with interactive tutorials' },
      { title: 'JavaScript.info', url: 'https://javascript.info', description: 'Comprehensive JavaScript tutorial from basics to advanced' },
      { title: 'Frontend Mentor', url: 'https://frontendmentor.io', description: 'Real-world frontend challenges to build your portfolio' },
      { title: 'React Patterns', url: 'https://github.com/vasanthk/react-bits', description: 'React patterns, techniques, tips and tricks' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Systems',
    role: 'Building scalable server-side applications',
    description: 'Learn to build robust APIs, databases, and server infrastructure that powers modern applications.',
    relevance: 'Backend engineers are crucial for building the logic and data layer of any application.',
    duration: '8-10 months',
    steps: [
      { title: 'Programming Fundamentals', description: 'Master a backend language, OOP concepts, data structures, and algorithms.', tools: ['Node.js', 'Python', 'TypeScript', 'Git'] },
      { title: 'APIs & Databases', description: 'Build RESTful APIs, work with SQL and NoSQL databases, and implement authentication.', tools: ['Express', 'PostgreSQL', 'MongoDB', 'JWT'] },
      { title: 'Advanced Backend Concepts', description: 'Learn caching, message queues, background jobs, and real-time communication.', tools: ['Redis', 'WebSockets', 'Bull', 'Socket.io'] },
      { title: 'DevOps & Deployment', description: 'Deploy applications, set up CI/CD pipelines, and monitor production systems.', tools: ['Docker', 'GitHub Actions', 'AWS/Vercel'] }
    ],
    resources: [
      { title: 'Node.js Best Practices', url: 'https://github.com/goldbergyoni/nodebestpractices', description: 'Comprehensive Node.js best practices guide' },
      { title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer', description: 'Learn how to design large-scale systems' },
      { title: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com', description: 'Complete PostgreSQL tutorial with examples' },
      { title: 'Backend Roadmap', url: 'https://roadmap.sh/backend', description: 'Interactive backend developer roadmap' }
    ]
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    role: 'Building complete websites from scratch',
    description: 'Learn HTML, CSS, JavaScript, and modern frameworks to build responsive, interactive websites.',
    relevance: 'Web development is the foundation of all online presence. Essential skill for any developer.',
    duration: '5-7 months',
    steps: [
      { title: 'HTML & CSS Mastery', description: 'Learn semantic HTML, CSS layouts, Flexbox, Grid, and responsive design principles.', tools: ['HTML5', 'CSS3', 'Sass', 'Bootstrap'] },
      { title: 'JavaScript Fundamentals', description: 'Master JavaScript basics, DOM manipulation, events, and ES6+ features.', tools: ['JavaScript', 'ES6+', 'DOM API', 'Fetch API'] },
      { title: 'Frontend Frameworks', description: 'Build dynamic web applications with modern JavaScript frameworks.', tools: ['React', 'Vue', 'TypeScript', 'Vite'] },
      { title: 'Backend Integration', description: 'Connect your frontend to APIs, handle authentication, and deploy websites.', tools: ['REST APIs', 'Firebase', 'Vercel', 'Netlify'] }
    ],
    resources: [
      { title: 'MDN Web Docs', url: 'https://developer.mozilla.org', description: 'Comprehensive web development documentation' },
      { title: 'freeCodeCamp', url: 'https://freecodecamp.org', description: 'Free interactive web development curriculum' },
      { title: 'Web.dev by Google', url: 'https://web.dev', description: 'Modern web development best practices' },
      { title: 'CSS Tricks', url: 'https://css-tricks.com', description: 'CSS tutorials and techniques' }
    ]
  },
  {
    id: 'app-dev',
    title: 'App Development',
    role: 'Building mobile applications for iOS and Android',
    description: 'Learn to create native and cross-platform mobile apps that reach millions of users.',
    relevance: 'Mobile apps dominate user engagement. Learn to build apps for the platform everyone uses.',
    duration: '7-10 months',
    steps: [
      { title: 'Mobile UI/UX Basics', description: 'Understand mobile design patterns, navigation, and platform-specific guidelines.', tools: ['Figma', 'Material Design', 'iOS HIG'] },
      { title: 'Cross-Platform Development', description: 'Build apps that work on both iOS and Android with a single codebase.', tools: ['React Native', 'Expo', 'TypeScript'] },
      { title: 'Native Features', description: 'Access device features like camera, GPS, notifications, and local storage.', tools: ['Native Modules', 'AsyncStorage', 'Push Notifications'] },
      { title: 'App Deployment', description: 'Publish your apps to App Store and Google Play Store.', tools: ['Xcode', 'Android Studio', 'App Store Connect', 'Play Console'] }
    ],
    resources: [
      { title: 'React Native Docs', url: 'https://reactnative.dev', description: 'Official React Native documentation' },
      { title: 'Flutter Documentation', url: 'https://flutter.dev', description: 'Google\'s UI toolkit for mobile apps' },
      { title: 'iOS Developer', url: 'https://developer.apple.com', description: 'Apple\'s official iOS development resources' },
      { title: 'Android Developers', url: 'https://developer.android.com', description: 'Google\'s Android development guide' }
    ]
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    role: 'Building complete web applications end-to-end',
    description: 'Master both frontend and backend to build complete, production-ready web applications.',
    relevance: 'Full-stack developers can build entire products independently. Highly valued in startups and companies.',
    duration: '10-14 months',
    steps: [
      { title: 'Frontend Mastery', description: 'Build modern, responsive user interfaces with React and TypeScript.', tools: ['React', 'TypeScript', 'TailwindCSS', 'Next.js'] },
      { title: 'Backend Development', description: 'Create RESTful APIs, handle authentication, and manage databases.', tools: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'] },
      { title: 'Full-Stack Integration', description: 'Connect frontend and backend, handle state management, and implement real-time features.', tools: ['tRPC', 'WebSockets', 'Redis', 'JWT'] },
      { title: 'Deployment & DevOps', description: 'Deploy full-stack applications with CI/CD, monitoring, and scaling.', tools: ['Docker', 'Vercel', 'AWS', 'GitHub Actions'] }
    ],
    resources: [
      { title: 'Full Stack Open', url: 'https://fullstackopen.com', description: 'Free full-stack course by University of Helsinki' },
      { title: 'The Odin Project', url: 'https://theodinproject.com', description: 'Free full-stack curriculum' },
      { title: 'Next.js Learn', url: 'https://nextjs.org/learn', description: 'Official Next.js tutorial' },
      { title: 'Full Stack Roadmap', url: 'https://roadmap.sh/full-stack', description: 'Complete full-stack developer roadmap' }
    ]
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    role: 'Creating interactive games and experiences',
    description: 'Learn game design, programming, and engines to build 2D and 3D games.',
    relevance: 'Gaming industry is booming. Learn to create engaging interactive experiences.',
    duration: '12-16 months',
    steps: [
      { title: 'Game Design Fundamentals', description: 'Learn game mechanics, level design, and player psychology.', tools: ['Game Design', 'Prototyping', 'Balancing'] },
      { title: 'Programming for Games', description: 'Master C# or C++ for game development and understand game loops.', tools: ['C#', 'C++', 'Game Physics', 'Algorithms'] },
      { title: 'Game Engines', description: 'Build games using industry-standard engines like Unity or Unreal.', tools: ['Unity', 'Unreal Engine', 'Godot'] },
      { title: 'Graphics & Audio', description: 'Implement graphics, animations, sound effects, and music in your games.', tools: ['Shaders', 'Animation', 'Audio Middleware', 'Particle Systems'] }
    ],
    resources: [
      { title: 'Unity Learn', url: 'https://learn.unity.com', description: 'Official Unity tutorials and courses' },
      { title: 'Unreal Engine Docs', url: 'https://docs.unrealengine.com', description: 'Unreal Engine documentation' },
      { title: 'Game Dev Beginner', url: 'https://gamedevbeginner.com', description: 'Beginner-friendly game development tutorials' },
      { title: 'Brackeys YouTube', url: 'https://youtube.com/@Brackeys', description: 'Popular game development tutorials' }
    ]
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineering',
    role: 'Building AI-powered applications',
    description: 'Learn machine learning, deep learning, and how to integrate AI models into production applications.',
    relevance: 'AI is transforming every industry. Learn to build intelligent systems that solve real problems.',
    duration: '10-12 months',
    steps: [
      { title: 'Python & Math Foundations', description: 'Master Python, linear algebra, statistics, and probability for ML.', tools: ['Python', 'NumPy', 'Pandas', 'Matplotlib'] },
      { title: 'Machine Learning Basics', description: 'Learn supervised and unsupervised learning, model evaluation, and feature engineering.', tools: ['Scikit-learn', 'XGBoost', 'Jupyter'] },
      { title: 'Deep Learning', description: 'Build neural networks, CNNs, RNNs, and work with frameworks like PyTorch.', tools: ['PyTorch', 'TensorFlow', 'Keras', 'CUDA'] },
      { title: 'MLOps & Deployment', description: 'Deploy ML models, set up monitoring, and build production ML pipelines.', tools: ['FastAPI', 'MLflow', 'Docker', 'AWS SageMaker'] }
    ],
    resources: [
      { title: 'Fast.ai Course', url: 'https://course.fast.ai', description: 'Practical deep learning for coders' },
      { title: 'ML Course by Andrew Ng', url: 'https://www.coursera.org/learn/machine-learning', description: 'Classic machine learning course' },
      { title: 'Papers with Code', url: 'https://paperswithcode.com', description: 'Latest ML papers with implementation code' },
      { title: 'Kaggle', url: 'https://kaggle.com', description: 'Practice ML with real datasets and competitions' }
    ]
  },
  {
    id: 'llm-eng',
    title: 'LLM Engineering',
    role: 'Building applications with Large Language Models',
    description: 'Master prompt engineering, RAG systems, and building AI agents with LLMs.',
    relevance: 'LLMs are revolutionizing software. Learn to build the next generation of AI applications.',
    duration: '6-9 months',
    steps: [
      { title: 'LLM Fundamentals', description: 'Understand how LLMs work, prompt engineering, and API integration.', tools: ['OpenAI API', 'Anthropic', 'Gemini', 'Ollama'] },
      { title: 'RAG Systems', description: 'Build Retrieval Augmented Generation systems with vector databases.', tools: ['LangChain', 'Pinecone', 'Chroma', 'FAISS'] },
      { title: 'AI Agents & Tools', description: 'Create autonomous agents that can use tools and make decisions.', tools: ['LangGraph', 'AutoGPT', 'Function Calling'] },
      { title: 'Fine-tuning & Deployment', description: 'Fine-tune models for specific tasks and deploy them efficiently.', tools: ['LoRA', 'vLLM', 'HuggingFace', 'Modal'] }
    ],
    resources: [
      { title: 'LangChain Docs', url: 'https://python.langchain.com', description: 'Official LangChain documentation' },
      { title: 'Prompt Engineering Guide', url: 'https://www.promptingguide.ai', description: 'Comprehensive prompt engineering guide' },
      { title: 'OpenAI Cookbook', url: 'https://github.com/openai/openai-cookbook', description: 'Examples and guides for OpenAI API' },
      { title: 'LLM University', url: 'https://docs.cohere.com/docs/llmu', description: 'Learn about LLMs from Cohere' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & SRE',
    role: 'Automating infrastructure and deployments',
    description: 'Learn to build CI/CD pipelines, manage cloud infrastructure, and ensure system reliability.',
    relevance: 'DevOps engineers bridge development and operations, crucial for modern software delivery.',
    duration: '7-9 months',
    steps: [
      { title: 'Linux & Networking', description: 'Master Linux command line, shell scripting, and networking fundamentals.', tools: ['Linux', 'Bash', 'SSH', 'Networking'] },
      { title: 'Containers & Orchestration', description: 'Learn Docker, Kubernetes, and container orchestration patterns.', tools: ['Docker', 'Kubernetes', 'Docker Compose'] },
      { title: 'CI/CD & Automation', description: 'Build automated pipelines for testing, building, and deploying applications.', tools: ['GitHub Actions', 'Jenkins', 'ArgoCD'] },
      { title: 'Cloud & Monitoring', description: 'Deploy to cloud platforms and set up monitoring and logging.', tools: ['AWS', 'Terraform', 'Prometheus', 'Grafana'] }
    ],
    resources: [
      { title: 'DevOps Roadmap', url: 'https://roadmap.sh/devops', description: 'Complete DevOps learning path' },
      { title: 'Kubernetes Docs', url: 'https://kubernetes.io/docs', description: 'Official Kubernetes documentation' },
      { title: 'AWS Free Tier', url: 'https://aws.amazon.com/free', description: 'Practice with AWS free tier' },
      { title: 'DevOps Exercises', url: 'https://github.com/bregman-arie/devops-exercises', description: 'DevOps interview questions and exercises' }
    ]
  },
  {
    id: 'system-architect',
    title: 'System Design',
    role: 'Designing scalable distributed systems',
    description: 'Learn to design systems that can handle millions of users and petabytes of data.',
    relevance: 'System design skills are essential for senior engineering roles and technical interviews.',
    duration: '12-15 months',
    steps: [
      { title: 'Fundamentals', description: 'Learn about scalability, reliability, availability, and performance.', tools: ['CAP Theorem', 'Load Balancing', 'Caching'] },
      { title: 'Database Design', description: 'Master database sharding, replication, and choosing the right database.', tools: ['SQL', 'NoSQL', 'Redis', 'Elasticsearch'] },
      { title: 'Distributed Systems', description: 'Learn about microservices, message queues, and event-driven architecture.', tools: ['Kafka', 'RabbitMQ', 'gRPC', 'REST'] },
      { title: 'Advanced Patterns', description: 'Study real-world system designs and architectural patterns.', tools: ['CDN', 'API Gateway', 'Service Mesh'] }
    ],
    resources: [
      { title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer', description: 'Learn how to design large-scale systems' },
      { title: 'ByteByteGo', url: 'https://bytebytego.com', description: 'System design interview preparation' },
      { title: 'Designing Data-Intensive Applications', url: 'https://dataintensive.net', description: 'The bible of distributed systems' },
      { title: 'System Design Interview', url: 'https://github.com/checkcheckzz/system-design-interview', description: 'System design interview questions' }
    ]
  }
];

export const AI_TOOLS: AITool[] = [
  {
    id: 'backlog-buster',
    title: 'Backlog Buster AI',
    capability: 'AI-powered personalized study plans to help students clear backlogs efficiently. Analyzes your weak areas and creates targeted learning paths.',
    outcome: 'Clear your backlogs faster and smarter.',
    icon: 'Terminal'
  },
  {
    id: 'concept-simplifier',
    title: 'Concept Simplifier',
    capability: 'Break down complex subjects into easy-to-understand modules. Get explanations tailored to your learning pace and style.',
    outcome: 'Understand difficult topics in minutes.',
    icon: 'Zap'
  },
  {
    id: 'exam-prep-ai',
    title: 'Exam Prep Assistant',
    capability: 'Generate practice questions, mock tests, and revision notes based on your syllabus. Track your progress and identify areas needing more focus.',
    outcome: 'Ace your exams with confidence.',
    icon: 'Command'
  },
  {
    id: 'doubt-solver',
    title: '24/7 Doubt Solver',
    capability: 'Get instant answers to your academic doubts. Works offline with local AI models for complete privacy and zero latency.',
    outcome: 'Never get stuck on a problem again.',
    icon: 'Lightbulb'
  }
];

export const ON_DEMAND_REQUESTS: TechRequest[] = [];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'DevFlow - CI/CD Pipeline Orchestrator',
    category: 'DEVOPS',
    problem: 'Simplified multi-cloud deployment automation with GitOps principles.',
    stack: ['Go', 'Kubernetes', 'ArgoCD', 'Terraform'],
    maintainers: ['@aditya_devops', '@meera_cloud']
  },
  {
    id: 'project-2',
    title: 'CodeMentor AI - Pair Programming Assistant',
    category: 'AI',
    problem: 'Context-aware code review and refactoring suggestions using local LLMs.',
    stack: ['Python', 'FastAPI', 'LangChain', 'Ollama'],
    maintainers: ['@rohan_ai', '@kavya_ml']
  },
  {
    id: 'project-3',
    title: 'ReactFlow Studio - Visual Component Builder',
    category: 'FRONTEND',
    problem: 'Drag-and-drop React component builder with real-time code generation.',
    stack: ['React', 'TypeScript', 'Zustand', 'TailwindCSS'],
    maintainers: ['@priya_frontend', '@vikram_ui']
  },
  {
    id: 'project-4',
    title: 'DataSync - Real-time ETL Framework',
    category: 'DATA',
    problem: 'Stream processing framework for real-time data transformation and loading.',
    stack: ['Apache Flink', 'Kafka', 'PostgreSQL', 'Redis'],
    maintainers: ['@anjali_data', '@suresh_eng']
  },
  {
    id: 'project-5',
    title: 'SecureAPI Gateway',
    category: 'BACKEND',
    problem: 'High-performance API gateway with built-in rate limiting and auth.',
    stack: ['Rust', 'Redis', 'PostgreSQL', 'JWT'],
    maintainers: ['@karthik_backend', '@divya_security']
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'ws-fullstack-01',
    title: 'Full-Stack Development Bootcamp',
    duration: '40 Hours',
    prerequisites: ['JavaScript Basics', 'HTML/CSS', 'Git'],
    outcome: 'Build and deploy a production-ready MERN stack application with authentication.',
    github: 'https://github.com/ignitext/fullstack-bootcamp'
  },
  {
    id: 'ws-docker-k8s',
    title: 'Docker & Kubernetes Mastery',
    duration: '24 Hours',
    prerequisites: ['Linux Basics', 'Networking Fundamentals'],
    outcome: 'Deploy microservices on Kubernetes with monitoring and auto-scaling.',
    github: 'https://github.com/ignitext/docker-k8s-workshop'
  },
  {
    id: 'ws-ml-production',
    title: 'ML Model Deployment Pipeline',
    duration: '20 Hours',
    prerequisites: ['Python', 'Machine Learning Basics', 'Docker'],
    outcome: 'Deploy ML models with FastAPI, monitoring, and CI/CD automation.',
    github: 'https://github.com/ignitext/ml-deployment'
  },
  {
    id: 'ws-system-design',
    title: 'System Design for Interviews',
    duration: '16 Hours',
    prerequisites: ['Data Structures', 'Database Basics', 'API Design'],
    outcome: 'Master scalable system design patterns for FAANG interviews.',
    github: 'https://github.com/ignitext/system-design-workshop'
  },
  {
    id: 'ws-react-advanced',
    title: 'Advanced React Patterns',
    duration: '18 Hours',
    prerequisites: ['React Fundamentals', 'JavaScript ES6+', 'TypeScript'],
    outcome: 'Build performant React apps with advanced patterns and optimization.',
    github: 'https://github.com/ignitext/react-advanced'
  },
  {
    id: 'ws-blockchain',
    title: 'Blockchain & Smart Contracts',
    duration: '28 Hours',
    prerequisites: ['JavaScript', 'Solidity Basics', 'Web3 Concepts'],
    outcome: 'Develop and deploy DApps on Ethereum with Hardhat and React.',
    github: 'https://github.com/ignitext/blockchain-workshop'
  }
];

// Additional development tracks added below
