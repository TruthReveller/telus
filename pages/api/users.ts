import type { NextApiRequest, NextApiResponse } from 'next'
import { fetcher } from '../../utils/utils';

export const getUsers = async () => {
  const {data} = await fetcher('https://reqres.in/api/users');
  return data;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getUsers();

  if (!data) {
    return res.status(500);
  }

  return res.status(200).json(data);
}
