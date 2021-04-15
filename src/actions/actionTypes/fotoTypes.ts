import {ISingleFoto} from '../../entities/fotos';

export const GET_FOTOS = 'GET_FOTOS';

export interface IFotoTypes{
    GET_FOTOS: {
        fotoList:ISingleFoto;
    }
}