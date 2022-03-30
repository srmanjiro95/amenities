import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE_A1;
const APIKEY = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;
const OAUTH = process.env.NEXT_TEMP_OAUTH_TOKEN;

const LeasingService = {
  getLeasing: async function () {
    try {
      // Sin cabeceras
      // const res = await Axios.get(URL_BASE + '/api/v2/leasing');

      // Con cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/leasing', {
        headers: {
          'api-key': APIKEY,
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
  getLeasingNextPaymets: async function () {
    try {
      // Sin cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/leasing/next-payments'); */

      // Con cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/leasing/next-payments', {
        headers: {
          'api-key': APIKEY,
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

export default LeasingService;
