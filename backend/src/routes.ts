import { Router } from "express";

import authMiddleware from "./app/middlewares/authMiddleware";
import UserController from './app/controllers/UserController'
import AuthController from './app/controllers/AuthController'
import { getRooms } from './app/controllers/RoomController';
import { saveRooms } from './app/controllers/RoomController';
import { getRoom } from './app/controllers/RoomController';
import { updateRooms } from './app/controllers/RoomController';
import { deleteRooms } from './app/controllers/RoomController';
import { book } from './app/controllers/RoomController';
import { checkOut } from './app/controllers/RoomController';

const router = Router();

router.post('/users', UserController.store)
router.post('/auth', AuthController.authenticate)
router.get('/users', authMiddleware, UserController.index)

router.get('/rooms', getRooms)
router.post('/rooms', saveRooms)
router.get('/Room/:id', getRoom)
router.put('/Room/:id', updateRooms)
router.delete('/Room/:id', deleteRooms)
router.patch('/Room/:id', book)
router.patch('/RoomCO/:id', checkOut)

export default router;