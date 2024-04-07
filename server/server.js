import {usersRouter} from './Routers/usersRouter.js'
import {postsRouter} from './Routers/postsRouter.js'
import {todosRouter} from './Routers/todosRouter.js'
import {commentsRouter} from './Routers/commentsRouter.js'
import { registerRouter } from './Routers/registerRouter.js'
import { logErrors } from "./middleware/logErrors.js";
import express from 'express';
import morgan from 'morgan'; 

import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); 
app.use((req, res, next) => {
    const limit = parseInt(req.query.limit_);
    const page = parseInt(req.query.page_);
    if (limit && !isNaN(limit)) {
      req.query.limit_ = limit;
    } else {
      req.query.limit_ = 10; // Default limit if not specified or invalid
    }
    req.query.page_ = page || 1; // Default page is 1 if not specified
    next();
  });
  
app.use('/users/', usersRouter);
app.use('/posts/', postsRouter);
app.use('/todos/', todosRouter);
app.use('/comments/', commentsRouter);
app.use('/register/', registerRouter);
app.use(logErrors);

app.listen(process.env.PORT, (err) => {
    if (err) console.error(err);
    console.log("Server listening on PORT", process.env.PORT);
});
