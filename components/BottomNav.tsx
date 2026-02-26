
import React from 'react';
import { View as RNView, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Home, Sprout, User } from 'lucide-react-native';
import { View } from '../types';

interface BottomNavProps {
  currentView: View;
  onChangeView: (view: View) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, onChangeView }) => {
  const navItems = [
    { id: 'home' as View, label: 'Inicio', Icon: Home },
    { id: 'dashboard' as View, label: 'Cultivos', Icon: Sprout },
    { id: 'profile' as View, label: 'Perfil', Icon: User },
  ];

  if (['splash', 'login', 'register'].includes(currentView)) return null;

  return (
    <RNView style={styles.container}>
      <RNView style={styles.navBar}>
        {navItems.map((item) => {
          const active = currentView === item.id;
          const { Icon } = item;
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => onChangeView(item.id)}
              style={[styles.navItem, active ? styles.activeNavItem : styles.inactiveNavItem]}
              activeOpacity={0.7}
            >
              <RNView style={[styles.iconWrapper, active && styles.activeIconWrapper]}>
                <Icon color={active ? '#1A1C1B' : '#4D5D55'} size={24} />
              </RNView>
              <Text style={[styles.navLabel, active && styles.activeNavLabel]}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </RNView>
    </RNView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1000,
  },
  navBar: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#DDE4E1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: 12,
    paddingBottom: Platform.OS === 'ios' ? 34 : 16,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.05,
    shadowRadius: 24,
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
    gap: 4,
  },
  activeNavItem: {
    opacity: 1,
  },
  inactiveNavItem: {
    opacity: 0.4,
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIconWrapper: {
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  navLabel: {
    fontSize: 12,
    fontWeight: '900',
    color: '#1A1C1B',
    letterSpacing: -0.2,
  },
  activeNavLabel: {
    color: '#1A1C1B',
  },
});

export default BottomNav;

