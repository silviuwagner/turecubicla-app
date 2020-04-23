import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
// import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';

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
          .catch(error=>console.log(error)) //to catch the errors if any
  };

  onPressRecipe = item => {
    this.props.navigation.navigate('Traseu', { item });
  };

  renderRecipes=(data)=>
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(data.item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: data.item.image }} />
        <Text style={styles.title}>{data.item.title}</Text>
        {/* <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text> */}
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
