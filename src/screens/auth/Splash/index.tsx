import React, { useEffect } from 'react'
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native'
import styles from './styles'
import { IReduxState } from 'src/redux/reducers'
import * as ROUTE from 'src/constants/routeName'
import { connect } from 'react-redux'
import { navigationRef } from 'src/routes/router'

interface SplashProps {

}

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      navigationRef.current?.navigate(ROUTE.LOGIN)
    }, 1500);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>this is a splash screen</Text>
      </View>
    </SafeAreaView>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {})(Splash)
