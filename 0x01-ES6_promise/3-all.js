import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResult, userResult] = results;
      console.log(
        `${photoResult.body} ${userResult.firstName} ${userResult.lastName}`,
      );
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
