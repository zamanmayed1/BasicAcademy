import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Root() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
   <Header/>
      {/* all the other elements */}
      <div >
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}