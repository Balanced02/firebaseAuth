import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection } from './common';

class LogOut extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>LogOut</Button>
        </CardSection>
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

export default LogOut;
