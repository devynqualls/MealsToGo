import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { styled } from "styled-components/native";


const title = styled.Text`
padding: 16px;
color: red;
`;

const restaurantCard = styled(Card)`
backgroundColor: "white"
`

const restaurantCover = styled(Card.Cover)`
backgroundColor: "white";
padding: 20px;
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={restaurantCard}>
      <Card.Cover key={name} style={restaurantCover} source={{ uri: photos[0] }} />
      <Text style={title}>{name}</Text>
    </Card>
  );
};

// const styles = StyleSheet.create({
//   card: {  },
//   cover: { padding: 20, backgroundColor: "white" },
//   title: { padding: 16 },
// });