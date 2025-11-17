import { Task } from '../../../worker-template/src/tasks';

export class PdfTask implements Task {
  type = 'pdf';

  async execute(payload: unknown): Promise<unknown> {
    return {};
  }
}

