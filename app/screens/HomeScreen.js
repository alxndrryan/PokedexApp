import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { Form, FormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
  search: Yup.string().required().label('Enter Pokemon Name')
});

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
          placeholder="Enter Pokemon Name"
          textContentType="name"
        />
        <SubmitButton title="Search" />
      </Form>
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
  }
});

export default HomeScreen;
