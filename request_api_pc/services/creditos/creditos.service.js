import Axios from "axios";

const URL_BASE_A1 = process.env.NEXT_PUBLIC_URL_BASE_A1;
//const TOKEN_URL_BASE_A1 = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;

const CreditosService = {
  getCreditos: async function () {
    try {
      // Sin cabeceras
      const res = await Axios.get(URL_BASE_A1);

      // Con cabeceras
      /*const res = await Axios.get(URL_BASE_A1, {
        headers: {
          'api-key': TOKEN_URL_BASE_A1,
        }
      });*/

      return {
        props: { data: res.data },
      };
    } catch (error) {
      console.log(error);
    }
  },

  deleteCredito: async function (id) {
    try {
      // Sin cabeceras
      await Axios.delete(URL_BASE_A1 + "/" + id);

      // Con cabeceras
      /*await Axios.delete(URL_BASE_A1 + "/" + id, {
        headers: {
          'api-key': TOKEN_URL_BASE_A1,
          'uoauth-token' : UNIFIN_UOAUTH_TOKEN
        }
      });*/

    } catch (error) {
      console.log(error);
    }
  },

  creditoDetail: async function (id) {
    try {
      const res = await Axios.get(URL_BASE_A1 + "/" + id);

      return {
        props: { data: res.data },
      };
    } catch (error) {
      console.log(error);
    }
  },

  getResPaths: async function () {
    const res = await Axios.get(URL_BASE_A1)
    return res;
  },

  postCredito: async function (form) {
    try {

      const res = await Axios.post(URL_BASE_A1, {
        id: Number(form.id),
        title: form.title,
        author: form.author
      })

    } catch (error) {
      console.log(error)
    }
  },

  patchCredito: async function (form) {
    try {

      const res = await Axios.patch(URL_BASE_A1 + "/" + form.id, {
        title: form.title,
        author: form.author
      })

    } catch (error) {
      console.log(error)
    }    
  }


};

export default CreditosService;
