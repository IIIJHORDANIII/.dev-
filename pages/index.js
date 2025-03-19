"use client"

import { useState } from "react";

import Styles from'../styles/globals.module.css'



function Home() {

    const [count, setCount] = useState(0);

    return <div className={Styles.container}>
                <div className={Styles.cont}>
                    <h2 className={Styles.texto}>Não é meu primeiro contato com programação, nunca consegui seguir mais que 3 aulas kakakak,<br/> porém mas com uma didática dessas é realmente impossivel não dar seguimento a esse curso!!
                    </h2>
                    <h3 className={Styles.texto}> Sofri pra fazer um contador de clique então CLICA AI SAFADO. </h3>
                    <div>
                    <button id="meuBotao" className={Styles.button} onClick={() => setCount(count + 1)}> Aqui ó, CLICA! ------ {count}  </button>
                    </div>
                    </div>
             </div>
}

export default Home;