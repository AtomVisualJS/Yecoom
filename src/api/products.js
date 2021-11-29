

import {createAsyncThunk} from '@reduxjs/toolkit';
import api from './url'

////////////////////////////////////////////////////////////////////////////////


const GetAllProducts = createAsyncThunk( 'products/getAllProducts', async () => {
    const response = await api.get( '/api/data' );
    return response.data;
    }
);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const GetProductById = createAsyncThunk( 'products/getById', async ( id ) => {
    const response = await api.get( `/api/data/${id}` );
    return response.data;
}
);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default GetAllProducts
export {GetProductById}





