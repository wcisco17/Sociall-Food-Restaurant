import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import Login from './components/pages/Authentication/Login'
import { loadFonts, getUsersStatus } from "./dux/actions/authActions";
import Home from './components/pages/Application/Home';









 class Index extends Component {
     getStatus = this.props.dispatchGetUserStatus();

     async componentDidMount() {
         try {
             await this.getStatus;
             await this.props.dispatchLoadFonts();
         } catch (err) {
             console.log('Error', err)
         }
     }
  render() {
    const { appStyles: { fontLoaded } } = this.props;
    const { auth: { user } } = this.props
    if (fontLoaded) {
            return <Login />
     } else {
         return null
     }
  }
}

const mapDispatchToProps = {
    dispatchLoadFonts: () => loadFonts(),
    dispatchGetUserStatus: () => getUsersStatus()
}


const mapStateToProps = state => ({
    appStyles: state.appStyles,
    auth: state.auth
})

export default connect(mapStateToProps,mapDispatchToProps)(Index)