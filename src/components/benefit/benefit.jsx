import styles from "./benefit.module.css";
import SupporteIcon from "../../assets/img/suporte.svg";
import HighPerformace from "../../assets/img/desempenho.svg";
import Onbording from "../../assets/img/onbording.svg";
import Product from "../../assets/img/product.svg";
import Quality from "../../assets/img/quality.svg";
import Result from "../../assets/img/resulty.svg";

const Benefit = () => {
  return (
    <section className={styles.Benefit}>
      <div className={styles.BenefitTitle}>
        <h2>Benefícios de usar React </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipis elit</p>
      </div>
      <div className={styles.containerWrapperIcons}>
        <div className={styles.BenefitWrapper}>
          <div className={styles.benefitContainer}>
            <div className={styles.boxIconWrapper}>
              <div className={styles.boxIcon}>
                <img src={SupporteIcon} alt="" />
              </div>
              <h3>Suporte</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </div>
          <div className={styles.benefitContainer}>
            <div className={styles.boxIconWrapper}>
              <div className={styles.boxIcon}>
                <img src={HighPerformace} alt="" />
              </div>
              <h3>Alto desempenho</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </div>
          <div className={styles.benefitContainer}>
            <div className={styles.boxIconWrapper}>
              <div className={styles.boxIcon}>
                <img src={Onbording} alt="" />
              </div>
              <h3>Onboarding</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.BenefitWrapper}>
          <div className={styles.benefitContainer}>
            <div className={styles.boxIconWrapper}>
              <div className={styles.boxIcon}>
                <img src={Product} alt="" />
              </div>
              <h3>Produto</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </div>
          <div className={styles.benefitContainer}>
            <div className={styles.boxIconWrapper}>
              <div className={styles.boxIcon}>
                <img src={Quality} alt="" />
              </div>
              <h3>Qualidade</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </div>
          <div className={styles.benefitContainer}>
            <div className={styles.boxIconWrapper}>
              <div className={styles.boxIcon}>
                <img src={Result} alt="" />
              </div>
              <h3>Resultado</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
