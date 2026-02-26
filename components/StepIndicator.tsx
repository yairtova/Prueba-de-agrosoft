
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }).map((_, i) => {
        const index = i + 1;
        const isActive = index <= currentStep;
        
        return (
          <React.Fragment key={index}>
            <View style={[
              styles.line,
              isActive ? styles.lineActive : styles.lineInactive
            ]} />
            <View style={[
              styles.dot,
              isActive ? styles.dotActive : styles.dotInactive
            ]} />
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  line: {
    height: 5,
    borderRadius: 2.5,
    marginHorizontal: 2,
  },
  lineActive: {
    backgroundColor: '#8BB29E',
    flex: 1,
  },
  lineInactive: {
    backgroundColor: '#E5E7EB',
    width: 6,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    marginHorizontal: 2,
  },
  dotActive: {
    backgroundColor: '#8BB29E',
  },
  dotInactive: {
    backgroundColor: '#E5E7EB',
  },
});

export default StepIndicator;
