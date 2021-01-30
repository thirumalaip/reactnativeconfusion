import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  Title,
  Button,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Card, Icon, Rating, Input } from 'react-native-elements';
import { DISHES } from "../shared/dishes";

const RenderDish =(props) => {
  const dish = props.dish
  if(dish!=null){
    return(

      <Card >
        <Card.Image source={require('./images/uthappizza.png')}>
          <Card.Title>{dish.name}</Card.Title>

        </Card.Image>
        <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
      </Card>


    );
  } else {
    return null;
  }
}
const DishDetailComponents = (props) => {
  const [getDishes, setDishes] = useState([]);
  useEffect(() =>{
      const dishes = DISHES;
       setDishes(dishes);
  },[]);

  const dishId = props.route.params.dishid;
  return (
    <RenderDish dish = {getDishes[+dishId]} />
  );
};
export default DishDetailComponents;
