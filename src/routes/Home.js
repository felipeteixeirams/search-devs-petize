import { useState } from "react";


export default function Home ()  {


    const [username, setUsername ] = useState('');

    const msg = (contentMessage) => {
        const message = document.getElementById('msg');
        message.innerHTML = contentMessage;
    }

    const searchUser = (userName) => {
        const url = `https://api.github.com/users/${userName}`;
        
        fetch(url)
        .then((response) => response.json())
        .then((data) => data.message? msg("Username não encontrado!"): data)
        .catch((error) => console.log(`Error: ${error}`));
    }

    const handleInputChange = (e) =>{
        setUsername(e.target.value);
    }

    const handleButtonClick = () =>{
        searchUser(username);
    }

    return (
        <>
            <h1>Search d_evs</h1>
            <div id="main">
                    <input onChange={handleInputChange} type="text" value={username} />
                    <button onClick={handleButtonClick}>Search</button>
                    <p id="msg"></p>
            </div>
        </>
    )
}