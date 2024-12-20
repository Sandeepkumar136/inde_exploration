import axios from "axios";
import qs from 'qs';

const getAccessToken = async () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
    try {
        const response = await axios.post(
            "https://test.api.amadeus.com/v1/security/oauth2/token",
            qs.stringify({
                grant_type: "client_credentials",
                client_id: clientId,
                client_secret: clientSecret,
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
        return response.data.access_token;
    } catch (error) {
        console.error("error returned, ", error);
    }
}

export { getAccessToken };