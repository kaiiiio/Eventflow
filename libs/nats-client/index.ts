import { connect, NatsConnection, ConnectionOptions } from 'nats';

export interface NatsClientConfig {
  servers: string | string[];
  name?: string;
}

export class NatsClient {
  private connection: NatsConnection | null = null;
  private config: NatsClientConfig;

  constructor(config: NatsClientConfig) {
    this.config = config;
  }

  async connect(): Promise<void> {
    const options: ConnectionOptions = {
      servers: Array.isArray(this.config.servers) 
        ? this.config.servers 
        : [this.config.servers],
      name: this.config.name
    };

    this.connection = await connect(options);
  }

  async disconnect(): Promise<void> {
    if (this.connection) {
      await this.connection.close();
      this.connection = null;
    }
  }

  getConnection(): NatsConnection | null {
    return this.connection;
  }

  isConnected(): boolean {
    return this.connection !== null && !this.connection.isClosed();
  }
}

