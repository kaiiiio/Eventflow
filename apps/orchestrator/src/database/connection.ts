export class DatabaseConnection {
  async connect(): Promise<void> {
  }

  async disconnect(): Promise<void> {
  }

  async query(sql: string, params: unknown[]): Promise<unknown> {
    return [];
  }
}

