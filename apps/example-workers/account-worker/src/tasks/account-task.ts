import { Task } from '../../../worker-template/src/tasks';

export class AccountTask implements Task {
  type = 'account';

  async execute(payload: unknown): Promise<unknown> {
    return {};
  }
}

