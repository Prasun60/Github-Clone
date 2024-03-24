import { ThemeProvider, BaseStyles, theme } from "@primer/react";
import "../../App.css";
import Navbar from "./Navbar/Navbar/Navbar";

import Body from "./Body/Body/Body";

const Dashboard = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <div className="line-break">
        </div>
        <Body />
      </div>
    </ThemeProvider>
  );
};
export default Dashboard;
