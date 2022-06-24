import { useEffect, useState } from "react";

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
    <div className='App'>
      <header className='App-header'>
        <h1>Pomodoro App</h1>
      </header>
      <span>{minutes.toString().padStart(2, "0")}</span>
      <span>:</span>
      <span>{secondsShow.toString().padStart(2, "0")}</span>
      <h1>Alteração</h1>
    </div>
  );
}
