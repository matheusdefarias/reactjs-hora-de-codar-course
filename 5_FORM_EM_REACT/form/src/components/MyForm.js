import './MyForm.css'

import {useState} from 'react';

const MyForm = ({user}) => {
  // 6 - controlled inputs
  // 3 - Gerenciamento de dados com função separada
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const [bio, setBio] = useState(user ? user.bio : '');

  const [role, setRole] = useState(user ? user.role : '');

  const handleName = (e) => {
    setName(e.target.value);
  };

  // console.log(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulário!");
    console.log(name, email, bio, role);

    // 7 - Limpar formulário
    setName("");
    setEmail("");
    setBio("");
  }

  return (
    <div>
        {/* 5 - Envio de form */}
        {/* 1 - Criação de form*/}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" value={name} placeholder="Digite o seu nome" onChange={handleName} /> 
                <span>{name}</span>
            </div>
            
            {/* 2 - Criação de form - Label envolendo input*/}
            <label>
              <span>E-mail</span>
              {/* 4 - Gerenciamento de dados com função inline */}
              <input type="email" name="email" value={email} placeholder="Digite o seu e-mail"  onChange={(e) => setEmail(e.target.value)} /> 
              <span>{email}</span>
            </label>
            {/* 8 - textarea */}
            <label>
              <span>Bio:</span>
              <textarea name="bio" placeholder="Descrição do usuário"  onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
              <span>{bio}</span>
            </label>
            {/* 9 - select */}
            <label>
              <span>Função no sistema</span>
              <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
              </select>
              <span>{role}</span>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm