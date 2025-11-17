export class WorkflowRegistry {
  private workflows: Map<string, unknown> = new Map();

  register(name: string, definition: unknown): void {
    this.workflows.set(name, definition);
  }

  get(name: string): unknown | undefined {
    return this.workflows.get(name);
  }

  list(): string[] {
    return Array.from(this.workflows.keys());
  }
}

