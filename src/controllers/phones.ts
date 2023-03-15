import { getAll } from '../services/phones'
import { type Request, type Response } from 'express'

export const getAllPhones = (req: Request, res: Response): void => {
  const phones = getAll()

  res.send(phones)
}
