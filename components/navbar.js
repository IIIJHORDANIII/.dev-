import Styles from "../styles/navbar.module.css";

function Navbar() {
  return (
    <navbar className={Styles.navbar}>
      <div className={Styles.navbarContent}>
        <a className={Styles.a} href="/">
          <p className={Styles.logo}>JHORELLO</p>
        </a>
      </div>
    </navbar>
  );
}

export default Navbar;
