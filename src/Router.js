/* src\Router.js */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Works from "./pages/Works";
//Pages
  import Services from "./pages/Pages/Services/Services.jsx";
    import Sight_Identity from "./pages/Pages/Services/Sight_Identity.jsx";
    import Seo_Analysis from "./pages/Pages/Services/Seo_Analysis.jsx";
    import Development from "./pages/Pages/Services/Development.jsx";
    import E_Marketing from "./pages/Pages/Services/E_Marketing.jsx";
    import Multi_Faceted_Bundles from "./pages/Pages/Services/Multi_Faceted_Bundles.jsx";
    import Visual_Crafting from "./pages/Pages/Services/Visual_Crafting.jsx";
  import Team from "./pages/Pages/Team";
    import Chris_Evans from "./pages/Pages/Team/Member/Chris_Evans.jsx";
    import Isabella_Clark from "./pages/Pages/Team/Member/Isabella_Clark.jsx";
    import Olivia_Taylor from "./pages/Pages/Team/Member/Olivia_Taylor.jsx";
    import Ethan_Cooper from "./pages/Pages/Team/Member/Ethan_Cooper.jsx";
    import Grace_Adams from "./pages/Pages/Team/Member/Grace_Adams.jsx";
    import Alex_Robinson from "./pages/Pages/Team/Member/Alex_Robinson.jsx";
  import Blog from "./pages/Pages/Blog";
import Pricing from "./pages/Pricing";
import Reach_Us from "./pages/Reach_Us";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />//
        <Route path="/about-us" element={<About_Us />} />//
        <Route path="/works" element={<Works />} />//
        //pages
          <Route path="/services" element={<Services />} />
            <Route path="/services/sight-identity" element={<Sight_Identity />} />//
            <Route path="/services/seo-analysis" element={<Seo_Analysis />} />//
            <Route path="/services/development" element={<Development />} />//
            <Route path="/services/e-marketing" element={<E_Marketing />} />//
            <Route path="/services/multi-faceted-bundles" element={<Multi_Faceted_Bundles />} />//
            <Route path="/services/visual-crafting" element={<Visual_Crafting />} />//
          <Route path="/team" element={<Team />} />/
            <Route path="/team/chris-evans" element={<Chris_Evans />} />//
            <Route path="/team/isabella-clark" element={<Isabella_Clark />} />//
            <Route path="/team/olivia-taylor" element={<Olivia_Taylor />} />//
            <Route path="/team/ethan-cooper" element={<Ethan_Cooper />} />//
            <Route path="/team/grace-adams" element={<Grace_Adams />} />//
            <Route path="/team/alex-robinson" element={<Alex_Robinson />} />//
          <Route path="/blog" element={<Blog />} />//
        <Route path="/pricing" element={<Pricing />} />//
        <Route path="/contact" element={<Reach_Us />} />//
      </Routes>
    </BrowserRouter>
  );
}
