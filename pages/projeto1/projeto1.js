import { useState } from "react";

import Styles from "../../styles/projeto1.module.css";
import Navbar from "../../components/navbar";

function Projeto1() {
  const [count, setCount] = useState(0);

  return (
    <div className={Styles.container}>
      <Navbar />
      <div className={Styles.cont}>
        <h3 className={Styles.texto2}>
          Não é meu primeiro contato com programação, porém nunca consegui
          seguir mais que 3 aulas kakakak,
          <br /> mas com uma didática dessas é realmente impossivel não dar
          seguimento a esse curso!!
        </h3>
        <p className={Styles.texto2}>
          Sofri pra fazer um contador de cliques então CLICA AI SAFADO.
        </p>
        <div>
          <h2 className={Styles.texto}>{count}</h2>
          <button className={Styles.button} onClick={() => setCount(count + 1)}>
            DALE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projeto1;
