import Realm from '../Modal';


const deleteData = tableName => {
    try {
      Realm.write(() => {
        let allData = Realm.objects(tableName);
        Realm.delete(allData);
      });
    } catch (error) {
      console.log('Error when delete data:', error);
    }
  };

const saveArrayData = (listData, tableName) => {
    if (listData.length === 0) return;
    try {
      deleteData(tableName);
      Realm.write(() => {
        listData.map(item => {
          Realm.create(tableName, item);
        });
      });
    } catch (error) {
      console.log('Something wrong when save data:', error);
    }
  };

  const getData = tableName => {
    return Realm.objects(tableName);
  };

  const getListData = (tableName, field, value) => {
    return Realm.objects(tableName).filtered(`${field} = '${value}'`);
  };

  const dataService = {
    getData,
    saveArrayData,
    getListData,
  };
  
  export default dataService;