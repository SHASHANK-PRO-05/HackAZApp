import {AsyncStorage} from 'react-native';

export const USER_KEY = "auth-key";

export const onSignIn = (text) => AsyncStorage.setItem(USER_KEY, text);

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
     return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY)
            .then(res => {
                if (res !== null) {
                    resolve(res);
                } else {
                    resolve(null);
                }
            })
            .catch(err => reject(err));
    });
};