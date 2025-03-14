import { Routes, Route } from "react-router-dom";
import "./styles/index.css";
import { MainPage } from "../pages/MainPage";
import { CharacterPage } from "../pages/СharacterPage";
import { Header } from "../widgets/Header";

function App() {
  return (
    <div className="app bg-black">
      <div className="w-full px-5 sm:px-10 xl:w-9/12 xl:p-0 min-h-screen mx-auto flex flex-col text-white">
        <Header />
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/character/:id"} element={<CharacterPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
