import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import michaelImage from "./assets/pelicula_foto.jpg";
import catImage from "./assets/gato_foto.png";

function App() {

  const [accepted, setAccepted] = useState(false);

  const [noPosition, setNoPosition] = useState({
    top: "0px",
    left: "0px"
  });

  const moverBoton = () => {

    const randomX = Math.floor(Math.random() * 300);
    const randomY = Math.floor(Math.random() * 300);

    setNoPosition({
      top: `${randomY}px`,
      left: `${randomX}px`
    });
  };

  const aceptar = async () => {

    try {

      /*await axios.post("http://localhost:8080/api/respuesta", {
        respuesta: "Sí"
      });*/

      setAccepted(true);

      // Enviar la petición al backend en segundo plano
      axios.post("http://localhost:8080/api/respuesta", {
        respuesta: "Sí"
      })
      .then((response) => {
        console.log("Respuesta guardada:", response.data);
      })
      .catch((error) => {
        console.error("Error guardando respuesta:", error);
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">

      {!accepted ? (
        <>
          <h1>¿Te gustaría ir al cine el sábado?</h1>

          <div className="buttons">

            <button className="yes-btn" onClick={aceptar}>
              Sí
            </button>

            <button
              className="no-btn"
              onMouseEnter={moverBoton}
              style={{
                position: "relative",
                top: noPosition.top,
                left: noPosition.left
              }}
            >
              No
            </button>

          </div>
        </>
      ) : (
        <>
          <h1>Sabía que dirías que sí ❤️</h1>

          <img
            src={catImage}
            alt="Gatito"
            className="cat-image"
          />
        </>
      )}

    </div>
  );
}

export default App;