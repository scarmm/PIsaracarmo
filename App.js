import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";

const Stack = createNativeStackNavigator();

export function HomeScreen({navigation}) {
const irParaSobre = () =>{
  return navigation.navigate("Sobre");
}

  return (
    <View style={styles.container}>
      <Text>Open your app!</Text>
      <Button title="Ir para sobre" onPress={irParaSobre} />
    </View>
  );
}
function SobreScreen(){
  return(
    <View>
      <Text>sou a página sobre</Text>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={HomeScreen} />
        <Stack.Screen name={"Sobre"} component={SobreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
