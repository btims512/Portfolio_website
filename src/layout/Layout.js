import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";
import Navbar from '../components/Nav/Navbar'

export const Layout = ({ children }) => {
  return (
    <Container>
    <Navbar />
      {/* <Header/> */}
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
