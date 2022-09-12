import type { NextApiRequest, NextApiResponse } from 'next'
import {Gpio} from 'onoff';

type Data = {
  name: string
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const switchSignal = new Gpio(17, 'out');
switchSignal.writeSync(0);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
  const switchSignal = new Gpio(17, 'out');
    await switchSignal.write(1);
    console.warn('ON!!!')
    await sleep(2000);
    console.warn('OFF!!!')
    await switchSignal.write(0);
}
