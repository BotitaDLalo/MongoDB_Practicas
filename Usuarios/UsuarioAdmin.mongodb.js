//!Habilitar autentificacion
/* 
?Hay que meterse al archivo mongod.cfg y copiar y pegar lo siguiente:
*security:
*    authorization: enabled
*/


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
 * !Contraseña usuario admin:
 * ? hola1234
 */




/**
 * !Bibliografia
 * * Crear usuario admin: https://www.mongodb.com/docs/manual/tutorial/configure-scram-client-authentication/#std-label-create-user-admin
 */