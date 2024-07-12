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
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Mi estado de cuenta</h3>
                {allAccount.length === 0 ? (
                    <div className="text-gray-600">No accounts available</div>
                ) : (
                    <div className="space-y-6">
                        {allAccount.map(account => (
                            <div key={account.accountNumber} className="bg-white shadow-md rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Número de cuenta: {account.accountNumber}</h3>
                                <p className="text-gray-700 mb-1">Tipo de cuenta: {account.accountType}</p>
                                <p className="text-gray-700 mb-3">Saldo: Q.{account.accountBalance}</p>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">Movimientos recientes:</h4>
                                {account.movements.length === 0 ? (
                                    <p className="text-gray-600">No recent movements</p>
                                ) : (
                                    <ul className="space-y-1">
                                        {account.movements.map((movement, index) => (
                                            <li key={index} className="flex justify-between text-gray-700">
                                                <span>{movement.type}: Q.{movement.amount}</span>
                                                <span>{new Date(movement.createdAt).toLocaleString()}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex flex-col">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6 ml-[40%] mt-[3rem]">Saldo</h3>
                {allAccount.map(account => (
                    <React.Fragment key={account.accountNumber}>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                <div className="mx-[4rem] max-w-xs px-8">
                                    <p className="text-base font-semibold text-gray-600">Monetario</p>

                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">Q. {account.accountBalance}</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">QT</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </React.Fragment>
                ))}
            </div>
        </div>


    );
};
