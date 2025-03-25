import {getIronSession, SessionOptions} from 'iron-session';
import type {NextApiRequest, NextApiResponse} from 'next';

type SessionData = {
    password: string;
}

const sessionOptions: SessionOptions = {
    password: process.env.SECRET!,
    cookieName: 'linkygarage',
    cookieOptions: {
        secure: false,
        maxAge: 2147483647, // Approximately 68 years
    },
};

export async function getSessionPassword(req: NextApiRequest, res: NextApiResponse): Promise<string> {
    const session = await getIronSession<SessionData>(req, res, sessionOptions);
    return session.password;
}

export async function saveSession(password: string, req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const session= await getIronSession<SessionData>(req, res, sessionOptions);
    session.password = password;
    await session.save();
}

