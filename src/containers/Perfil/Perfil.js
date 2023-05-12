import { useState } from "react";
import { useParams } from "react-router-dom"
import SearchBar from '../../components/SearchBar/SearchBar';
import './Perfil.css';
import ItemList from "./ItemList/ItemList";
import '../../_assents/css/style.css';


export default function Perfil ()  {

    const [ userData, setUserData ] = useState('');
    const [ userRepos, setUserRepos ] = useState([]);

    const { id } = useParams();

    const directToNotFound = () => {
        let urlCurrent = window.location.href;
        urlCurrent += "/404";
        return window.location.href = urlCurrent;
    }

    // Read data from Github's API
    fetch(`https://api.github.com/users/${id}`)
    .then(response => response.json())
    .then(data => data.message? directToNotFound() : setUserData(data));

    fetch(`https://api.github.com/users/${id}/repos`)
    .then(response => response.json())
    .then(data => setUserRepos(data));


    return (
        <>
            <div className="container">

                <div id="top-bar">
                    <div>
                        <a href="/">
                            <h1 className="perfil-title">Search d_evs</h1>
                        </a>
                        <SearchBar inputText={userData.name}/>
                    </div>
                </div>

                <div id="developer-information">
                    <header>
                        <ul>
                            <li className="mb-1">
                                <div id="avatar">
                                    <img src={`https://avatars.githubusercontent.com/u/${userData.id}?v=4`}></img>
                                </div>
                                <div>
                                    <h1>{userData.name}</h1>
                                    <p>@{userData.login}</p>
                                </div>
                            </li>
                            <li></li>
                            <li>{userData.bio}</li>
                            <li><i className="icon-users"></i> {userData.followers} seguidores</li>
                            <li><i className="icon-heart"></i> {userData.following} seguindo</li>
                            <li><i className="icon-work-square"></i> {userData.company}</li>
                            <li><i className="icon-pin-location"></i> {userData.location}</li>
                            <li><i className="icon-email"></i> {userData.email == null ? "Não disponível": userData.email}</li>
                            <li>{userData.blog}</li>
                            <li><i className="icon-twitter"></i> @{userData.twitter_username}</li>
                        </ul>
                    </header>
                </div>

                <div id="developer-repos">
                    <main>
                        {
                            userRepos.map((data=>{
                                return (
                                    <ItemList 
                                        name={data.name}
                                        description={data.description}
                                        stars={data.stargazers_count}
                                        update={data.updated_at}
                                    />
                                )
                            }))
                        }
                    </main>
                </div>

            </div>
        </>
    )
}