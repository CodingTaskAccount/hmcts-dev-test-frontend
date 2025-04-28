import { Application } from 'express';

export default function (app: Application): void {
  app.get('/task-deleted', async (req, res) => {
      res.render('task-deleted', {});
  });
}
