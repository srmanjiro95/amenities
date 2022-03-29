import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_FAKE_API;
//const TOKEN = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;

const DebtStatementsService = {
  getIndex: async function () {
    try {
      // Sin cabeceras
      const res = await Axios.get(URL_BASE + '/estados_adeudo');

      // Con cabeceras
      /*const res = await Axios.get(URL_BASE + '/estados_adeudo', {
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

export default DebtStatementsService;
