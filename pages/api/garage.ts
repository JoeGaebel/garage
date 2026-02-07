import {ERROR_CREDENTIALS} from "./auth";
import {NextApiRequest, NextApiResponse} from "next";
import {getSessionPassword} from "../../lib/session";
import {toggleGarage} from "../../lib/garage";

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
