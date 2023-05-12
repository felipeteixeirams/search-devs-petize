import { useState } from "react";
import { useParams } from "react-router-dom"
import SearchBar from '../../components/SearchBar/SearchBar';
import './Perfil.css';
import { HeartBrokenOutlined, PeopleOutlineSharp, LocationCityOutlined, LocationOffOutlined, MailOutline, Twitter } from "@mui/icons-material";


export default function Perfil ()  {

    const [ userData, setUserData ] = useState('');
    const [ userRepos, setReposData ] = useState('');

    const { id } = useParams();

    const directToNotFound = () => {
        let urlCurrent = window.location.href;
        urlCurrent += "/404";
        return window.location.href = urlCurrent;
    }

    fetch(`https://api.github.com/users/${id}`)
    .then(response => response.json())
    .then(data => data.message? directToNotFound() : setUserData(data))

    fetch(`https://api.github.com/users/${id}/repos`)
    .then(response => response.json())
    .then(data => setReposData(data))

    return (
        <>
            <div className="container">

                <div id="top-bar">
                    <div>
                        <a href="/">
                            <h1 className="perfil-title">Search d_evs</h1>
                        </a>
                        <SearchBar />
                    </div>
                </div>

                <div id="developer-information">
                    <header>
                        <ul>
                            <li><h1>{userData.name}</h1></li>
                            <li>@{userData.login}</li>
                            <li>{userData.bio}</li>
                            <li><PeopleOutlineSharp/> {userData.followers} seguidores</li>
                            <li><HeartBrokenOutlined/> {userData.following} seguindo</li>
                            <li><LocationCityOutlined/> {userData.company}</li>
                            <li><LocationOffOutlined/> {userData.location}</li>
                            <li><MailOutline/> {userData.email == null ? "Não disponível": userData.email}</li>
                            <li>{userData.blog}</li>
                            <li><Twitter/> @{userData.twitter_username}</li>
                        </ul>
                    </header>
                </div>

                <div id="developer-repos">
                    <main>
                        <ul>
                            {
                                userRepos.forEach(element => {
                                    
                                });
                            }
                        </ul>
                    </main>
                </div>

            </div>
        </>
    )
}