import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE_A1;
const APIKEY = process.env.NEXT_PUBLIC_TOKEN_URL_BASE_A1;

const AuthService = {
    postLogin: async function() {
        try {
            const res = await Axios.post(URL_BASE + "/api/v2/login", {
              user: "jean.salazar@yaxche.mx",
              password: "12345"
            }, {
              headers: {
                'api-key': APIKEY,
              }
            });
            
            console.log(res.data);
            return {
              props: { data: res.data },
            };
        } catch (error) {
            console.log(error);
        }
    }
};

export default AuthService;