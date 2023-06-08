//! Usuarios test

//$Creacion de usuario myTester
use("test");

db.createUser({
  user: "myTester",
  pwd: passwordPrompt(), // or cleartext password
  roles: [
    { role: "readWrite", db: "test" },
    { role: "read", db: "reporting" },
  ],
});

/**
 * ?Autentificacion durante la conexion:
 * * mongosh --port 27017 -u "myTester" --authenticationDatabase "test" -p
 *
 * ?Autentificacion antes de la conexion:
 * *use test
 * *db.auth("myTester", passwordPrompt())  // or cleartext password
 */

/**
 * $Contraseña usuario myTester:
 * ? test1234
 */

//! Usuarios reporting
//$Creacion de usuario repoUser

use("reporting");

db.createUser({
  user: "repoUser",
  pwd: passwordPrompt(),
  roles: [],
});

/**
 * ?Autentificacion durante la conexion:
 * * mongosh --port 27017 -u "repoUser" --authenticationDatabase "reporting" -p
 *
 * ?Autentificacion antes de la conexion:
 * *use reporting
 * *db.auth("repoUser", passwordPrompt())  // or cleartext password
 */

/**
 * $Contraseña usuario repoUser:
 * ? nada1234
 */

//$Creacion de usuario reportsUser

use("reporting");

db.createUser({
  user: "reportsUser",
  pwd: passwordPrompt(), // or cleartext password
  roles: [
    { role: "read", db: "reporting" },
    { role: "read", db: "products" },
    { role: "read", db: "sales" },
    { role: "readWrite", db: "accounts" },
  ],
});

/**
 * ?Autentificacion durante la conexion:
 * * mongosh --port 27017 -u "reportsUser" --authenticationDatabase "reporting" -p
 *
 * ?Autentificacion antes de la conexion:
 * *use reporting
 * *db.auth("reportsUser", passwordPrompt())  // or cleartext password
 */

/**
 * $Contraseña usuario repoUser:
 * ? repo1234
 */