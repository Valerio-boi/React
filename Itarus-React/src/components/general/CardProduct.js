import React, { useState, useEffect } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import ModalProduct from "./ModalProduct";

const CardProduct = (props) => {

  const [modalShow, setModalShow] = React.useState(false);
  const { t } = useTranslation();
  const [size, setSize] = useState(window.innerWidth);

  const updateSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize);
  }, []);


  return (
    <>
      <Card style={{ width: size > 1218 ? "25rem" : "23rem", marginTop: "50px" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body style={{ height: "8rem" }}>
          <Card.Title>{t(props.title)}</Card.Title>
          <Card.Text>{t(props.description)}</Card.Text>
          <Card.Text>{t(props.lista)}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" style={{ width: "100%" }} onClick={() => setModalShow(true)} disabled={props.disabled}>
            {t(props.button)}
          </Button>
        </Card.Footer>
      </Card>

      <ModalProduct
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={t(props.infoTitle)}
        description={t(props.indoDescription)}
        list={t(props.infoList)}
        img={props.image}
        subImgFirst={props.firstSubImage}
        subImgSecond={props.secondSubImage}
        optional={t(props.optional)}
        link={props.link}
        videoLink={props.videoLink}
      />
    </>
  );
};

export default CardProduct;
