import Detail from "@/component/details";
import Footer from "@/component/footer";
import Hero from "@/component/hero";
import Navbar from "@/component/navbar";
import Newsletter from "@/component/newsletter";
import Team from "@/component/team";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Detail />
      <Team />
      <Newsletter />
      <Footer />
    </div>
  );
}
