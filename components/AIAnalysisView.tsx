
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { ChevronLeft, Monitor } from 'lucide-react-native';

interface AIAnalysisViewProps {
  onBack: () => void;
}

const AIAnalysisView: React.FC<AIAnalysisViewProps> = ({ onBack }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Analisis de la IA</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.aiHeader}>
          <View style={styles.aiIconWrapper}>
            <Monitor color="white" size={40} />
          </View>
          <View style={styles.aiBadge}>
            <Text style={styles.aiBadgeText}>Mi analisis basado en tu cultivo</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.skeletonContainer}>
            <View style={[styles.skeletonLine, { width: '75%' }]} />
            <View style={[styles.skeletonLine, { width: '100%' }]} />
            <View style={[styles.skeletonLine, { width: '83%' }]} />
            <View style={[styles.skeletonLine, { width: '66%' }]} />
            <View style={[styles.skeletonLine, { width: '100%' }]} />
            <View style={[styles.skeletonLine, { width: '80%' }]} />
          </View>
          <Text style={styles.placeholderText}>
            El análisis de IA se está procesando. Pronto verás recomendaciones detalladas sobre el estado de salud y crecimiento de tu cultivo.
          </Text>
        </View>
      </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  aiHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
  },
  aiIconWrapper: {
    width: 64,
    height: 64,
    backgroundColor: '#4D5D55',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  aiBadge: {
    backgroundColor: '#DDE4E1',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 24,
  },
  aiBadgeText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 32,
    minHeight: 400,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  skeletonContainer: {
    gap: 24,
    marginBottom: 32,
  },
  skeletonLine: {
    height: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },
  placeholderText: {
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 24,
  },
});

export default AIAnalysisView;
