import Home from "./Home.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Weapons from "./Weapons.js"
import Syllabus from "./Syllabus.js"
import Glossary from "./Glossary.js"
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import Footer from "./components/Footer.jsx"
import Contact from "./Contact.js"
import Landing from "./Landing.js"

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#252525',
      dark: '#252525',
      contrastText: '#C08FFF'
    },
    secondary: {
      main: '#7000ff',
      dark: '#252525',
    },
  },
  typography: {
    body1: {
      fontFamily: 'Alegreya',
      fontSize: '20px',
    }
  }
});

function App() {

  return (

    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/home" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/weapons" exact component={Weapons} />
            <Route path="/glossary" exact component={Glossary} />
            <Route path="/syllabus" exact component={Syllabus} />

          </Switch>
        </ThemeProvider>
      </div>

    </Router>

  );
}

export default App;
