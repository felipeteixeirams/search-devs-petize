import { useParams } from "react-router-dom"


export default function Perfil ()  {
    const { id } = useParams();
    return (
        <>
            <p>Olá{id}</p>
        </>
    )
}