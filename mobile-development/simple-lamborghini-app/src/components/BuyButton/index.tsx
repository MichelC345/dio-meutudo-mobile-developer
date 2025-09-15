import { View, TouchableOpacity, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";

export default function BuyButton({onPress}: {onPress: () => void}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <AntDesign
          name="shopping-cart"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.buttonText}> Buy This</Text>
      </TouchableOpacity>
    </View>
  );
}
