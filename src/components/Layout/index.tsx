import React from "react";
import Footer from "../Footer";
import MainNavigation from "../MainNavigation";
import { styled } from '@mui/material/styles';

interface Props {
  children?: React.ReactNode;
}

function Layout(props: Props) {
  return (
    <AllLayout>
      <InternalLayout>
        <MainNavigation />
        <main className='main'>{props.children}</main>
      </InternalLayout>
      <Footer />
    </AllLayout>
  );
}

export default Layout;

const AllLayout = styled('div')(() => ({
  position: 'relative',
  minHeight: '100vh'
}));
const InternalLayout = styled('div')(() => ({
  paddingBottom: '5rem'
}));