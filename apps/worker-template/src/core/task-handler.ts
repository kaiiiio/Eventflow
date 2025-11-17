import { NatsClient } from '@eventflow/nats-client';

export class TaskHandler {
  private natsClient: NatsClient;

  constructor(natsClient: NatsClient) {
    this.natsClient = natsClient;
  }

  async start(): Promise<void> {
  }

  async stop(): Promise<void> {
  }

  async handleTask(taskType: string, payload: unknown): Promise<unknown> {
    return {};
  }
}

