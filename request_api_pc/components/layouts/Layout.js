import React from 'react'
import Footer from "../../components/container/footer/Footer";
import Header from "../../components/container/header/Header";

//export default function (props) {
// const { children } = props;

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <h1>Prueba Axios</h1>
      <div className='contenedor'>
        {children}
      </div>
      <Footer />
    </div>
  );
}