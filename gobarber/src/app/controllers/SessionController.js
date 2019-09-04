import jwt  from 'jsonwebtoken';
import User from '../models/user';

class SessionController {

  async store(req, res){ 
    
    const { email, password } = req.body; 

    const user = await User.findOne({ where: { email } });

   return res.send( user );

  //  if (!user) {
 //     return res.status(401).json({ error: 'usuário não encontrado!'});
 //   }

  //  if (!(await user.checkPassword(req.body.password))){
 //     return res.status(401).json({ error: 'Senha incorreta!' });
 //   }   

 //   const { id, name } = user;  

 //   return res.json({
 //     user:{
 //       id,
 //       name,
 //       email
 //     },

 //     token: jwt.sign({ id }, 'c7c1213003cbd0014bebebcb588a80e9', {
 //       expiresIn: '7d',
 //     }),
 
//    });


  }
}    



export default new SessionController();