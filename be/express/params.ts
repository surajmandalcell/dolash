import { Request } from 'express';

export const params = (req: Request) => {
  const params = req.params;
  const body = req.body;
  const query = req.query;
  return { ...params, ...body, ...query };
};