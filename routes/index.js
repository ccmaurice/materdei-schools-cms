import express from 'express';
import { Admins } from '../controllers';
// import validateInput from '../utils/validateInput';
// import jwtVerify from '../utils/jwtVerify';
// const router = express.Router();

// router.get('/', (res) => {
//   res.render('home.ejs');
// });

// new end points
router.post('/admin/signup', Admins.adminSignup);
// router.post('/admin/signin', validateInput.adminInput, Admins.adminSignin);
// router.post('/admin/parcel', jwtVerify.verifyToken, validateInput.createParcel, Admins.createParcel);
// router.get('/admin/parcel/:id', Admins.getOneParcel);
// router.post('/admin/parcel/:id',  Admins.updateParcel);
// router.get('/admin/parcel', jwtVerify.verifyToken, Admins.getAllParcels);



export default router;