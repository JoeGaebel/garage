import * as bcrypt from "bcrypt-ts";
import {saveSession} from "../../lib/session";
import {NextApiRequest, NextApiResponse} from "next";

export const ERROR_CREDENTIALS = "Invalid password";
// @ts-ignore
async function handler(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method!.toLowerCase();
    const { password } = req.body;

    if (method !== "post") {
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    try {
        const isPasswordValid = await validatePassword(password);

        if (isPasswordValid) {
            await saveSession(password, req, res);
            res.status(200).json({password});
            return;
        }
    } catch (error) {
        console.log(error);
    }

    res.status(403).json({error: ERROR_CREDENTIALS});
}

export default handler;

async function validatePassword(password: string): Promise<boolean> {
    const expectedHash = await bcrypt.hash(process.env.PASSWORD!, 1);
    return await bcrypt.compare(password, expectedHash);
}