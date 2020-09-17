import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './schema';
import Category from '../modules/categories/models/CategoryModel';
import Transaction from '../modules/transactions/models/TransactionModel';

const adapter = new SQLiteAdapter({
  schema,
  dbName: 'gofinaces',
});

const database = new Database({
  adapter,
  modelClasses: [Transaction, Category],
  actionsEnabled: true,
});

export default database;
