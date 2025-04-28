import { Application } from 'express';
//import axios from 'axios';

export default function (app: Application): void {
  app.get('/new-task', async (req, res) => {
    try {
        res.render('new-task');
    } catch (error) {
        console.error('Error making request:', error);
        res.render('home', {});
      }
    });
  }
  