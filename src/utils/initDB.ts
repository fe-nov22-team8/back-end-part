import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/product';
import { Phone } from '../models/phone';

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const DBURL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

export const dbInit = () => {
  return new Sequelize(DBURL, {
    models: [Product, Phone],
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  });
};
