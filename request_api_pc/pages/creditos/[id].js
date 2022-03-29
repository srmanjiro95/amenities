import React from "react";
import Layout from "../../components/layouts";
import { useState } from "react";
import Link from "next/link";

import { Form, Button, Icon } from "semantic-ui-react";
import CreditosService from "../../services/creditos/creditos.service";

const URL_BASE_A1 = process.env.NEXT_PUBLIC_URL_BASE_A1

export default function Post({data}) {

  const [users, setUsers] = useState(true);

  console.log(data);

  return (
    <Layout>

      <h3>Detalle de Registro</h3>
      <Form>
        <Form.Field>
          <label>ID: {data.id}</label>
        </Form.Field>
        <Form.Field>
          <label>Título: {data.title}</label>
        </Form.Field>
        <Form.Field>
          <label>Autor: {data.author}</label>
        </Form.Field>
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
