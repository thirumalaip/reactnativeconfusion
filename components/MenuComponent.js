import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  Button,
  Platform,
  TouchableOpacity,
} from "react-native";
import {Tile, ListItem, Avatar} from 'react-native-elements';
import { DISHES } from "../shared/dishes";

const MenuComponents = ({navigation}) => {
    const [getDishes, setDishes] = useState([]);
   useEffect(() =>{
       const dishes = DISHES;
        setDishes(dishes);
   },[]);

const renderMenuItem =({item, index}) =>{
    return(<ListItem key={index} bottomDivider  onPress={()=> navigation.navigate('Dishdetail', {dishid:item.id})} >
    <Avatar source={require('./images/uthappizza.png')} />
    <ListItem.Content>
      <ListItem.Title>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>)
};



//const {navigate} = this.props;


  return (
   <FlatList
   data = {getDishes}
   renderItem={renderMenuItem}
   keyExtractor={item => item.id.toString()}
  />
    
  );
};
export default MenuComponents;
