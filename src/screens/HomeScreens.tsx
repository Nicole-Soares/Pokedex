import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from '../theme/appTheme';
import {usePokemonPaginacion} from '../hooks/usePokemonPaginacion';

export default function HomeScreen() {
  usePokemonPaginacion();

  return (
    <View>
      <Image
        source={require(`../assets/pokebola.png`)}
        style={styles.pokebolaBG}
      />

      <Text style={{...styles.title, top: 20, ...styles.globalMargin}}>
        Pokedex
      </Text>
    </View>
  );
}
