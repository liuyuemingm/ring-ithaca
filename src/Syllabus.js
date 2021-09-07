import Accordion from "./components/Accordion"
import react from "react"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import ResponsiveDrawer from "./components/ResponsiveDrawer.jsx"
import ThreeScene from "./components/ThreeScene.jsx"

function Syllabus() {
  const clickHandler = () => {
    console.log(this)

  }
  return (
    <>
      <ResponsiveDrawer>
      </ResponsiveDrawer>
      <div style={{ textAlign: 'center', position: 'realative', top: '290px', fontSize: '30px', fontWeight: '100' }}>
        <p>
          Hi there!
          <br />
          We will be updating the syllabus
          <br />
          and 3D animations of fights
          <br />
          throughout the semester
          <br />
          as we teach them
          <br />
          Stay tuned!
        </p>
        <img src='/images/corner.png' style={{ transform: 'rotate(-135deg)', width: '85px', position: 'relative', top: '-50px' }} />
      </div>
      <Footer />
    </>
  );
}

export default Syllabus;
