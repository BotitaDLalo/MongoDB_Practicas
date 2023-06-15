// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Tienda_en_linea");

// Create a new document in the collection.
db.getCollection("Clientes").insertOne({
  Nombres: "Eduardo Alberto",
  Apellido_Paterno: "Reyes",
  Apellido_Materno: "Rosales",
  Edad: "21",
  Email: "reyes.e.rosales@gmail.com",
  Direccion: [
    {
      Estado: "Morelos",
      Municipio: "Cuautla",
      Colonia: "Col. Niño Artillero",
      Calle: "C. Adolfo Lopez Mateos",
      CP: "62743",
    },
  ],
});


