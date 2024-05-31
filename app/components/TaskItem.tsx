import { task } from '@/type';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskItem({ task }: any) {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{task.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: "100%",
    height: 128,
    justifyContent: 'center'
  },
  taskText: {
    fontSize: 16,
  },
});
