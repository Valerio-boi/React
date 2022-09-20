import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Notice from "./components/noticeSection";
import Col from "react-bootstrap/Col";
import Weather from './components/weatherCom'
import CarouselComponent from "./components/carousel";
import GoogleMap from './components/googleMap'


/*
const APIKEY = '4f188f6387e39a4dbabd5d915e951903';
const URL_BASE = 'http://api.openweathermap.org/data/2.5/weather'
const URL_ICON = "http://openweathermap.org/img/wn/10d@2x.png"
*/


function App() {
  const titleStyle = {
    textAlign: "center",

  };
  const selettoreReducer = useSelector((state) => state.storeReducer);
  const changeTema = useSelector((state) => state.changeTheme);
  const weather = useSelector((state) => state.weatherReducer);
  console.log(selettoreReducer);

  return (
    <header className={changeTema ? "night" : "light"}>
      <NavBar />
      <h1 style={titleStyle}>
        <b>METEO ITALIA</b>
      </h1>
      <CarouselComponent />

      <br></br>
      <Row style={{ marginLeft: "0", marginRight: "0" }}>
        <Col sm={4}>
          <h2 style={{ fontFamily: "cursive" }}>Notizie</h2>
          <Notice />
        </Col>
        <Col sm={8}>
          <h2 style={{ fontFamily: "cursive" }}>Previsioni </h2>
          <Weather />
            <GoogleMap changeTema={changeTema} />
        </Col>
      </Row>
      <br />
    </header>
  );
}

export default App;
