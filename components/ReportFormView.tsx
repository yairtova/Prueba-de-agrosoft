
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { ChevronLeft, Calendar, Plus, ChevronRight } from 'lucide-react-native';
import { EventType, CropItem } from '../types';

interface ReportFormViewProps {
  type: EventType;
  crop: CropItem;
  onBack: () => void;
  onSubmit: (data: any) => void;
}

const ReportFormView: React.FC<ReportFormViewProps> = ({ type, crop, onBack, onSubmit }) => {
  const [formData, setFormData] = useState<any>({
    date: new Date().toISOString().split('T')[0],
    cantidad_agua: '',
    metodo_riego: 'goteo',
    duracion_minutos: '',
    tipo_fertilizante: 'organico',
    nombre_fertilizante: '',
    cantidad_aplicada: '',
    unidad_medida: 'kg',
    metodo_aplicacion: 'edafico',
    costo: '',
    nombre_producto: '',
    tipo_producto: 'insecticida',
    ingrediente_activo: '',
    dosis: '',
    total_mezcla_litros: '',
    plaga_objetivo: '',
    periodo_seguridad_dias: '',
    tipo_poda: 'mantenimiento',
    partes_podadas: '',
    porcentaje_podado: '',
    herramientas_utilizadas: '',
    estado_planta_despues: '',
    altura_planta: '',
    grosor_tallo: '',
    diametro: '',
    estado_salud: 'buena',
    tipo_irregularidad: 'plaga',
    nombre_plaga: '',
    nivel_dano: 'bajo',
    severidad: 'leve',
    descripcion: '',
  });

  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const titles: Record<EventType, string> = {
    riego: 'Reporte de riego',
    poda: 'Reporte de poda',
    plaga: 'Reporte de plagas',
    crecimiento: 'Reporte de crecimiento',
    fertilizacion: 'Reporte de fertilizacion',
    fumigacion: 'Reporte de fumigacion'
  };

  const renderFields = () => {
    switch (type) {
      case 'riego':
        return (
          <View style={styles.fieldsContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Cantidad de agua (Litros)</Text>
              <TextInput 
                keyboardType="numeric"
                value={formData.cantidad_agua} 
                onChangeText={(val) => handleChange('cantidad_agua', val)} 
                style={styles.textInput} 
                placeholder="Ej: 50" 
                placeholderTextColor="#9CA3AF"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Método de riego</Text>
              <View style={styles.pickerContainer}>
                {['goteo', 'aspersion', 'manual', 'inundacion'].map((opt) => (
                  <TouchableOpacity 
                    key={opt}
                    onPress={() => handleChange('metodo_riego', opt)}
                    style={[styles.pickerOption, formData.metodo_riego === opt && styles.pickerOptionSelected]}
                  >
                    <Text style={[styles.pickerOptionText, formData.metodo_riego === opt && styles.pickerOptionTextSelected]}>
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Duración (Minutos)</Text>
              <TextInput 
                keyboardType="numeric"
                value={formData.duracion_minutos} 
                onChangeText={(val) => handleChange('duracion_minutos', val)} 
                style={styles.textInput} 
                placeholder="Ej: 30" 
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>
        );
      case 'fertilizacion':
        return (
          <View style={styles.fieldsContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Tipo de fertilizante</Text>
              <View style={styles.pickerContainer}>
                {['organico', 'quimico', 'foliar'].map((opt) => (
                  <TouchableOpacity 
                    key={opt}
                    onPress={() => handleChange('tipo_fertilizante', opt)}
                    style={[styles.pickerOption, formData.tipo_fertilizante === opt && styles.pickerOptionSelected]}
                  >
                    <Text style={[styles.pickerOptionText, formData.tipo_fertilizante === opt && styles.pickerOptionTextSelected]}>
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nombre del fertilizante</Text>
              <TextInput 
                value={formData.nombre_fertilizante} 
                onChangeText={(val) => handleChange('nombre_fertilizante', val)} 
                style={styles.textInput} 
                placeholder="Ej: Urea" 
                placeholderTextColor="#9CA3AF"
              />
            </View>
            <View style={styles.row}>
              <View style={[styles.inputGroup, { flex: 1 }]}>
                <Text style={styles.label}>Cantidad</Text>
                <TextInput 
                  keyboardType="numeric"
                  value={formData.cantidad_aplicada} 
                  onChangeText={(val) => handleChange('cantidad_aplicada', val)} 
                  style={styles.textInput} 
                  placeholder="Ej: 5" 
                  placeholderTextColor="#9CA3AF"
                />
              </View>
              <View style={[styles.inputGroup, { width: 100 }]}>
                <Text style={styles.label}>Unidad</Text>
                <View style={styles.pickerContainer}>
                  {['kg', 'l', 'g'].map((opt) => (
                    <TouchableOpacity 
                      key={opt}
                      onPress={() => handleChange('unidad_medida', opt)}
                      style={[styles.pickerOption, formData.unidad_medida === opt && styles.pickerOptionSelected, { paddingHorizontal: 8 }]}
                    >
                      <Text style={[styles.pickerOptionText, formData.unidad_medida === opt && styles.pickerOptionTextSelected]}>
                        {opt}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </View>
        );
      case 'fumigacion':
        return (
          <View style={styles.fieldsContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nombre del producto</Text>
              <TextInput 
                value={formData.nombre_producto} 
                onChangeText={(val) => handleChange('nombre_producto', val)} 
                style={styles.textInput} 
                placeholder="Ej: Abamectina" 
                placeholderTextColor="#9CA3AF"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Tipo de producto</Text>
              <View style={styles.pickerContainer}>
                {['insecticida', 'fungicida', 'herbicida', 'acaricida'].map((opt) => (
                  <TouchableOpacity 
                    key={opt}
                    onPress={() => handleChange('tipo_producto', opt)}
                    style={[styles.pickerOption, formData.tipo_producto === opt && styles.pickerOptionSelected]}
                  >
                    <Text style={[styles.pickerOptionText, formData.tipo_producto === opt && styles.pickerOptionTextSelected]}>
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Plaga objetivo</Text>
              <TextInput 
                value={formData.plaga_objetivo} 
                onChangeText={(val) => handleChange('plaga_objetivo', val)} 
                style={styles.textInput} 
                placeholder="Ej: Pulgón" 
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>
        );
      case 'poda':
        return (
          <View style={styles.fieldsContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Tipo de poda</Text>
              <View style={styles.pickerContainer}>
                {['formacion', 'mantenimiento', 'sanitaria'].map((opt) => (
                  <TouchableOpacity 
                    key={opt}
                    onPress={() => handleChange('tipo_poda', opt)}
                    style={[styles.pickerOption, formData.tipo_poda === opt && styles.pickerOptionSelected]}
                  >
                    <Text style={[styles.pickerOptionText, formData.tipo_poda === opt && styles.pickerOptionTextSelected]}>
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Partes podadas</Text>
              <TextInput 
                value={formData.partes_podadas} 
                onChangeText={(val) => handleChange('partes_podadas', val)} 
                style={styles.textInput} 
                placeholder="Ej: Hojas basales" 
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>
        );
      case 'crecimiento':
        return (
          <View style={styles.fieldsContainer}>
            <View style={styles.row}>
              <View style={[styles.inputGroup, { flex: 1 }]}>
                <Text style={styles.label}>Altura (cm)</Text>
                <TextInput 
                  keyboardType="numeric"
                  value={formData.altura_planta} 
                  onChangeText={(val) => handleChange('altura_planta', val)} 
                  style={styles.textInput} 
                  placeholder="Ej: 15" 
                  placeholderTextColor="#9CA3AF"
                />
              </View>
              <View style={[styles.inputGroup, { flex: 1 }]}>
                <Text style={styles.label}>Grosor tallo (mm)</Text>
                <TextInput 
                  keyboardType="numeric"
                  value={formData.grosor_tallo} 
                  onChangeText={(val) => handleChange('grosor_tallo', val)} 
                  style={styles.textInput} 
                  placeholder="Ej: 5" 
                  placeholderTextColor="#9CA3AF"
                />
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Estado de salud</Text>
              <View style={styles.pickerContainer}>
                {['buena', 'regular', 'mala'].map((opt) => (
                  <TouchableOpacity 
                    key={opt}
                    onPress={() => handleChange('estado_salud', opt)}
                    style={[styles.pickerOption, formData.estado_salud === opt && styles.pickerOptionSelected]}
                  >
                    <Text style={[styles.pickerOptionText, formData.estado_salud === opt && styles.pickerOptionTextSelected]}>
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        );
      case 'plaga':
        return (
          <View style={styles.fieldsContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Tipo de irregularidad</Text>
              <View style={styles.pickerContainer}>
                {['plaga', 'enfermedad', 'deficiencia'].map((opt) => (
                  <TouchableOpacity 
                    key={opt}
                    onPress={() => handleChange('tipo_irregularidad', opt)}
                    style={[styles.pickerOption, formData.tipo_irregularidad === opt && styles.pickerOptionSelected]}
                  >
                    <Text style={[styles.pickerOptionText, formData.tipo_irregularidad === opt && styles.pickerOptionTextSelected]}>
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nombre (Plaga/Enfermedad)</Text>
              <TextInput 
                value={formData.nombre_plaga} 
                onChangeText={(val) => handleChange('nombre_plaga', val)} 
                style={styles.textInput} 
                placeholder="Ej: Araña roja" 
                placeholderTextColor="#9CA3AF"
              />
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
        <Text style={styles.headerTitle}>{titles[type]}</Text>
      </View>

      <View style={styles.stepInfo}>
        <View style={styles.stepTextWrapper}>
          <Text style={styles.stepText}>Paso 2 de 2</Text>
          <View style={styles.progressBarWrapper}>
            <View style={styles.progressBar} />
          </View>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text style={styles.cropName}>{crop.name}</Text>

          <View style={styles.summarySection}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Variedad</Text>
              <Text style={styles.summaryValue}>{crop.variety}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Tipo</Text>
              <Text style={styles.summaryValue}>{crop.type}</Text>
            </View>
          </View>

          <View style={styles.formSection}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Fecha del reporte</Text>
              <View style={styles.dateInputWrapper}>
                <TextInput 
                  value={formData.date}
                  onChangeText={(val) => handleChange('date', val)}
                  style={styles.textInput}
                />
                <Calendar color="#4D5D55" size={24} style={styles.calendarIcon} />
              </View>
            </View>

            {renderFields()}

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Notas adicionales</Text>
              <TextInput 
                multiline
                numberOfLines={4}
                value={formData.descripcion}
                onChangeText={(val) => handleChange('descripcion', val)}
                style={[styles.textInput, styles.textArea]}
                placeholder="Describa cualquier observación importante..."
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Fotos del reporte</Text>
          <View style={styles.photoGrid}>
            <TouchableOpacity style={styles.addPhotoBtn}>
              <Plus color="#9CA3AF" size={32} />
              <Text style={styles.addPhotoText}>Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addPhotoBtn}>
              <Plus color="#9CA3AF" size={32} />
              <Text style={styles.addPhotoText}>Agregar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          onPress={() => onSubmit(formData)}
          style={styles.submitBtn}
        >
          <Text style={styles.submitBtnText}>Enviar reporte</Text>
          <ChevronRight color="rgba(255,255,255,0.8)" size={24} />
        </TouchableOpacity>
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
    paddingBottom: 16,
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
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1C1B',
  },
  stepInfo: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  stepTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 8,
  },
  stepText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1C1B',
  },
  progressBarWrapper: {
    flex: 1,
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#8BB29E',
    borderRadius: 3,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 120,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 32,
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  cropName: {
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    color: '#1A1C1B',
    marginBottom: 24,
  },
  summarySection: {
    marginBottom: 24,
    gap: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    paddingBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4D5D55',
  },
  formSection: {
    gap: 24,
  },
  fieldsContainer: {
    gap: 24,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  textInput: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    fontSize: 16,
    fontWeight: '500',
    color: '#4D5D55',
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  dateInputWrapper: {
    position: 'relative',
  },
  calendarIcon: {
    position: 'absolute',
    right: 24,
    top: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  pickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  pickerOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  pickerOptionSelected: {
    backgroundColor: '#1A1C1B',
    borderColor: '#1A1C1B',
  },
  pickerOptionText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4D5D55',
  },
  pickerOptionTextSelected: {
    color: 'white',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    color: '#1A1C1B',
    marginBottom: 24,
  },
  photoGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  addPhotoBtn: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 24,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  addPhotoText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9CA3AF',
  },
  submitBtn: {
    backgroundColor: '#1A1C1B',
    paddingVertical: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  submitBtnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
});

export default ReportFormView;

