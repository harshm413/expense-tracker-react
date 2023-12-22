const TransactionsComponent = ({ transactions }) => {
    return (
        <div className="container">
            Transactions
            {transactions.map((payload) => (
                <div
                    key={payload.id}
                    className={
                        payload.type === 'INCOME'
                            ? 'transaction-cell-income'
                            : 'transaction-cell-expense'
                    }
                >
                    <span>{payload.desc}</span>
                    <span>${payload.amount}</span>
                </div>
            ))}
        </div>
    );
};
export default TransactionsComponent;
