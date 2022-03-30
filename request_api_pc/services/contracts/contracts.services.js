import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE_A1;
const APIKEY = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;
const OAUTH = process.env.NEXT_TEMP_OAUTH_TOKEN;

const ContractsService = {
  getLeasing: async function () {
    try {
      // Sin cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/contracts/leasing'); */

      // Con cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/contracts/leasing', {
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

  getCredit: async function () {
    try {
      // Si cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/contracts/credit'); */

      // Con cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/contracts/credit', {
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

  getRequestContractFile: async function (service, contract) {
    try {
      // Si cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/contracts/request-contract-file/' + service + '/' + contract); */

      // Con cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/contracts/request-contract-file/' + service + '/' + contract, {
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

  getRequestInsurancePolicy: async function (service, id_policy) {
    try {
      // Si cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/contracts/request-insurance-policy/' + service + '/' + id_policy); */

      // Con cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/contracts/request-insurance-policy/' + service + '/' + id_policy, {
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

  postRequestInsuranceRenewal: async function(contract_number) {
    // Make the data(body)
    let data_body = {
      "contract_number": contract_number
    }

    try {
      // Sin cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/contracts/request-insurance-renewal'); */

      // Con cabeceras
      // axios.post(url[, data[, config]])
      // Primero va el data, después parte del config (headers)
      const res = await Axios.post(URL_BASE + '/api/v2/contracts/request-insurance-renewal', data_body, {
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

export default ContractsService;