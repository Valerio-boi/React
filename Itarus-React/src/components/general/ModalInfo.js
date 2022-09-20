import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next';


const ModalInfo = (props) => {
    const { t } = useTranslation()

    return (
        <Modal
            show={props.show}
            backdrop="static"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    {t('ModalInfo.GeneralTilte')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{t('ModalInfo.FirstTitle')}</h4>
                <p>
                    {t('ModalInfo.FirstDescription')}
                </p>
                <br></br>
                <h4>{t('ModalInfo.SecondTitle')}</h4>
                <p>
                    {t('ModalInfo.SecondDescription')}
                </p>
                <br></br>
                <h4>{t('ModalInfo.Contatti')}</h4>
                <p>
                    {t('ModalInfo.DescriptionContatti')}
                </p>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default ModalInfo