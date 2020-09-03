import jwt from 'jsonwebtoken';

const generatedToken = (userId) =>{
  return jwt.sign({userId},'thisisasecret',{ expiresIn:'7d' })
}

export { generatedToken as default}