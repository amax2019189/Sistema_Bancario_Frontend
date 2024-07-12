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
                        <h3>User: {loan.userDPI}</h3>
                        <p>Name: {loan.userName}</p>
                        <p>LastName: {loan.userLastName}</p>
                        <p>Account Number: {loan.account}</p>
                        <p>Amount: ${loan.amount}</p>
                        <p>Date: {new Date(loan.loanDate).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};