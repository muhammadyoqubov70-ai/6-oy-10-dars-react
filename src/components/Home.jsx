// FAYL MANZILI: src/components/Home.jsx

import Hiro from "./Hero";
import WhyChoose from "./WhyChoose";
import StartText from "./StartText";
import LatestPosts from "./LatesPost";

function Home() {
  return (
    <main>
      {/* 1. Sarlavha va rasm qismi */}
      <Hiro />

      {/* 2. Kartalar qismi (Faqat 3 ta karta chiqadi) */}
      <WhyChoose />

      {/* 3. Boshqa matn va postlar qismi */}
      <StartText />
      <LatestPosts />
    </main>
  );
}

export default Home;
