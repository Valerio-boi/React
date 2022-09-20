import React, { useState, useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HomeCard from '../components/general/HomeCard'
import CardProduct from '../components/general/CardProduct'
import ir_prai from '../components/resources/img/IR_PRAi.jpg'
import ir_prai30 from '../components/resources/img/IR_PRA30.jpg'
import ir_drgi from '../components/resources/img/IR_DRGi.jpg'
import pm_tmix from '../components/resources/img/PM_TMix.jpg'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next';
import pralinatrice from '../components/resources/img/pralinatrice.jpg'
import praPdf from '../components/resources/pdf/IRPRA.pdf'
import mPRA30 from '../components/resources/pdf/mPRA30.pdf'
import irdrg from '../components/resources/pdf/IRDRG.pdf'

const Home = () => {

    const [size, setSize] = useState(window.innerWidth);

    const { i18n, t } = useTranslation()


    const updateSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateSize);
    }, []);

    return (
        <>
            <Header />
            <HomeCard />

            <div style={{ marginTop: '20px' }}>
                <h1>{t('Catalogo.Title')}</h1>
            </div>


            {renderSwitch(i18n.language, t)}


            <Footer />
        </>
    );


    function renderSwitch(param, t) {
        if (size > 1218) {
        switch (param) {
            case 'IT':
                return (
                    <Container fluid>
                        <div className="row">
                            <div className="col">
                                <CardProduct img={ir_prai} title='Machine1.Title' description='Machine1.Description' button='LabelButton.Button'
                                 infoTitle="PralinatricePRA60.Title" indoDescription="PralinatricePRA60.Description" infoList="PralinatricePRA60.List"
                                 image={pralinatrice} optional='PralinatricePRA60.Optional'
                                 link={praPdf} disabled={false} videoLink="https://www.youtube.com/embed/mPPWG5ys7sY"/>
                            </div>
                            <div className="col">
                                <CardProduct img={ir_prai30} title='Machine2.Title' description='Machine2.Description' button='LabelButton.Button' disabled={false} 
                                 infoTitle="PralinatricePRA30.Title" indoDescription="PralinatricePRA30.Description" infoList="PralinatricePRA30.List"
                                 link={mPRA30} image={ir_prai30} videoLink=""/>
                            </div>
                            <div className="col">
                                <CardProduct img={ir_drgi} title='Machine3.Title' description='Machine3.Description' button='LabelButton.Button' disabled={false}
                                infoTitle="ConfettatriceDRG60.Title" indoDescription="ConfettatriceDRG60.Description" infoList="ConfettatriceDRG60.List"
                                link={irdrg} image={ir_drgi} videoLink=""/>
                            </div>
                            <div className="col">
                                <CardProduct img={pm_tmix} title='Machine4.Title' description='Machine4.Description' button='Coming soon' disabled={true}
                                videoLink=""/>
                            </div>
                        </div>
                    </Container>
                )
                break
            case 'EN':
                return (
                    <Container fluid>
                        <div className="row">
                            <div className="col">
                                <CardProduct img={ir_prai} title='Machine1.Title' description='Machine1.Description' button='LabelButton.Button'
                                 infoTitle="PralinatricePRA60.Title" indoDescription="PralinatricePRA60.Description" infoList="PralinatricePRA60.List"
                                 image={pralinatrice} optional='PralinatricePRA60.Optional'
                                 link={praPdf} disabled={false} videoLink="https://www.youtube.com/embed/mPPWG5ys7sY" />
                            </div>
                            <div className="col">
                                <CardProduct img={ir_prai30} title='Machine2.Title' description='Machine2.Description' button='LabelButton.Button' disabled={false} 
                                 infoTitle="PralinatricePRA30.Title" indoDescription="PralinatricePRA30.Description" infoList="PralinatricePRA30.List"
                                 link={mPRA30} image={ir_prai30} videoLink="" />
                            </div>
                            <div className="col">
                                <CardProduct img={ir_drgi} title='Machine3.Title' description='Machine3.Description' button='LabelButton.Button' disabled={false} 
                                infoTitle="ConfettatriceDRG60.Title" indoDescription="ConfettatriceDRG60.Description" infoList="ConfettatriceDRG60.List"
                                link={irdrg} image={ir_drgi} videoLink=""/>
                            </div>
                            <div className="col">
                                <CardProduct img={pm_tmix} title='Machine4.Title' description='Machine4.Description' button='Coming soon' disabled={true} />
                            </div>
                        </div>
                    </Container>
                )
                break
            case 'FR':
                return (
                    <Container fluid>
                        <div className="row">
                            <div className="col"></div>
                            <div className="col">
                                <CardProduct img={ir_prai} title='Machine1.Title' description='Machine1.Description' button='LabelButton.Button'
                                 infoTitle="PralinatricePRA60.Title" indoDescription="PralinatricePRA60.Description" infoList="PralinatricePRA60.List"
                                 image={pralinatrice} optional='PralinatricePRA60.Optional'
                                 link={praPdf} disabled={false} videoLink="https://www.youtube.com/embed/mPPWG5ys7sY"/>
                            </div>
                            <div className="col">
                                <CardProduct img={ir_drgi} title='Machine2.Title' description='Machine2.Description' button='LabelButton.Button' 
                                infoTitle="ConfettatriceDRG60.Title" indoDescription="ConfettatriceDRG60.Description" infoList="ConfettatriceDRG60.List"
                                link={irdrg} image={ir_drgi} videoLink=""/>
                            </div>
                            <div className="col"></div>
                        </div>
                    </Container>
                )
                break
            case 'ES':
                return (
                    <Container fluid>
                        <div className="row">
                        <div className="col"></div>
                            <div className="col">
                                <CardProduct img={ir_prai} title='Machine1.Title' description='Machine1.Description' button='LabelButton.Button'
                                 infoTitle="PralinatricePRA60.Title" indoDescription="PralinatricePRA60.Description" infoList="PralinatricePRA60.List"
                                 image={pralinatrice} optional='PralinatricePRA60.Optional'
                                 link={praPdf} disabled={false} videoLink="https://www.youtube.com/embed/mPPWG5ys7sY"/>
                            </div>
                            <div className="col">
                                <CardProduct img={ir_drgi} title='Machine3.Title' description='Machine3.Description' button='LabelButton.Button' 
                                infoTitle="ConfettatriceDRG60.Title" indoDescription="ConfettatriceDRG60.Description" infoList="ConfettatriceDRG60.List"
                                link={irdrg} image={ir_drgi} videoLink=""/>
                            </div>
                            <div className="col"></div>
                        </div>
                    </Container>
                )
                break

        }

        }else{
            switch (param) {
                case 'IT':
                    return (
                      
                            <div className="row">
                                <div className="col">
                                    <CardProduct img={ir_prai} title='Machine1.Title' description='Machine1.Description' button='LabelButton.Button'
                                     infoTitle="PralinatricePRA60.Title" indoDescription="PralinatricePRA60.Description" infoList="PralinatricePRA60.List"
                                     image={pralinatrice} optional='PralinatricePRA60.Optional'
                                     link={praPdf} disabled={false} videoLink="https://www.youtube.com/embed/mPPWG5ys7sY"/>
                                </div>
                                <div className="col">
                                    <CardProduct img={ir_prai30} title='Machine2.Title' description='Machine2.Description' button='LabelButton.Button' disabled={false} 
                                     infoTitle="PralinatricePRA30.Title" indoDescription="PralinatricePRA30.Description" infoList="PralinatricePRA30.List"
                                     link={mPRA30} image={ir_prai30} videoLink=""/>
                                </div>
                                <div className="col">
                                    <CardProduct img={ir_drgi} title='Machine3.Title' description='Machine3.Description' button='LabelButton.Button' disabled={false}
                                    infoTitle="ConfettatriceDRG60.Title" indoDescription="ConfettatriceDRG60.Description" infoList="ConfettatriceDRG60.List"
                                    link={irdrg} image={ir_drgi} videoLink=""/>
                                </div>
                                <div className="col">
                                    <CardProduct img={pm_tmix} title='Machine4.Title' description='Machine4.Description' button='Coming soon' disabled={true}
                                    videoLink=""/>
                                </div>
                            </div>
                     
                    )
                    break
                case 'EN':
                    return (
                       
                            <div className="row">
                                <div className="col">
                                    <CardProduct img={ir_prai} title='Machine1.Title' description='Machine1.Description' button='LabelButton.Button'
                                     infoTitle="PralinatricePRA60.Title" indoDescription="PralinatricePRA60.Description" infoList="PralinatricePRA60.List"
                                     image={pralinatrice} optional='PralinatricePRA60.Optional'
                                     link={praPdf} disabled={false} videoLink="https://www.youtube.com/embed/mPPWG5ys7sY" />
                                </div>
                                <div className="col">
                                    <CardProduct img={ir_prai30} title='Machine2.Title' description='Machine2.Description' button='LabelButton.Button' disabled={false} 
                                     infoTitle="PralinatricePRA30.Title" indoDescription="PralinatricePRA30.Description" infoList="PralinatricePRA30.List"
                                     link={mPRA30} image={ir_prai30} videoLink="" />
                                </div>
                                <div className="col">
                                    <CardProduct img={ir_drgi} title='Machine3.Title' description='Machine3.Description' button='LabelButton.Button' disabled={false} 
                                    infoTitle="ConfettatriceDRG60.Title" indoDescription="ConfettatriceDRG60.Description" infoList="ConfettatriceDRG60.List"
                                    link={irdrg} image={ir_drgi} videoLink=""/>
                                </div>
                                <div className="col">
                                    <CardProduct img={pm_tmix} title='Machine4.Title' description='Machine4.Description' button='Coming soon' disabled={true} />
                                </div>
                            </div>
                       
                    )
                    break
                case 'FR':
                    return (
                     
                            <div className="row">
                                <div className="col"></div>
                                <div className="col">
                                    <CardProduct img={ir_prai} title='Machine1.Title' description='Machine1.Description' button='LabelButton.Button'
                                     infoTitle="PralinatricePRA60.Title" indoDescription="PralinatricePRA60.Description" infoList="PralinatricePRA60.List"
                                     image={pralinatrice} optional='PralinatricePRA60.Optional'
                                     link={praPdf} disabled={false} videoLink="https://www.youtube.com/embed/mPPWG5ys7sY"/>
                                </div>
                                <div className="col">
                                    <CardProduct img={ir_drgi} title='Machine2.Title' description='Machine2.Description' button='LabelButton.Button' 
                                    infoTitle="ConfettatriceDRG60.Title" indoDescription="ConfettatriceDRG60.Description" infoList="ConfettatriceDRG60.List"
                                    link={irdrg} image={ir_drgi} videoLink=""/>
                                </div>
                                <div className="col"></div>
                            </div>
                     
                    )
                    break
                case 'ES':
                    return (
                     
                            <div className="row">
                            <div className="col"></div>
                                <div className="col">
                                    <CardProduct img={ir_prai} title='Machine1.Title' description='Machine1.Description' button='LabelButton.Button'
                                     infoTitle="PralinatricePRA60.Title" indoDescription="PralinatricePRA60.Description" infoList="PralinatricePRA60.List"
                                     image={pralinatrice} optional='PralinatricePRA60.Optional'
                                     link={praPdf} disabled={false} videoLink="https://www.youtube.com/embed/mPPWG5ys7sY"/>
                                </div>
                                <div className="col">
                                    <CardProduct img={ir_drgi} title='Machine3.Title' description='Machine3.Description' button='LabelButton.Button' 
                                    infoTitle="ConfettatriceDRG60.Title" indoDescription="ConfettatriceDRG60.Description" infoList="ConfettatriceDRG60.List"
                                    link={irdrg} image={ir_drgi} videoLink=""/>
                                </div>
                                <div className="col"></div>
                            </div>
                      
                    )
                    break
    
            }
        }
    }


}




export default Home