import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import './SearchBar.css';
import { styled } from '@mui/material/styles';


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
            .then((data) => data.message? message.innerHTML = "Developer not found!": directToDetails(data.login))
            .catch((error) => {
                var message = document.getElementById('msg');
                message.innerHTML = "Ops, try again later.";
                console.log(error)
            });
        }else{
            var message = document.getElementById('msg');
            message.innerHTML = "Please, check the entered value.";
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


    /**
     * Styles components
     */

    const SearchButton = styled(Button)({
        boxShadow: 'none',
        boxSizing: 'border-box',
        textTransform: 'none',
        fontSize: 16,
        padding: '10px 56px',
        border: '1px solid',
        lineHeight: 1.5,
        borderRadius: '6px',
        backgroundColor: '#8C19D2',
        borderColor: '#8C19D2',
        marginLeft: '2rem',
        fontFamily: [
            'Inter',
            'Arial',
            'sans-serif'
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
      });

    return (
        <>
            <div>
                <div className="search">

                    <TextField
                        id="outlined-basic" 
                        onChange={handleInputChange} 
                        placeholder={props.inputText} 
                        variant="outlined" 
                        size="small"
                        value={username}
                        spellCheck="false"
                        color='secondary'
                        onKeyPress={handleKeyDownEnter}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <SearchButton onClick={handleButtonClick} variant="contained" disableRipple>
                        Search
                    </SearchButton>
                </div>
                <br />
                <p id="msg"></p>
            </div>
        </>
    )
}