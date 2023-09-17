import { useState } from 'react';
import './App.css';

import ColoredOtto from "./assets/Otto_face_album_thmbnail-1.jpg"
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = "Maria"
  const [userName] = useState("Matheus de Farias");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0},
    {id: 2, brand: "RAM", color: "Cinza Chumbo", newCar: true, km: 34343},
    {id: 3, brand: "FORD", color: "Branco", newCar: true, km: 234},
  ];

  const users = [
    {id:1, nome: "Matheus", idade: 36, profissao:"Engenheiro da Computação"},
    {id:2, nome: "Blenda", idade: 17, profissao:"Cientista da Computação"},
    {id:3, nome: "Hanna", idade: 30, profissao:"Fisioterapêuta"}];

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  function showMessage() {
    console.log("Evento do componente pai!!");
  }

  return (
    <div className="App">
      <h1>Avançando no React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/IMG_1383.PNG" alt="Otto" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={ColoredOtto} alt="Otto" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={name} />
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/* Reaproveitamento de componentes */}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true}/>
      <CarDetails brand="Fiat" km={1550} color="Branco" newCar={false}/>
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>
      ))}
      <Fragment propFragment="teste"/>
      {/* Children prop */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
        {userName}
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/*Desafio 4*/}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.nome} job={user.profissao} age={user.idade}/>
      ))}


    </div>
  );
}

export default App;
