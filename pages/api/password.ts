import {getSessionPassword} from "../../lib/session";
import {NextApiRequest, NextApiResponse} from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const password = await getSessionPassword(req, res)

    if (password) {
        res.json({
            isLoggedIn: true,
            password: password,
        });
    } else {
        res.json({
            isLoggedIn: false,
        });
    }
}

export default handler;
