import React, { useEffect } from "react";
import Layout from "../../components/layouts";
import { useState } from "react";
import AuthService from "../../services/auth/auth.service";


export default function Home({ data }) {
  const [users, setUsers] = useState(true);

  console.log(data);
  console.log(data.data.uoauth_token);


  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(data.data.uoauth_token));
  }, [items]);



  return (
    <Layout>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
        <h3>Verifica la consola</h3>
    </Layout>
  );
}

export async function getStaticProps() {
  
  return AuthService.postLogin()

}