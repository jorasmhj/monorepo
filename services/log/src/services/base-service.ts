import { Service } from "../interfaces";
import dbConnection from "../connections/mongodb-connection";

class BaseService<C, I, Q, P> implements Service<C, I, Q, P> {
  async insertOne(collectionName: C, item: I): Promise<any> {
    return await dbConnection.getMongoDb().collection(collectionName).insertOne({ item });
  }

  async findOne(collectionName: C, query: any, project?: P): Promise<any> {
    return await dbConnection
      .getMongoDb()
      .collection(collectionName)
      .findOne(query.condition, { projection: project || null });
  }

  async find(collectionName: C, query?: any, project?: P): Promise<any> {
    return await dbConnection
      .getMongoDb()
      .collection(collectionName)
      .find(query.condition)
      .project(project || null)
      .collation({ strength: 1, locale: "en" })
      .limit(query.limit)
      .skip(query.offset)
      .sort(query.sort)
      .allowDiskUse(true)
      .toArray();
  }

  async update(collectionName: C, query?: any): Promise<any> {
    return await dbConnection
      .getMongoDb()
      .collection(collectionName)
      .updateOne(query.condition, {
        ...(query.push && { $push: query.push }),
        ...(query.set && { $set: query.set }),
        $currentDate: { lastModified: true },
      });
  }
}

export default BaseService;
