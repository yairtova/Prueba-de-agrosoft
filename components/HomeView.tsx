
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Home, Bell, Sprout, History, Plus, List } from 'lucide-react-native';
import { CropItem } from '../types';

interface HomeViewProps {
  activeCropsCount: number;
  featuredCrop: CropItem;
  onViewCrop: (crop: CropItem) => void;
  onCreateCrop: () => void;
  onViewAllCrops: () => void;
  onViewHistory: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ 
  activeCropsCount, 
  featuredCrop, 
  onViewCrop, 
  onCreateCrop, 
  onViewAllCrops, 
  onViewHistory 
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.iconCircle}>
              <Home color="#1A1C1B" size={24} />
            </View>
            <Text style={styles.headerTitle}>Inicio</Text>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Bell color="#1A1C1B" size={32} />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>

        {/* Active Crops Summary */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryBadge}>
            <Text style={styles.summaryCount}>{activeCropsCount}</Text>
          </View>
          <Text style={styles.summaryText}>Cultivos activos</Text>
        </View>

        {/* Featured Crop Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tus cultivos</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScroll}
          >
            <TouchableOpacity 
              activeOpacity={0.9}
              onPress={() => onViewCrop(featuredCrop)}
              style={styles.featuredCard}
            >
              <Text style={styles.cropName}>{featuredCrop.name}</Text>
              <View style={styles.cropIconWrapper}>
                <Sprout color="#4D5D55" size={56} />
              </View>
              <Text style={styles.cropDays}>365 Dias</Text>
              <View style={styles.phaseWrapper}>
                <Text style={styles.phaseLabel}>Etapa</Text>
                <View style={styles.phaseBadge}>
                  <Text style={styles.phaseText}>{featuredCrop.phase}</Text>
                </View>
              </View>
            </TouchableOpacity>
            
            <View style={styles.placeholderCard} />
          </ScrollView>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.actionTitle}>Que deseas hacer?</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity onPress={onCreateCrop} style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>Crear cultivo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onViewAllCrops} style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>ver cultivos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onViewHistory} style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>Historial</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Risk Alert Section */}
        <View style={styles.alertCard}>
          <View style={styles.alertIconWrapper}>
            <Sprout color="#4D5D55" size={40} />
            <Text style={styles.alertCropType}>Lechuga</Text>
          </View>
          <View style={styles.alertContent}>
            <Text style={styles.alertTitle}>Cultivo en riesgo</Text>
            <View style={styles.alertSubtitleWrapper}>
              <Bell color="#4D5D55" size={16} />
              <Text style={styles.alertSubtitle}>Tu cultivo carece de riego</Text>
            </View>
            <TouchableOpacity style={styles.alertBtn}>
              <Text style={styles.alertBtnText}>Ver cultivo</Text>
            </TouchableOpacity>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 24,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 48,
    height: 48,
    backgroundColor: 'white',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  notificationBtn: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 12,
    height: 12,
    backgroundColor: '#EF4444',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#F5F7F6',
  },
  summaryCard: {
    backgroundColor: '#DDE4E1',
    marginHorizontal: 24,
    padding: 24,
    borderRadius: 40,
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
    shadowOpacity: 0.1,
    shadowRadius: 2,
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
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1A1C1B',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  horizontalScroll: {
    paddingHorizontal: 24,
  },
  featuredCard: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 32,
    minWidth: 280,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginRight: 16,
  },
  cropName: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1A1C1B',
    marginBottom: 16,
  },
  cropIconWrapper: {
    width: 96,
    height: 96,
    backgroundColor: '#DDE4E1',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  cropDays: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4D5D55',
    marginBottom: 16,
  },
  phaseWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  phaseLabel: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1A1C1B',
    marginRight: 16,
  },
  phaseBadge: {
    backgroundColor: '#DDE4E1',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
  },
  phaseText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  placeholderCard: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 40,
    width: 100,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#E5E7EB',
  },
  actionTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1A1C1B',
    textAlign: 'center',
    marginBottom: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
    paddingHorizontal: 24,
  },
  actionBtn: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  actionBtnText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  alertCard: {
    backgroundColor: 'white',
    marginHorizontal: 24,
    padding: 32,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  alertIconWrapper: {
    width: 80,
    height: 80,
    backgroundColor: '#DDE4E1',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 24,
  },
  alertCropType: {
    fontSize: 12,
    fontWeight: '900',
    color: '#1A1C1B',
    marginTop: 4,
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#1A1C1B',
    marginBottom: 4,
  },
  alertSubtitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  alertSubtitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4D5D55',
    marginLeft: 8,
  },
  alertBtn: {
    backgroundColor: '#DDE4E1',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  alertBtnText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#1A1C1B',
  },
});

export default HomeView;
