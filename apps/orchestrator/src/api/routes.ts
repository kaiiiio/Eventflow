import { Router } from 'express';

export function createRoutes(): Router {
  const router = Router();
  
  router.post('/workflows/:workflowId/execute', async (req, res) => {
    res.status(501).json({ error: 'Not implemented' });
  });
  
  return router;
}

