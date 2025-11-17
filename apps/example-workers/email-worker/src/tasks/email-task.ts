import { Task } from '../../../worker-template/src/tasks';

export class EmailTask implements Task {
  type = 'email';

  async execute(payload: unknown): Promise<unknown> {
    return {};
  }
}

