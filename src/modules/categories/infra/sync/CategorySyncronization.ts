import { synchronize } from '@nozbe/watermelondb/sync';
import database from '../../../../config/database';
import api from '../../../../services/api';

async function CategorySync(): Promise<void> {
  await synchronize({
    database,
    pullChanges: async ({ lastPulledAt, schemaVersion, migration }) => {
      const response = await api.get('/categories', {
        lastPulledAt,
        schemaVersion,
        migration,
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const { changes, timestamp } = await response.json();
      return { changes, timestamp };
    },
    pushChanges: async ({ changes, lastPulledAt }) => {
      const response = await fetch(
        `https://my.backend/sync?last_pulled_at=${lastPulledAt}`,
        {
          method: 'POST',
          body: JSON.stringify(changes),
        },
      );
      if (!response.ok) {
        throw new Error(await response.text());
      }
    },
    migrationsEnabledAtVersion: 1,
  });
}

export default CategorySync;
