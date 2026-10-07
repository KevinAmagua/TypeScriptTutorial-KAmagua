import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Modulo1Page } from "../pages/Modulo1Page";
import { HomePage } from "../pages/HomePage";
import { Modulo2Page } from "../pages/Modulo2Page";
export function Router() {
  return (
    <BrowserRouter>
        <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/modulo1" element={<Modulo1Page />} />
      <Route path="/modulo2" element={<Modulo2Page />} />
        </Routes>
    </BrowserRouter>
  );
}