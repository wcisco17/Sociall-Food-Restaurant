import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import Login from './components/pages/Authentication/Login'
import { loadFonts, } from "./dux/actions/authActions";

import Navigation from './components/molecules/Navigation'
import {Loader} from './components/organisms/Loader'

 class Index extends Component {
    //  getStatus = this.props.dispatchGetUserStatus();

     async componentDidMount() {
         try {
            //  await this.getStatus;
             await this.props.dispatchLoadFonts();
         } catch (err) {
             console.log('Error', err)
         }
     }
  render() {
    const { appStyles: { fontLoaded } } = this.props;
    const { auth: { user } } = this.props
        return  fontLoaded && <Navigation />
  }
}

const mapDispatchToProps = {
    dispatchLoadFonts: () => loadFonts(),
    // dispatchGetUserStatus: () => getUsersStatus()
}


const mapStateToProps = state => ({
    appStyles: state.appStyles,
    auth: state.auth
})

export default connect(mapStateToProps,mapDispatchToProps)(Index)