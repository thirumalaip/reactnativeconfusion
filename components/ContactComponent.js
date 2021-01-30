import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  Button,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card, Icon, Rating, Input } from 'react-native-elements';
const ContactComponents = (props) => {
  return (
    <Card>
    <Card.Title style={{fontSize:20, fontWeight: 'bold'}}>Contact Information</Card.Title>
    <Card.Divider/>
    <Text style={styles.textStyle}>  
    121, Clear Water Bay Road{'\n'}
    Clear Water Bay, Kowloon{'\n'}
    HONG KONG{'\n'}
    Tel: +852 1234 5678{'\n'}
    Fax: +852 8765 4321{'\n'}
    EEmail:confusion@food.net{'\n'}
    </Text>
    </Card>
  );
};
const styles = StyleSheet.create({
  textStyle:{
      fontSize: 18,
  }
})
export default ContactComponents;
