import "./App.css";
import { useState } from "react";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Matheus");
  const redTitle = true;
  return (
    <div className="App">
      {/*CSS Global*/}
      <h1>React com CSS</h1>
      {/*CSS de Componente*/}
      <MyComponent />
      <p>Este é o parágrafo do App.js</p>
      {/*Inline CSS*/}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/*CSS Inline Dinâmico*/}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === "Matheus"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        Teste {name}
      </h2>
      {/*Classe dinâmica*/}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      <h2 className={!redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      {/*CSS modules*/}
      <Title />
    </div>
  );
}

export default App;
