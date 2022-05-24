import { Panel } from "@/presentation/components";
import { Home, About } from "@/presentation/pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Panel><Home /></Panel>} />
            <Route path="/about" element={<Panel><About /></Panel>} />
            <Route path="/products" element={<Panel><h1>Products</h1></Panel>} />
            <Route path="/recipes" element={<Panel><h1>Recipes</h1></Panel>} />
            <Route path="/faq" element={<Panel><h1>FAQ</h1></Panel>} />
            <Route path="/help" element={<Panel><h1>Help</h1></Panel>} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </Router>
  );
}