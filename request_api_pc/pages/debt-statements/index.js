import React from "react";
import Layout from "../../components/layouts";
import { useState } from "react";

import DebtStatementsService from "../../services/debtStatements/debtStatements.service";

export default function Home({ data }) {
  const [users, setUsers] = useState(true);

  console.log(DebtStatementsService.getIndex());

  return (
    <Layout>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
        <h3>Verifica la consola</h3>
    </Layout>
  );
}

/* export async function getStaticProps() {
  
  return DebtStatementsService.getIndex();

} */
