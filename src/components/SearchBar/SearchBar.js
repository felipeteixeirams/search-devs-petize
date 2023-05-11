import { useState } from "react";

export default function SearchBar () {

    const [username, setUsername ] = useState('');
    const message = document.getElementById('msg');
    
    const directToDetails = (userName) => {
        let urlCurrent = window.location.href;
        urlCurrent = urlCurrent + "perfil/" + userName;
        return window.location.href = urlCurrent;
    }

    const searchUser = (userName) => {
        const url = `https://api.github.com/users/${userName}`;
        
        fetch(url)
        .then((response) => response.json())
        .then((data) => data.message? message.innerHTML = "Username não encontrado!": directToDetails(data.login))
        .catch((error) => {
            message.innerHTML = "Ops, tente novamente mais tarde.";
            console.log(error)
        });
    }

    const handleInputChange = (e) =>{
        setUsername(e.target.value);
    }

    const handleButtonClick = () =>{
        searchUser(username);
    }

    return (
        <>
            <input onChange={handleInputChange} type="text" value={username} />
            <button onClick={handleButtonClick}>Search</button>
            <p id="msg"></p>
        </>
    )
}