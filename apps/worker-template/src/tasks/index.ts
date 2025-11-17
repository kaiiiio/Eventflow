export interface Task {
  type: string;
  execute(payload: unknown): Promise<unknown>;
}

export class TaskRegistry {
  private tasks: Map<string, Task> = new Map();

  register(task: Task): void {
    this.tasks.set(task.type, task);
  }

  get(type: string): Task | undefined {
    return this.tasks.get(type);
  }
}

