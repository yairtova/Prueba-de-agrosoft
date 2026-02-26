
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { ArrowRight } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

interface SplashViewProps {
  onContinue: () => void;
}

const SplashView: React.FC<SplashViewProps> = ({ onContinue }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Pattern */}
      <View style={styles.backgroundHeader}>
        <View style={styles.patternOverlay} />
      </View>

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>AgroSoft</Text>
          <Text style={styles.subtitle}>
            Seguimiento de cultivos inteligentes en tus manos
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.continueText}>Continuar</Text>
          <TouchableOpacity 
            activeOpacity={0.8}
            onPress={onContinue}
            style={styles.button}
          >
            <ArrowRight color="white" size={32} strokeWidth={2.5} />
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
  backgroundHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: height * 0.5,
    backgroundColor: '#4D5D55',
    borderBottomLeftRadius: 64,
    borderBottomRightRadius: 64,
    overflow: 'hidden',
  },
  patternOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.2,
    // Note: SVG background patterns are harder in pure RN without extra libs
    // but for the web preview it will just be a solid color or we could use an Image
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    paddingBottom: 80,
    zIndex: 10,
  },
  textContainer: {
    marginBottom: 48,
  },
  title: {
    fontSize: 56,
    fontWeight: '900',
    color: '#1A1C1B',
    lineHeight: 64,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    color: '#4D5D55',
    fontWeight: '500',
    lineHeight: 24,
    opacity: 0.8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  continueText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4D5D55',
    marginRight: 16,
  },
  button: {
    width: 64,
    height: 64,
    backgroundColor: '#1A1C1B',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

export default SplashView;
