import { useState } from 'react';

const OverViewComponent = ({ expense, income, addTransaction }) => {
    const [isAddTxnVisible, toggleAddTxn] = useState(false);
    const [formData, setFormData] = useState({
        amount: null,
        desc: null,
        type: null,
    });

    return (
        <div className="container">
            <div className="balance-box">
                Balance: ${income - expense}
                <div
                    className={`add-transaction ${
                        isAddTxnVisible
                            ? 'add-transaction-cancel'
                            : 'add-transaction-add'
                    }`}
                    onClick={() => toggleAddTxn((isVisible) => !isVisible)}
                >
                    {isAddTxnVisible ? 'CANCEL' : 'ADD'}
                </div>
            </div>
            {isAddTxnVisible && (
                <div className="add-transaction-view">
                    <input
                        placeholder="Amount"
                        type="number"
                        value={formData.amount}
                        onChange={(e) =>
                            setFormData({ ...formData, amount: e.target.value })
                        }
                    />
                    <input
                        placeholder="Description"
                        value={formData.desc}
                        onChange={(e) =>
                            setFormData({ ...formData, desc: e.target.value })
                        }
                    />
                    <div className="radio-and-add-btn">
                        <div className="radio-box">
                            <input
                                type="radio"
                                id="expense"
                                name="type"
                                value="EXPENSE"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        type: e.target.value,
                                    })
                                }
                            />
                            <label htmlFor="expense">Expense</label>
                            <input
                                type="radio"
                                id="income"
                                name="type"
                                value="INCOME"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        type: e.target.value,
                                    })
                                }
                            />
                            <label htmlFor="income">Income</label>
                        </div>
                        <div
                            className="add-transaction-btn"
                            onClick={() =>
                                addTransaction({
                                    id: Date.now(),
                                    amount: Number(formData.amount),
                                    desc: formData.desc,
                                    type: formData.type,
                                })
                            }
                        >
                            Add Transaction
                        </div>
                    </div>
                </div>
            )}
            <br />
            <div className="expense-container">
                <div className="expense-box">
                    Expense<span>${expense}</span>
                </div>
                <div className="income-box">
                    Income<span>${income}</span>
                </div>
            </div>
        </div>
    );
};
export default OverViewComponent;
