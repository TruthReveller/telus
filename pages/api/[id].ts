import type { NextApiRequest, NextApiResponse } from 'next'
import type {User} from '../../types'
import { fetcher } from '../../utils/utils';


export const getUser = async (pid:string|string[]):Promise<User> => {
    const {data} = await fetcher(`https://reqres.in/api/users/${pid}`);
    return data;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { pid } = req.query
  console.log('pages/api/[id].js', req.query);
const data = getUser(pid);

  if (!data) {
    return res.status(500);
  }

  return res.status(200).json(data);
}
