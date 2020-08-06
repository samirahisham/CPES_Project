import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Platform,
  View,
  TouchableOpacity,
  Button,
} from "react-native";

const MyShoppingList = () => {
  const [myItems, setMyItems] = useState([]);
  const [userInput, setUserInput] = useState("");

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <View>
          <Text>{item.item}</Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Button
            title="remove"
            onPress={() =>
              setMyItems(
                myItems.filter((element) => {
                  return element.id != item.id;
                })
              )
            }
          />
        </View>
      </TouchableOpacity>
    );
  };
  const handlePress = () => {
    if (userInput != "") {
      setMyItems([{ item: userInput, id: myItems.length }, ...myItems]);
      setUserInput("");
    }
  };
  const handleChange = (val) => {
    setUserInput(val);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          width: "100%",
          marginTop: (Platform.OS = "android" ? 40 : 20),
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TextInput
            value={userInput}
            onChangeText={handleChange}
            placeholder="enter an Item name"
            style={{
              width: "70%",
              borderWidth: 1,
              height: 20,
              marginBottom: 5,
              marginTop: 30,
            }}
          />
        </View>
        <Button title="add to list" onPress={handlePress} />
        <View
          style={{
            flex: 1,
          }}
        >
          <FlatList
            keyExtractor={(item, idx) => idx}
            style={{ padding: 10 }}
            data={myItems}
            renderItem={renderItem}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyShoppingList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
