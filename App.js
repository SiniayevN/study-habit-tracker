import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import AddHabitScreen from './screens/AddHabitScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [habits, setHabits] = useState([
    {
      id: 1,
      title: 'Review class notes',
      timesPerWeek: 5,
      completedToday: false,
    },
    {
      id: 2,
      title: 'Practice coding problems',
      timesPerWeek: 4,
      completedToday: true,
    },
  ]);

  const handleAddHabit = (newHabit) => {
    setHabits((current) => [newHabit, ...current]);
  };

  const handleToggleHabit = (id) => {
    setHabits((current) =>
      current.map((habit) =>
        habit.id === id
          ? { ...habit, completedToday: !habit.completedToday }
          : habit
      )
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#ffffff' },
          headerTintColor: '#000000',
          contentStyle: { backgroundColor: '#ffffff' },
        }}
      >
        <Stack.Screen name="Home" options={{ title: 'Habits' }}>
          {(props) => (
            <HomeScreen
              {...props}
              habits={habits}
              onToggleHabit={handleToggleHabit}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="AddHabit"
          options={{ title: 'Add Habit' }}
        >
          {(props) => (
            <AddHabitScreen {...props} onAddHabit={handleAddHabit} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
