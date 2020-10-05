import {
  synchronize,
  SyncPullArgs,
  SyncPushArgs,
} from '@nozbe/watermelondb/sync';
import database from './database';
import api from '../services/api';

async function CategorySync(): Promise<void> {
  console.log('AKIOH');
  await synchronize({
    database,

    pullChanges: async ({ lastPulledAt }: SyncPullArgs) => {
      console.log({ lastPulledAt });
      const response = await fetch(`https://my.backend/sync`, {
        body: JSON.stringify({ lastPulledAt }),
      });
      if (!response.ok) {
        throw new Error(await response.text());
      }

      const { changes, timestamp } = await response.json();
      return { changes, timestamp };
    },
    pushChanges: async ({ changes, lastPulledAt }: SyncPushArgs) => {
      console.log({ changes, lastPulledAt });
      // const response = await fetch(
      //   `https://my.backend/sync?last_pulled_at=${lastPulledAt}`,
      //   {
      //     method: 'POST',
      //     body: JSON.stringify(changes),
      //   },
      // );
      // if (!response.ok) {
      //   throw new Error(await response.text());
      // }
    },
    // migrationsEnabledAtVersion: 1,
  });
}

export default CategorySync;
