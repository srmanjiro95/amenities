import { useState } from "react";
import { Container } from "semantic-ui-react";
import Link from 'next/link';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


export default function FooterElement() {

    const [showElement, setShowElement] = useState(true);


    return (
        <Container fluid className="contenedorGDerechos">

            <div className="row contenedorRowDerechos">
                <div className="col-4 derechos">
                    <p className="derechosReservados">UNIFIN © 2022 Derechos Reservados</p>
                    <p className="derechosPresidente">Presidente Masaryk 111 · Polanco · 11560 · CDMX</p>
                </div>
                <div className="col-4 terminos ">
                    <div className="terminosDiv"><a href="#">Términos y Condiciones</a></div>
                    <div className="terminosDiv"><a href="#"> Aviso de privacidad </a></div>
                </div>
                <div className="col-4 contacto">
                    <div className="contenedoresIcons">
                        <a href="#">
                            <i className="large linkedin icon"></i>
                        </a>
                    </div>
                    <div className="contenedoresIcons">
                        <a href="#">
                            <i className="large facebook f icon"></i>
                        </a>

                    </div>
                    <div className="contenedoresIcons">
                        <a href="#">
                            <i className="large twitter icon"></i>
                        </a>
                    </div>
                    <div className="contenedoresIcons">
                        <a href="#">
                            <i className="large instagram icon"></i>
                        </a>
                    </div>

                </div>
            </div>
        </Container>
    );
}