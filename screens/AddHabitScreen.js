import { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from '../styles';

export default function AddHabitScreen({ navigation, onAddHabit }) {
  const [title, setTitle] = useState('');
  const [timesPerWeek, setTimesPerWeek] = useState('');

  const handleSave = () => {
    if (!title.trim()) {
      // Very simple validation: require a title
      return;
    }

    const parsedTimes = parseInt(timesPerWeek, 10);
    const newHabit = {
      id: Date.now(),
      title: title.trim(),
      timesPerWeek: isNaN(parsedTimes) ? null : parsedTimes,
      completedToday: false,
    };

    onAddHabit(newHabit);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Add a Habit</Text>
          <Text style={styles.subtitle}>
            Create a simple habit you want to track regularly.
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Habit name</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Read textbook for 30 minutes"
            placeholderTextColor="#6b7280"
            value={title}
            onChangeText={setTitle}
          />

          <Text style={styles.label}>Times per week (optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., 3"
            placeholderTextColor="#6b7280"
            value={timesPerWeek}
            onChangeText={setTimesPerWeek}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Habit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
