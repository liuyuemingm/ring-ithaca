import Footer from "./components/Footer.jsx"
import ResponsiveDrawer from "./components/ResponsiveDrawer.jsx"
import WeaponsCarousel from "./components/WeaponsCarousel.jsx"

function Weapons() {

  return (
    <>
      <ResponsiveDrawer>
        <WeaponsCarousel />
      </ResponsiveDrawer>
      <Footer />
    </>
  );
}

export default Weapons;
