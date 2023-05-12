import { useState } from "react";
import { useParams } from "react-router-dom"
import SearchBar from '../../components/SearchBar/SearchBar';
import './Perfil.css';
import PeopleOutlineSharp from '@mui/icons-material/PeopleOutlineSharp';


export default function Perfil ()  {

    const [ userData, setUserData ] = useState('');

    const { id } = useParams();

    const directToNotFound = () => {
        let urlCurrent = window.location.href;
        urlCurrent += "/404";
        return window.location.href = urlCurrent;
    }


    try{
        fetch(`https://api.github.com/users/${id}`)
        .then(response => response.json())
        .then(data => data.message? directToNotFound() : setUserData(data))
    }catch(err){
        directToNotFound();
        console.log(`Erro: ${err}`);
    }

    //console.log(userData);

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
                            <li><h1>Nome{userData.name}</h1></li>
                            <li>@login{userData.login}</li>
                            <li>Biografia{userData.bio}</li>
                            <li><PeopleOutlineSharp/>{userData.followers} seguidores</li>
                            <li>{userData.following} seguindo</li>
                            <li>compania{userData.company}</li>
                            <li>cidade{userData.location}</li>
                            <li>email{userData.email == null ? "Não disponível": userData.email}</li>
                            <li>blog{userData.blog}</li>
                            <li>@{userData.twitter_username}</li>
                        </ul>
                    </header>
                </div>

                <div id="developer-repos">
                    <main>
                        { /*repositórios*/ }
                    </main>
                </div>

            </div>
        </>
    )
}