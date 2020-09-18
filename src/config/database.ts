import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from 'src/schemas';
import Category from 'src/modules/categories/infra/models/Category';
import Transaction from 'src/modules/transactions/infra/models/Transaction';

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
