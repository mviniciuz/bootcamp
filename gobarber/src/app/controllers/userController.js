import User from '../models/User';

class UserControlller {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      email,
      name,
      provider,
    });
  }
}

export default new UserControlller();
