import { Application } from 'express';

export default function (app: Application): void {
  app.get('/create-task', async (req, res) => {
      res.render('create-task', {});
  });
}
