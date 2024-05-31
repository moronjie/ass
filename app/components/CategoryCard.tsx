import { item } from '@/type';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CategoryCard({ category }: {category: item}) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{category.name}</Text>
      <Text style={styles.taskCount}>{category.tasks} Tasks</Text>
      <Image style={styles.image} source={(category.img)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'flex-start',
    width: 186,
    height: 192
  },
  image: {
    width: '100%',
    height: 132,
    marginBottom: 10,
    objectFit: 'contain'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 12,
    color: '#888888',
  },
});
