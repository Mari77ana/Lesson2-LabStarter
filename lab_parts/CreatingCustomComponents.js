import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styles } from "../styles";
import { useState } from "react";

/* TODO: DEFINE THE CART ITEM COMPONENT HERE */

const CartItem = (props) => {
  const [count, setCount] = useState(0)
  console.log(props);
  return(
    <View style={styles.test}>
      <Text>{props.foodlist}</Text>
      <Button title = "-" onPress={() => setCount((prevCount) => prevCount - 1)}/>
      <Text>{count}</Text>
      <Button title = "+" onPress={() => setCount((prevCount) => prevCount + 1)}/>
    </View>
  );
}

/* Set labPart variable to 5, to view this part of the lab */
export default function CreatingCustomComponents() {
  return (
    <SafeAreaView style={styles.content}>
      <ScrollView>
        <Text style={styles.headerText}>Creating Custom Components</Text>

        <View style={{ ...styles.section, backgroundColor: "#ffeb7a" }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Shopping Cart
          </Text>
          {/* TODO: ADD THE CART ITEMS BELOW*/}
          <CartItem foodlist = "Milk"/>
          <CartItem foodlist = "Bread"/>
          <CartItem foodlist = "Eggs"/>

        </View>
        <View style={styles.section}>
          <Text style={styles.bodyText}>
            <Text style={{ fontWeight: "bold" }}>Your Task: </Text>
            {"\n\n"}
            1. Create a custom component called CartItem. It should have a text
            that displays the item name, and the amount of items with a button
            to increase and decrease the amount.
            {"\n\n"}
            2. Create three cart item components, one for Milk, bread and eggs
            with initial values of 0. Take a look at the 'shopping cart items'
            image in the assets folder to see what it should look like in the
            end.
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Bonus: </Text>Display the total
            number of items in the cart. Think about how you could use a
            dictionary state variable to do this.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
