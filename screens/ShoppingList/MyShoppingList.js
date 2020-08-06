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
  const handleAddItem = () => {
    if (userInput != "") {
      setMyItems([...myItems, userInput]), setUserInput("");
    }
  };
  const renderItem = ({ item }) => {
    const handleChange = (text) => {};
    return (
      <TouchableOpacity style={{ padding: 5 }}>
        <Text style={{ width: "100%" }}>{item}</Text>
      </TouchableOpacity>
    );
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
        <TextInput
          onChangeText={(text) => setUserInput(text)}
          defaultValue={userInput}
          placeholder="enter an Item name"
          style={{
            width: "70%",
            borderWidth: 1,
            height: 20,
            marginBottom: 5,
            marginTop: 30,
          }}
        />
        <Button title="add item" onPress={handleAddItem} />
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
