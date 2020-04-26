import {StyleSheet, Dimensions} from 'react-native';
const device = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
}

export default StyleSheet.create({
  container: {
    paddingTop: device.height*0.035,
    backgroundColor: '#0D47A1'   
  },
  titleTextContainer: {
    backgroundColor: '#42A5F5',
    height: device.height*0.05,
    justifyContent: 'center'
  },
  titleText: {
    fontSize: device.height*0.03,
    marginLeft: device.width*0.02,
  }
});
