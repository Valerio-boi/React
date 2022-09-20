import React, { useState, useEffect } from 'react'




const Footer = () => {

    const [size, setSize] = useState(window.innerWidth);
    const updateSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateSize);
    }, []);

    if (size > 1218) {
        return (
            <footer className="footer">
                <p >ITARUS di Marco Giacobbo Copyright © 2021 P.Iva 04073950240 marcogiacobbo@itarus.eu</p>
            </footer >
        );
    } else {
        return (
            <footer className="footerCell">
                <p >ITARUS di Marco Giacobbo Copyright © 2021 P.Iva 04073950240 marcogiacobbo@itarus.eu</p>
            </footer >
        );
    }
};


export default Footer
