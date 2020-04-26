import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ListItem } from 'react-native-elements'
import styles from '../styles/Personal';
import SearchBar from '../components/SearchBar';

const list = [
  {
    title: 'Danh sách bài hát',
    icon: 'headset',
  },
  {
    title: 'Danh sách yêu thích',
    icon: 'favorite',
  },
  {
    title: 'Lịch sử nghe nhạc',
    icon: 'history',
  },
]

export default class Personal extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <StatusBar barStyle="default"/>
        <View>
          <SearchBar/>
        </View>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Cá nhân</Text>
        </View>
        <View>
        {list.map((item, i) => {
          return (
            <Animatable.View key={i} animation="fadeInDown" delay={i*100} duration={500}>
              <TouchableOpacity 
                onPress={()=> console.log(item.title)}
                activeOpacity={0.5}
              >
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                  bottomDivider
                  chevron
                />
              </TouchableOpacity>
            </Animatable.View>  
          )
        })
      }
        </View>
      </View>
    );
  }
}