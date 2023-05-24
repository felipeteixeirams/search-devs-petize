import { useState } from "react";
import { useParams } from "react-router-dom"
import { Stack, Avatar } from "@mui/material";
import SearchBar from '../../components/SearchBar/SearchBar';
import ItemList from "./ItemList/ItemList";
import './Perfil.css';
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

    // Handling repository last update date
    const lastUpdateInDays = (reposDate) => {
        var lastReposUpdate = new Date(reposDate);
        var today = new Date();
        var dateDifference = today - lastReposUpdate;
        dateDifference /= 1000;
        dateDifference /= 60;
        dateDifference /= 60;
        dateDifference /= 24;
        return dateDifference.toFixed();
    }

    // Read data from Github's API
    fetch(`https://api.github.com/users/${id}`)
    .then(response => response.json())
    .then(data => data.message? directToNotFound() : setUserData(data));

    fetch(`https://api.github.com/users/${id}/repos`)
    .then(response => response.json())
    .then(data => setUserRepos(data));

    // Sorting the list by 'stargazers.count' or Stars
    const userReposOrder = userRepos.sort((a,b) => b.stargazers_count - a.stargazers_count)

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
                                <Stack direction="row" spacing={2}>
                                    <Avatar
                                        alt="Developer's avatar"
                                        src={`https://avatars.githubusercontent.com/u/${userData.id}?v=4`}
                                        sx={{ width: 48, height: 48 }}
                                    />    
                                </Stack>
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
                            userReposOrder.map((data=>{
                                return (
                                    <ItemList 
                                        name={data.name}
                                        description={data.description}
                                        stars={data.stargazers_count}
                                        update={lastUpdateInDays(data.updated_at)}
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