import React from 'react';
import { FlatList, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import MenuImage from '../../components/MenuImage/MenuImage';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Ture cu Bicla',
    headerLeft: (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    )
  });

  constructor(props) {
    super(props);
    this.state = {
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

  onPressRecipe = item => {
    this.props.navigation.navigate('Traseu', { item });
  };

  renderRecipes=(data)=>
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(data.item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: data.item.image }} />
        <Text style={styles.title}>{data.item.title}</Text>
      </View>
    </TouchableHighlight>

  render() {
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={this.state.dataSource}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
