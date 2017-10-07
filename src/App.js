import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDyNXbnfP1-V_LY1o0z1wa-ByYSpCAnZkM',
      authDomain: 'authentication-98260.firebaseapp.com',
      databaseURL: 'https://authentication-98260.firebaseio.com',
      projectId: 'authentication-98260',
      storageBucket: 'authentication-98260.appspot.com',
      messagingSenderId: '851759449751',
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );

      case false:
        return <LoginForm />;

      default:
        return (
          <View style={styles.containerStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    marginTop: 25,
  },
};
export default App;
