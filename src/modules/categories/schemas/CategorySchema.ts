import { tableSchema } from '@nozbe/watermelondb';

const CategorySchema = tableSchema({
  name: 'categories',
  columns: [
    { name: 'title', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});

export default CategorySchema;
