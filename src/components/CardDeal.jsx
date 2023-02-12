import { card } from "../assets" 
import styles, {layout} from "../style"
import Button from "./Button"

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find A Better Card Deal<br className="sm:block hidden"/>In Few Easy Step</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methedology to identify the credit cards most likely to fit your needs.We examine annual percentage rates, annual fees.</p>
        <Button style={"mt-10"}/>
        </div>

        <div className={layout.sectionImg}>
          <img src={card} alt="card" className="w-[100%] h-[100%]"/>
        </div>
    </section>
  )
}

export default CardDeal