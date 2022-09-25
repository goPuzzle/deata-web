import { NextApiRequest, NextApiResponse } from 'next';

const healthCheck = (_: NextApiRequest, res: NextApiResponse) => res.status(200).json({});

export default healthCheck;
