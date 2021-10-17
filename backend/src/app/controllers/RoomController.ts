import { getRepository } from "typeorm";
import { Rooms } from '../models/Rooms';
import { Request, Response } from "express";
 
export const getRooms = async(request: Request, response: Response) => {
    console.log(request)
    const rooms = await getRepository(Rooms).find(request.query)
    return response.json(rooms);
};
 
export const saveRooms = async(request: Request, response: Response) => {
    const room = await getRepository(Rooms).save(request.body)
    return response.json(room);
};
 
export const getRoom = async(request: Request, response: Response) => {
    const {id} = request.params
    const room = await getRepository(Rooms).findOne(id)
    return response.json(room);
};
 
export const updateRooms = async(request: Request, response: Response) => {
    const {id} = request.params
    const room = await getRepository(Rooms).update(id, request.body)
 
    if (room.affected == 1){
        const taskUpdated = await getRepository(Rooms).findOne(id)
        return response.json(taskUpdated);
    }
    else{
        return response.status(404).json( {message: 'Quarto não encontrado!'} )
    }
};
 
export const deleteRooms = async(request: Request, response: Response) => {
    const {id} = request.params
    const room = await getRepository(Rooms).delete(id)
 
    if (room.affected == 1){
        return response.status(200).json( {message: "Quarto excluída com sucesso!"} );
    }
    else{
        return response.status(404).json( {message: 'Quarto não encontrado!'} )
    }
};
 
export const book = async(request: Request, response: Response) => {
    const {id} = request.params
    const room = await getRepository(Rooms).update(id, {
        reservado: false,
    })
 
    if (room.affected == 1){
        const taskFinished = await getRepository(Rooms).findOne(id)
        return response.json(taskFinished);
    }
    else{
        return response.status(404).json( {message: 'Quarto não encontrado!'} )
    }
};

export const checkOut = async(request: Request, response: Response) => {
    const {id} = request.params
    const room = await getRepository(Rooms).update(id, {
        reservado: true,
    })
 
    if (room.affected == 1){
        const taskFinished = await getRepository(Rooms).findOne(id)
        return response.json(taskFinished);
    }
    else{
        return response.status(404).json( {message: 'Quarto não encontrado!'} )
    }
};
