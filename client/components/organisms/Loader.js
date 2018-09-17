import React, { Fragment } from 'react'

import { Text, View, StyleSheet, Image, Animated, Easing } from "react-native";



class Load extends React.Component {
    constructor(props) {
        super(props);

        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0)
    }

    componentDidMount () {
        this.animate()
      }
      animate = () =>  {
        this.animatedValue1.setValue(0)
        this.animatedValue2.setValue(0)
        const createAnimation = function (value, duration, easing, delay = 0) {
          return Animated.timing(
            value,
            {
              toValue: 1,
              duration,
              easing,
              delay
            }
          )
        }
        Animated.parallel([
          createAnimation(this.animatedValue1, 800 ,Easing.ease),
          createAnimation(this.animatedValue2, 1500,)
        ]).start()
      }

      _renderView = ({ ...props }) => (
          <Text style={[styles.greeting]}>
                {'Socially Food'.toUpperCase()}
            </Text>
      )

    render() {
        const scaleImg = this.animatedValue1.interpolate({
            inputRange: [0, 4],
            outputRange: [0.8, 3]
          })

        const fadeText = this.animatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.7]
        })
        return (
        <Fragment>
                <View style={styles.heading}>
                <View style={styles.heading2} >
                <Animated.View 
                   style={{ transform: [{scale: scaleImg}] }}>
                <Image
                    source={require('../../utils/images/logo.png')}
                    style={styles.headingImage}
                    resizeMode="contain"
                    />
                </Animated.View>
                    <View>
                <Animated.View
                    style={{
                        ...this.props.style,
                        opacity: fadeText,
                    }}
                    >
                    {this._renderView({ ...this.props })}
                    </Animated.View>
                    </View>
                </View>
            </View>
          </Fragment>
        )
    }
}


export const Loader = ({}, props) => {
    return (
        <Load />
    )
}

const styles = StyleSheet.create({
    heading: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
      },
      heading2: {

      },
      headingImage: {
        width: 100,
        height: 100,
        position: 'relative',
        left: 137,
      }, 
      greeting: {
        fontSize: 24,
        // fontFamily: 'montserrat',
        textAlign: 'center'
      },
})

