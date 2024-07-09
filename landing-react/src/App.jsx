import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <Products />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
