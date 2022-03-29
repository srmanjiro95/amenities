import React from "react";
import Layout from "../../components/layouts";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Table, Icon, Button } from "semantic-ui-react";
import CreditosService from "../../services/creditos/creditos.service.js";

const URL_BASE_A1 = process.env.NEXT_PUBLIC_URL_BASE_A1;

export default function Home({ data }) {
  const [users, setUsers] = useState(true);

  console.log(data);

  const router = useRouter();

  const deleteData = async (id) => {

    if(CreditosService.deleteCredito(id)){
      router.push("/creditos");
    }
    

  };

  return (
    <Layout>
      <h3>Lista de Registros</h3>
      <Table celled striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Título</Table.HeaderCell>
            <Table.HeaderCell>Autor</Table.HeaderCell>
            <Table.HeaderCell>Funciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map(({ id, title, author }) => (
            <Table.Row>
              <Table.Cell>{id}</Table.Cell>
              <Table.Cell>{title}</Table.Cell>
              <Table.Cell>{author}</Table.Cell>
              <Table.Cell>
                <Link href={`/creditos/${id}`}>
                  <a className="text-success"> D </a>
                </Link>
                |
                <Link href={`/creditos/editar/${id}`}>
                  <a className="text-primary"> E </a>
                </Link>
                |
                <a
                  href="#"
                  className="text-danger"
                  onClick={() => deleteData(id)}
                >
                  {" "}
                  B{" "}
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Link href="/creditos/nuevo">
                <a>
                  <Button floated="right" icon labelPosition="left" primary>
                    <Icon name="plus" /> Nuevo Registro
                  </Button>
                </a>
              </Link>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Layout>
  );
}

export async function getStaticProps() {
  
  return CreditosService.getCreditos()

}
