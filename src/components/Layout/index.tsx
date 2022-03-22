import React from "react";
import MainNavigation from "../MainNavigation";

interface Props {
  children?: React.ReactNode;
}

function Layout(props: Props) {
  return (
    <div>
      <MainNavigation />
      <main className="main">{props.children}</main>
    </div>
  );
}

export default Layout;
