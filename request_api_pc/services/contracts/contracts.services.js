import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE_A1;
//const TOKEN = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;

const AccountStatementsService = {
  getLeasing: async function () {
    try {
      // Sin cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/contracts/leasing');

      // Con cabeceras
      /*const res = await Axios.get(URL_BASE + '/api/v2/contracts/leasing', {
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

  getCredit: async function () {
    try {
      // Si cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/contracts/credit');

      // Con cabeceras
      /*const res = await Axios.get(URL_BASE + '/api/v2/contracts/credit', {
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

  getRequestContractFile: async function (service, contract) {
    try {
      // Si cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/contracts/request-contract-file/' + service + '/' + contract);

      // Con cabeceras
      /*const res = await Axios.get(URL_BASE + '/api/v2/contracts/request-contract-file/' + service + '/' + contract, {
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

  getRequestInsurancePolicy: async function (service, id_policy) {
    try {
      // Si cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/contracts/request-insurance-policy/' + service + '/' + id_policy);

      // Con cabeceras
      /*const res = await Axios.get(URL_BASE + '/api/v2/contracts/request-insurance-policy/' + service + '/' + id_policy, {
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

export default AccountStatementsService;