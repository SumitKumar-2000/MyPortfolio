import { useState } from "react";
import {ThemeProvider} from "styled-components"
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import GlobalStyles from "./components/styledComponents/Global";
import TechnologyStack from "./components/TechnologyStack";
import ThemeChanger from "./components/ThemeChanger";

function App() {

  const [bodytheme, setBodyTheme] = useState(true);
  
  const theme = {
    colors : {
      body: bodytheme ? "#F9FAFB" : "#1B1F24",
    },
    
    mobile : "768px",
    tab : "968px",
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
        <ThemeChanger setBodyTheme={setBodyTheme} bodytheme={bodytheme} />
        <Header/>
        <About/>
        <TechnologyStack/>
        <Projects/>
      </>
    </ThemeProvider>
  );
}

export default App;
