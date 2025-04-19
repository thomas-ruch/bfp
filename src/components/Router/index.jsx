import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Manifesto from "../../pages/Manifesto";
import Log from "../../pages/Log";
import LogBook from "../../pages/LogBook";
import Archives from "../../pages/Archives";
import Error from "../../pages/Error";
import Layout from "../Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/logBook" element={<LogBook />} />
          <Route path="/chronicle/:chronId" element={<Log />} />
          <Route path="/archives" element={<Archives />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
