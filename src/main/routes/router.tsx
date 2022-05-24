import { Panel } from "@/presentation/components";
import { Home, About } from "@/presentation/pages";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Panel><Home /></Panel>} />
            <Route path="/about" element={<Panel><About /></Panel>} />
            <Route path="*" element={<Panel><Home /></Panel>} />
        </Routes>
    </Router>
  );
}