export interface Service<C, I, Q, P> {
  insertOne(collection: C, item: I): Promise<any>;
  findOne(collection: C, query: Q, project?: P): Promise<any>;
  find(collection: C, query?: Q, project?: P): Promise<any>;
  update(collection: C, query?: Q): Promise<any>;
}
