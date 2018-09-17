import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button'
import { connect } from 'react-redux'
import { authenticate } from '../../../dux/actions/authActions'



class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  authenticateFirebase = () => {
    const { email, password } = this.props
    this.props.dispatchAuthenticate(email, password)
  }

  render() {
    const {
      auth: { isAuthenticated, signInFailureMessage }
    } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Image
            source={require('../../../utils/images/logo.png')}
            style={styles.headingImage}
            resizeMode="contain"
          />
        </View>
        <Text style={[styles.greeting]}>
          Socially Food
        </Text>
        <Text style={[styles.greeting2]}>
         Please Login with Restaurant Email to Continue,
        </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Restaurant Email"
            type='email'
            onChangeText={this.onChangeText}
            value={this.state.email}
          />
          <Input
            placeholder="Password"
            type='password'
            onChangeText={this.onChangeText}
            value={this.state.password}
            secureTextEntry
          />
        </View>

        <Button
          isLoading={isAuthenticated}
          title='Sign In'
          onPress={() => null}
        />
      </View>
    );
  }
}


const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = {
  dispatchAuthenticate: (email, password) => authenticate(email, password)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    flexDirection: 'row',
    // position: 'relative',
    // left: 30
  },
  headingImage: {
    width: 100,
    height: 100
  },
  inputContainer: {
    marginTop: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    position: 'relative',
    top: -60
  },
  greeting: {
    paddingTop: 5,
    paddingBottom: 20,
    fontSize: 24,
    fontFamily: 'montserrat',
    position: 'relative',
    top: -10
  },
  greeting2: {
    color: '#666',
    fontSize: 17,
    marginTop: 5,
    fontFamily: 'montserrat'
  },
  changePgreeting: {
    color: '#666',
    fontSize: 24,
    paddingTop: 20
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    padding: 30
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
