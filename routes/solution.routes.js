import express from 'express';
import SolutionController from '../controllers/solution.controller.js'; // 👈 add `.js` at end if needed

const router = express.Router();

router.get('/filter', SolutionController.getfilters)
router.get('/', SolutionController.getAll);
router.get('/:id', SolutionController.getById);
router.post('/insertapi', SolutionController.insertapi)


export default router;