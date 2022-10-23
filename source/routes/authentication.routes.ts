import express from 'express';
import controller from '../controllers/authentication.controller';
const router = express.Router();

router.get('/login', controller.login);

export default { router };