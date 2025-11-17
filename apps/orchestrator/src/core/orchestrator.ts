import { NatsClient } from '@eventflow/nats-client';

export class WorkflowOrchestrator {
  private natsClient: NatsClient;

  constructor(natsClient: NatsClient) {
    this.natsClient = natsClient;
  }

  async start(): Promise<void> {
  }

  async stop(): Promise<void> {
  }

  async executeWorkflow(workflowId: string, tenantId: string, payload: unknown): Promise<void> {
  }
}

