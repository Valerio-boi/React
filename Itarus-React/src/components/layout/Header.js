import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import imgEng from '../resources/img/eng.jpg'
import imgFra from '../resources/img/fra.jpg'
import imgIta from '../resources/img/ita.jpg'
import imgSpa from '../resources/img/spa.jpg'
import logoItarus from '../resources/img/logoIr.jpg'
import Button from 'react-bootstrap/Button'
import ModalInfo from '../general/ModalInfo'


const NavBar = () => {

    const { i18n, t } = useTranslation();

    const [modalShow, setModalShow] = useState(false);
    const [size, setSize] = useState(window.innerWidth);

    const changeLanguage = (event) => {
        i18n.changeLanguage(event);
    }

    const updateSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateSize);
    }, []);

    if (size > 1218) {
        return (
            <>
                < Navbar bg="dark" variant="dark" style={{ backgroundImage: `url('${logoItarus}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                    <Container fluid>
                        <Navbar.Brand href="#home">
                            <h1>
                                Itarus
                            </h1>
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#Italiano">
                                <img src={imgIta} alt='Italiano' onClick={() => changeLanguage('IT')} />
                            </Nav.Link>

                            <Nav.Link href="#Inglese">
                                <img src={imgEng} alt='Inglese' onClick={() => changeLanguage('EN')} />
                            </Nav.Link>

                            <Nav.Link href="#Spagnolo">
                                <img src={imgSpa} alt='Spagnolo' onClick={() => changeLanguage('ES')} />
                            </Nav.Link>

                            <Nav.Link href="#Francese">
                                <img src={imgFra} alt='Francese' onClick={() => changeLanguage('FR')} />
                            </Nav.Link>
                        </Nav>
                    </Container>
                    <Button variant="primary" onClick={() => setModalShow(true)} style={{ marginRight: '10px', backgroundColor: '#eeeeee', borderColor: '#000000', color: '#000' }}>
                        {t('Contatti.Contacts')}
                    </Button>
                </Navbar >
                <ModalInfo show={modalShow} onHide={() => setModalShow(false)} />
            </>
        )
    } else {
        return (
            <>
                < Navbar bg="dark" variant="dark" style={{width:"100%"}}>
      
                    <Navbar.Brand href="#home">
                            <h5>
                                Itarus
                            </h5>
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#Italiano">
                                <img src={imgIta} alt='Italiano' onClick={() => changeLanguage('IT')} />
                            </Nav.Link>

                            <Nav.Link href="#Inglese">
                                <img src={imgEng} alt='Inglese' onClick={() => changeLanguage('EN')} />
                            </Nav.Link>

                            <Nav.Link href="#Spagnolo">
                                <img src={imgSpa} alt='Spagnolo' onClick={() => changeLanguage('ES')} />
                            </Nav.Link>

                            <Nav.Link href="#Francese">
                                <img src={imgFra} alt='Francese' onClick={() => changeLanguage('FR')} />
                            </Nav.Link>
                        </Nav>
              
                    <Button variant="primary" onClick={() => setModalShow(true)} style={{ marginRight: '10px', backgroundColor: '#eeeeee', borderColor: '#000000', color: '#000' }}>
                        {t('Contatti.Contacts')}
                    </Button>
                </Navbar >
                <ModalInfo show={modalShow} onHide={() => setModalShow(false)} />
            </>
        );
    }
}

export default NavBar