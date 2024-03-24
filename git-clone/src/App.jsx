import { ThemeProvider } from "@primer/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./components/AuthPage/loginPage";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/auth" element={<LoginPage />} />
    
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};
export default App;
