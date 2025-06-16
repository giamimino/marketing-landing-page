import Button from "@/components/ui/Button";
import styles from "./page.module.scss"
import Image from "next/image";
import InfScrollBar from "@/components/animations/InfScrollBar";
import Title from "@/components/ui/title";

const scrollValue1 = ["airtel", "uba", "paga", "mnt", "dangote", "firstbank"]
const scrollValue2 = ["Google-cloud", "Ebay", "Tux", "Spotify", "Airbnb", "Facebook", "Coca-Cola"]
const scrollValue3 = ["Zoom", "Creative-Cloud", "Netflix", "Discord", "Figma", "Paypal", "Adobe"]

export default function Home() {

  return (
    <div className="p-66.5">
      <section className={styles.heroWelcome}>
        <aside>
          <Title size='text-7xl' />
          <p className={styles.showDown}>
            Our vision is to revolutionize the way brands and advertisers target, reach
          </p>
          <Button title="Get Started" type='button' />
        </aside>
        <Image src="http://raw.githubusercontent.com/giamimino/images/refs/heads/main/marketing-landing-page/earth.webp" 
        alt="earth"
        width={456}
        height={426} />
      </section>
      <section className="mt-44">
        <InfScrollBar value={scrollValue1} direction='right' />
        <InfScrollBar value={scrollValue2} direction='left' />
        <InfScrollBar value={scrollValue3} direction='right' />
        <p className="text-center mt-12">Trusted by the world’s most ambitious teams.</p>
      </section>
    </div>
  );
}
