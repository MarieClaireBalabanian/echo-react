import BlockHero from "../components/blocks/BlockHero";

const Home = () => {

  const heroData = {
    headline: "Tour light, tour easy.",
    copy: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    image: {
      alt: "",
      url: "/wave.svg",
    }
  }



  return (
    <>
      <BlockHero data={ heroData }/>
    </>
  );
};
export default Home;
