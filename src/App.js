import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "../src/components/MyNavbar";
import MyFooter from "../src/components/Myfooter";
import SingleCard from "../src/components/SingleCard";

function App() {
  return (
    <>
      <header>
      <MyNavbar />
      </header>
      
      <SingleCard />
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
