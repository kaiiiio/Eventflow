import { NatsClient } from '@eventflow/nats-client';
import { TaskHandler } from '../../worker-template/src/core/task-handler';

async function bootstrap() {
  const natsClient = new NatsClient({
    servers: process.env.NATS_SERVERS || 'nats://localhost:4222'
  });

  await natsClient.connect();

  const taskHandler = new TaskHandler(natsClient);
  await taskHandler.start();

  process.on('SIGTERM', async () => {
    await taskHandler.stop();
    await natsClient.disconnect();
    process.exit(0);
  });
}

bootstrap().catch(console.error);

