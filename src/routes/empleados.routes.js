import { Router } from 'express'
import { getEmpleados, createEmpleados, updateEmpleados, deleteEmpleados } from '../controladores/empleados.controladores.js';

const router =  Router()

router.get('/empleados', getEmpleados);

router.post('/empleados', createEmpleados);

router.put('/empleados', updateEmpleados);

router.delete('/empleados', deleteEmpleados);

export default router 