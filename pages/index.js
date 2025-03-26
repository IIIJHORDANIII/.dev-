
import Navbar from "../components/navbar";
import Styles from "../styles/globals.module.css";
import Image from "next/image"

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
        <div className={Styles.curso}>
          <Image
            src="/image.png"
            width={65}
            height={65}
            style={{
              borderRadius: "10px"
            }}
            alt=""
          />
        </div>
      </div>
      <a className={Styles.a} href="/projeto1/projeto1">
        <button className={Styles.button2}>
          <h3 className={Styles.h3}>
            PRIMEIRO<br />PROJETO
          </h3>
        </button>
      </a>
      <div className={Styles.person}>
        <Image
          src="/garoto.png"
          width={295}
          height={597}
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
