import Footer from "./components/Footer.jsx"
import Introduction from "./components/Introduction.jsx"
import ResponsiveDrawer from "./components/ResponsiveDrawer.jsx"
import ThreeScene from "./components/ThreeScene.jsx"


function Home() {

  return (
    <>
      <>
        <ResponsiveDrawer>
          <Introduction />
        </ResponsiveDrawer>
        <Footer />
      </>
    </>
  );
}

export default Home;
