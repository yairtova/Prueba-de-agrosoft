import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { ChevronLeft, Plus, User, History, Bell, Check, Sprout, AlertCircle, Cpu } from 'lucide-react-native';
import { CropItem } from '../types';

interface CropDetailProps {
  crop: CropItem;
  onBack: () => void;
  onReport: () => void;
  onHistory: () => void;
  onAIAnalysis: () => void;
  onAIAlerts: () => void;
}

const CropDetail: React.FC<CropDetailProps> = ({ 
  crop, 
  onBack, 
  onReport, 
  onHistory, 
  onAIAnalysis, 
  onAIAlerts 
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={onBack}
          style={styles.backBtn}
        >
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalle del cultivo</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Crop Card */}
        <View style={styles.mainCard}>
          <View style={styles.iconCircle}>
            <Sprout color="#4D5D55" size={56} />
          </View>
          <Text style={styles.cropType}>{crop.type}</Text>
          
          <View style={styles.progressSection}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressTitle}>Ciclo floracion</Text>
              <Text style={styles.progressSubtitle}>
                Día {crop.day} de {crop.totalDays} {crop.progress}% completado
              </Text>
            </View>
            <View style={styles.progressBarWrapper}>
              <View style={[styles.progressBar, { width: `${crop.progress}%` }]} />
            </View>
          </View>
        </View>

        {/* Action Buttons Grid */}
        <View style={styles.actionsGrid}>
          {[
            { label: 'Crear reporte', icon: <Plus color="white" size={20} />, primary: true, action: onReport },
            { label: 'Ver análisis IA', icon: <User color="#1A1C1B" size={20} />, primary: false, action: onAIAnalysis },
            { label: 'Historial', icon: <History color="white" size={20} />, primary: true, action: onHistory },
            { label: 'Alertas', icon: <Bell color="#1A1C1B" size={20} />, primary: false, action: onAIAlerts },
          ].map((btn, i) => (
            <TouchableOpacity 
              key={btn.label}
              onPress={btn.action}
              style={[
                styles.actionBtn,
                btn.primary ? styles.actionBtnPrimary : styles.actionBtnSecondary
              ]}
            >
              {btn.icon}
              <Text style={[
                styles.actionBtnText,
                btn.primary ? styles.actionBtnTextPrimary : styles.actionBtnTextSecondary
              ]}>
                {btn.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Status Indicators */}
        <View style={styles.statsGrid}>
          {[
            { label: 'Salud', value: crop.health, icon: <Check color="#4D5D55" size={20} />, color: '#E6EFEC' },
            { label: 'Fase actual', value: crop.phase, icon: <Sprout color="#4D5D55" size={20} />, color: '#E6EFEC' },
            { label: 'Riesgo actual', value: crop.risk, icon: <AlertCircle color="#EF4444" size={20} />, color: '#FEE2E2', textColor: '#EF4444' },
          ].map((stat, i) => (
            <View key={stat.label} style={styles.statCard}>
              <Text style={styles.statLabel}>{stat.label}</Text>
              <View style={[styles.statIconCircle, { backgroundColor: stat.color }]}>
                {stat.icon}
              </View>
              <Text style={[styles.statValue, stat.textColor ? { color: stat.textColor } : null]}>
                {stat.value}
              </Text>
            </View>
          ))}
        </View>

        {/* AI Engine Section */}
        <View style={styles.aiCard}>
          <View style={styles.aiHeader}>
            <View style={styles.aiIconWrapper}>
              <Cpu color="white" size={24} />
            </View>
            <View style={styles.aiBadge}>
              <Text style={styles.aiBadgeText}>motor inteligente del cultivo</Text>
            </View>
          </View>

          <View style={styles.aiContent}>
            <View style={styles.aiRow}>
              <Text style={styles.aiEmoji}>💧</Text>
              <Text style={styles.aiRowText}>Riego: Óptimo ✓</Text>
            </View>
            <View style={styles.aiRow}>
              <Text style={styles.aiEmoji}>🌱</Text>
              <Text style={styles.aiRowText}>Nutrición: Adecuada ✓</Text>
            </View>
            <View style={styles.aiRow}>
              <Text style={styles.aiEmoji}>🛡️</Text>
              <Text style={styles.aiRowText}>Plagas: Sin indicios ✓</Text>
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
    gap: 16,
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
    fontWeight: '700',
    color: '#1A1C1B',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 120,
  },
  mainCard: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 32,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.04,
    shadowRadius: 40,
    marginBottom: 24,
  },
  iconCircle: {
    width: 96,
    height: 96,
    backgroundColor: '#DDE4E1',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  cropType: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1A1C1B',
    marginBottom: 24,
  },
  progressSection: {
    width: '100%',
  },
  progressHeader: {
    marginBottom: 8,
  },
  progressTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1C1B',
  },
  progressSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4D5D55',
    opacity: 0.7,
  },
  progressBarWrapper: {
    width: '100%',
    height: 12,
    backgroundColor: '#E5E7EB',
    borderRadius: 6,
    overflow: 'hidden',
    marginTop: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4D5D55',
    borderRadius: 6,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
  },
  actionBtn: {
    flex: 1,
    minWidth: '45%',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  actionBtnPrimary: {
    backgroundColor: '#4D5D55',
  },
  actionBtnSecondary: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  actionBtnText: {
    fontSize: 14,
    fontWeight: '700',
  },
  actionBtnTextPrimary: {
    color: 'white',
  },
  actionBtnTextSecondary: {
    color: '#1A1C1B',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 24,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  statLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1A1C1B',
    marginBottom: 8,
    textAlign: 'center',
  },
  statIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4D5D55',
  },
  aiCard: {
    backgroundColor: '#1F2923',
    borderRadius: 40,
    padding: 32,
  },
  aiHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  aiIconWrapper: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiBadge: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  aiBadgeText: {
    color: '#1F2923',
    fontSize: 14,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  aiContent: {
    gap: 16,
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  aiEmoji: {
    fontSize: 20,
  },
  aiRowText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
});

export default CropDetail;
