import { useState } from "react";
import { Container } from "semantic-ui-react";
import Link from 'next/link';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Tenency from "./tenency/Tenency";
import Modal from "../../components/modal/Modal";
import Footer from "../../components/container/footer/Footer";
import Header from "../../components/container/header/Header";


export default function Auth() {

    const [showLogin, setShowlogin] = useState(true);
    const [showModal, setShowModal] = useState(false)

    const showRecoverPass = () => setShowlogin(false)

    const onShowModal = () => setShowModal(true);


    return (
        <div>
            <Header />
            <> <Tenency /></>
            <Modal show={showModal} setShow={setShowModal} />
            <Footer />
        </div>
    );
}