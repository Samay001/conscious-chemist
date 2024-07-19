import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
 
  return (
    <div>
      <Header />
        <main style={{ minHeight: "100vh" ,overflowY: "hidden",overflowX: "hidden",backgroundColor:"#fff"}}>
            {children}
        </main>
      <Footer />
    </div>
  );
};

export default Layout;