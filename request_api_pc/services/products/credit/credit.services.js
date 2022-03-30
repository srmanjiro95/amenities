import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE_A1;
const TOKEN = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;
const OAUTH = process.env.NEXT_TEMP_OAUTH_TOKEN;

const CreditService = {
  getCredit: async function () {
    try {
      // Sin cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/credit'); */

      // Con cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/credit', {
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
  getCreditNextPaymets: async function () {
    try {
      // Sin cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/credit/next-payments'); */

      // Con cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/credit/next-payments', {
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

export default CreditService;