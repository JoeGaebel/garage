import type {NextPage} from 'next'

const Home: NextPage = () => {
    function onClick() {
        fetch('/api/hello').then()
    }

    return (
        <div>
            <h1>Linky Garage</h1>
            <button onClick={onClick}>OPEN!</button>
        </div>
    )
}

export default Home
