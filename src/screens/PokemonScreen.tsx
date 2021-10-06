import React from "react";
import { View, Text, TouchableOpacity }  from "react-native";

export default function PokemonScreen({navigation}){
    return(
        <View>
             <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")}>
                <Text>holis</Text>
            </TouchableOpacity>
          
        </View>
    )
}