import {Admin } from '../models/admin';
import jwt from 'jsonwebtoken';

class Admins {
    /**
   * signup a new user
   * @param {any} req user request object
   * @param {any} res servers response
   * @return {void}
   */
  adminSignup(req, res) {
    const { username, password } = req.body;
    Admin.findOne({
      username: username.trim().toLowerCase()
    })
      .then((userFound) => {
        if (userFound) {
          return res.status(409).send({
            error: 'sorry user with that username already exist'
          });
        }
        const user = new Admin({
          username: username.trim().toLowerCase(),
          password

        });
        user.save().then((newUser) => {
          const token = jwt.sign(
            {
              id: newUser._id,
              username: newUser.username,
            },
            process.env.SECRET,
            { expiresIn: 24 * 60 * 60 }
          );
          return res.status(201).send({
            message: `Welcome!! ${req.body.username}`,
            user: newUser,
            token
          });
        })
          .catch((error) => {
            return res.status(400).send(error.message);
          });
      }).catch((err) => {
        return res.status(400).send({ err })
      })
  }

}
module.exports = new Admins();