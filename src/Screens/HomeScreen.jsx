import { Button, Text, View } from "react-native";
import { styles } from "../lib/styles";

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text> <h1>OI CACO</h1></Text>
      <Button
        title="Ir Para Sobre"
        onPress={() => navigation.navigate("Sobre")}
      />
    </View>
  );
};
