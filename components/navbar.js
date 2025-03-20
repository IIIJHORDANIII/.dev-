
    import Styles from '../styles/globals.module.css'

            function Navbar() {

                
            
                return <navbar className={Styles.navbar}>
                    <div className={Styles.navbarContent}>
                        <a href='/'><button className={Styles.navbarButton}><h3 className={Styles.p}>Voltar</h3></button></a>
                    </div>
                </navbar>
                }
            
            export default Navbar;