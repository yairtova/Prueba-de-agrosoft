
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Check } from 'lucide-react-native';

interface ReportSuccessViewProps {
  onAccept: () => void;
  onViewReport: () => void;
}

const ReportSuccessView: React.FC<ReportSuccessViewProps> = ({ onAccept, onViewReport }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.successIconWrapper}>
          <Check color="white" size={80} strokeWidth={3} />
        </View>

        <Text style={styles.title}>
          Reporte realizado con exito
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={onAccept}
            style={styles.acceptBtn}
          >
            <Text style={styles.acceptBtnText}>Aceptar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={onViewReport}
            style={styles.viewReportBtn}
          >
            <Text style={styles.viewReportBtnText}>Ver reporte</Text>
          </TouchableOpacity>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  successIconWrapper: {
    width: 128,
    height: 128,
    backgroundColor: '#4D5D55',
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#1A1C1B',
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
  },
  acceptBtn: {
    flex: 1,
    backgroundColor: '#1A1C1B',
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  acceptBtnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
  viewReportBtn: {
    flex: 1,
    backgroundColor: '#DDE4E1',
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewReportBtnText: {
    color: '#1A1C1B',
    fontSize: 18,
    fontWeight: '900',
  },
});

export default ReportSuccessView;
