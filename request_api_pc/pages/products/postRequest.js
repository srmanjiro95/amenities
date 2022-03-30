import Layout from "../../components/layouts";
import { useState } from "react";

import ProductRequestService from "../../services/products/request_new_renew.services";


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
  
  return ProductRequestService.postRequest("leasing", "ggonzalez@unifin.com.mx", "nuevo Leasing")

}