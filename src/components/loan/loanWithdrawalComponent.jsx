import React, { useState } from 'react';
import useLoan from '../../shared/hooks/useLoan';
import { Input } from '../input/Input';

const LoanWithdrawal = () => {
    const [withdrawCode, setWithdrawCode] = useState( '' );
    const { withdrawLoan, loading, error, message } = useLoan();

    const handleWithdrawCodeChange = ( value ) => {
        setWithdrawCode( value );
    };

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        await withdrawLoan( { withdrawCode } );
    };

    return (
        <div>
            <h2>Withdraw Loan</h2>
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
                <button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : 'Withdraw'}
                </button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
        </div>
    );
};

export default LoanWithdrawal;
