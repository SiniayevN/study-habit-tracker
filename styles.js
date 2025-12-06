import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor: '#ffffff', // changed to white
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  color: '#000000',
  },
  subtitle: {
    fontSize: 14,
  color: '#374151',
    marginTop: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 4,
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  color: '#000000',
  },
  addButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#22c55e',
  },
  addButtonText: {
    fontSize: 14,
  color: '#166534',
    fontWeight: '500',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  habitCard: {
  backgroundColor: '#ffffff',
  borderRadius: 16,
  borderWidth: 1,
  borderColor: '#e5e7eb',
    padding: 12,
    marginVertical: 6,
  },
  habitCardCompleted: {
  borderColor: '#22c55e',
  backgroundColor: '#ecfdf5',
  },
  habitRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  habitTitle: {
    fontSize: 16,
    fontWeight: '600',
  color: '#000000',
    flex: 1,
    marginRight: 12,
  },
  habitDetail: {
    marginTop: 4,
    fontSize: 13,
  color: '#6b7280',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
  borderColor: '#d1d5db',
  },
  statusBadgeDone: {
  borderColor: '#22c55e',
  backgroundColor: '#ecfdf5',
  },
  statusBadgeText: {
    fontSize: 12,
  color: '#065f46',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyText: {
    textAlign: 'center',
  color: '#6b7280',
    fontSize: 14,
  },
  form: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  label: {
    fontSize: 14,
  color: '#111827',
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    borderRadius: 12,
    borderWidth: 1,
  borderColor: '#e5e7eb',
    paddingHorizontal: 12,
    paddingVertical: 10,
  color: '#000000',
    fontSize: 14,
  backgroundColor: '#ffffff',
  },
  saveButton: {
    marginTop: 20,
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: 'center',
  backgroundColor: '#16a34a',
  },
  saveButtonText: {
  color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 12,
    alignItems: 'center',
    paddingVertical: 8,
  },
  cancelButtonText: {
  color: '#6b7280',
    fontSize: 14,
  },
});
