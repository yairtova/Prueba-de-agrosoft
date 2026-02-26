
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Sprout } from 'lucide-react-native';

interface CropOptionProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const CropOption: React.FC<CropOptionProps> = ({ label, isSelected, onClick }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onClick}
      style={[
        styles.container,
        isSelected ? styles.selectedContainer : styles.unselectedContainer
      ]}
    >
      <View style={styles.iconWrapper}>
        <Sprout color="white" size={36} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    borderRadius: 28,
  },
  selectedContainer: {
    backgroundColor: '#EAF1EE',
  },
  unselectedContainer: {
    backgroundColor: '#F9FAFA',
  },
  iconWrapper: {
    width: 68,
    height: 68,
    backgroundColor: '#4D5D55',
    borderRadius: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  label: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1A1C1B',
  },
});

export default CropOption;
