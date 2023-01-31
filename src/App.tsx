import { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiArrowUp,
  FiPause,
  FiPlay,
  FiRefreshCcw,
} from "react-icons/fi";
import "./styles.css";

const INITIAL_TIME = 25 * 60; //25 minutos em segundos
export default function Counter() {
  const [secondsInMinutes, setSeconds] = useState(INITIAL_TIME);

  useEffect(() => {
    if (secondsInMinutes === 0) {
      alert("Fim do ciclo. Descanse 5 minutos");
      return;
    }

    // Cria um "loop" no estado seconds, em que a cada 1 segundo o estado diminui 1 e "remonta" o estado inicial e diminui 1, passando o estado para o setSeconds, ai remonta  até chegar ao zero, onde ele irá retornar o alerta do if acima

    setTimeout(() => {
      // setSeconds(seconds - 1)
      setSeconds((state) => state - 1);
    }, 1000);
  }, [secondsInMinutes]);

  //Precisa ajustar os minutos e segundos
  //floor arredonda p baixo.
  const minutes = Math.floor(secondsInMinutes / 60);
  const secondsShow = secondsInMinutes % 60;
  // padStart só funciona em string, por isso o toString e serve para definir que o número deve ser exibido com x algarismos (2 nesse caso)

  return (
    <div id="container">
      <div id="app">
        <div>
          <header className="main-title">Pomodoro App</header>
          <div className="length-control">
            <div id="break-label">Break time (min)</div>
            <button className="btn-level" id="break-decrement" value="-">
              <FiArrowDown size={24} title={"Decrease"} />
            </button>
            <div className="btn-level" id="break-length">
              5
            </div>
            <button className="btn-level" id="break-increment" value="+">
              <FiArrowUp size={24} title={"Increase"} />
            </button>
          </div>
          <div className="length-control">
            <div id="session-label">Session Time (min)</div>
            <button className="btn-level" id="session-decrement" value="-">
              <FiArrowDown size={24} title={"Decrease"} />
            </button>
            <div className="btn-level" id="session-length">
              25
            </div>
            <button className="btn-level" id="session-increment" value="+">
              <FiArrowUp size={24} title={"Increase"} />
            </button>
          </div>

          <div className="timer">
            <div className="timer-wrapper">
              <div id="timer-label">Session</div>
              <div id="time-left">25:00</div>
            </div>
          </div>
          <div className="timer-control">
            <button id="start_stop">
              <FiPlay size={24} title={"Start"} />
              <FiPause size={24} title={"Pause"} />
            </button>
            <button id="reset">
              <FiRefreshCcw size={24} title={"Reset"} />
            </button>
          </div>
          <audio
            id="beep"
            preload="auto"
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          ></audio>
        </div>
      </div>
    </div>
  );
}
