import { tableSchema } from '@nozbe/watermelondb';

const TransactionSchema = tableSchema({
  name: 'transactions',
  columns: [
    { name: 'title', type: 'string' },
    { name: 'type', type: 'string' },
    { name: 'value', type: 'string' },
    { name: 'category_id', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});

export default TransactionSchema;
