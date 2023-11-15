import Introduction from "@/components/Sections/Introduction";
import Explanations from "@/components/Sections/Explanation";
import Community from "@/components/Sections/Community";
import Download from "@/components/Sections/Download";
import Footer from "@/components/Navigation/Footer";
import ContentHead from "@/components/Sections/Head";

const Home = () => {
  return (
    <>
      <ContentHead />
      <main className={"relative z-20"}>
        <Introduction />
        <Explanations />
        <Community />
        <Download />
      </main>
      <Footer />
    </>
  );
};
export default Home;
