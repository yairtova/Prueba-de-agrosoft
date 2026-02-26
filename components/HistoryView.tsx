
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { ChevronLeft, Sprout } from 'lucide-react-native';
import { CareEvent } from '../types';

interface HistoryViewProps {
  onBack: () => void;
  onSelectEvent: (event: CareEvent) => void;
}

const HistoryView: React.FC<HistoryViewProps> = ({ onBack, onSelectEvent }) => {
  const [filter, setFilter] = useState('Todos');

  const events: CareEvent[] = [
    { 
      id: '1', 
      cropId: '1', 
      type: 'riego', 
      date: '25/06/24', 
      description: 'Riego matutino para mantener humedad.', 
      phase: 'Germinacion',
      details: {
        cantidad_agua: 50,
        metodo_riego: 'goteo',
        duracion_minutos: 30
      }
    },
    { 
      id: '2', 
      cropId: '1', 
      type: 'poda', 
      date: '24/06/24', 
      description: 'Poda de mantenimiento de hojas basales.', 
      phase: 'Crecimiento',
      details: {
        tipo_poda: 'mantenimiento',
        partes_podadas: 'Hojas basales',
        porcentaje_podado: 10
      }
    },
    { 
      id: '3', 
      cropId: '1', 
      type: 'fertilizacion', 
      date: '20/06/24', 
      description: 'Aplicación de urea para nitrógeno.', 
      phase: 'Crecimiento',
      details: {
        tipo_fertilizante: 'quimico',
        nombre_fertilizante: 'Urea',
        cantidad_aplicada: 2,
        unidad_medida: 'kg',
        metodo_aplicacion: 'edafico'
      }
    },
    { 
      id: '4', 
      cropId: '1', 
      type: 'plaga', 
      date: '18/06/24', 
      description: 'Detección de araña roja en el envés.', 
      phase: 'Crecimiento',
      details: {
        tipo_irregularidad: 'plaga',
        nombre_plaga: 'Araña roja',
        nivel_dano: 'bajo',
        severidad: 'leve'
      }
    },
  ];

  const filters = ['Todos', 'Riego', 'Poda', 'fertiliza'];

  const renderEventItem = ({ item }: { item: CareEvent }) => (
    <TouchableOpacity 
      onPress={() => onSelectEvent(item)}
      style={styles.eventCard}
    >
      <View style={styles.eventIconWrapper}>
        <Sprout color="white" size={32} />
      </View>
      <View style={styles.eventInfo}>
        <View style={styles.eventRow}>
          <Text style={styles.eventLabel}>Tipo:</Text>
          <Text style={styles.eventValue}>{item.type === 'poda' ? 'Podacion' : item.type}</Text>
        </View>
        <View style={styles.eventRow}>
          <Text style={styles.eventSubLabel}>Fecha</Text>
          <View style={styles.dateBadge}>
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
        </View>
        <View style={styles.eventRow}>
          <Text style={styles.eventSubLabel}>Etapa:</Text>
          <Text style={styles.phaseValue}>{item.phase}</Text>
        </View>
      </View>
      <View style={styles.eventThumbnail} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reportes</Text>
      </View>

      <View style={styles.filterSection}>
        <Text style={styles.sectionTitle}>Historial de tu cultivo</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
        >
          {filters.map((f) => (
            <TouchableOpacity
              key={f}
              onPress={() => setFilter(f)}
              style={[
                styles.filterBtn,
                filter === f && styles.filterBtnActive
              ]}
            >
              <Text style={[
                styles.filterBtnText,
                filter === f && styles.filterBtnTextActive
              ]}>
                {f}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={events}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 24,
    gap: 20,
  },
  backBtn: {
    width: 48,
    height: 48,
    backgroundColor: '#1A1C1B',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  filterSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#1A1C1B',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  filterScroll: {
    paddingHorizontal: 24,
    gap: 12,
  },
  filterBtn: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#DDE4E1',
    borderRadius: 12,
  },
  filterBtnActive: {
    backgroundColor: '#1A1C1B',
  },
  filterBtnText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#4D5D55',
  },
  filterBtnTextActive: {
    color: 'white',
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
    gap: 16,
  },
  eventCard: {
    backgroundColor: 'white',
    borderRadius: 32,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  eventIconWrapper: {
    width: 64,
    height: 64,
    backgroundColor: '#1F2923',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventInfo: {
    flex: 1,
  },
  eventRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  eventLabel: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  eventValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1C1B',
    textTransform: 'capitalize',
  },
  eventSubLabel: {
    fontSize: 14,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  dateBadge: {
    backgroundColor: '#DDE4E1',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 6,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  phaseValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4D5D55',
  },
  eventThumbnail: {
    width: 56,
    height: 56,
    backgroundColor: '#DDE4E1',
    borderRadius: 12,
  },
});

export default HistoryView;
