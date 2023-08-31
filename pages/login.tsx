import {useState} from "react";
import usePassword from "../lib/usePassword";
import axios from "axios";

export default function Login() {
    const { password, mutatePassword } = usePassword({
        redirectTo: "/",
        redirectIfFound: true,
    });

    const [pass, setPassword] = useState("");

    // @ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const axiosResponse = await login(pass);
            mutatePassword(axiosResponse);
        } catch (error) {
            // @ts-ignore
            alert(error.response.data.error);
        }
    };

    const passwordHandler = (event: any) => {
        setPassword(event.target.value);
    }

    return <div>
        {!password ? (<h1>Loading....</h1>) :
                <>{!password.isLoggedIn && <form onSubmit={handleSubmit}>
                        <div className="container">
                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required
                                onChange={passwordHandler}/>

                            <button type="submit">Login</button>
                        </div>
                </form>}</>}
    </div>;
}

function login(password: string) {
    return axios.post(`/api/auth`, { password });
}
