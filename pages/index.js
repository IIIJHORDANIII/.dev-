
import Perfil from '../components/perfil';
import Styles from'../styles/globals.module.css'




function Home() {

    

    return <div className={Styles.container}>
                <Perfil/>
                <div className={Styles.cont}>
                    <h1 className={Styles.texto}>Sejam Bem Vindos!!</h1>
                    <p className={Styles.texto}>
                        Me chamo JHORDAN, e programação se tornou um hobby em que estou me dedicando nesse ano de 2025.<br/>
                        Esse será um espaço pessoal para documentar a minha trajetória de aprendizado no curso .DEV de nosso grandioso<br/>
                        Felipe Dechamps, mais conhecido como MICHEL TELÓ da programação. Brincadeiras a parte é apenas uma forma de me dedicar.
                    </p>
                    <a className={Styles.a} href="/projeto1/projeto1">
                    <button  className={Styles.button2}><h3 className={Styles.h3}>PRIMEIRO PROJETO<br/>Frase para Encantar</h3></button></a>
                </div>
       
            </div>
}

export default Home;