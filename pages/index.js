
import Navbar from "../components/navbar";
import Styles from "../styles/globals.module.css";

function Home() {
  return (
    <div className={Styles.container}>
      <Navbar />
      <div className={Styles.cont}>
        <div>
          <h1 className={Styles.texto}>Bem Vindos,</h1>
          <p className={Styles.texto2}>
            ao meu cantinho na internet.<br />
            Esse site tem o intuito de mostrar a minha evolução como programador seguido as instruções do curso.dev.
          </p>
        </div>
        <div className={Styles.curso}></div>
      </div>
      <a className={Styles.a} href="/projeto1/projeto1">
        <button className={Styles.button2}>
          <h3 className={Styles.h3}>
            PRIMEIRO<br />PROJETO
          </h3>
        </button>
      </a>
      <div className={Styles.person}></div>
    </div>
  );
}

export default Home;
