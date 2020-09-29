import { tableSchema } from '@nozbe/watermelondb';

const TransactionSchema = tableSchema({
  name: 'transactions',
  columns: [
    { name: 'title', type: 'string' },
    { name: 'type', type: 'string' },
    { name: 'value', type: 'number' },
    { name: 'category_id', type: 'string', isIndexed: true },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});

export default TransactionSchema;
