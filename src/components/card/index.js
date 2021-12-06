import { useState } from 'react';
import Button from '../Button';
const Card = () => {
    
    const [value, setValue] = useState(0)

    function Add (){
        setValue(value + 1)
    }

    function Remove (){
        setValue(value - 1)
    }

    return(
    <div className="card">
        <div className="card-header">
            My First card
        </div>
        <div className="card-body">
        <Button className="btn btn-success" 
        onClick={Add}>
            Add
        </Button>
        <Button className="btn btn-danger" 
        onClick={Remove}>
            Remove
        </Button>
            <h2>{value}</h2>
        </div>
    </div>
    )
}

export default Card;