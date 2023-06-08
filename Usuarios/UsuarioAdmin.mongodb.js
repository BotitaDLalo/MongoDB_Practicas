//$Habilitar autentificacion
/* 
?Hay que meterse al archivo mongod.cfg y copiar y pegar lo siguiente:
*security:
*    authorization: enabled
*/


//$Creacion de usuario admin
use("admin");

db.createUser(
  {
    user: "myUserAdmin",
    pwd: passwordPrompt(), // or cleartext password
    roles: [
      { role: "userAdminAnyDatabase", db: "admin" },
      { role: "readWriteAnyDatabase", db: "admin" }
    ]
  }
)

/**
 * ?Autentificacion durante la conexion:
 * * mongosh --port 27017  --authenticationDatabase "admin" -u "myUserAdmin" -p
 * 
 * ?Autentificacion antes de la conexion:
 * *use admin
 * *db.auth("myUserAdmin", passwordPrompt()) // or cleartext password
 */

/**
 * $Contraseña usuario myUserAdmin:
 * ? hola1234
*/




//$Creacion de usuario read admin
use("admin");

db.createUser(
  {
    user: "myUserReadAdmin",
    pwd: passwordPrompt(), // or cleartext password
    roles: [
      { role: "read", db: "admin" }
    ]
  }
)

/**
 * ?Autentificacion durante la conexion:
 * * mongosh --port 27017  --authenticationDatabase "admin" -u "myUserReadAdmin" -p
 * 
 * ?Autentificacion antes de la conexion:
 * *use admin
 * *db.auth("myUserReadAdmin", passwordPrompt()) // or cleartext password
 */

/**
 * $Contraseña usuario myUserReadAdmin:
 * ? hola1234r
*/

/**
 * !Bibliografia
 * * Crear usuario admin: 
 * * https://www.mongodb.com/docs/manual/tutorial/configure-scram-client-authentication/#std-label-create-user-admin
 */