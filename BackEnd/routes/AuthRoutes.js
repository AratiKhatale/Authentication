import express from 'express'
import { Login, Logout, SignUp } from '../Controllers/AuthController.js';

const routes = express.Router()

routes.post('/signup',SignUp);

routes.post('/login',Login);

routes.post('/logout',Logout);

export default routes;