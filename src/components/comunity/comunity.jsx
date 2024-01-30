import styles from "./comunity.module.css";
import Image1 from "../../assets/img/image1.png";
import Image2 from "../../assets/img/image2.png";
import Image3 from "../../assets/img/image3.png";
import Image4 from "../../assets/img/image4.png";
import Button from "../button/button";

const Comunity = () => {
  return (
    <section className={styles.Comunity}>
      <div className={styles.ComunityWrapper}>
        <div className={styles.rowComunity}>
          <div>
            <img src={Image1} alt="" />
          </div>
          <div>
            <h2>Uma comunidade de milhões</h2>
            <p>
              Você não está sozinho. Dois milhões de desenvolvedores de todo o
              mundo visitam a documentação do React todos os meses. React é algo
              com o qual as pessoas e as equipes podem concordar, venham fazer
              parte da nossa comunidade.
            </p>
            <div className={styles.BtnComunityWrapper}>
              <Button>Comunidade</Button>
            </div>
          </div>
        </div>
        <div className={styles.rowComunity2}>
          <div>
            <img src={Image2} alt="" />
          </div>
          <div>
            <img src={Image3} alt="" />
          </div>
          <div>
            <img src={Image4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comunity;
