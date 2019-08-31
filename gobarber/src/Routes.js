import { Router } from 'express';

import User from './app/models/user';


const routes = new Router();

routes.get('/', async (req, res) =>{
  const user = await User.create({
    name: 'Marcus Vinicius',
    email:'m.viniciuz@hotmail.com',
    password_hash:'12345'
  });
   res.json({ message: 'servidor online!' })
});

export default routes;
