//Importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose();

//Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;
//Utilizar o objeto de banco de dados para nossas operações
// db.serialize(() => {
//   //Utilizando comandos SQL:
//   //Criar a tabela
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       name TEXT,
//       image TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `)

//   //Inserir dados na tabela
//   const query = `
//     INSERT INTO places (
//       name,
//       image,
//       address,
//       address2,
//       state,
//       city,
//       items
//     ) VALUES (?,?,?,?,?,?,?);
//   `;

//   const values = [
//     "Papersider",
//     "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     "Guilherme Gemballa, Jardim América",
//     "nº 260",
//     "Santa Catarina",
//     "Rio do sul",
//     "Papéis e Papelão"
//   ];

//   function afterInsertData(err) {
//     if(err){
//       return console.log(err);
//     }

//     console.log("Cadastrado com sucesso!");
//     console.log(this);
//   }

//   db.run(query, values, afterInsertData);

//   //Consultar dados da tabela
  // function afterRead(err, rows) {
  //   if(err){
  //     return console.log(err);
  //   }

  //   console.log("Aqui estão os seus registros:");
  //   console.log(rows);
  // }

  // // db.all(`SELECT * FROM places;`, afterRead);

//   //Deletar um dado da tabela
//   function afterDelete(err, rows) {
//     if(err){
//       return console.log(err);
//     }

//     console.log("Registro deletado com sucesso!");
//   }

//   // db.run(`DELETE FROM places WHERE id = ?;`, [1]);
// }); 