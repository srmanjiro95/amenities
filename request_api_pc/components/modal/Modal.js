import React from 'react'
import { Modal, Icon, Header, Button, Image } from 'semantic-ui-react';

export default function ModalAuth(props) {

    const { show, setShow, title, children, ...rest } = props;


    const onClose = () => setShow(false);
    return (
        <Modal size='small' className='basic-modal' open={show} onClose={onClose} {...rest}>

            <Modal.Content >
                <div className='contentClose'>
                    {title} <Icon name='close' onClick={onClose} />
                </div>
                <Modal.Description>
                    {children}
                    Para registrarte, por favor comunícate con nuestro Centro de Atención a Clientes,
                    te compartimos los números a donde podrás comunicarte:
                    <br />
                    <div className='containerButtons'>
                        <Button className='telephoneNumber' basic color='grey' onClick={onClose}>
                            <div className='containerIconCAll'>
                                <Icon className='iconCall' name='call' />
                            </div> 55 5249 5828
                        </Button>
                        <Button basic color='grey' onClick={onClose}>
                            <div className='containerIconCAll'>
                                <Icon className='iconCall' name='call' />
                            </div>55 5249 5828
                        </Button>
                    </div>
                </Modal.Description>
            </Modal.Content>
        </Modal >

    )
}