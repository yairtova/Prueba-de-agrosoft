
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, FlatList, SafeAreaView } from 'react-native';
import { Sprout, Search, Plus } from 'lucide-react-native';
import { CropItem } from '../types';
import CropCard from './CropCard';

interface DashboardViewProps {
  onCreateNew: () => void;
  onSelectCrop: (crop: CropItem) => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ onCreateNew, onSelectCrop }) => {
  const [filter, setFilter] = useState('Todos');

  const crops: CropItem[] = [
    { 
      id: '1', 
      name: 'Maiz rojo', 
      variety: 'Rojo', 
      type: 'Maiz', 
      startDate: '2025-01-10',
      day: 45, 
      totalDays: 90,
      progress: 35,
      status: 'Activo',
      phase: 'Germinacion',
      health: 'Buena',
      risk: 'Bajo'
    },
    { 
      id: '2', 
      name: 'Frijol bayo', 
      variety: 'Bayo', 
      type: 'Frijol', 
      startDate: '2024-06-10',
      day: 255, 
      totalDays: 300,
      progress: 85,
      status: 'Hecho',
      phase: 'Cosecha',
      health: 'Buena',
      risk: 'Bajo'
    },
    { 
      id: '3', 
      name: 'Lechuga', 
      variety: 'Serrana', 
      type: 'Lechuga', 
      startDate: '2025-01-25',
      day: 30, 
      totalDays: 60,
      progress: 50,
      status: 'Activo',
      phase: 'Crecimiento',
      health: 'Regular',
      risk: 'Medio'
    },
    { 
      id: '4', 
      name: 'Tomate', 
      variety: 'Cherry', 
      day: 14, 
      totalDays: 120,
      progress: 12,
      type: 'Tomate', 
      startDate: '2025-02-10',
      status: 'Activo',
      phase: 'Germinacion',
      health: 'Buena',
      risk: 'Bajo'
    },
  ];

  const renderHeader = () => (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIconWrapper}>
          <Sprout color="#4D5D55" size={28} />
        </View>
        <Text style={styles.headerTitle}>Mis cultivos</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder="Buscar cultivo"
            placeholderTextColor="#9CA3AF"
            style={styles.searchInput}
          />
          <Search color="#1A1C1B" size={20} style={styles.searchIcon} />
        </View>
      </View>

      {/* Filters */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.filtersScroll}
        contentContainerStyle={styles.filtersContent}
      >
        {['Todos', 'Activos', 'Hechos'].map((f, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => setFilter(f)}
            style={[
              styles.filterBtn,
              filter === f ? styles.filterBtnActive : styles.filterBtnInactive
            ]}
          >
            <Text style={[
              styles.filterText,
              filter === f ? styles.filterTextActive : styles.filterTextInactive
            ]}>
              {f}
            </Text>
          </TouchableOpacity>
        ))}
        <View style={styles.filterPlaceholder} />
      </ScrollView>

      {/* Summary Card */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryBadge}>
          <Text style={styles.summaryCount}>9</Text>
        </View>
        <Text style={styles.summaryText}>Cultivos en total</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={crops}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <CropCard crop={item} onClick={() => onSelectCrop(item)} />
          </View>
        )}
        numColumns={2}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* FAB */}
      <TouchableOpacity 
        activeOpacity={0.8}
        onPress={onCreateNew}
        style={styles.fab}
      >
        <Plus color="white" size={40} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F6',
  },
  listContent: {
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 16,
  },
  headerIconWrapper: {
    width: 56,
    height: 56,
    backgroundColor: '#EAF1EE',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  searchContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
    marginTop: 8,
  },
  searchWrapper: {
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: 56,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1C1B',
    padding: 0,
  },
  searchIcon: {
    marginLeft: 12,
  },
  filtersScroll: {
    marginBottom: 32,
  },
  filtersContent: {
    paddingHorizontal: 24,
    gap: 12,
  },
  filterBtn: {
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 16,
  },
  filterBtnActive: {
    backgroundColor: '#1A1C1B',
  },
  filterBtnInactive: {
    backgroundColor: '#DDE4E1',
  },
  filterText: {
    fontSize: 15,
    fontWeight: '700',
  },
  filterTextActive: {
    color: 'white',
  },
  filterTextInactive: {
    color: '#4D5D55',
  },
  filterPlaceholder: {
    width: 56,
    height: 44,
    backgroundColor: '#E5E7EB',
    borderRadius: 16,
    opacity: 0.4,
  },
  summaryCard: {
    backgroundColor: '#E2EAE6',
    marginHorizontal: 24,
    padding: 28,
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  summaryBadge: {
    width: 64,
    height: 64,
    backgroundColor: 'white',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    marginRight: 24,
  },
  summaryCount: {
    fontSize: 32,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  summaryText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  cardWrapper: {
    flex: 1,
    padding: 10,
    maxWidth: '50%',
  },
  fab: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 72,
    height: 72,
    backgroundColor: '#1A1C1B',
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    zIndex: 40,
  },
});

export default DashboardView;
