import express from 'express';
import DBConnection from './database/Db.js';
import crudRouter from './router/crud.router.js';

const app = express()
const port =process.env.PORT ||  3000
DBConnection();

app.use(express.json());
app.use("/api/user/",crudRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
