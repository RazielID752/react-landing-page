import styles from "./hero.module.css";
import imgHero from "../../assets/img/react-img.png";
import Button from "../button/button";
import ButtonBorder from "../buttonBorder/buttonBorder";

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div className={styles.heroWrapper}>
        <img src={imgHero} alt="" />
        <h1>
          <span>Crie diversas interfaces </span>
          rápidas e incríveis usando componentes.
        </h1>
        <p>
          O React permite construir interfaces de usuário a partir de peças
          individuais chamadas componentes.
        </p>
        <div className={styles.buttonWrapper}>
          <Button>Apreenda React</Button>
          <ButtonBorder>Documentação</ButtonBorder>
        </div>
      </div>
    </section>
  );
};

export default Hero;
