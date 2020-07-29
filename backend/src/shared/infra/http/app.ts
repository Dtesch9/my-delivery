import 'reflect-metadata';

import express, { Express, Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';

import AppError from '@shared/error/AppError';
import createConnection from '@shared/infra/typeorm';

import routes from './routes';

import '@shared/container';

createConnection();

class App {
  public app: Express;

  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
    this.handlerExaption();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes() {
    this.app.use(routes);
    this.app.use(errors());
  }

  private handlerExaption() {
    this.app.use(
      (err: Error, request: Request, response: Response, _: NextFunction) => {
        if (err instanceof AppError) {
          return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
          });
        }

        return response.status(500).json({
          status: 'error',
          message: 'Internal server error',
        });
      },
    );
  }
}

export default new App().app;
