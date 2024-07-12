import React, { useEffect, useState } from 'react';
import { useGetApproveLoans } from '../../shared/hooks/useGetApproveLoans'

export const LoanGetApproved = () => {
    const { getApproved, isFetching, allLoans } = useGetApproveLoans();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await getApproved();
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading || isFetching) {
        return <div>Loading...</div>;
    }

    return (
        <div className='loan-approved-container'>
            <h2>Approved Loans</h2>
            <ul>
                {allLoans.map((loan, index) => (
                    <li key={index} className='loan-item'>
                        <h3>Loan Service: {loan.service}</h3>
                        <p>Account Number: {loan.account}</p>
                        <p>Amount: ${loan.amount}</p>
                        <p>Description: {loan.description}</p>
                        <p>Date: {new Date(loan.loanDate).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};