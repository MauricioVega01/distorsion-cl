import Hero from "../../components/home/Hero";
import Cartelera from "../../components/home/Cartelera";
import EdicionesRecientes from "../../components/home/EdicionesRecientes";
import Residentes from "../../components/home/Residentes";
import Newsletter from "../../components/home/Newsletter";
import WaveDivider from "../../components/common/WaveDivider";
import { upcomingEvents, pastEvents } from "../../data/events";
import { residentArtists } from "../../data/artists";

export default function Home() {
  const featuredEvent = upcomingEvents[0];

  return (
    <>
      <Hero event={featuredEvent} />
      <WaveDivider />
      <Cartelera events={upcomingEvents} />
      <EdicionesRecientes events={pastEvents} />
      <WaveDivider flip />
      <Residentes artists={residentArtists} />
      <Newsletter />
    </>
  );
}
