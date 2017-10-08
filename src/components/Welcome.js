import React, { Component } from 'react';
import { View, Text, Image, BackHandler } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: '',
    };
  }

  onSignInPress() {
    this.setState({
      state: 'signIn',
    });
  }

  onSignUpPress() {
    this.setState({
      state: 'signUp',
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return (
      <View style={styles.containerStyle}>
        <Button onPress={() => this.onSignInPress()}>SIGN IN</Button>
        <Button onPress={() => this.onSignUpPress()}>SIGN UP</Button>
      </View>
    );
  }

  rendView() {
    switch (this.state.state) {
      case 'signIn':
        return <SignInForm />;

      case 'signUp':
        return <SignUpForm />;

      default:
        return (
          <Card>
            <CardSection>
              <Image
                style={{ height: 400, width: null, flex: 1 }}
                source={require('../public/images.png')}
              />
            </CardSection>
            <CardSection>{this.renderButton()}</CardSection>
          </Card>
        );
    }
  }

  render() {
    return this.rendView();
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export default Welcome;
