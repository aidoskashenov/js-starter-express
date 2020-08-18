import express from 'express'; // express means middleware

import users from './routes/users';

const app = express();

app.use(express.json());

app.use('/users', users);

app.listen(5000);
