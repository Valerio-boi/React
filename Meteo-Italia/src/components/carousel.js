import Carousel from "react-bootstrap/Carousel";
import neve from "../img/neve.jpg";
import pioggia from "../img/pioggia.jpg";
import sole from "../img/sole.jpg";

export default function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={neve}
          alt="First slide"
          style={{ border: "inset" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pioggia}
          alt="Third slide"
          style={{ border: "inset" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sole}
          alt="Third slide"
          style={{ border: "inset" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}
