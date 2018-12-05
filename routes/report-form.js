import express from 'express';
const router = express.Router();
import list from './../controller/report-form/list'

router.get('/list', list);

export default router;
