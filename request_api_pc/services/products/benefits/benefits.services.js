import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE_A1;
const APIKEY = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;
const OAUTH = process.env.NEXT_TEMP_OAUTH_TOKEN;

const BenefitsService = {
  getBenefits: async function() {
    try {
      // Sin cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/benefits'); */

      // Con cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/benefits', {
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
  postRequestBenefits: async function(id) {
    try {
      // Sin cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/benefits/{id}/request'); */

      // Con cabeceras
      // axios.post(url[, data[, config]])
      // Primero va el data, después parte del config (headers)
      const res = await Axios.post(URL_BASE + '/api/v2/benefits/'+ id +'/request', null, {
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

export default BenefitsService;