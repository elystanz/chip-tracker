# Chipper Pets
# Table of Contents
1. [Introduction](#introduction)
2. [Application](#application)
3. [Roadmap](#roadmap)
4. [Contributions](#contributions)
5. [Authors](#authors)
6. [License](#license)


## <a id="introduction">Introduction</a>
Chipper pets is a microchip tracking application designed to be a veternarians' ideal database. The application is meant for vets to keep track of their patients, and to allow patients easy access to their pet's medical records. 

Currently, the app allows vets to post and retrieve pet data, giving them the ability to log their clients and their medical information. The clients are able to insert their full name and in return are presented with their pet's information, but are unable to edit, delete, or post to the wall.

## <a id="application">Application</a>
![chipper_pets](https://user-images.githubusercontent.com/95983252/171037490-bce8b667-fa8d-4280-9938-a1e8cc178f45.gif)

This walkthrough demonstrates the application functionality in Insomnia. As of this update, user authentication has not been added. The vet main page is navigated through Insomnia's get request. This will be remedied as soon as possible!

## <a id="roadmap">Roadmap</a>
The plans for future development include allowing vets to update and delete pet information as needed, as well as create a more involved medical record; showing vaccination status, next visit, past ailments, et cetera. The client will also be able to see this and it will make for a more useful application on the client side, as well as give vets a better idea of their client's needs.

## <a id="contributions">Contributions</a>
Please feel free to make a pull request or submit an issue to troubleshoot any bugs you come across.

If you are planning to pull the code and make adjustments to submit, ensure that you use the command `npm i` to install the dependencies within this application:
    - bootstrap (^5.1.3)
    - connect-session-sequelize (^7.1.3)
    - dotenv (^16.0.1)
    - express (^4.18.1)
    - express-handlebars (^6.0.6)
    - express-session (^1.17.3)
    - mysql2 (^2.3.3)
    - sequelize (^6.20.1)

These dependencies are saved within the package.json file and should install upon using the command `npm i`.

To run the application via the CLI, use the command `node server.js`.

## <a id="authors">Authors</a>
[Yuval Bashari](https://github.com/yuval7994), [Justin Anakani](https://github.com/HoneyTwix), [Emily Arnholt](https://github.com/emilyarnholt), and [Elyse Stanziale](https://github.com/elystanz) are the main contributors and the creators of this full-stack application.

## <a id="license">License</a>
This application is protected under the ISC license. It is open source -- code away!

## <a id=#status>Project Status</a>
This project is still in development and has a few bugs to work out. Cookies and user log in/authentication is in the works, and the site will not be available to store public information until user authentication is properly developed.
