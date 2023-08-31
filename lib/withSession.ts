import {Handler, withIronSession} from "next-iron-session";

export default function withSession(handler: Handler<any, any>) {
    return withIronSession(handler, {
        password: process.env.SECRET!,
        cookieName: "linkygarage",
        cookieOptions: {
            maxAge: 2147483647,
            secure: process.env.NODE_ENV === "production",
        },
    });
}
