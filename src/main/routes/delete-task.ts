import { Application } from 'express';
import axios from 'axios';

export default function (app: Application): void {
  app.get('/delete-task/:id', async (req, res) => {
    const id = req.params.id;
    try {

      const response = await axios.get(`http://localhost:4000/retrieveTask/${id}`);
      if (response.status === 200) {
        res.render('delete-task', { "task": response.data, isOk: true});
      } else {
        res.render('delete-task', { "task": response.data, isOk: false})
      }
    } catch (error) {
      console.error('Error making request:', error);
      if (error.response?.status === 404) {
        res.render('delete-task', { "task": null, isOk: false, isNotFound: true});
      } else {
      res.render('error', {});
      }
    }
  });
}
