import React from 'react';
import imgMandorle from '../resources/img/slide1.jpg'
import imgCioccolata from '../resources/img/slide2.jpg'
import imgPane from '../resources/img/pane.jpg'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { useTranslation } from 'react-i18next';



const HomeCard = () => {

    const {i18n, t } = useTranslation()
    return (
        renderSwitch(i18n.language, t) 
    );
};


function renderSwitch(param, t) {
    switch (param) {
        case 'EN':
            return (
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={imgMandorle} />
                        <Card.Body>
                            <Card.Title>{t('InitialCard.Title1')}</Card.Title>
                            <Card.Text>
                                {t('InitialCard.Description')}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={imgCioccolata} />
                        <Card.Body>
                            <Card.Title>{t('SecondCard.Title1')}</Card.Title>
                            <Card.Text>
                                {t('SecondCard.Description')}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={imgPane} />
                        <Card.Body>
                            <Card.Title>{t('ThirdCard.Title1')}</Card.Title>
                            <Card.Text>
                                {t('ThirdCard.Description')}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            );
        default:
            return (
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={imgMandorle} />
                        <Card.Body>
                            <Card.Title>{t('InitialCard.Title1')}</Card.Title>
                            <Card.Text>
                                {t('InitialCard.Description')}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={imgCioccolata} />
                        <Card.Body>
                            <Card.Title>{t('SecondCard.Title1')}</Card.Title>
                            <Card.Text>
                                {t('SecondCard.Description')}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            );
    }
}

export default HomeCard