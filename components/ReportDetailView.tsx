
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { ChevronLeft, Sprout } from 'lucide-react-native';
import { CareEvent } from '../types';

interface ReportDetailViewProps {
  event: CareEvent;
  onBack: () => void;
}

const ReportDetailView: React.FC<ReportDetailViewProps> = ({ event, onBack }) => {
  const renderDetails = () => {
    if (!event.details) return null;

    const details = event.details;

    switch (event.type) {
      case 'riego':
        return (
          <View style={styles.detailsGrid}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Cantidad</Text>
              <Text style={styles.detailValue}>{details.cantidad_agua} Litros</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Método</Text>
              <Text style={[styles.detailValue, { textTransform: 'capitalize' }]}>{details.metodo_riego}</Text>
            </View>
            <View style={[styles.detailItem, { width: '100%' }]}>
              <Text style={styles.detailLabel}>Duración</Text>
              <Text style={styles.detailValue}>{details.duracion_minutos} Minutos</Text>
            </View>
          </View>
        );
      case 'fertilizacion':
        return (
          <View style={styles.detailsGrid}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Tipo</Text>
              <Text style={[styles.detailValue, { textTransform: 'capitalize' }]}>{details.tipo_fertilizante}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Producto</Text>
              <Text style={styles.detailValue}>{details.nombre_fertilizante}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Cantidad</Text>
              <Text style={styles.detailValue}>{details.cantidad_aplicada} {details.unidad_medida}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Método</Text>
              <Text style={[styles.detailValue, { textTransform: 'capitalize' }]}>{details.metodo_aplicacion}</Text>
            </View>
          </View>
        );
      case 'fumigacion':
        return (
          <View style={styles.detailsGrid}>
            <View style={[styles.detailItem, { width: '100%' }]}>
              <Text style={styles.detailLabel}>Producto</Text>
              <Text style={styles.detailValue}>{details.nombre_producto} ({details.tipo_producto})</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Dosis</Text>
              <Text style={styles.detailValue}>{details.dosis}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Mezcla</Text>
              <Text style={styles.detailValue}>{details.total_mezcla_litros} L</Text>
            </View>
            <View style={[styles.detailItem, { width: '100%' }]}>
              <Text style={styles.detailLabel}>Objetivo</Text>
              <Text style={styles.detailValue}>{details.plaga_objetivo}</Text>
            </View>
          </View>
        );
      case 'poda':
        return (
          <View style={styles.detailsGrid}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Tipo</Text>
              <Text style={[styles.detailValue, { textTransform: 'capitalize' }]}>{details.tipo_poda}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Porcentaje</Text>
              <Text style={styles.detailValue}>{details.porcentaje_podado}%</Text>
            </View>
            <View style={[styles.detailItem, { width: '100%' }]}>
              <Text style={styles.detailLabel}>Partes podadas</Text>
              <Text style={styles.detailValue}>{details.partes_podadas}</Text>
            </View>
          </View>
        );
      case 'crecimiento':
        return (
          <View style={styles.detailsGrid}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Altura</Text>
              <Text style={styles.detailValue}>{details.altura_planta} cm</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Tallo</Text>
              <Text style={styles.detailValue}>{details.grosor_tallo} mm</Text>
            </View>
            <View style={[styles.detailItem, { width: '100%' }]}>
              <Text style={styles.detailLabel}>Salud</Text>
              <Text style={[styles.detailValue, { textTransform: 'capitalize' }]}>{details.estado_salud}</Text>
            </View>
          </View>
        );
      case 'plaga':
        return (
          <View style={styles.detailsGrid}>
            <View style={[styles.detailItem, { width: '100%' }]}>
              <Text style={styles.detailLabel}>Problema</Text>
              <Text style={[styles.detailValue, { textTransform: 'capitalize' }]}>{details.tipo_irregularidad}: {details.nombre_plaga}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Daño</Text>
              <Text style={[styles.detailValue, { textTransform: 'capitalize' }]}>{details.nivel_dano}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Severidad</Text>
              <Text style={[styles.detailValue, { textTransform: 'capitalize' }]}>{details.severidad}</Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reporte de {event.type}</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Tu reporte</Text>

        <View style={styles.eventSummaryCard}>
          <View style={styles.eventIconWrapper}>
            <Sprout color="white" size={32} />
          </View>
          <View style={styles.eventInfo}>
            <View style={styles.eventRow}>
              <Text style={styles.eventLabel}>Tipo:</Text>
              <Text style={styles.eventValue}>{event.type}</Text>
              <Text style={styles.eventLabelSmall}>Etapa:</Text>
              <Text style={styles.phaseValue}>{event.phase}</Text>
            </View>
            <View style={styles.eventRow}>
              <Text style={styles.eventLabelSmall}>Fecha</Text>
              <View style={styles.dateBadge}>
                <Text style={styles.dateText}>{event.date}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.detailsSection}>
          <Text style={styles.detailsTitle}>Detalles del reporte</Text>
          <View style={styles.detailsCard}>
            {renderDetails()}
            <View style={styles.divider} />
            <Text style={styles.description}>
              {event.description || 'Sin descripción adicional.'}
            </Text>
          </View>
        </View>

        <View style={styles.photosSection}>
          <Text style={styles.detailsTitle}>Fotos del reporte</Text>
          <View style={styles.photoGrid}>
            <View style={styles.photoPlaceholder} />
            <View style={styles.photoPlaceholder} />
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
    gap: 20,
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
    fontWeight: '900',
    color: '#1A1C1B',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
    gap: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    color: '#1A1C1B',
  },
  eventSummaryCard: {
    backgroundColor: 'white',
    borderRadius: 32,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  eventIconWrapper: {
    width: 64,
    height: 64,
    backgroundColor: '#1F2923',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventInfo: {
    flex: 1,
  },
  eventRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 4,
  },
  eventLabel: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  eventValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1C1B',
    textTransform: 'capitalize',
  },
  eventLabelSmall: {
    fontSize: 14,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  phaseValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4D5D55',
  },
  dateBadge: {
    backgroundColor: '#DDE4E1',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 6,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  detailsSection: {
    gap: 16,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  detailsCard: {
    backgroundColor: 'white',
    borderRadius: 32,
    padding: 24,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  detailItem: {
    width: '47%',
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 16,
  },
  detailLabel: {
    fontSize: 12,
    fontWeight: '900',
    color: '#4D5D55',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  divider: {
    height: 1,
    backgroundColor: '#F9FAFB',
    marginVertical: 16,
  },
  description: {
    color: '#4D5D55',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  photosSection: {
    gap: 16,
  },
  photoGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  photoPlaceholder: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
});

export default ReportDetailView;
