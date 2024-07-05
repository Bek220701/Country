import { Route, Routes } from "react-router-dom";
import Country from "./compoments/Country";
import Film from "./compoments/Film/Film";
import Header from "./compoments/Header/Header";
import News from "./compoments/News/News";

const App = () => {
  return (
    <div>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Film/>}/>
          <Route path="/cinema" element={<News/>}/>
          <Route path="/world" element={<Country/>}/>
        </Routes>
      </>
    </div>
  );
};

export default App;
