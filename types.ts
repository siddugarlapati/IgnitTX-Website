
export interface RoadmapStep {
  title: string;
  description: string;
  tools: string[];
}

export interface Roadmap {
  id: string;
  title: string;
  role: string;
  description: string;
  relevance: string;
  steps: RoadmapStep[];
}

export interface TechRequest {
  id: string;
  topic: string;
  field: string;
  count: number;
  type: 'ONLINE' | 'OFFLINE';
  status: 'SYNCING' | 'PREPARING_CLUSTER' | 'QUEUED';
  initiator?: string;
}

export interface AITool {
  id: string;
  title: string;
  capability: string;
  outcome: string;
  icon: string;
}

export interface Workshop {
  id: string;
  title: string;
  duration: string;
  prerequisites: string[];
  outcome: string;
  github: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  stack: string[];
  maintainers: string[];
}
