
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { User, Mail, Lock, Eye } from 'lucide-react-native';

const { height } = Dimensions.get('window');

interface RegisterViewProps {
  onRegister: () => void;
  onGoToLogin: () => void;
}

const RegisterView: React.FC<RegisterViewProps> = ({ onRegister, onGoToLogin }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
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
          <Text style={styles.title}>Registrarse</Text>
          
          <View style={styles.inputsWrapper}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nombre</Text>
              <View style={styles.inputWrapper}>
                <User color="#4D5D55" size={20} />
                <TextInput 
                  value={name}
                  onChangeText={setName}
                  placeholder="Ingresa tu nombre"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Apellidos</Text>
              <View style={styles.inputWrapper}>
                <User color="#4D5D55" size={20} />
                <TextInput 
                  value={lastName}
                  onChangeText={setLastName}
                  placeholder="Ingresa tus apellidos"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                />
              </View>
            </View>

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
              onPress={onRegister}
              style={styles.registerButton}
            >
              <Text style={styles.registerButtonText}>Crear cuenta</Text>
            </TouchableOpacity>

            <View style={styles.loginLinkWrapper}>
              <Text style={styles.loginText}>Ya cuentas con una cuenta? </Text>
              <TouchableOpacity onPress={onGoToLogin}>
                <Text style={styles.loginLink}>Login</Text>
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
    height: height * 0.2,
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
    paddingTop: height * 0.22,
    paddingBottom: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: '#1A1C1B',
    marginBottom: 32,
    borderBottomWidth: 4,
    borderBottomColor: '#1A1C1B',
    alignSelf: 'flex-start',
    paddingBottom: 4,
  },
  inputsWrapper: {
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#4D5D55',
    marginBottom: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#1A1C1B',
    paddingBottom: 4,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 17,
    fontWeight: '500',
    color: '#1A1C1B',
    padding: 0,
  },
  footer: {
    marginTop: 'auto',
  },
  registerButton: {
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
    marginBottom: 24,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
  loginLinkWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  loginText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4D5D55',
  },
  loginLink: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1A1C1B',
  },
});

export default RegisterView;
