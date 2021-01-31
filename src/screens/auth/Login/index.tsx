import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native'
import styles from './styles'
import { IReduxState } from 'src/redux/reducers'
import { connect } from 'react-redux'

interface ILoginProps {

}
const Login = () => {
  const [] = React.useState('')
  const [] = React.useState('')


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>This is an initial screen</Text>
      </View>
    </SafeAreaView>
  )
}

// export default Login;
const mapStateToProps = () => ({})

export default connect(mapStateToProps, {})(Login)
