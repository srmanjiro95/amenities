import Layout from "../components/layouts";
import { useState } from "react";
import {Container, Grid, Segment, Button, GridColumn} from "semantic-ui-react";

import LeasingService from  "../services/products/leasing/lesing.service";
import FactoringService from  "../services/products/factoring/factoring.services";
import CreditService from "../services/products/credit/credit.services";
import CreditSOSService from "../services/products/credit_sos/credit_sos.services";
import CreditSimpleService from "../services/products/credit_simple/credit_simple.services";
import PaymentsService from "../services/products/payments/payments.services";
import BannersService from "../services/banners/banners.services";
import CreditNotesService from "../services/credit_notes/credit_notes.services";

function callService(parametros){
    console.log(parametros);
}

export default function ExampleServices() {
    return (
        <Container>
            <Grid>
                <GridColumn width={16}>
                    <h3>¿Cómo usar los servicios?</h3>
                    <p>
                        En la presente página estan implementados los siguientes servicios. 
                        Pudes observar su funcionamiento con el servidor fake api que ayudan a simular 
                        las respuestas documentadas del portal de clientes actual.
                    </p>
                </GridColumn>
                <GridColumn width={8}>
                    <h3>Banners</h3>
                    <ul>
                        <li>[GET] Banners <Button basic onClick={BannersService.index}>index</Button></li>
                    </ul>
                    <h3>Productos</h3>
                    <ul>
                        <li>[GET] Leasing <Button basic onClick={LeasingService.index}>index</Button></li>
                        <li>[GET] Leasing next payments <Button basic onClick={LeasingService.nextPaymets}>Leasing next payments</Button></li>
                        <li>[GET] Factoring <Button basic onClick={FactoringService.index}>index</Button></li>
                        <li>[GET] Factoring next payments <Button basic onClick={FactoringService.nextPaymets}>Factoring next payments</Button></li>
                        <li>[GET] Credit <Button basic onClick={CreditService.index}>index</Button></li>
                        <li>[GET] Credit next payments <Button basic onClick={CreditService.nextPaymets}>Credit next payments</Button></li>
                        <li>[GET] Credit SOS <Button basic onClick={CreditSOSService.index}>index</Button></li>
                        <li>[GET] Credit Simple <Button basic onClick={CreditSimpleService.index}>index</Button></li>
                        <li>[GET] Pago de financiamiento <Button basic onClick={PaymentsService.index}>index</Button></li>
                    </ul>
                    <h3>Credit Notes</h3>
                    <ul>
                        <li>[GET] index 
                            <button className="ui basic button" onClick={CreditNotesService.index}>index</button>
                        </li>
                        <li>[GET] index(leasing) 
                            <button className="ui basic button" onClick={CreditNotesService.leasing}>index(leasing)</button>
                        </li>
                        <li>[GET] index(factoring) 
                            <button className="ui basic button" onClick={CreditNotesService.factoring}>index(factoring)</button>
                        </li>
                        <li>[GET] getIndex(factoring) 
                            <button className="ui basic button" onClick={callService({"service": "leasing"})}>getIndex</button>
                        </li>
                    </ul>
                </GridColumn>
                <GridColumn width={8}>
                    <Segment color="blue"></Segment>
                </GridColumn>
            </Grid>
        </Container>
    );
}