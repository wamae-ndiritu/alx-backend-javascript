import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  try {
    const userResult = await userPromise;
    const photoResult = await photoPromise;

    return [
      { status: 'fulfilled', value: userResult },
      { status: 'fulfilled', value: photoResult },
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: error },
      { status: 'rejected', value: error },
    ];
  }
}

export default handleProfileSignup;
