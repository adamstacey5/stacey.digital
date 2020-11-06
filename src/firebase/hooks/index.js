import { useEffect, useState } from 'react';

import { auth } from '../';

export const useServiceAccountAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => setIsAuthenticated(user && user.uid));
    auth.signInWithEmailAndPassword(
      process.env.REACT_APP_FIREBASE_EMAIL,
      process.env.REACT_APP_FIREBASE_PWD
    );
  }, []);

  return isAuthenticated;
};
