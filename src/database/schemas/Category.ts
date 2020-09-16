import { tableSchema } from '@nozbe/watermelondb';

const CategorySchema = tableSchema({
  name: 'categories',
  columns: [
    { name: 'title', type: 'string' },
    { name: 'created_at', type: 'string' },
    { name: 'updated_at', type: 'string' },
  ],
});

export default CategorySchema;
