const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "928a73e5ca9446569216e6658872367b";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}clientid=${clientId}&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
