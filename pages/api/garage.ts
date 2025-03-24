import {Gpio} from 'onoff';
import {ERROR_CREDENTIALS} from "./auth";
import {NextApiRequest, NextApiResponse} from "next";
import {getSessionPassword} from "../../lib/session";

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function toggleGarage() {
    const switchSignal = new Gpio(17, 'out');
    await switchSignal.write(1);
    await sleep(2000);
    await switchSignal.write(0);
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const password = await getSessionPassword(req, res)
    if (password) {
        res.status(200).json({})
        await toggleGarage();
        return;
    }
    res.status(403).json({error: ERROR_CREDENTIALS});
}

export default handler;
