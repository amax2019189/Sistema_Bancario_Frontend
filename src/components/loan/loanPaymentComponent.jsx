import React, { useState } from 'react';
import useLoan from '../../shared/hooks/useLoan';
import { Input } from '../input/Input';

const LoanPayment = () => {
    const [withdrawCode, setWithdrawCode] = useState( '' );
    const [amount, setAmount] = useState( '' );
    const { payLoan, loading, error, message } = useLoan();

    const handleWithdrawCodeChange = ( value ) => {
        setWithdrawCode( value );
    };

    const handleAmountChange = ( value ) => {
        setAmount( value );
    };

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        await payLoan( { withdrawCode, amount } );
    };

    return (
        <div>
            <h2>Pay Loan</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    field="withdrawCode"
                    label="Withdraw Code:"
                    value={withdrawCode}
                    onChangeHandler={handleWithdrawCodeChange}
                    type="text"
                    showErrorMessage={!!error}
                    validationMessage={error}
                />
                <Input
                    field="amount"
                    label="Amount:"
                    value={amount}
                    onChangeHandler={handleAmountChange}
                    type="number"
                    showErrorMessage={!!error}
                    validationMessage={error}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : 'Pay'}
                </button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
        </div>
    );
};

export default LoanPayment;
