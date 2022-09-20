import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { dark, light } from "../actions/cambiaTema";
import { useSelector, useDispatch } from "react-redux";

function NavBar() {
  let ricerca;
  const changeTema = useSelector((state) => state.changeTheme);
  const dispatch = useDispatch();
  console.log(changeTema);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">MeteoItalia</Navbar.Brand>
        <Button variant="outline-info" onClick={() => dispatch(dark())}>
          Dark
        </Button>
        <Button
          variant="outline-info"
          style={{ marginLeft: "5px" }}
          onClick={() => dispatch(light())}
        >
          Light
        </Button>
        <Nav className="mr-auto"></Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
