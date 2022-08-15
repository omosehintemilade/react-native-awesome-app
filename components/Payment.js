import React, {useState} from 'react';
import {Alert, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';

const Keypad = ({setNumber}) => {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'x'];
  const getGridViewItem = item => {
    setNumber(number + item);
  };
  return (
    <FlatList
      data={keys}
      renderItem={({item}) => (
        <View style={styles.gridViewContainer}>
          <Text
            style={styles.gridViewTextLayout}
            onPress={() => getGridViewItem(item)}>
            {item}
          </Text>
        </View>
      )}
      numColumns={3}
    />
  );
};

const Action = () => {
  return (
    <View style={styles.switchContainer}>
      <View>
        <Text>Request</Text>
      </View>
      <View style={styles.switchButton}></View>
      <View>
        <Text>Send</Text>
      </View>
    </View>
  );
};

export default function Payment() {
  const [number, setNumber] = useState('0');
  const [availableBalance, setAvailableBalance] = useState('50000');

  return (
    <>
      <View style={styles.headers}>
        <Text style={styles.text}>Payments</Text>
        <Text>Icon</Text>
      </View>
      <View>
        <Text style={styles.available}>Available</Text>
        <Text style={styles.balance}>${availableBalance}</Text>
      </View>

      <Text style={styles.available}>${number}</Text>

      <Keypad setNumber={setNumber} />
      <Action />
    </>
  );
}

const styles = StyleSheet.create({
  headers: {
    backgroundColor: '#eeeaff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1dfff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 30,
  },
  text: {
    fontSize: 20,
    color: '#545170',
  },
  available: {
    fontSize: 20,
    color: '#545170',
    textAlign: 'center',
  },
  balance: {
    fontSize: 18,
    color: '#545170',
    textAlign: 'center',
  },
  gridViewContainer: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: 'green',
  },
  gridViewTextLayout: {
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    height: 20,
  },
  switchButton: {
    height: 20,
    width: 20,
    backgroundColor: 'white',
  },
});
