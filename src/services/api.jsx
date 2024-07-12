import { data } from 'autoprefixer'
import axios from 'axios'

const apiClient = axios.create( {
    baseURL: 'http://127.0.0.1:8080/sistemaBancario/v1',
    timeout: 2000
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
        const response = await apiClient.post( '/auth/login', data );

        const { userDetails, token } = response.data; // Verifica que el destructuring sea correcto

        console.log( "User data from API:", userDetails );

        localStorage.setItem( 'user', JSON.stringify( userDetails ) );
        localStorage.setItem( 'token', token ); // Almacena el token como string, no JSON

        return { userDetails, token };
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