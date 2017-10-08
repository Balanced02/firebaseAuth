//importing modules
import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

//importing from local files
import { Button, Card, CardSection, Input, Spinner, Header } from './common';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
      loading: false,
    };
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.onSuccess())
      .catch(() => this.onFail());
  }

  onSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }

  onFail() {
    this.setState({ error: 'Error, try after sometime', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return <Button onPress={() => this.onButtonPress()}>SIGN UP</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Full Name"
            placeholder="Daniel A."
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@nomail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secure={true}
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export default SignUpForm;
