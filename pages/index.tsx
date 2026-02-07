import {getSessionPassword} from "../lib/session";
import React, {useState} from "react";
// @ts-ignore
import linky from './linky.png'
import Image from 'next/image'
import {NextApiRequest, NextApiResponse} from "next";

export default function Home() {
    const [disabled, setDisabled] = useState(false)
    const [timedDisabled, setTimedDisabled] = useState(false)

    async function onClick() {
        setTimeout(() => setDisabled(false), 2000)
        const response = await fetch('/api/garage')

        if (response.ok) {
            setDisabled(true)
        } else {
            const json = await response.json();
            alert(json.error)
        }
    }

    async function onTimedClick() {
        setTimedDisabled(true);
        setTimeout(() => setTimedDisabled(false), 2000);
        const response = await fetch('/api/garage-timed', {method: 'POST'});

        if (!response.ok) {
            const json = await response.json();
            alert(json.error);
        }
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <h1 style={{marginBottom: '3rem'}}>Linky Garage</h1>
            <button
                style={{width: '15rem', height: '5rem'}}
                onClick={onClick}
                disabled={disabled}
            >{disabled ? 'Opening...' : 'OPEN!'}</button>
            <button
                style={{width: '15rem', height: '5rem', marginTop: '1rem'}}
                onClick={onTimedClick}
                disabled={timedDisabled}
            >{timedDisabled ? 'Opening...' : 'OPEN FOR 5 MIN'}</button>
            {(disabled || timedDisabled) && <Image alt="linky" src={linky}/>}
        </div>
    )
}

export const getServerSideProps = async function ({req, res}: {req: NextApiRequest, res: NextApiResponse}) {
    const password = await getSessionPassword(req, res);

    if (password === undefined) {
        res.setHeader("location", "/login");
        res.statusCode = 302;
        res.end();
        return {props: {}};
    }

    return {props: {}};
};
