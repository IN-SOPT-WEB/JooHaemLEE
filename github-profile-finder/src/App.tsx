import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search/*" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
