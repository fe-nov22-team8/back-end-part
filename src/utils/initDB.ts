import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Product } from '../model/product';
import { Test } from '../model/phone';

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const DBURL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

export const dbInit = () => {
  return new Sequelize(DBURL, {
    models: [Product, Test],
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  });
};
