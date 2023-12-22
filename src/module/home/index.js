import { useEffect, useState } from 'react';
import OverViewComponent from './OverViewComponent';
import TransactionsComponent from './TransactionsComponent';

const HomeComponent = () => {
    const [transactions, updateTransaction] = useState([]);
    const [expense, updateExpense] = useState(0);
    const [income, updateIncome] = useState(0);

    useEffect(() => {
        const calculateBalance = () => {
            let exp = 0;
            let inc = 0;
            transactions.forEach((payload) =>
                payload.type === 'EXPENSE'
                    ? (exp = exp + payload.amount)
                    : (inc = inc + payload.amount)
            );
            updateExpense(exp);
            updateIncome(inc);
        };
        calculateBalance();
    }, [transactions]);

    const addTransaction = (payload) => {
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        updateTransaction(transactionArray);
    };

    return (
        <div className="container">
            <OverViewComponent
                expense={expense}
                income={income}
                addTransaction={addTransaction}
            />
            {transactions.length ? (
                <TransactionsComponent transactions={transactions} />
            ) : (
                ''
            )}
        </div>
    );
};
export default HomeComponent;
