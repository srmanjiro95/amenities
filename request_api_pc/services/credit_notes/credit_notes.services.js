import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE_A1;
const APIKEY = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;
const OAUTH = process.env.NEXT_TEMP_OAUTH_TOKEN;

const CreditNotesService = {
  getIndex: async function (service) {
    try {
      // Sin cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/notas_credito/' + service); */

      // Con cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/notas_credito/' + service, {
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

  getMonthIndex: async function (service, year_month) {
    try {
      // Si cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/notas_credito/' + service + '/' + year_month); */

      // Con cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/notas_credito/' + service + '/' + year_month, {
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

  getMonthDownloadZip: async function (service, year_month) {
    try {
      // Si cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/notas_credito/' + service + '/' + year_month + '/zip'); */

      // Con cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/notas_credito/' + service + '/' + year_month + '/zip', {
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

  getDownloadFile: async function (service, contract, type) {
    try {
      // Si cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/notas_credito/' + service + '/' + contract + '/' + type); */

      // Con cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/notas_credito/' + service + '/' + contract + '/' + type, {
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

export default CreditNotesService;