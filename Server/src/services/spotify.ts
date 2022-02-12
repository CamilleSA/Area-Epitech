var spotify: any = require('spotify-web-api-node');

const credentials: any = {
    clientId: '5b224152e29e498288c7f324e06d0d10',
    clientSecret: '00b5e8ccf9ba428e92634c5c79542b2c',
    redirectUri: 'https://api-university.com/auth/spotify/success'
};

/*
var clientId = '5b224152e29e498288c7f324e06d0d10';
var clientSecret = '00b5e8ccf9ba428e92634c5c79542b2c';
const token  = {
  "access_token":"BQDdFcJelEsrMxQAzFOF01Fomh4zdb4odUme12L2DyLv7OsBZ4H4XmOE4lrkGyckaySvpJ8VFdFhARMPAkDxWRzE_77Ic_JPoJMA628wCKiLRm5bydjxy9qxg6rms3VUFMG1yF864d9-FZCWT0bJj4fXWdiKUVLeuJ6TMw",
  "token_type":"Bearer",
  "expires_in":3600,
  "refresh_token":"AQAmvYRiDe-E8JbYlHx42LHssgORfVfsqxWi7tzv-OQJ8er9nlcyAqW3nA_gQqGx-0dZpDcmVM5xavSINuh5uTXBItAUGm2pHykuPxMy7lRtLll-_Q10iIshLlxpPBzG114"
};
*/
/*
var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});
*/

var spotifyApi: any = new spotify(credentials);

//var code = 'AQC7l3dCeV8mbNKZ5hPIlk3ic-vWjJ2lNfBN4yMetpbAu3eVW_2O3WEiWsnZ_93ErWuDVSPbVOyjUmF_Nz_wo9lKOdYiUxuuHq0KQrdXVfBVY7t4BYdh07wRiB2vFCtw55XE8uIfgKJAADEXXuYYqfLbISfBMsoDwoBgy1LusA'

spotifyApi.setAccessToken('BQDdFcJelEsrMxQAzFOF01Fomh4zdb4odUme12L2DyLv7OsBZ4H4XmOE4lrkGyckaySvpJ8VFdFhARMPAkDxWRzE_77Ic_JPoJMA628wCKiLRm5bydjxy9qxg6rms3VUFMG1yF864d9-FZCWT0bJj4fXWdiKUVLeuJ6TMw');
spotifyApi.setRefreshToken('AQAmvYRiDe-E8JbYlHx42LHssgORfVfsqxWi7tzv-OQJ8er9nlcyAqW3nA_gQqGx-0dZpDcmVM5xavSINuh5uTXBItAUGm2pHykuPxMy7lRtLll-_Q10iIshLlxpPBzG114');

/*
spotifyApi.refreshAccessToken().then(
    function(data) {
      console.log('The access token has been refreshed!');

      Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
      token = data.body['access_token'];
      console.log(token);
    },
    function(err) {
      console.log('Could not refresh access token', err);
    }
);
*/
/*
var getUserByName = async (params: any) => {
    var data = await spotifyApi.refreshAccessToken();
    spotifyApi.setAccessToken(data.body['access_token']);
    var res = await spotifyApi.getUser(params.name);
    console.log(res.body);
};
*/

export namespace Spotify {
    export var searchTracks = async (params: any) => {
        var data = await spotifyApi.refreshAccessToken();
        spotifyApi.setAccessToken(data.body['access_token']);
        var res = await spotifyApi.searchTracks('track:' + params.name);
        if (res.body.tracks.items != 0)
            return ({"result": "track: " + res.body.tracks.items[0].name + " by " +
                res.body.tracks.items[0].artists[0].name + " from album " +
                res.body.tracks.items[0].album.name + " (" +
                res.body.tracks.items[0].external_urls.spotify + ")"});
    };
    export var searchArtists = async (params: any) => {
        var data = await spotifyApi.refreshAccessToken();
        spotifyApi.setAccessToken(data.body['access_token']);
        var res = await spotifyApi.searchArtists(params.name);
        if (res.body.artists.items.length != 0)
            return ({"result": "artist: " + res.body.artists.items[0].name + " (" +
                res.body.artists.items[0].external_urls.spotify + ")"});
    };
    export var searchPlaylists = async (params: any) => {
        var data = await spotifyApi.refreshAccessToken();
        spotifyApi.setAccessToken(data.body['access_token']);
        var res = await spotifyApi.searchPlaylists(params.name);
        if (res.body.playlists.items.length != 0)
            return ({"result": "playlist: " + res.body.playlists.items[0].name + " (" +
                res.body.playlists.items[0].external_urls.spotify + ")"});
    };
}