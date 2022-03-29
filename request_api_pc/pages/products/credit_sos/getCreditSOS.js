import Layout from "../../../components/layouts";
import { useState } from "react";

import CreditSOSService from "../../../services/products/credit_sos/credit_sos.services";


export default function Home({ data }) {
  const [users, setUsers] = useState(true);

  console.log(data);

  return (
    <Layout>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
        <h3>Verifica la consola</h3>
    </Layout>
  );
}

export async function getStaticProps() {
  
  return CreditSOSService.getCreditSOS()

}