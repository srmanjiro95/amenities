import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE_A1;
//const TOKEN = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;

const CreditSimpleService = {
  getCreditSimple: async function() {
    try {
      // Sin cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/credit_simple');

      // Con cabeceras
      /*const res = await Axios.get(URL_BASE + '/api/v2/credit_simple', {
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

export default CreditSimpleService;