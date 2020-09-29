import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from '../schemas';
import Category from '../modules/categories/infra/models/Category';
import Transaction from '../modules/transactions/infra/models/Transaction';

const adapter = new SQLiteAdapter({
  schema,
  dbName: 'novotest2',
});

const database = new Database({
  adapter,
  modelClasses: [Transaction, Category],
  actionsEnabled: true,
});

export default database;
