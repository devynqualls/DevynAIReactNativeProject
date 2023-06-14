import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextAnimator from './TextAnimator';
import AnimatedLoadingIcon from './AnimatedLoadingIcon'

export default function App() {

 const loadingText = "WELCOME TO DEVYN.AI "

  const splashStyles = StyleSheet.create({
    splashPage: {
      flex: 1,
      backgroundColor: '#3E54D3',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={splashStyles.splashPage} >
      <AnimatedLoadingIcon name="globe" size={85} color="#4FE0B6"/>
     <TextAnimator text={[`${loadingText}`, "AN INTERACTIVE ARTIFICIAL INTELLIGENCE BUILT FROM THE CHATGPT ECOSYSTEM"]}></TextAnimator>
      <StatusBar style="light" />
    </View>
  );
}


// #3E54D3 #4FE0B6