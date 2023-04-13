import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PostList from './PostList';

const PostListMolecule = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Latest Posts</Text>
      <PostList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default PostListMolecule;
