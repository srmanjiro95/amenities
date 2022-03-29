import React from "react";
import Layout from "../../components/layouts";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Form, Button, Icon } from "semantic-ui-react";
import CreditosService from "../../services/creditos/creditos.service";

const URL_BASE_A1 = process.env.NEXT_PUBLIC_URL_BASE_A1

const Nuevo = () => {

  const [users, setUsers] = useState(true);

  const router = useRouter()

  const [form, setForm] = useState({
    id: '',
    title: '',
    author: ''
  })

  const handleChange = e => {

    const {value, name} = e.target
    setForm({
      ...form,
      [name]: value
    })

  }

  const handleSubmit = e => {
    e.preventDefault()
    postData(form)
  }

  const postData = async (form) => {

    if(CreditosService.postCredito(form)){
      router.push('/creditos')
    }

  }

  return (
    <Layout>

      <h3>Nuevo Registro</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Título</label>
          <input 
          placeholder='Título'
          autoComplete="off"
          name="title"
          value={form.title}
          onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Autor</label>
          <input 
          placeholder='Autor'
          autoComplete="off"
          name="author"
          value={form.author}
          onChange={handleChange}
          />
        </Form.Field>
        <Button type='submit' primary><Icon name='save' /> Guardar</Button>
        <Link href="/creditos">
            <a>
            <Button
            floated='left'
            icon
            labelPosition='left'
            primary
          >
            <Icon name='list' /> Salir
          </Button>
            </a>
          </Link>
      </Form>
    </Layout>
  )
}

export default Nuevo