import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../components/landingpage/landipage";
import PostView from "../components/postView/postview";
import Form from "../components/form/form";
import Wild from "../components/wild/wild";


const AllRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/posts" element={< PostView />} />
        <Route path="/add" element={< Form />} />
        <Route path="*" element={<Wild />} />
      </Routes>
    </BrowserRouter>
  )
};

export default AllRoutes;