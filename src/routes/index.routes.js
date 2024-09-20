import {Router} from 'express';
import { ping } from '../controladores/index.controladores.js';

const router = Router()

router.get('/ping', ping);
 
export default router    