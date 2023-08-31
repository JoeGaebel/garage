import withSession from "../../lib/withSession";

async function handler(req: any, res: any) {
    const password = req.session.get("password");

    if (password) {
        res.json({
            isLoggedIn: true,
            ...password,
        });
    } else {
        res.json({
            isLoggedIn: false,
        });
    }
}

export default withSession(handler);
