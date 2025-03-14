import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/layout";
import { lazy } from "react";

const Home = lazy(() => import("../pages/home/home"));

const View = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default View;
