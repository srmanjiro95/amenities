import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE_A1;
const APIKEY = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;
const OAUTH = process.env.NEXT_TEMP_OAUTH_TOKEN;

const BannersService = {
  getBanners: async function () {
    try {
      // Sin cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/contents/banners'); */

      // Con cabeceras
      const res = await Axios.get(URL_BASE + '/api/v2/contents/banners', {
        headers: {
          'api-key': APIKEY
        }
      });

      return {
        props: { data: res.data },
      };
    } catch (error) {
      console.log(error);
    }
  },
  postRequestInformation: async function(slug) {
    try {
      // Sin cabeceras
      /* const res = await Axios.get(URL_BASE + '/api/v2/contents/banners/{slug}/request-information'); */

      // Con cabeceras
      // axios.post(url[, data[, config]])
      // Primero va el data, después parte del config (headers)
      const res = await Axios.post(URL_BASE + '/api/v2/contents/banners/'+ slug +'/request-information', null, {
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

export default BannersService;