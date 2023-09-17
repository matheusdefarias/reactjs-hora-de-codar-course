const UserDetails = ({key, name, job, age}) => {

    
  return (
    <div>
        <h2>{name}</h2>
        <p>Profissão: {job}</p>
        <p>Idade: {age}</p>
        {age >= 18 ? 
        (
            <p>PODE tirar carteira de habilitação.</p>
        ) : 
        (
            <p>Não pode, é menor de idade.</p>
        )}
    </div>
  )
}

export default UserDetails