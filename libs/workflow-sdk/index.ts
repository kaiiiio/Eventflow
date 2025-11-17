import { WorkflowDefinition, WorkflowStep } from '@eventflow/types';

export class WorkflowBuilder {
  private steps: WorkflowStep[] = [];
  private name: string = '';

  setName(name: string): this {
    this.name = name;
    return this;
  }

  addStep(step: WorkflowStep): this {
    this.steps.push(step);
    return this;
  }

  build(): WorkflowDefinition {
    return {
      name: this.name,
      steps: this.steps
    };
  }
}

export class WorkflowExecutor {
  async execute(definition: WorkflowDefinition, context: unknown): Promise<unknown> {
    return {};
  }
}

