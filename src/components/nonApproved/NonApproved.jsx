import React, { useEffect } from 'react';
import { useGetNonApproveLoans } from '../../shared/hooks/useGetNonApprovedLoans'; // Asegúrate de que la ruta sea correcta
import { toast } from 'react-hot-toast';

export const LoanComponent = () => {
    const { getNonApproved, isFetching, allLoans } = useGetNonApproveLoans();

    useEffect(() => {
        const fetchNonApprovedLoans = async () => {
            try {
                await getNonApproved(true); // Pasar true si está logueado
            } catch (error) {
                toast.error(error.message || 'Ocurrió un error al cargar los préstamos no aprobados');
            }
        };

        fetchNonApprovedLoans();
    }, [getNonApproved]);

    return (
        <div>
            {isFetching ? (
                <p>Cargando préstamos no aprobados...</p>
            ) : (
                <div>
                    <h2>Préstamos no aprobados</h2>
                    <ul>
                        {allLoans && allLoans.length > 0 ? (
                            allLoans.map((loan, index) => (
                                <li key={index}>
                                    <p>Id: {loan.id}</p>
                                    <p>Monto: {loan.amount}</p>
                                </li>
                            ))
                        ) : (
                            <p>No hay préstamos no aprobados para mostrar.</p>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};