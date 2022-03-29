import Layout from "../../components/layouts";
import { useState } from "react";

import ContractsService from "../../services/contracts/contracts.services";


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
  
  return ContractsService.getRequestInsurancePolicy("leasing", "id_policy")

}