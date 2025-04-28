import { Application } from 'express';
import axios from 'axios';

export default function (app: Application): void {
  app.get('/show-task/:id', async (req, res) => {
    const id = req.params.id;
    try {

      const response = await axios.get(`http://localhost:4000/retrieveTask/${id}`);
      if (response.status === 200) {
        res.render('show-task', { "task": response.data, isOk: true});
      } else {
        res.render('show-task', { "task": response.data, isOk: false})
      }
    } catch (error) {
      if (error.response?.status === 404) {
        res.render('task-not-found', { "taskId": id });
      } else {
        console.error('API Error: ', error);
        res.render('error', {});
      }
    }
  });
}
