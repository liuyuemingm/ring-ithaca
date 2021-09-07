import Accordion from "./components/Accordion"
import Footer from "./components/Footer.jsx"
import ResponsiveDrawer from "./components/ResponsiveDrawer.jsx"

function Syllabus() {

  return (
    <>
      <ResponsiveDrawer >
        <Accordion />
      </ResponsiveDrawer>
      <Footer />
    </>
  );
}

export default Syllabus;
