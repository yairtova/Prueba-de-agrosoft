
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Sprout } from 'lucide-react-native';
import { CropItem } from '../types';

interface CropCardProps {
  crop: CropItem;
  onClick?: () => void;
}

const CropCard: React.FC<CropCardProps> = ({ crop, onClick }) => {
  const isHecho = crop.status === 'Hecho';

  return (
    <TouchableOpacity 
      activeOpacity={0.9}
      onPress={onClick}
      style={styles.card}
    >
      <View style={styles.iconWrapper}>
        <Sprout color="white" size={36} />
      </View>
      
      <Text style={styles.name} numberOfLines={2}>
        {crop.name}
      </Text>
      
      <View style={styles.footer}>
        <Text style={styles.dayText}>Dia {crop.day}</Text>
        <View style={[
          styles.statusBadge,
          isHecho ? styles.statusHecho : styles.statusActivo
        ]}>
          <Text style={[
            styles.statusText,
            isHecho ? styles.statusTextHecho : styles.statusTextActivo
          ]}>
            {crop.status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 32,
    padding: 24,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    flex: 1,
  },
  iconWrapper: {
    width: 68,
    height: 68,
    backgroundColor: '#4D5D55',
    borderRadius: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1A1C1B',
    marginBottom: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 'auto',
  },
  dayText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1C1B',
    opacity: 0.6,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusHecho: {
    backgroundColor: '#1A1C1B',
  },
  statusActivo: {
    backgroundColor: '#E6EFEC',
  },
  statusText: {
    fontSize: 11,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  statusTextHecho: {
    color: 'white',
  },
  statusTextActivo: {
    color: '#516C63',
  },
});

export default CropCard;
