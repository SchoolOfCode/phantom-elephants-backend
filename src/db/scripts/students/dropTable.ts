import { Idb} from '../../dbTypes'

const db:Idb = require ('../../index')



async function deleteTable ():Promise<void> {
   const sqlQuery = `DROP TABLE IF EXISTS students` 
   const response = await  db.query(sqlQuery); 
  console.log('Students table deleted')

}

deleteTable(); 