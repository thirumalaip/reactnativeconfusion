import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  ScrollView,
  Button,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Card, Icon, Rating, Input } from 'react-native-elements';
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";

const RenderItem =(props) => {
  const dish = props.item
  if(dish!=null){
    return(

      <Card >
        <Card.Image source={require('./images/uthappizza.png')}>
          <Card.Title>{dish.name}</Card.Title>
          <Card.FeaturedSubtitle>{dish.designation}</Card.FeaturedSubtitle>

        </Card.Image>
        <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
      </Card>


    );
  } else {
    return(<View></View>);
  }
}

const HomeComponents = (props) => {
  const [getDishes, setDishes] = useState([]);
  const [getPromotions, setPromotions] = useState([]);
  const [getLeaders, setLeaders] = useState([]);

  useEffect(() =>{
      const dishes = DISHES;
      const promotions = PROMOTIONS;
      const leaders = LEADERS;

      setDishes(dishes);
      setPromotions(promotions);
      setLeaders(leaders);
  },[]);


  return (
    <ScrollView>
   <RenderItem  item={getDishes.filter((dish)=>dish.featured)[0]}/>
   <RenderItem  item={getPromotions.filter((promotions)=>promotions.featured)[0]}/>
   <RenderItem  item={getLeaders.filter((leader)=>leader.featured)[0]}/>
   </ScrollView>
  );
};
export default HomeComponents;
