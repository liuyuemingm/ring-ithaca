import ContactAnimation from "./components/ContactAnimation.jsx"
import Footer from "./components/Footer.jsx"
import ResponsiveDrawer from "./components/ResponsiveDrawer.jsx"


function Contact() {

  return (
    <>
      <ResponsiveDrawer>
        <ContactAnimation />
      </ResponsiveDrawer>
      <Footer />
    </>
  );
}

export default Contact;
