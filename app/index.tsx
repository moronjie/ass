import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, FlatList, Image, Button, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import CategoryCard from './components/CategoryCard';
import TaskItem from './components/TaskItem';
import { item, task } from '@/type';

const categories: item[] = [
  { id: '1', name: 'Exercise', tasks: 12, img: require('../assets/exe.png')},
  { id: '2', name: 'Study', tasks: 12, img: require('../assets/study.png') },
  { id: '3', name: 'Code', tasks: 8, img: '' },
  { id: '4', name: 'Cook', tasks: 5, img: '' },
  { id: '5', name: 'Read', tasks: 6, img: '' },
  { id: '6', name: 'Travel', tasks: 3, img: '' },
  { id: '7', name: 'Meditate', tasks: 7, img: '' },
  { id: '8', name: 'Workout', tasks: 10, img: '' },
];

const tasks: task[] = [
  { id: '1', name: 'Mobile App Development' },
  { id: '2', name: 'Web Development' },
  { id: '3', name: 'Push Ups' },
  // add more tasks here up to 15
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => <CategoryCard category={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.tasksContainer}>
        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F7F0E8',
    marginTop: 42,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff'
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#F0522F',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  categoriesContainer: {
    flexDirection: 'column',
    marginBottom: 30,
    marginTop: 20
  },
  tasksContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});