import type {NextPage} from 'next'
import {useState} from "react";
import linky from './linky.png'
import Image from 'next/image'

const Home: NextPage = () => {
    const [disabled, setDisabled] = useState(false)

    function onClick() {
        setTimeout(() => setDisabled(false), 2000)
        fetch('/api/hello').then()
        setDisabled(true)
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
            {disabled && <Image src={linky}/>}
        </div>
    )
}

export default Home
