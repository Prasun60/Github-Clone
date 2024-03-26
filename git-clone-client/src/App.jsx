import { ThemeProvider } from "@primer/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginPage from "./components/AuthPage/loginPage";
import CreateRepo from "./components/CreateRepo/CreateRepo";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auth" element={<LoginPage />} />
            <Route path="/createRepo" element={<CreateRepo />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};
export default App;