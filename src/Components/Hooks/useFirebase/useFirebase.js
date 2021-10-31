import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializationAuthentication from '../../Firebase/firebase.init';

initializationAuthentication();
const useFirebase = () => {
	const [
		user,
		setUser
	] = useState({});
	const [
		error,
		setError
	] = useState('');
	const [
		isLoading,
		setIsLoading
	] = useState(true);
	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();
	const googleSingIn = () => {
		setIsLoading(true);
		return signInWithPopup(auth, googleProvider)
			.then((result) => {
				console.log(result);
				setUser(result.user);
				setIsLoading(false);
			})
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribed;
	}, []);
	const logOut = () => {
		setIsLoading(true);
		signOut(auth).then(() => {}).finally(() => setIsLoading(false));
	};

	return {
		user,

		error,
		isLoading,
		setUser,
		googleSingIn,
		setIsLoading,
		logOut
	};
};
export default useFirebase;
