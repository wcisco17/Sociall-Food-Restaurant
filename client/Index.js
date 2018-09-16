import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import Login from './components/pages/Authentication/Login'
import { loadFonts } from "./dux/actions/authActions";


 class Index extends Component {
     async componentDidMount() {
         await this.props.dispatchLoadFonts()
     }
  render() {
      const { appStyles: { fontLoaded } } = this.props
    if (fontLoaded) {

        return (
            <Login />
            )
     } else {
         return null
     }
  }
}

const mapDispatchToProps = {
    dispatchLoadFonts: () => loadFonts()
}


const mapStateToProps = state => ({
    appStyles: state.appStyles
})

export default connect(mapStateToProps,mapDispatchToProps)(Index)