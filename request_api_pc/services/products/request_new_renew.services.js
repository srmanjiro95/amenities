import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE_A1;
const APIKEY = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;
const OAUTH = process.env.NEXT_TEMP_OAUTH_TOKEN;

const ProductRequestService = {
  postRequest: async function (service, email, product) {
    // Make the data(body)
    let data_body = {
      "email": email,
      "product": product
    }
    try {
      // Sin cabeceras
      // const res = await Axios.get(URL_BASE + '/api/v2/leasing/request-new');

      // Con cabeceras
      // axios.post(url[, data[, config]])
      // Primero va el data, después parte del config (headers)
      const res = await Axios.post(URL_BASE + '/api/v2/'+ service +'/request-new', data_body, {
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

export default ProductRequestService;
