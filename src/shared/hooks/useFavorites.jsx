import { useState } from "react";
import toast from "react-hot-toast";
import { addFavoriteAccount, removeFavoriteAccount, updateFavoriteAlias } from "../../services";

export const useFavorites = () => {
    const [loading, setLoading] = useState( false );

    const addFavorite = async ( userId, data ) => {
        setLoading( true );

        const response = await addFavoriteAccount( userId, data );

        setLoading( false );

        if ( response.error ) {
            return toast.error( response.e?.response?.data || 'Ocurrió un error al agregar la cuenta a favoritos, intenta de nuevo.' );
        }

        return response.data;
    };

    const removeFavorite = async ( userId, accountNumber ) => {
        setLoading( true );

        const response = await removeFavoriteAccount( userId, accountNumber );

        setLoading( false );

        if ( response.error ) {
            return toast.error( response.e?.response?.data || 'Ocurrió un error al eliminar la cuenta de favoritos, intenta de nuevo.' );
        }

        return response.data;
    };

    const updateAlias = async ( userId, accountNumber, alias ) => {
        setLoading( true );

        const response = await updateFavoriteAlias( userId, accountNumber, alias );

        setLoading( false );

        if ( response.error ) {
            return toast.error( response.e?.response?.data || 'Ocurrió un error al actualizar el alias de la cuenta favorita, intenta de nuevo.' );
        }

        return response.data;
    };

    return {
        addFavorite,
        removeFavorite,
        updateAlias,
        loading
    };
}