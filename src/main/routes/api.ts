import { Application } from 'express';
import axios from 'axios';

export default function (app: Application): void {
  app.get('/api/delete-task/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const response = await axios.delete(`http://localhost:4000/delete/${id}`);
      
      if (response.status === 200) {
        res.render('task-deleted', { taskId: response.data, isOk: true });
      } else {
        res.render('error');
      }
    } catch (error) {
      console.error('API Error:', error);
      res.render('error');
    }
  });

  app.post('/api/update-status/:id', async (req, res) => {
    const id = req.params.id;
    const newStatus = req.body.newStatus;

    try {
      const response = await axios.patch(`http://localhost:4000/update/${id}?status=${newStatus}`, {
        status: newStatus
      });
      
      if (response.status === 200) {
        res.redirect(`/show-task/${id}`);
      } else {
        res.redirect('/error');
      }
    } catch (error) {
      console.error('API Error:', error);
      res.redirect('/error');
    }
  });


  app.post('/api/create-task', async (req, res) => {
    const title = req.body.title;
    const caseNumber = req.body.caseNumber;
    const description = req.body.description;
    const status = req.body.status;

    // Correct field names
    const day = req.body['deadline-day'];
    const month = req.body['deadline-month'];
    const year = req.body['deadline-year'];

    const paddedMonth = month.padStart(2, '0');
    const paddedDay = day.padStart(2, '0');

    const deadline = `${year}-${paddedMonth}-${paddedDay}T00:00:00`;

    try {
        const response = await axios.post(`http://localhost:4000/create`, {
            title: title,
            caseNumber: caseNumber,
            description: description,
            status: status,
            dueDateTime: deadline
        });

        if (response.status === 200) {
            const id = response.data.id;
            res.redirect(`/show-task/${id}`);
        } else {
            res.redirect('/error');
        }
    } catch (error) {
        console.error('API Error:', error);
        res.redirect('/error');
    }
});
}