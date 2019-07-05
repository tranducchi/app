import Category from './Category';
import Article from './Article';
import Realm from 'realm';


const realm = new Realm({
    schema: [
      Category,
      Article
    ],
    schemaVersion: 1,
    migration: (oldRealm, newRealm) => {
  
    }
  })
  
  export default realm;