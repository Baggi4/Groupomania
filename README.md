EN
# Groupomania #
This is the front end and back end server for Project 7 named "Groupoomania" of the OpenClassrooms course.

### Back end Prerequisites ###
You will need to have `Node.js` and `npm` installed locally on your machine.

### Back end Installation ###
Clone this repo. 

First, In the "client" folder, create file named `.env.local` and add this 2 cmd lines:
`NEXT_PUBLIC_API=http://localhost:8000/api
NEXT_PUBLIC_SOCKETIO=http://localhost:8000`

Second, In the "server" folder, create file named `.env` and add this cmd lines:
`PORT=8000
DATABASE=""
JWT_SECRET=**********
CLOUDINARY_NAME=github-baggi4
CLOUDINARY_KEY=981253497244336
CLOUDINARY_SECRET=pRzOFqc5a3IEnW3AYs_JREKoiH8
CLIENT_URL=http://localhost:3000`

Third, From the "server" && "client" folders of the project, run `npm install`. 

Then, from the "client" folder, run this cmd `npm run dev`,
and from the "server" folder, run this cmd `npm run start`.

The server should run on `localhost` with default port `8000`.

Fr
# Groupomania #
Voici le front end & back end server pour le Project 7 appelé "Groupomania" de la formation OpenClassrooms.

### Back end Prerequisites ###
Vous devez avoir au préalable installé `Node.js` & `npm` sur votre Pc.

### Back end Installation ###
Dupliquer ce repo. 

D'abord, dans le dossier "client", créé un fichier `.env.local` et ajouté ces 2 lignes de cmd :
`NEXT_PUBLIC_API=http://localhost:8000/api
NEXT_PUBLIC_SOCKETIO=http://localhost:8000/api`

Secondo, dans le dossier "server", créé un fichier `.env` et ajouté ces lignes de cmd:
`PORT=8000
DATABASE=""
JWT_SECRET=**********
CLOUDINARY_NAME=github-baggi4
CLOUDINARY_KEY=981253497244336
CLOUDINARY_SECRET=pRzOFqc5a3IEnW3AYs_JREKoiH8
CLIENT_URL=http://localhost:3000`

Troisio, dans les 2 dossiers "server" && "client", lancé la cmd `npm install`. 

Enfin, à partir du dossier "client", lancé la cmd `npm run dev`,
et pour finir le dossier "server", lancé la cmd  `npm run start`.

Le server devrait courir `localhost` avec port défault `8000`.