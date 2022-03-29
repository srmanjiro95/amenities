import { useState } from "react";
import { Container } from "semantic-ui-react";
import Link from 'next/link';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


export default function HeaderElement() {

    return (
        <Container fluid className="contenedorGHLogin">
            <Link href="/auth/login" as={'/auth/login'}>
                <a><img className="imagen" src="/logoAuthUnifin.png" /></a>
            </Link>
        </Container>
    );
}


