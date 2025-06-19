import styles from "./page.module.scss"
import Image from "next/image";
import InfScrollBar from "@/components/animations/InfScrollBar";
import {Search, Button, Section, Title, CardSlider} from '@/components/ui/ui'
import cards from "@/json/cards.json"
import Footer from "@/components/footer/Footer";

const scrollValue1 = ["airtel", "uba", "paga", "mnt", "dangote", "firstbank"]
const scrollValue2 = ["Google-cloud", "Ebay", "Tux", "Spotify", "Airbnb", "Facebook", "Coca-Cola"]
const scrollValue3 = ["Zoom", "Creative-Cloud", "Netflix", "Discord", "Figma", "Paypal", "Adobe"]

export default function Home() {


  return (
    <div className="p-66.5 pb-0 flex flex-col gap-44">
      <section className={styles.heroWelcome}>
        <aside>
          <Title size='text-7xl' />
          <p className={styles.showDown}>
            Our vision is to revolutionize the way brands and advertisers target, reach
          </p>
          <Button type='button'>Get Started</Button>
        </aside>
        <Image src="http://raw.githubusercontent.com/giamimino/images/refs/heads/main/marketing-landing-page/earth.webp" 
        alt="earth"
        width={456}
        height={426} />
      </section>
      <section>
        <InfScrollBar value={scrollValue1} direction='right' />
        <InfScrollBar value={scrollValue2} direction='left' />
        <InfScrollBar value={scrollValue3} direction='right' />
        <p className="text-center mt-12">Trusted by the world’s most ambitious teams.</p>
      </section>
      <main style={{
        display: "flex",
        flexDirection: "column",
        gap: "182px"
      }}>
        {cards.map((card, index) => (
          card.option === "section" ? 
          <Section
            key={index}
            direction={card.direction || "left"}
            content={Array.isArray(card.content) ? card.content.join(" ") : (card.content || "404")}
            image={Array.isArray(card.image) ? card.image[0] || "404" : card.image || "404"}
          /> : 
          <CardSlider
            key={index}
            image={Array.isArray(card.image) ? card.image : [card.image]}
            content={Array.isArray(card.content) ? card.content : [card.content]}
            name={(Array.isArray(card.name) ? card.name : [card.name]).filter((n): n is string => typeof n === "string")}
            about={
              (Array.isArray(card.about) ? card.about : [card.about])
                .filter((a): a is string => typeof a === "string")
            }
          />
        ))}
      </main>
      <Search />
      <section>
        <InfScrollBar value={scrollValue2} direction='left' />
        <InfScrollBar value={scrollValue3} direction='right' />
        <p className="text-center mt-12">Trusted by the world’s most ambitious teams.</p>
      </section>
      <Footer />
    </div>
  );
}
