import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import QR from '../../atoms/QR'
import { connect } from 'react-redux'
import { loadFonts } from '../../../dux/actions/authActions';
import { TopContainer } from "../../organisms/TopContainer";


class QRCode extends Component {
    async componentDidMount() {
        StatusBar.setHidden(true)
        await this.props.dispatchLoadFonts()
    }
  render() {
    const { appStyles: { fontLoaded } } = this.props

    if (fontLoaded) {
        return (
        <Fragment>
            <TopContainer header='Socially Food QRCode' />
            <QR />
        </Fragment>
    )
} else {
    return null
}
  }
}


const mapDispatchToProps = {
    dispatchLoadFonts: () => loadFonts(),
}


const mapStateToProps = state => ({
    appStyles: state.appStyles,
})

export default connect(mapStateToProps, mapDispatchToProps)(QRCode)


