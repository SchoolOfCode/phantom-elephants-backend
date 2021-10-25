
import { Idb} from '../../dbTypes'

const db:Idb = require ('../../index')

// async function 

async function deleteTable ():Promise<void> {
   const sqlQuery = `DROP TABLE IF EXISTS bootcamps` 
   const response = await  db.query(sqlQuery); 
  console.log('bootcamps table deleted')

}

deleteTable(); 