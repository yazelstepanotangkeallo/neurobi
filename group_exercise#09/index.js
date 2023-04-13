import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextInputAtom from './TextInputAtom';
import ButtonAtom from './ButtonAtom';

const UserForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSave = () => {
    console.log({
      name,
      username,
      email,
      address,
      phoneNumber,
    });
  };

  return (
    <View style={styles.container}>
      <TextInputAtom
        label="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInputAtom
        label="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInputAtom
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInputAtom
        label="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInputAtom
        label="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      <ButtonAtom label="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default UserForm;
