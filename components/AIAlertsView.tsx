
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { ChevronLeft, Monitor, AlertTriangle, Info } from 'lucide-react-native';

interface AIAlertsViewProps {
  onBack: () => void;
}

const AIAlertsView: React.FC<AIAlertsViewProps> = ({ onBack }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alertas de la IA</Text>
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
            <Text style={styles.aiBadgeText}>Alertas basado en tu cultivo</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.alertsList}>
            <View style={[styles.alertItem, styles.alertDanger]}>
              <View style={[styles.alertIconWrapper, styles.alertIconDanger]}>
                <AlertTriangle color="#DC2626" size={24} />
              </View>
              <View style={styles.alertTextContent}>
                <Text style={styles.alertTitle}>Falta de riego detectada</Text>
                <Text style={styles.alertDescription}>
                  El nivel de humedad del suelo está por debajo del PH mínimo recomendado (5.5).
                </Text>
              </View>
            </View>

            <View style={[styles.alertItem, styles.alertWarning]}>
              <View style={[styles.alertIconWrapper, styles.alertIconWarning]}>
                <Info color="#CA8A04" size={24} />
              </View>
              <View style={styles.alertTextContent}>
                <Text style={styles.alertTitle}>Recomendación de fertilización</Text>
                <Text style={styles.alertDescription}>
                  Se recomienda aplicar fertilizante orgánico para mejorar el crecimiento vegetativo.
                </Text>
              </View>
            </View>
          </View>
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
  alertsList: {
    gap: 24,
  },
  alertItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    borderRadius: 24,
    gap: 16,
  },
  alertDanger: {
    backgroundColor: '#FEF2F2',
  },
  alertWarning: {
    backgroundColor: '#FEFCE8',
  },
  alertIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertIconDanger: {
    backgroundColor: '#FEE2E2',
  },
  alertIconWarning: {
    backgroundColor: '#FEF9C3',
  },
  alertTextContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1A1C1B',
    marginBottom: 4,
  },
  alertDescription: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4D5D55',
    lineHeight: 20,
  },
});

export default AIAlertsView;
