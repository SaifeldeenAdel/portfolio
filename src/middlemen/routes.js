import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import { Home, About, Contact, Projects, NavBar, PageLayout } from "./imports";


const NavLayout = () => {
  return (
    // Nested components will take the place of the Outlet component and so will render with the nav bar on top

    <PageLayout>
      <NavBar />
      <Outlet />
    </PageLayout>
  )
}

const DefaultRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />

        {/* Nesting routes so they take on the page layout and navbar */}
        <Route path="/" element={<NavLayout />}> 
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
    </AnimatePresence>
	);
};


export {DefaultRoutes};
