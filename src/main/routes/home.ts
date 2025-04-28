import { Application } from 'express';
import axios from 'axios';

export default function (app: Application): void {
  app.get('/', async (req, res) => {
    try {
      // An example of connecting to the backend (a starting point)
      const response = await axios.get('http://localhost:4000/retrieveTask/1');
      if (response.status === 200) {
        res.render('home', { "example": response.data, isFound: true });
      } else {
        res.render('home', { "example": response.data, isFound: false})
      }
    } catch (error) {
      console.error('Error making request:', error);
      res.render('home', {});
    }
  });
}
