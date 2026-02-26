
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { ChevronLeft, Sprout, ChevronRight } from 'lucide-react-native';
import { EventType } from '../types';

interface ReportSelectViewProps {
  onBack: () => void;
  onSelectType: (type: EventType) => void;
}

const ReportSelectView: React.FC<ReportSelectViewProps> = ({ onBack, onSelectType }) => {
  const reportTypes: { type: EventType; label: string }[] = [
    { type: 'riego', label: 'Riego' },
    { type: 'poda', label: 'Poda' },
    { type: 'plaga', label: 'Plagas' },
    { type: 'crecimiento', label: 'Crecimiento' },
    { type: 'fertilizacion', label: 'Fetilizacion' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Crear cultivo</Text>
      </View>

      <View style={styles.stepInfo}>
        <View style={styles.stepTextWrapper}>
          <Text style={styles.stepText}>Paso 1 de 2</Text>
          <View style={styles.progressBarWrapper}>
            <View style={styles.progressBar} />
          </View>
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>¿Que tipo de reporte realizaras?</Text>
          
          <View style={styles.grid}>
            {reportTypes.map((item) => (
              <TouchableOpacity
                key={item.type}
                onPress={() => onSelectType(item.type)}
                style={styles.gridItem}
              >
                <View style={styles.iconWrapper}>
                  <Sprout color="#4D5D55" size={40} />
                </View>
                <Text style={styles.itemLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.footer}>
            <TouchableOpacity 
              disabled
              style={[styles.continueBtn, { opacity: 0.5 }]}
            >
              <Text style={styles.continueBtnText}>Continuar</Text>
              <ChevronRight color="rgba(255,255,255,0.8)" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    paddingBottom: 16,
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
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1C1B',
  },
  stepInfo: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  stepTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 8,
  },
  stepText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1C1B',
  },
  progressBarWrapper: {
    flex: 1,
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    width: '50%',
    height: '100%',
    backgroundColor: '#8BB29E',
    borderRadius: 3,
  },
  main: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 32,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    color: '#1A1C1B',
    marginBottom: 32,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '47%',
    backgroundColor: '#EAF1EE',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    gap: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  iconWrapper: {
    width: 64,
    height: 64,
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLabel: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  footer: {
    marginTop: 'auto',
  },
  continueBtn: {
    backgroundColor: '#1A1C1B',
    paddingVertical: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  continueBtnText: {
    color: 'white',
    fontSize: 19,
    fontWeight: '900',
  },
});

export default ReportSelectView;
