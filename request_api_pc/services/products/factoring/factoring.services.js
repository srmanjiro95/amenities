import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE_A1;
//const TOKEN = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;

const FactoringService = {
  getFactoring: async function () {
    try {
      // Sin cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/factoring');

      // Con cabeceras
      /*const res = await Axios.get(URL_BASE + '/api/v2/factoring', {
        headers: {
          'api-key': TOKEN,
        }
      });*/
      
      return {
        props: { data: res.data },
      };
    } catch (error) {
      console.log(error);
    }
  },
  getFactoringNextPaymets: async function () {
    try {
      // Sin cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/factoring/next-payments');

      // Con cabeceras
      /*const res = await Axios.get(URL_BASE + '/api/v2/factoring/next-payments', {
        headers: {
          'api-key': TOKEN,
        }
      });*/
      
      return {
        props: { data: res.data },
      };
    } catch (error) {
      console.log(error);
    }
  }
};

export default FactoringService;
