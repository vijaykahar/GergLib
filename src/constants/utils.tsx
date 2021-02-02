import { Linking, Dimensions } from 'react-native';
import { IS_IPHONE } from 'src/constants/constant';

let screenwidth = Dimensions.get('screen').width
let screenheight = Dimensions.get('screen').height
export const openSpotifyApp = () => {
    const url = `spotify://app`;
    let storeURL = ''
    if (IS_IPHONE) {
        let spotifyURL = `spotify:`;
        storeURL = 'https://open.spotify.com/';
        Linking.canOpenURL(spotifyURL).then(supported => {
            if (supported) {

                Linking.openURL(storeURL);
            } else {
                // alert(supported)
                storeURL = `https://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580`

                Linking.openURL(storeURL);
            }
        });

        // Linking.openURL(storeURL);
    } else {

        Linking.canOpenURL(url).then(supported => {
            if (supported) {

                Linking.openURL(url);
            } else {
                // alert(supported)
                storeURL = `https://play.google.com/store/apps/details?id=com.spotify.music&hl=en`

                Linking.openURL(storeURL);
            }
        });
    }
}

export const scalerWidth = (value: number) => {
    let returnValue = 100 * value / screenwidth
    return returnValue
}

export const scalerHeight = (value: number) => {
    let returnValue = 100 * value / screenheight
    return returnValue
}