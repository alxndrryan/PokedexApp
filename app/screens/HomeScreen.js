import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";
import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  search: Yup.string().required().label("Enter Pokemon Name"),
});

const pokemon = [
  {
    order: 120,
    name: "Staryu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/120.png",
    type: {
      name: "Water",
    },
    flavor_text_entries: [
      {
        flavor_text:
          "An enigmatic POKéMON that can\neffortlessly regenerate any appendage it loses in battle.",
      },
    ],
    weight: 30,
    height: 10,
    moves: [
      {
        move: {
          name: "Headbutt",
        },
      },
      {
        move: {
          name: "Take-Down",
        },
      },
      {
        move: {
          name: "Water-Gun",
        },
      },
      {
        move: {
          name: "Hydro-Pump",
        },
      },
    ],
  },
  {
    order: 1,
    name: "Bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/120.png",
    type: {
      name: "grass",
    },
    flavor_text_entries: [
      {
        flavor_text:
          "An enigmatic\nPOKéMON that can\neffortlessly\fregenerate any\nappendage it\nloses in battle.",
      },
    ],
  },
];

function HomeScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/pokedex-text.png")}
      />
      <Form
        initialValues={{ name: "" }}
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
      <View style={styles.pokemonCard}>
        <View style={styles.cardTop}>
          <Image
            style={styles.pokemonImg}
            source={{
              uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/120.png",
            }}
          />
          <Text style={styles.pokemonData}>
            <Text>
              {pokemon[0].name} #{pokemon[0].order}
              {"\n"}
            </Text>

            <Text>
              Type: {pokemon[0].type.name}
              {"\n"}
            </Text>
            <Text>
              Height: {pokemon[0].height} dm{"\n"}
            </Text>
            <Text>
              Weight: {pokemon[0].weight} lbs{"\n"}
            </Text>
            <Text>
              Abilities: {pokemon[0].moves[0].move.name},{" "}
              {pokemon[0].moves[1].move.name}, {pokemon[0].moves[2].move.name},{" "}
              {pokemon[0].moves[3].move.name}
            </Text>
          </Text>
        </View>
        <View style={styles.cardBottom}>
          <Text>{pokemon[0].flavor_text_entries[0].flavor_text}</Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  cardBottom: {
    display: "flex",
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 25,
    marginBottom: 10,
  },
  cardTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: {
    backgroundColor: "#ed1e24",
    padding: 10,
  },
  logo: {
    width: "58%",
    height: "10%",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 40,
  },
  pokemonCard: {
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  pokemonData: {
    width: 150,
    marginTop: 15,
  },
  pokemonImg: {
    width: 100,
    height: 100,
    marginTop: 15,
    marginBottom: 40,
    borderColor: colors.secondary,
    borderWidth: 4,
  },
});

export default HomeScreen;
