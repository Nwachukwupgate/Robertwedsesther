import { useState } from "react";
import Curtain from "./components/Curtain";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Details from "./components/Details";
import Gallery from "./components/Gallery";
import Story from "./components/Story";
import Feature from "./components/Feature";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";
import useReveal from "./hooks/useReveal";

export default function App() {
  const [curtainOpened, setCurtainOpened] = useState(false);
  useReveal();

  return (
    <>
      <Curtain onOpen={() => setCurtainOpened(true)} />
      <Hero curtainOpened={curtainOpened} />
      <Countdown />
      <Details />
      <Gallery />
      <Story />
      <Feature />
      <Rsvp />
      <Footer />
    </>
  );
}
