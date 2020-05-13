import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="Trasee"
            source={require('../../../assets/icons/home.png')}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Regiuni"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              // navigation.navigate('Categories');
              // navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Contact"
            source={require('../../../assets/icons/contact.png')}
            onPress={() => {
              // navigation.navigate('Categories');
              // navigation.closeDrawer();
            }}
          />
          <Text style={styles.link}>www.turecubicla.ro</Text>
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
