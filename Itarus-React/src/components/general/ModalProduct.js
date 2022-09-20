import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import { Image } from 'react-bootstrap';

const videoLoader = (props) => {
    if (props !== "") {
        return (
            < div className="video-responsive" >
                <iframe width="1904" height="806" src={props} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div >
        )
    } else {
        return ''
    }
}

function ModalProduct(props) {
    const { t } = useTranslation();
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.description}
                </p>
                <br></br>
                <Container fluid>
                    <Row >
                        <Col>
                            <div dangerouslySetInnerHTML={{ __html: props.list }} style={{ textAlign: 'left' }} />
                        </Col>
                        <Col>
                            <div>
                                <Image src={props.img} responsive />
                            </div>
                        </Col>
                        <div dangerouslySetInnerHTML={{ __html: props.optional }} style={{ textAlign: 'left' }} />
                        <p style={{ paddingBottom: '2%' }}>{t('PralinatricePRA60.Informazioni')} <a href={props.link} title="Scarica pdf">{t('PralinatricePRA60.Catalogo')}.</a></p>
                        <Alert variant='secondary'>
                            <h4>{t('ModalInfo.Contattaci')} <a href="mailto:marcogiacobbo@itarus.eu">marcogiacobbo@itarus.eu</a></h4>
                        </Alert>
                    </Row>
                    {videoLoader(props.videoLink)}
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalProduct