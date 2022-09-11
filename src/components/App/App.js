import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Chat from "../Chat/Chat";
import "../../styles/global.scss";

const App = (props) => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
