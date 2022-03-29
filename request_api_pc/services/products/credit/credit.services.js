import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE_A1;
//const TOKEN = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;

const CreditService = {
  getCredit: async function () {
    try {
      // Sin cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/credit');

      // Con cabeceras
      /*const res = await Axios.get(URL_BASE + '/credit', {
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
  getCreditNextPaymets: async function () {
    try {
      // Sin cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/credit/next-payments');

      // Con cabeceras
      /*const res = await Axios.get(URL_BASE + '/credit', {
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

export default CreditService;