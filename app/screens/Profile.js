import React from 'react';
import { Image, FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';

const pokemon = [
  {
    order: 120,
    name: 'Staryu',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/120.png'
  },
  {
    order: 1,
    name: 'Bulbasaur',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/120.png'
  }
];

function Profile(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.pokemonGrid}>
        <Image
          style={styles.pokemonImg}
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/120.png'
          }}
        />
        <Image
          style={styles.pokemonImg}
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png'
          }}
        />
        <Image
          style={styles.pokemonImg}
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/95.png'
          }}
        />
        <Image
          style={styles.pokemonImg}
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/25.png'
          }}
        />
        <Image
          style={styles.pokemonImg}
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/5.png'
          }}
        />
        <Image
          style={styles.pokemonImg}
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/150.png'
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 10
  },
  pokemonGrid: {
    display: 'grid'
  },
  pokemonImg: {
    width: 100,
    height: 100,
    marginBottom: 40,
    borderColor: colors.secondary,
    borderWidth: 4
  }
});

export default Profile;
