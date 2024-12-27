import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';



 const App = () => {
  const users = [
    { id: 1, name: 'Saman' },
    { id: 2, name: 'Shafique' },
  ];

  return (
    <View>
      <Text style={{ fontSize: 31 }}> List flat Components </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: '#fff',
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 2,
    margin: 30
  }
});

export default App;
