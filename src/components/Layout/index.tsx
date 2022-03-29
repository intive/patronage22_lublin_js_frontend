import React from "react";
import Footer from "../Footer";
import MainNavigation from "../MainNavigation";

interface Props {
  children?: React.ReactNode;
}

function Layout(props: Props) {
  return (

    <div className='all-layout' >
      <div className='layout'>
        <MainNavigation />
        <main className='main'>{props.children}</main></div>
        <Footer/>
    </div>
  );
}

export default Layout;
