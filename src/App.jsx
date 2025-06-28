import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import PraksulLayout from "./layouts/PraksulLayout";
import Notes from "./pages/Notes";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PraksulLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="notes" element={<Notes />} />
      </Route>
    </Routes>
  );
}
