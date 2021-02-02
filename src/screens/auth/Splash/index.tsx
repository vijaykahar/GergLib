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
import * as component from 'src/components'

interface SplashProps {
  name: string,
  age: number,
}

const Splash = (props: SplashProps) => {
  const [email, setemail] = React.useState("")
  const [password, setPass] = React.useState("")
  useEffect(() => {
    setTimeout(() => {
      navigationRef.current?.navigate(ROUTE.LOGIN)
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={{ height: "100%", width: "100%", backgroundColor: "yellow", alignItems: "center", justifyContent: "center" }}>
        <component.EditTextField
          isPassword={false}
          placeholder={"Email"}
          value={email}
          onChangeText={(text: string) => setemail(text)} />
        <component.EditTextField
          isPassword={true}
          placeholder={"Password"}
          value={password}
          onChangeText={(text: string) => setPass(text)} />
      </View> */}
    </SafeAreaView>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {})(Splash)
