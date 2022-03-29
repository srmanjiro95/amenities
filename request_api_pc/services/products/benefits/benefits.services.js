import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE_A1;
//const TOKEN = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;

const BenefitsService = {
  getBenefits: async function() {
    try {
      // Sin cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/benefits');

      // Con cabeceras
      /*const res = await Axios.get(URL_BASE + '/api/v2/benefits', {
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

export default BenefitsService;