import { NextApiRequest, NextApiResponse } from 'next';

const signinEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  const user = await authenticateUser(email, password);

  if (user) {
    const token = generateToken(user);
    res.status(200).json({ token: token });
  } else {
    res.status(400).json({ error: 'Invalid email or password' });
  }
};

export default signinEmail;