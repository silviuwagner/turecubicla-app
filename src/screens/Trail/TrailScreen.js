import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import BackButton from '../../components/BackButton/BackButton';
import StartTrailButton from '../../components/StartTrailButton/StartTrailButton';

export default class TrailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: 'true',
      headerLeft: (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      loading: true,
      dataSource:[]
    };
  }

  componentDidMount(){
    fetch("https://app.turecubicla.ro/trails/api/trails")
        .then(response => response.json())
        .then((responseJson)=> {
            this.setState({
                loading: false,
                dataSource: responseJson
            })
        })
        .catch(error=>console.log(error))
  };

  renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item');

    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
        </View>
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{item.title}</Text>
          <View style={styles.infoContainer}>
            <TouchableHighlight
              
            >
              <Text style={styles.category}>{item.region}</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.infoContainer}>
            <Image style={styles.infoPhoto} source={require('../../../assets/icons/time.png')} />
            <Text style={styles.infoRecipe}>{item.distance} km</Text>
            <Image style={styles.infoPhoto} source={require('../../../assets/icons/difficulty.png')} />
            <Text style={styles.infoRecipe}>{item.difficulty}</Text>
          </View>

          <View style={styles.infoContainer}>
            <StartTrailButton
              onPress={() => {
              }}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoDescriptionRecipe}>{item.about}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
