
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { Mail, Lock, Eye } from 'lucide-react-native';

const { height } = Dimensions.get('window');

interface LoginViewProps {
  onLogin: () => void;
  onGoToRegister: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin, onGoToRegister }) => {
  const [email, setEmail] = useState('demo@email.com');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Pattern */}
      <View style={styles.backgroundHeader}>
        <View style={styles.patternOverlay} />
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>
          
          <View style={styles.inputsWrapper}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Correo</Text>
              <View style={styles.inputWrapper}>
                <Mail color="#4D5D55" size={20} />
                <TextInput 
                  value={email}
                  onChangeText={setEmail}
                  placeholder="demo@email.com"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Contraseña</Text>
              <View style={styles.inputWrapper}>
                <Lock color="#4D5D55" size={20} />
                <TextInput 
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Ingresa tu contraseña"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                  secureTextEntry
                />
                <Eye color="#9CA3AF" size={20} />
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity 
              activeOpacity={0.8}
              onPress={onLogin}
              style={styles.loginButton}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.registerLinkWrapper}>
              <Text style={styles.registerText}>No tienes unca cuenta? </Text>
              <TouchableOpacity onPress={onGoToRegister}>
                <Text style={styles.registerLink}>Crea una</Text>
              </TouchableOpacity>
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
  backgroundHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: height * 0.25,
    backgroundColor: '#4D5D55',
    borderBottomLeftRadius: 56,
    borderBottomRightRadius: 56,
    overflow: 'hidden',
  },
  patternOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.2,
  },
  scrollContent: {
    flexGrow: 1,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: height * 0.28,
    paddingBottom: 40,
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    color: '#1A1C1B',
    marginBottom: 40,
  },
  inputsWrapper: {
    marginBottom: 48,
  },
  inputGroup: {
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4D5D55',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#1A1C1B',
    paddingBottom: 8,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 18,
    fontWeight: '500',
    color: '#1A1C1B',
    padding: 0,
  },
  footer: {
    marginTop: 'auto',
  },
  loginButton: {
    backgroundColor: '#1A1C1B',
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginBottom: 32,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
  registerLinkWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  registerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4D5D55',
  },
  registerLink: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1A1C1B',
  },
});

export default LoginView;
