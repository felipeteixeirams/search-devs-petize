import { useState } from "react";
import { useParams } from "react-router-dom"


export default function Perfil ()  {

    const [ userData, setUserData ] = useState('');

    const { id } = useParams();

    const directToNotFound = () => {
        let urlCurrent = window.location.href;
        urlCurrent += "/404";
        return window.location.href = urlCurrent;
    }


    fetch(`https://api.github.com/users/${id}`)
    .then(response => response.json())
    .then(data => data.message? directToNotFound() : setUserData(data))

    

    return (
        <>
            <header>
                <h1>{userData.name}</h1>
                <p>@{userData.login}</p>
                <dd>{userData.bio}</dd>
                <p>{userData.followers} seguidores</p>
                <p>{userData.following} seguindo</p>
                <p>{userData.company}</p>
                <p>{userData.location}</p>
                <p>{userData.email == null ? "Não disponível": userData.email}</p>
                <p>{userData.blog}</p>
                <p>@{userData.twitter_username}</p>
            </header>
        </>
    )
}