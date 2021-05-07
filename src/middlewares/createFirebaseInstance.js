import {firebaseApp, db, auth} from '../services/firebase';

export default () => async (req, res, next) => {
  try {
    req.firebase = firebaseApp;
    req.db = db;
    req.auth = auth;
    next();
  } catch (e) {
    return res.status(500, e);
  }
}
