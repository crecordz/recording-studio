import "./App.css";
import About from "./components/about/about";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Info from "./components/info/info";
import Services from "./components/services/services";

function App() {
  return (
    <>
      <Header />
      <Info />
      <Services />
      <About />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
