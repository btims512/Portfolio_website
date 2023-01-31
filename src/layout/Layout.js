import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";
import NavBar from '../components/NavBar/NavBar'

export const Layout = ({ children }) => {
  return (
    <Container>
    <NavBar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
