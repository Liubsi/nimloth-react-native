import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { Button, Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

export default function Profile(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const { navigation } = props;

  async function getMovies() {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json;
      console.log(response);
      setData(json.movies);
      return json.movies;
    } catch (error) {
      console.error(error);
      return error;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
    console.log(data);
  });

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
}

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
