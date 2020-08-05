import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ShoppingItemObj from "./ShoppingItemObj";
import { MaterialIcons } from "@expo/vector-icons";

const ShopItems = [
  {
    id: 1,
    name: "food",
    price: "12",
    image_url:
      "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
    stock: "15",
  },
  {
    id: 2,
    name: "drink",
    price: "20",
    image_url:
      "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
    stock: "40",
  },
  {
    id: 3,
    name: "drink",
    price: "20",
    image_url:
      "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
    stock: "40",
  },
  {
    id: 4,
    name: "drink",
    price: "20",
    image_url:
      "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
    stock: "40",
  },
  {
    id: 5,
    name: "drink",
    price: "20",
    image_url:
      "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
    stock: "40",
  },
  {
    id: 5,
    name: "drink",
    price: "20",
    image_url:
      "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
    stock: "40",
  },
];
const ShoppingHome = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        // borderWidth: 1,
        flex: 1,
        flexDirection: "row",
        // justifyContent: "space-around",
      }}
      onPress={() => navigation.navigate("Detail", { ItemParam: item })}
    >
      <ShoppingItemObj style={{ flex: 1 }} item={item} />
      <TouchableOpacity
        style={{ justifyContent: "center" }}
        onPress={console.log("add to cart")}
      >
        <MaterialIcons name="add-shopping-cart" size={24} color="green" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={1}
        style={{ width: "100%", flex: 1 }}
        data={ShopItems}
        renderItem={renderItem}
        keyExtractor={(item, idx) => item.id.toString() + idx.toString()}
      />
    </SafeAreaView>
  );
};
export default ShoppingHome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
