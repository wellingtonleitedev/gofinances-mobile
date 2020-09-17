import { appSchema } from '@nozbe/watermelondb';
import CategorySchema from '../modules/categories/schemas/CategorySchema';
import TransactionSchema from '../modules/transactions/schemas/TransactionSchema';

export default appSchema({
  version: 1,
  tables: [TransactionSchema, CategorySchema],
});
