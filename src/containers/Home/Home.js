import SearchBar from "../../components/SearchBar/SearchBar";
import './Home.css';


export default function Home ()  {

    return (
        <>
            <div className="home">
                <div>
                    <h1 className="home-title">Search d_evs</h1>
                    <SearchBar inputText="Search" />
                </div>
            </div>
        </>
    )
}