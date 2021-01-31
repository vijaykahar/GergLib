/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { BackHandler, Alert, LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  setJSExceptionHandler,
  getJSExceptionHandler,
} from 'react-native-exception-handler';
import Root from 'src/screens/root';
import { AsyncStorage } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidColor } from '@notifee/react-native';
/**
 * Interfaces
 */
const reporter = (error: any) => {
  // Logic for reporting to devs
  // Example : Log issues to github issues using github apis.
  console.log(error); // sample
};
const errorHandler = (e: any, isFatal: any) => {
  if (isFatal) {
    reporter(e);
    Alert.alert(
      'Unexpected error occurred',
      `
          Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}
   
          We have reported this to our team ! Please close the app and start again!
          `,
      [
        {
          text: 'Close',
          onPress: () => { },
        },
      ],
    );
  } else {
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};

setJSExceptionHandler(errorHandler, true);
interface IAppProps {
}

const App = (props: IAppProps) => {
  LogBox.ignoreAllLogs(true)
  React.useEffect(() => {

    checkPermission();


    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage,
      );
      handleNavigation(remoteMessage)
    })

    messaging().getInitialNotification().then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage,
        );
        handleNavigation(remoteMessage)
        // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
      }
    })


    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      // alert('A new FCM message arrived!\n' + JSON.stringify(remoteMessage));
      //Handle foreground messages
      displayNotification(remoteMessage);
    });

    return unsubscribe;


  }, []);

  const handleNavigation = (message: any) => {
    const type = message.data.Type;
    if (type === 'offer') {

      // Router.navigate('ViewOffer', {
      //   offerId: message.data.offerId
      // })
    } if (type === 'badge' || type === 'achievement') {

      // Router.navigate('Profile', "")
    }

  }


  const getFCMToken = () => {
    messaging().getToken().then(token => {
      // console.log("FCM TOKEN ===>", token);
      AsyncStorage.setItem("fcmToken", token)
    })
  }
  const requestPermission = async () => {
    messaging().requestPermission()
      .then(() => {
        getFCMToken();
      })
      .catch(error => {
      });
  }
  const checkPermission = async () => {

    const enabled = await messaging().hasPermission();
    if (enabled) {
      console.log('checkPermission call')
      getFCMToken();
    } else {
      requestPermission();
    }
  }

  const displayNotification = async (message: any) => {
    console.log('A new FCM message arrived!\n' + JSON.stringify(message));

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    notifee.displayNotification({
      title: message.notification.title,
      body: message.notification.body,
      android: {
        channelId,
        asForegroundService: false,
        // color: AndroidColor.RED,
        // colorized: true,
      },
    });

  }
  return (
    <Root />
  )
}
export default App;