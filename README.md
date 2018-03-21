# agenda-angular


The connection to FireBase is used by the standard of environments.

This will require you to support the cloning of the project to create a "src / environments" directory.

What you need to do is declare the object:

```
export const environment = {
  production: false,
  firebase: {
    apiKey: <apiKey>,
    authDomain: <authDomain>,
    databaseURL: <databaseURL>,
    projectId: <projectId>,
    storageBucket: <storageBucket>,
    messagingSenderId: <messagingSenderId>
  }
};

```

## Installing

  - Clone the project and enter the project directory.
  - Run the command "npm install -g ionic"
  - Run the command "npm install"
  - Execute the command "ionic serve"
