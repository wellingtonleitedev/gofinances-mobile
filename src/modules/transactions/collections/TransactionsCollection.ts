import database from '../../../config/database';

const TransactionsCollection = database.collections.get('transactions');

export default TransactionsCollection;
