import { data } from 'autoprefixer'
import axios from 'axios'

const apiClient = axios.create( {
    baseURL: 'http://127.0.0.1:8080/sistemaBancario/v1',
    timeout: 5000
} );

apiClient.interceptors.request.use(
    ( config ) => {
        const userDetails = localStorage.getItem( 'user' );

        if ( userDetails ) {
            const { token } = JSON.parse( userDetails );
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log( 'Request Headers:', config.headers );
        return config;
    },
    ( e ) => {
        return Promise.reject( e );
    }
);

export const login = async ( data ) => {
    try {
        return await apiClient.post( '/auth/login', data );



        //console.log( "User data from API:", userDetails );

        // localStorage.setItem( 'user', JSON.stringify( userDetails ) );
        //localStorage.setItem( 'token', token ); // Almacena el token como string, no JSON

        //return { userDetails, token };
    } catch ( error ) {
        return {
            error: true,
            message: error.response?.data?.message || "Ocurrió un error al iniciar sesión"
        };
    }
};

export const register = async ( data ) => {
    try {
        return await apiClient.post( '/auth/register', data );
    } catch ( e ) {
        return {
            error: true,
            e
        };
    }
};

export const makeDeposit = async ( data ) => {
    try {
        return await apiClient.post( '/deposit/makeDeposit', data );
    } catch ( e ) {
        return {
            error: true,
            e
        };
    }
};

export const editDeposit = async ( data ) => {
    try {
        return await apiClient.put( '/deposit/editDeposit', data );
    } catch ( e ) {
        return {
            error: true,
            e
        };
    }
};

export const reverseDeposit = async ( data ) => {
    try {
        return await apiClient.delete( '/deposit/reverseDeposit', { data } );
    } catch ( e ) {
        return {
            error: true,
            e
        };
    }
};

export const registerService = async ( data ) => {
    try {
        return await apiClient.post( '/service/register', data );
    } catch ( e ) {
        return {
            error: true,
            e
        };
    }
};
export const editUser = async ( id, data ) => {
    try {
        const response = await apiClient.put( `/user/update/${id}`, data );
        return response.data;
    } catch ( e ) {
        return {
            error: true,
            e
        };
    }
};

//get user
export const getUser = async ( id ) => {
    try {
        return await apiClient.get( `/user/get/${id}` );
    } catch ( e ) {
        return {
            error: true,
            e
        };
    }
};

export const paymentService = async ( data ) => {
    try {
        console.log( data )
        return await apiClient.post( '/service/pay', data )


    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
}

export const paidServices = async () => {
    try {
        return await apiClient.get( '/service/paid' )
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
}

export const accountbalance = async () => {
    try {

        return await apiClient.get( '/account/account/saldo' )

    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
}

export const createAccount = async ( data ) => {
    try {
        return await apiClient.post( '/account/createAccount', data )
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
}

export const deleteAccount = async ( data ) => {
    try {
        return await apiClient.delete( '/account/deleteAccount', data )
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
}

export const activateAccount = async ( data ) => {
    try {
        return await apiClient.post( '/account/activateAccount', data )
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
}
export const addFavoriteAccount = async ( userId, data ) => {
    try {
        return await apiClient.put( `/user/addFavorite/${userId}`, data );
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }

};

// Función para eliminar una cuenta favorita
export const removeFavoriteAccount = async ( userId, accountNumber ) => {
    try {
        return await apiClient.put( `/user/removeFavorite/${userId}`, { accountNumber } );
    } catch ( e ) {
        return {
            error: true,
            e
        }

    }

};

// Función para actualizar el alias de una cuenta favorita
export const updateFavoriteAlias = async ( userId, accountNumber, alias ) => {
    try {
        return await apiClient.put( `/user/updateFavoriteAlias/${userId}`, { accountNumber, alias } );
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }

};

// makeTransfer routes
export const makeTransfer = async ( data ) => {
    try {
        return await apiClient.post( '/transfer/makeTransfer', data );
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
};

//withdraw loan
export const withdrawLoan = async ( data ) => {
    try {
        return await apiClient.post( '/banck/withdrawLoan', data );
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
};

//payLoan
export const payLoan = async ( data ) => {
    try {
        return await apiClient.post( '/banck/payloan', data );
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
};