import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  Button,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {Card, ListItem, Avatar} from 'react-native-elements';
import {LEADERS}from '../shared/leaders';

const RenderAboutus = () => {
  return (
    <Card>
      <Card.Title style={{ fontSize: 20, fontWeight: "bold" }}>
        Our History
      </Card.Title>
      <Card.Divider />
      <Text>
        Started in 2010, Ristorante con Fusion quickly established itself as a
        culinary icon par excellence in Hong Kong. With its unique brand of
        world fusion cuisine that can be found nowhere else, it enjoys patronage
        from the A-list clientele in Hong Kong. Featuring four of the best
        three-star Michelin chefs in the world, you never know what will arrive
        on your plate the next time you visit us.
        {"\n"}
        {"\n"}
        {"\n"}
        The restaurant traces its humble beginnings to The Frying Pan, a
        successful chain started by our CEO, Mr. Peter Pan, that featured for
        the first time the world's best cuisines in a pan.
      </Text>
    </Card>
  );
};

const renderMenuItem =({item, index}) =>{
  return(<ListItem key={index} bottomDivider  >
  <Avatar source={require('./images/alberto.png')} />
  <ListItem.Content>
    <ListItem.Title>{item.name}</ListItem.Title>
    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
  </ListItem.Content>
</ListItem>)
};

const AboutComponents = (props) => {
  const [getLeaders, setLeaders] = useState([]);
  useEffect(() =>{
      const leaders = LEADERS;
      setLeaders(leaders);
  },[]);

  return (
    <ScrollView>
      <RenderAboutus />
      <Card>
      <Card.Title style={{fontSize:20, fontWeight: 'bold'}}>Contact Information</Card.Title>
      <FlatList
   data = {getLeaders}
   renderItem={renderMenuItem}
   keyExtractor={item => item.id.toString()}
  />
  </Card>
    </ScrollView>
  );
};
export default AboutComponents;
