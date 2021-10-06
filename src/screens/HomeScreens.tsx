import React from "react";
import {Text, View} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen({navigation}){
    return(
        <View>
            
            <TouchableOpacity onPress={()=>navigation.navigate("PokemonScreen")}>
                <Text>holis</Text>
            </TouchableOpacity>
        </View>
    )
}