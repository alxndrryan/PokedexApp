import React from 'react';
import { Image, FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';

const itemData = [
  {
    icon: (
      <Image
        alt="staryu"
        style={{ width: 100, height: 100 }}
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/120.png'
        }}
      />
    )
  },
  {
    icon: (
      <Image
        alt="bulbasaur"
        style={{ width: 100, height: 100 }}
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png'
        }}
      />
    )
  },
  {
    icon: (
      <Image
        alt="pikachu"
        style={{ width: 100, height: 100 }}
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/25.png'
        }}
      />
    )
  },
  {
    icon: (
      <Image
        alt="charmeleon"
        style={{ width: 100, height: 100 }}
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/5.png'
        }}
      />
    )
  },
  {
    icon: (
      <Image
        alt="onix"
        style={{ width: 100, height: 100 }}
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/95.png'
        }}
      />
    )
  },
  {
    icon: (
      <Image
        alt="jigglypuff"
        style={{ width: 100, height: 100 }}
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/39.png'
        }}
      />
    )
  }
];

const Item = ({ item }) => {
  return <View style={styles.item}>{item.icon}</View>;
};

function Profile(props) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={itemData}
        numColumns={2}
        renderItem={Item}
        keyExtractor={(item) => item.source}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 2,
    marginHorizontal: 'auto',
    width: 'auto'
  },
  item: {
    flex: 1,
    maxWidth: '50%',
    alignItems: 'center'
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
