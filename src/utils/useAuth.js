import {useHistory} from 'react-router-dom';
import SpotifyWebApi from "spotify-web-api-js";

export default function useAuth() {
    const spotify = new SpotifyWebApi();
    const params = JSON.parse(localStorage.getItem("params"));
    const history = useHistory();
    try {
        spotify.setAccessToken(params.access_token);
      } catch (e) {
        console.log(e);
        history.push("/");
      }

      return spotify;
}
