import * as bcrypt from "bcrypt-ts";
import withSession from "../../lib/withSession";

export const ERROR_CREDENTIALS = "Invalid password";
// @ts-ignore
async function handler(req, res) {
    const method = req.method.toLowerCase();
    const { password } = req.body;

    if (method !== "post") {
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    try {
        const isSessionValid = await validateSession(password);

        if (isSessionValid) {
            await saveSession(password, req);
            res.status(200).json({password});
            return;
        }
    } catch (error) {
        console.log(error);
    }

    res.status(403).json({error: ERROR_CREDENTIALS});
}

export default withSession(handler);

async function saveSession(password: string, request: any): Promise<void> {
    request.session.set("password", password);
    await request.session.save();
}

async function validateSession(password: string): Promise<boolean> {
    const expectedHash = await bcrypt.hash(process.env.PASSWORD!, 1);
    return await bcrypt.compare(password, expectedHash);
}