const input = document.getElementById('input-search');

async function searchUser() {
    const response = await fetch(`https://api.github.com/users/${input.value}`);
    const jsonData = await response.json();
    console.log(jsonData);
}

export default function Home ()  {
    return (
        <>
            <h1>Search d_evs</h1>
            <p><input type="text" id="input-search" />
            <button onClick={searchUser}>Search</button></p>
        </>
    )
}