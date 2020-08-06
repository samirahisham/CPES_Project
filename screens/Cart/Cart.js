import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  View,
  Platform,
  Button,
} from "react-native";
import ShoppingItemObj from "../Shopping/ShoppingItemObj";
import { removeCartAction } from "../../store/actions/CartActions";

import { connect } from "react-redux";

const Cart = ({ myCart, remove }) => {
  let total = 0;

  if (myCart)
    if (myCart.length > 1) {
      total = myCart.reduce(
        (prev, next) => prev + next.item.price * next.quantity,
        0
      );
    } else if (myCart.length == 1) {
      console.log("le cart", myCart);
      total = myCart[0].item.price;
    }

  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <ShoppingItemObj item={item.item} />
        <Text style={{ fontWeight: "bold" }}>qauntity {item.quantity}</Text>
        <Button title="remove" onPress={() => remove(item)} />
      </View>
    );
  };
  const handlePress = () => {
    console.log("checkout my cart", myCart);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          marginTop: (Platform.OS = "android" ? 60 : 20),
          width: "100%",
        }}
      >
        <Text style={{ alignSelf: "center" }}>My Cart</Text>
        {myCart.length ? (
          // console.log(myCart)
          <FlatList
            style={{ width: "100%", marginBottom: 10 }}
            data={myCart}
            // keyExtractor={(item, idx) => item.item.id.toString() + idx}
            renderItem={renderItem}
          />
        ) : (
          <Text style={{ flex: 1 }}>Empty</Text>
        )}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Total</Text>
          <Text>{total} KD</Text>
        </View>
        <Button title="checkout" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => ({
  remove: (item) => dispatch(removeCartAction(item)),
});
const mapStateToProps = (state) => ({ myCart: state.rootCart.Cart });
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
