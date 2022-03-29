import React from "react";
import Layout from "../../../components/layouts";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Form, Button, Icon } from "semantic-ui-react";
import CreditosService from "../../../services/creditos/creditos.service";

const URL_BASE_A1 = process.env.NEXT_PUBLIC_URL_BASE_A1


const Editar = ({data}) => {

  const [users, setUsers] = useState(true);

  const router = useRouter()

  const [form, setForm] = useState({
    id: data.id,
    title: data.title,
    author: data.author
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

    if(CreditosService.patchCredito(form)){
      router.push('/creditos')
    }

  }

  console.log(data);

  return (
    <Layout>

      <h3>Editar Registro</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>ID: {form.id}</label>
          <input 
          type="text"
          placeholder='Id'
          autoComplete="off"
          name="id"
          value={form.id}
          onChange={handleChange}
          hidden
          />
        </Form.Field>
        <Form.Field>
          <label>Título:</label>
          <input 
          placeholder='Título'
          autoComplete="off"
          name="title"
          value={form.title}
          onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Autor:</label>
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
  );
}

export default Editar


export async function getStaticProps({params}) {

  return CreditosService.creditoDetail(params.id)

}

export const getStaticPaths = async () => {
  const res = await CreditosService.getResPaths()
  const props = res.data.slice(0, 10);
  const paths = props.map((post) => ({ params: { id: post.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
};
