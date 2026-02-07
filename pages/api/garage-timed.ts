import {ERROR_CREDENTIALS} from "./auth";
import {NextApiRequest, NextApiResponse} from "next";
import {getSessionPassword} from "../../lib/session";
import {toggleGarage} from "../../lib/garage";

const FIVE_MINUTES = 5 * 60 * 1000;

let closeTimer: ReturnType<typeof setTimeout> | null = null;

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const password = await getSessionPassword(req, res)
    if (!password) {
        return res.status(403).json({error: ERROR_CREDENTIALS});
    }

    // Cancel any existing timer
    if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
    }

    res.status(200).json({});

    // Open the garage
    await toggleGarage();

    // Schedule close after 5 minutes
    closeTimer = setTimeout(async () => {
        await toggleGarage();
        closeTimer = null;
    }, FIVE_MINUTES);
}

export default handler;
