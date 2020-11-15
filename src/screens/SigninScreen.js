import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign In for Tracker'
        errorMessage=''
        submitButtonText='Sign In'
        onSubmit={() => {}}
      />
      <NavLink
        routeName='Signup'
        text='Dont have an account? Sign up instead!'
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 25
  }
});

export default SigninScreen;
