import Hiro from "./Hero";
import WhyChoose from "./WhyChoose";
import StartText from "./StartText";
import LatestPosts from "./LatesPost";

function Home() {
  return (
    <main>
      <Hiro />
      <WhyChoose />
      <StartText />
      <LatestPosts />
    </main>
  );
}

export default Home;
