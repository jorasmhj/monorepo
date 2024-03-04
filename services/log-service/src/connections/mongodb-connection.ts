import config from "../configs";
import { MongoClient } from "mongodb";
const mongoDbUrl = `mongodb+srv://${config.MONGODB_USERNAME}:${config.MONGODB_PASSWORD}@${config.MONGODB_CLUSTER_NAME}.mongodb.net?retryWrites=true&w=majority`;
// const mongoDbUrl = `mongodb+srv://${config.MONGO_USER_NAME}:${config.MONGO_PASSWORD}@cluster0.n0ufg.mongodb.net?retryWrites=true&w=majority`

let _db: any;

const initMongoDb = (callback: any) => {
  if (_db) {
    console.log("DB initialized");

    return callback(null, _db);
  }
  MongoClient.connect(mongoDbUrl)
    .then(client => {
      _db = client.db(config.MONGODB_NAME);
      callback(null, _db);
    })
    .catch(error => {
      callback(error);
    });
};

const getMongoDb = () => {
  if (!_db) {
    throw Error("Database not initialzed");
  }

  return _db;
};

export default {
  getMongoDb,
  initMongoDb,
};
