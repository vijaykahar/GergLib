import { Linking } from 'react-native';
import { IS_IPHONE } from 'src/constants/constant';

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