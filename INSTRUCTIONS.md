# Consignes :

Créer une application de recherche de playlists sur Spotify de 0 avec les outils de votre choix.

L'application doit avoir deux fonctionnalités.

La première est de permettre à un utilisateur anonyme de pouvoir rechercher les playlists contenant des chansons de un ou plusieurs aritstes.
La seconde est de permettre à un utilisateur anonyme de pouvoir rechercher les playlists contenant des chansons de un ou plusieurs genre.

Les points les plus importants sont la DX et l'UX.

Il n'est pas nécessaire de passer plus de 4 heures sur cet exercice. Si vous n'avez pas fini, merci de noter ce que vous auriez ajouté et comment.

Voici un lien vers l'API de Spotify: https://developer.spotify.com/documentation/web-api/reference/#/

Voici un petit exemple d'interaction avec cette dernière

```ts
// Please don't share these (aka no public repo)
const client_id = '••••••••••••';
const client_secret = '••••••••••••';

//
// ---
// TOKEN
// ---
// Warning: Tokens expire
//

const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`,
    },
    body: 'grant_type=client_credentials',
});

const json = await result.json();

const parameters = {
    headers: {
        Authorization: `Bearer ${json.access_token}`,
    },
};

//
// ---
// REQUESTS
// ---
//

console.log(await(await fetch(`https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V`, parameters)).json());

console.log(await(await fetch(`https://api.spotify.com/v1/markets`, parameters)).json());
```
