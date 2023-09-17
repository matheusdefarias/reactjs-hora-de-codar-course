import {useState} from 'react';

const ManageData = () => {
    let someData = 10;
    console.log(someData);

    const [number, setNumber] = useState(20);

    return (
    <div>
        <p>Valor: {someData}</p>
        <button onClick={() => {
            someData = 15;
            console.log(someData);
            }}>Clique!</button>
        <p>Novo valor: {number}</p>
        <button onClick={() => setNumber(30)}>Clique!</button>
    </div>
  )
}

export default ManageData