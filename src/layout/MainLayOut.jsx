import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../compontes/header/Header";
import LatestNews from "../compontes/latestNews/LatestNews";
import Navbar from "../compontes/navbar/Navbar";
import LeftAsid from "../compontes/leftAside/LeftAsid";
import RightAside from "../compontes/rightAside/RightAside";

const MainLayOut = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-8">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto my-12">
          <Navbar />
        </nav>
      </header>
      <main className="w-11/12 mx-auto  gap-5 grid grid-cols-12">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAsid />
        </aside>

        <section className="col-span-6">
          {isNavigating && <p>Loading.....</p>}
          <Outlet />
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default MainLayOut;
