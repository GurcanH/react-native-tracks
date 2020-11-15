import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = dispatch => {
  console.log('ddd');
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

const signin = dispatch => {
  return ({ email, password }) => {
    //* try to signin
    //* handle success by updating state
    //* handle failure by showing error message (somehow)
  };
};

const signout = dispatch => {
  return () => {
    //* somehow signout
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
);
