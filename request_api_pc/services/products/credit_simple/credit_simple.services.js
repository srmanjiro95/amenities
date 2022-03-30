import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE_A1;
const TOKEN = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;
const OAUTH = process.env.NEXT_TEMP_OAUTH_TOKEN;

const CreditSimpleService = {
  getCreditSimple: async function() {
    try {
      // Sin cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/credit_simple'); */

      // Con cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/credit_simple', {
        headers: {
          'api-key': TOKEN,
          'uoauth-token': OAUTH
        }
      });
      
      return {
        props: { data: res.data },
      };
    } catch (error) {
      console.log(error);
    }
  },
  getCreditSimpleNextPayments: async function() {
    try {
      // Sin cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/credito_simple/next-payments'); */

      // Con cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/credito_simple/next-payments', {
        headers: {
          'api-key': TOKEN,
          'uoauth-token': OAUTH
        }
      });
      
      return {
        props: { data: res.data },
      };
    } catch (error) {
      console.log(error);
    }
  }
};

export default CreditSimpleService;