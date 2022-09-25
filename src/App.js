import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import LandingPage from "./components/Pages/LandingPage";
import useWindowDimensions from "./components/Ui/ScreenSize";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);
  const { width } = useWindowDimensions();

  /** Using The window object we create app breaking points
   * to tell app whether to be in Desktop or Mobile/ Tablet mode.
   * the (isDesktop) state is then passed down to all relevent components.
   */
  useEffect(() => {
    if (width > 1150) {
      setIsDesktop(true);
    }
  }, [width]);

  useEffect(() => {
    if (width < 1150) {
      setIsDesktop(false);
    }
  }, [width]);
  return (
    <Layout isDesktop={isDesktop}>
      <LandingPage isDesktop={isDesktop} />
    </Layout>
  );
}

export default App;
