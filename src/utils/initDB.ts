import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Phone } from '../model/products';

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const DBURL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

export const dbInit = () => {
  return new Sequelize(DBURL, {
    models: [Phone],
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  });
};
