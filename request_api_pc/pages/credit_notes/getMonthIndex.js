import Layout from "../../components/layouts";
import { useState } from "react";

import CreditNotesService from "../../services/credit_notes/credit_notes.services";


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
  
  return CreditNotesService.getMonthIndex("leasing", "2021-08")

}