import styles from "./welcome.module.css"
import Button from "../button/button";
import ImgReact from "../../assets/img/react-img.png"

const Welcome = () => {
  return (
   <section className={styles.welcome}>
    <div className={styles.wrapperWelcome}>
      <img src={ImgReact} alt="" />
      <h2>Bem-vindo à comunidade React</h2>
      <Button>Apreenda</Button>
    </div>
   </section>
  )
}

export default Welcome;
