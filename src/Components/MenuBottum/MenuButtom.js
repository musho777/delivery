import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import DropShadow from "react-native-drop-shadow";
import {StyleSheet, View,TouchableOpacity} from 'react-native';
import Svgs from '../Svg/Svgs';

export const MenuBottum = (props) => {
  const Tab = createBottomTabNavigator();
  const [active_page, setActivePage] = useState(props.active_page);
  return (
    <View style={styles.wrapper}>
      {active_page == 'Home' ? (
        <DropShadow  style={styles.item}>
          <Svgs title={'ActiveHome'} />
        </DropShadow>
      ) : (
        <TouchableOpacity
          style={styles.item}
         >
          <Svgs title={'ActiveHome'} />
        </TouchableOpacity>
      )}
      {active_page == 'Favorite' ? (
        <View style={styles.item}>
          <Svgs title={'Star'} />
        </View>
      ) : (
        <TouchableOpacity
          style={styles.item}
          >
          <Svgs title={'Star'} />
        </TouchableOpacity>
      )}
      {active_page == 'iSell' ? (
        <View style={styles.item}>
          <Svgs title={'Shtrix'} />
            
        </View>
      ) : (
        <TouchableOpacity style={styles.item}>
          <Svgs title={'Shtrix'} />
        </TouchableOpacity>
      )}
      {active_page == 'Messages' ? (
        <View style={styles.item}>
          <Svgs title={'shopping-cart'} />
          
        </View>
      ) : (
        <TouchableOpacity style={styles.item}>
          <Svgs title={'shopping-cart'} />
        </TouchableOpacity>
      )}
        {active_page == 'Messages' ? (
        <View style={styles.item}>
          <Svgs title={'User'} />
          
        </View>
      ) : (
        <TouchableOpacity style={styles.item}>
          <Svgs title={'User'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 64,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
  },
  item: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "rgba(215, 56, 0, 0.4)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity:  0.80,
    shadowRadius: 5.62,
    elevation: 7
  },
});
