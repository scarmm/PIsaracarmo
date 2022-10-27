import { Button, Text, View } from "react-native"
import { styles } from "../lib/styles";

export const SobreScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
        <Text>OI SOObre</Text>
        <Button title="Agui e sobre" onPress={() => navigation.navigate("Home")}/>
        </View>

    );
};