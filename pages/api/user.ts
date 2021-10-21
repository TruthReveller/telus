import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch('https://reqres.in/api/users');
  const data = await response.json(); 
  
  if (!data) {
    return res.status(500);
  }

  return res.status(200).json(data);
}
