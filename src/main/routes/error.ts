import { Application } from 'express';

export default function (app: Application): void {
  app.get('/error', async (req, res) => {
      res.render('error', {});
  });
}
