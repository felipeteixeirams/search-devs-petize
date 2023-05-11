
export default function NotFound (props)  {
    return (
        <>
            <h1>Não Encontrado</h1>
            <span>{props.err}</span>
            <a href="/">Voltar</a>
        </>
    )
}