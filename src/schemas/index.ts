import { appSchema } from '@nozbe/watermelondb';
import CategorySchema from './CategorySchema';
import TransactionSchema from './TransactionSchema';

export default appSchema({
  version: 1,
  tables: [TransactionSchema, CategorySchema],
});
