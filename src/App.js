import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Button, CardSection, Spinner } from './components/common';
import Welcome from './components/Welcome';
import LogOut from './components/LogOut';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
    };
  }

  //Component Will Mount is a lifecycle method in react that runs whatever function that you put in it when the component is about mounting
  //Other lifecycle methods are componentDidMount, componentWillUnmount, etc...

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

  //function to choose what to display on screen
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <LogOut />;

      case false:
        return <Welcome />;

      default:
        return (
          <View style={styles.containerStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  //all react class component must  have a render function which renders and returns JSX which renders what's in it on the screen...

  render() {
    return <View>{this.renderContent()}</View>;
  }
}

const styles = {
  containerStyle: {
    marginTop: 25,
  },
};
export default App;
