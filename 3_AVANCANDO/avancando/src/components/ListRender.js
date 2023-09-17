import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Matheus", "Hanna", "Bruno"]);

    const [users, setUsers] = useState([
        {id: 1, name:"Matheus", age:36},
        {id: 2, name:"Hanna", age:30},
        {id: 3, name:"Bruno", age:40},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    }

    return (
    <div>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender

