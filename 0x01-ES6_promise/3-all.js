import {uploadPhoto, createUser} from './utils.js';
export default function handleProfileSignup() {
    const pr = uploadPhoto();
    const us = createUser();
    
    return Promise.all([pr, us])
    .then((values) => {
        const [photo, user] = values;
        console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
      })
    .catch(() => {
        console.log('Signup system offline');
      });
}