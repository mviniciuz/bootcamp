import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'servidor online!' }));

export default routes;
