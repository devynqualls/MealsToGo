import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { RestaurantInfoCard } from "../components/restaurants-info.component";
import { styled } from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`
const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  backgroundColor: ${(props) => props.theme.colors.bg.secondary}
  `

export const RestaurantsScreen = () => (
  <SafeAreaView>
    <View >
      <Searchbar />
    </View>
    <View >
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//   },
//   search: {
//     padding: 16,
//   },
//   list: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "blue",
//   },
// });

