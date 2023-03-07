class AlunoCRUD
{
    
    

    async Inserir(nome,sobrenome,idade)
    {  
    
        const mysql = require('mysql2/promise')

        // create the connection to database
        const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'crud'
        });
               
       const values = [nome, sobrenome, idade];
       const sql = 'INSERT INTO aluno(nome,sobrenome,idade) VALUES (?,?,?);';
      
       const [rows] =await connection.query(sql,values);
       if(rows.affectedRows)
       console.log("Valor inserido");
       connection.destroy();
      
     
    }
    async Atualizar(id,nome,sobrenome,idade)
    {  
    
        const mysql = require('mysql2/promise')

        // create the connection to database
        const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'crud'
        });
              
       const values = [nome, sobrenome, idade, id];
       const sql = ' UPDATE aluno SET nome = ?, sobrenome = ?, idade =?  WHERE id =?; ';
      
       const [rows] =await connection.query(sql,values);
       if(rows.affectedRows)
       console.log("Valor Atualizado");
       connection.destroy();
      
     
    }
    async Apagar(id)
    {  
    
        const mysql = require('mysql2/promise')

        // create the connection to database
        const connection =await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'crud'        
        });
               
       const values = [id];
       const sql = 'DELETE FROM aluno WHERE Id=?';
      
       const [rows] =await connection.query(sql,values);
       if(rows.affectedRows)
       console.log("Valor apagado");
       connection.destroy();
    }
    async ListarTodos()
    {  
    
        const mysql = require('mysql2/promise')

        // create the connection to database
        const connection =await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'crud'        
        });
               
       
       const sql = 'SELECT * FROM aluno';
      
       const [rows] =await connection.query(sql);
       if(rows.length>=1)
       console.log(rows);
       else
       console.log("Tabela vazia");
       connection.destroy();
    }
   
}
module.exports= AlunoCRUD;