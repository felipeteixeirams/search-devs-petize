import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import './SearchBar.css';


export default function SearchBar (props) {

    const [username, setUsername ] = useState('');
    
    const directToDetails = (userName) => {
        let urlCurrent = window.location.pathname;
        urlCurrent = `/perfil/${userName}`;
        return window.location.href = urlCurrent;
    }

    const searchUser = (userName) => {

        if(userName !== ""){
            const url = `https://api.github.com/users/${userName}`;
            
            fetch(url)
            .then((response) => response.json())
            .then((data) => data.message? message.innerHTML = "Username não encontrado!": directToDetails(data.login))
            .catch((error) => {
                var message = document.getElementById('msg');
                message.innerHTML = "Ops, tente novamente mais tarde.";
                console.log(error)
            });
        }else{
            var message = document.getElementById('msg');
            message.innerHTML = "Por favor, verifique o valor informado.";
        }
    }

    const handleInputChange = (e) =>{
        setUsername(e.target.value);
    }

    const handleKeyDownEnter = (e) => {
        console.log(e);
        if(e.key === "Enter"){
            handleButtonClick();
        }
    }

    const handleButtonClick = () =>{
        searchUser(username);
    }

    return (
        <>
            <div>
                <div className="search">
                    <TextField 
                        id="outlined-basic"     
                        onChange={handleInputChange} 
                        placeholder={props.inputText} 
                        variant="outlined" 
                        value={username}
                        spellCheck="false"
                        onKeyPress={handleKeyDownEnter}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Button 
                        className="btn-search"
                        variant="contained"
                        onClick={handleButtonClick}
                        color="secondary"
                        size="large"
                        >
                        
                        Search
                    </Button>
                </div>
                <br />
                <p id="msg"></p>
            </div>
        </>
    )
}