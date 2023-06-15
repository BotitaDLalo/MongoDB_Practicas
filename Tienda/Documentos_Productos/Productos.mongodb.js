// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('Tienda_en_linea');

// Create a new document in the collection.
db.getCollection('Productos').insertOne({
    nombre:"",
    categoria:"",
    precio:0,
    existencia:0,
});
