import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0},
    {id: 2, brand: "RAM", color: "Cinza Chumbo", newCar: true, km: 34343},
    {id: 3, brand: "FORD", color: "Branco", newCar: false, km: 234},
  ];

  return (
    <div className="App">
      <h2 className="title">Desafio 5</h2>
      <div className="container">
        {cars.map((car) => (
          <CarDetails id={car.id} brand={car.brand} color={car.color} newCar={car.newCar} km={car.km}/>
        ))}
      </div>
    </div>
  );
}

export default App;
