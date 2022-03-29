import React from 'react'
import Layout from "../components/layouts";
import Auth from '../components/auth/Auth';
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
/* import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' */

export default function Home(props) {
  const { children } = props;
  const router = useRouter();

  const [users, setUsers] = useState(true);

  /* useEffect(() => {
    router.push('/auth/login');
  }, []); */


  return users ? <Auth /> : <Layout />;
}
