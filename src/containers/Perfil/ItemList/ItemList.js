import './ItemList.css';
import { StarBorderOutlined } from '@mui/icons-material';




export default function ItemList (props)  {

    return (
        <>
            <div className='card'>
                <h1 className='card-title'>{props.name}</h1>
                <p className='card-description'>{props.description}</p>
                <p className='card-footer'><StarBorderOutlined /> {props.stars} &bull; Atualizado há {props.update} dias</p>
            </div>
        </>
    )
}