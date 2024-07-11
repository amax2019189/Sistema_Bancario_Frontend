export const AccountBalance = ({ accountDetails }) => {
    return (
        <div className="account-saldo">
            <span className="account-saldo-algo">Saldo: {accountDetails !== null ? accountDetails : 'Cargando...'}</span>
        </div>
    );
};