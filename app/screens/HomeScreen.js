import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';

import colors from '../config/colors';
import Screen from '../components/Screen';
import { Form, FormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
  search: Yup.string().required().label('Enter Pokemon Name')
});

const pokemon = [
  {
    order: 120,
    name: 'Staryu',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/120.png',
    type: {
      name: 'Normal'
    },
    flavor_text_entries: [
      {
        flavor_text:
          'An enigmatic\nPOKéMON that can\neffortlessly\fregenerate any\nappendage it\nloses in battle.'
      }
    ],
    weight: 30,
    height: 10
  },
  {
    order: 1,
    name: 'Bulbasaur',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/120.png',
    type: {
      name: 'grass'
    },
    flavor_text_entries: [
      {
        flavor_text:
          'An enigmatic\nPOKéMON that can\neffortlessly\fregenerate any\nappendage it\nloses in battle.'
      }
    ]
  }
];

function HomeScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/pokedex-text.png')}
      />
      <Form
        initialValues={{ name: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="pokeball"
          name="search"
          placeholder="Enter Pokémon Name"
          textContentType="name"
        />
        <SubmitButton title="Search" />
      </Form>
      <View>
        <Image
          style={styles.pokemon}
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/120.png'
          }}
        />
        <Text>
          {pokemon[0].name} #{pokemon[0].order}
        </Text>

        <Text>{pokemon[0].type.name}</Text>
        <Text>
          {pokemon[0].height} dm {pokemon[0].weight} lbs
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ed1e24',
    padding: 10
  },
  logo: {
    width: '58%',
    height: '10%',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 40
  },
  pokemon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 40,
    borderColor: colors.secondary,
    borderWidth: 4
  }
});

export default HomeScreen;
