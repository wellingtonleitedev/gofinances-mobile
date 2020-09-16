import { appSchema } from '@nozbe/watermelondb';
import CategorySchema from './schemas/CategorySchema';
import TransactionSchema from './schemas/TransactionSchema';

export default appSchema({
  version: 1,
  tables: [TransactionSchema, CategorySchema],
});
