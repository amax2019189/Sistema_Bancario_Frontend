import React, { useEffect, useState } from 'react';
import { useAccountBalance } from '../../shared/hooks/useSaldo';

export const AccountBalance = () => {
    const { getAccount, isFetching, allAccount } = useAccountBalance();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await getAccount();
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading || isFetching) {
        return <div>Loading...</div>;
    }

    return (
        <div className="account-balance-container">
            {allAccount.length === 0 ? (
                <div>No accounts available</div>
            ) : (
                allAccount.map(account => (
                    <div key={account.accountNumber} className="account-card">
                        <h3>Account Number: {account.accountNumber}</h3>
                        <p>Type: {account.accountType}</p>
                        <p>Balance: ${account.accountBalance}</p>
                        <h4>Recent Movements:</h4>
                        {account.movements.length === 0 ? (
                            <p>No recent movements</p>
                        ) : (
                            <ul>
                                {account.movements.map((movement, index) => (
                                    <li key={index}>
                                        <span>{movement.type}: ${movement.amount}</span>
                                        <span> - {new Date(movement.createdAt).toLocaleString()}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};
