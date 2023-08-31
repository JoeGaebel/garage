import {Gpio} from 'onoff';
import withSession from "../../lib/withSession";
import {ERROR_CREDENTIALS} from "./auth";

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default withSession(handler);

async function toggleGarage() {
    const switchSignal = new Gpio(17, 'out');
    await switchSignal.write(1);
    await sleep(2000);
    await switchSignal.write(0);
}

async function handler(req: any, res: any) {
    const password = req.session.get("password");
    if (password) {
        res.status(200).json({})
        await toggleGarage();
        return;
    }

    res.status(403).json({error: ERROR_CREDENTIALS});
}
