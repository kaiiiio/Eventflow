export interface WorkflowStep {
  id: string;
  type: string;
  config?: Record<string, unknown>;
  next?: string[];
  retry?: RetryConfig;
}

export interface RetryConfig {
  maxAttempts: number;
  delay: number;
}

export interface WorkflowDefinition {
  name: string;
  steps: WorkflowStep[];
}

export interface TaskEvent {
  id: string;
  type: string;
  tenantId: string;
  workflowId: string;
  stepId: string;
  payload: unknown;
  timestamp: number;
}

export interface TaskCompletedEvent extends TaskEvent {
  result: unknown;
}

export interface TaskFailedEvent extends TaskEvent {
  error: string;
}

export interface Tenant {
  id: string;
  name: string;
  config: Record<string, unknown>;
}

