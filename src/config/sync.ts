import {
  synchronize,
  SyncPullArgs,
  SyncPushArgs,
  SyncDatabaseChangeSet,
} from '@nozbe/watermelondb/sync';
import database from './database';

async function sync(): Promise<void> {
  await synchronize({
    database,
    pullChanges: async ({ lastPulledAt }: SyncPullArgs) => {
      let changes = {} as SyncDatabaseChangeSet;
      let timestamp: number = Date.now();

      try {
        const response = await fetch(
          `http://192.168.0.161:3333/sync/pull/${lastPulledAt || 0}`,
        );

        if (!response.ok) {
          throw new Error(await response.text());
        }

        const result = await response.json();

        changes = result.changes;
        timestamp = result.timestamp;
      } catch (error) {
        console.log(error);
      }

      return { changes, timestamp };
    },
    pushChanges: async ({ changes, lastPulledAt }: SyncPushArgs) => {
      console.log({ changes, lastPulledAt });

      // const response = await fetch(
      //   `http://192.168.0.161:3333/sync/push/${lastPulledAt || 0}`,
      //   {
      //     method: 'POST',
      //     body: JSON.stringify(changes),
      //   },
      // );
      // if (!response.ok) {
      //   throw new Error(await response.text());
      // }
    },
  });
}

export default sync;
