import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE_A1;
//const TOKEN = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;

const LeasingService = {
  getLeasing: async function () {
    try {
      // Sin cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/leasing');

      // Con cabeceras
      /*const res = await Axios.get(URL_BASE + '/api/v2/leasing', {
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
  getLeasingNextPaymets: async function () {
    try {
      // Sin cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/leasing/next-payments');

      // Con cabeceras
      /*const res = await Axios.get(URL_BASE + '/leasing/next-payments', {
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

export default LeasingService;
