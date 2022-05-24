import { Panel } from "@/presentation/components";
import { Home } from "@/presentation/pages";
import React from "react";
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
            <Route path="/about" element={<Panel><h1>About</h1></Panel>} />
        </Routes>
    </Router>
  );
}