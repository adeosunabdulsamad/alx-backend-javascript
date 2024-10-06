import {uploadPhoto, createUser} from './utils.js';
export default function handleProfileSignup() {
    const pr = uploadPhoto();
    const us = createUser();
    
    return Promise.all([pr, us])
    .then((values) => {
        console.log(values);
      })
    .catch(() => {
        console.log('Signup system offline');
      });
}