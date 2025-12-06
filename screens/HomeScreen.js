import {
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from '../styles';

export default function HomeScreen({ navigation, habits, onToggleHabit }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Study Habit Tracker</Text>
        <Text style={styles.subtitle}>Keep up with your daily study goals</Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Your Habits</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddHabit')}
        >
          <Text style={styles.addButtonText}>+ Add New</Text>
        </TouchableOpacity>
      </View>

      {habits.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>
            No habits yet. Tap "Add New" to create your first one.
          </Text>
        </View>
      ) : (
        <FlatList
          data={habits}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.habitCard,
                item.completedToday && styles.habitCardCompleted,
              ]}
              onPress={() => onToggleHabit(item.id)}
            >
              <View style={styles.habitRow}>
                <Text style={styles.habitTitle}>{item.title}</Text>
                <View
                  style={[
                    styles.statusBadge,
                    item.completedToday && styles.statusBadgeDone,
                  ]}
                >
                  <Text style={styles.statusBadgeText}>
                    {item.completedToday ? 'Done today' : 'Tap when done'}
                  </Text>
                </View>
              </View>
              {item.timesPerWeek ? (
                <Text style={styles.habitDetail}>
                  Goal: {item.timesPerWeek} times per week
                </Text>
              ) : null}
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
}
