
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { ChevronLeft, ChevronRight, Sprout, Calendar, Plus, Edit2, Check } from 'lucide-react-native';
import StepIndicator from './StepIndicator';
import CropOption from './CropOption';
import { CropType } from '../types';

interface CreateCropViewProps {
  onBack: () => void;
  onFinish: (crop: any) => void;
}

const CreateCropView: React.FC<CreateCropViewProps> = ({ onBack, onFinish }) => {
  const [step, setStep] = useState(1);
  const [cropType, setCropType] = useState<CropType | null>('Maiz');
  const [variety, setVariety] = useState('');
  const [terrainSize, setTerrainSize] = useState('1292942 M2');
  const [seedQuantity, setSeedQuantity] = useState('30 Kg');
  const [startDate, setStartDate] = useState('2025-02-24');

  const totalSteps = 4;

  const cropOptions: { name: CropType; label: string }[] = [
    { name: 'Maiz', label: 'Maiz' },
    { name: 'Frijol', label: 'Frijol' },
    { name: 'Lechuga', label: 'Lechuga' },
    { name: 'Otro', label: 'Otro' },
  ];

  const stages = [
    { name: 'Germinacion', duration: 10, start: '25/06/24', end: '25/06/24' },
    { name: 'Plántula', duration: 10, start: '25/06/24', end: '25/06/24' },
    { name: 'Crecimiento', duration: 10, start: '25/06/24', end: '25/06/24' },
    { name: 'Floración', duration: 10, start: '25/06/24', end: '25/06/24' },
    { name: 'Cosecha', duration: 10, start: '25/06/24', end: '25/06/24' },
  ];

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onFinish({ type: cropType, variety, terrainSize, seedQuantity, startDate });
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  const titles = [
    'Crear cultivo',
    'Datos del cultivo',
    'Etapas del ciclo',
    'Confirmar cultivo'
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrev} style={styles.backBtn}>
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{titles[step - 1]}</Text>
      </View>

      <View style={styles.stepInfo}>
        <View style={styles.stepTextWrapper}>
          <Text style={styles.stepText}>Paso {step} de {totalSteps}</Text>
          <StepIndicator currentStep={step} totalSteps={totalSteps} />
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {step === 1 && (
          <View style={styles.stepCard}>
            <Text style={styles.stepTitle}>¿Que tipo de cultivo realizaras?</Text>
            <View style={styles.optionsGrid}>
              {cropOptions.map((crop) => (
                <View key={crop.name} style={styles.optionWrapper}>
                  <CropOption
                    label={crop.label}
                    isSelected={cropType === crop.name}
                    onClick={() => setCropType(crop.name)}
                  />
                </View>
              ))}
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Variedad (Opcional)</Text>
              <TextInput
                placeholder="Ingrese la variedad"
                placeholderTextColor="#D1D5DB"
                value={variety}
                onChangeText={setVariety}
                style={styles.textInput}
              />
            </View>
            <TouchableOpacity onPress={handleNext} style={styles.continueBtn}>
              <Text style={styles.continueBtnText}>Continuar</Text>
              <ChevronRight color="rgba(255,255,255,0.8)" size={24} />
            </TouchableOpacity>
          </View>
        )}

        {step === 2 && (
          <View style={styles.stepCard}>
            <View style={styles.featuredIconWrapper}>
              <View style={styles.featuredIconCircle}>
                <Sprout color="#4D5D55" size={56} />
              </View>
              <Text style={styles.featuredCropName}>{cropType}</Text>
            </View>

            <View style={styles.form}>
              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Tipo de cultivo</Text>
                <View style={styles.readOnlyInput}>
                  <Text style={styles.readOnlyText}>Hortaliza</Text>
                </View>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Tamaño de terreno</Text>
                <TextInput 
                  value={terrainSize} 
                  onChangeText={setTerrainSize} 
                  style={styles.formInput} 
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Cantidad de semillas</Text>
                <TextInput 
                  value={seedQuantity} 
                  onChangeText={setSeedQuantity} 
                  style={styles.formInput} 
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Fecha de siembra</Text>
                <View style={styles.dateInputWrapper}>
                  <TextInput 
                    value={startDate} 
                    onChangeText={setStartDate} 
                    style={styles.formInput} 
                  />
                  <Calendar color="#4D5D55" size={24} style={styles.calendarIcon} />
                </View>
              </View>
            </View>

            <TouchableOpacity onPress={handleNext} style={styles.continueBtn}>
              <Text style={styles.continueBtnText}>Continuar</Text>
              <ChevronRight color="rgba(255,255,255,0.8)" size={24} />
            </TouchableOpacity>
          </View>
        )}

        {step === 3 && (
          <View style={styles.stepCard}>
            <Text style={styles.stepTitle}>Configura las etapas</Text>
            
            <View style={styles.stagesList}>
              {stages.map((stage, i) => (
                <View key={i} style={styles.stageItem}>
                  <View style={styles.stageIndicator}>
                    <View style={styles.stageCircle}>
                      <Text style={styles.stageNumber}>{i + 1}</Text>
                    </View>
                    {i < stages.length - 1 && <View style={styles.stageLine} />}
                  </View>
                  <View style={styles.stageContent}>
                    <View style={styles.stageHeader}>
                      <Text style={styles.stageName}>{stage.name}</Text>
                      <Text style={styles.stageDuration}>({stage.duration} Dias)</Text>
                    </View>
                    <View style={styles.stageDates}>
                      <Text style={styles.dateText}>
                        Inicio <Text style={styles.dateValue}>{stage.start}</Text>
                      </Text>
                      <Text style={styles.dateText}>
                        Fin <Text style={[styles.dateValue, styles.dateValueEnd]}>{stage.end}</Text>
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.stageActions}>
              <TouchableOpacity style={styles.stageActionBtn}>
                <Plus color="#1A1C1B" size={20} />
                <Text style={styles.stageActionText}>Agregar etapa</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stageActionBtn}>
                <Edit2 color="#1A1C1B" size={20} />
                <Text style={styles.stageActionText}>Editar etapa</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleNext} style={styles.continueBtn}>
              <Text style={styles.continueBtnText}>Continuar</Text>
              <ChevronRight color="rgba(255,255,255,0.8)" size={24} />
            </TouchableOpacity>
          </View>
        )}

        {step === 4 && (
          <View style={styles.stepCard}>
            <Text style={styles.stepTitle}>Finaliza tu cultivo</Text>
            
            <View style={styles.featuredIconWrapper}>
              <View style={styles.featuredIconCircle}>
                <Sprout color="#4D5D55" size={56} />
              </View>
              <Text style={styles.featuredCropName}>{cropType}</Text>
            </View>

            <View style={styles.summaryList}>
              {[
                { label: 'Siembra', value: '24/02/25' },
                { label: 'Semillas', value: '80 kg' },
                { label: 'Etapas', value: '5' },
                { label: 'Cosecha estm.', value: '31/06/25' },
                { label: 'Terreno', value: '15 m2' },
              ].map((row, i) => (
                <View key={i} style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>{row.label}</Text>
                  <Text style={styles.summaryValue}>{row.value}</Text>
                </View>
              ))}
            </View>

            <View style={styles.monitorCard}>
              <View style={styles.monitorHeader}>
                <Sprout color="white" size={32} />
                <View style={styles.monitorBadge}>
                  <Text style={styles.monitorBadgeText}>Primera inspeccion</Text>
                </View>
              </View>
              <Text style={styles.monitorText}>
                Comenzaré a monitorear tu cultivo desde hoy. <View style={styles.checkCircle}><Check color="#1F2923" size={12} /></View>
              </Text>
            </View>

            <View style={styles.finalActions}>
              <TouchableOpacity onPress={handlePrev} style={styles.editBtn}>
                <Text style={styles.editBtnText}>← Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNext} style={styles.finishBtn}>
                <Text style={styles.finishBtnText}>Crear cultivo</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 120,
  },
  stepCard: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 32,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    flex: 1,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 32,
    color: '#1A1C1B',
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 32,
  },
  optionWrapper: {
    width: '47%',
  },
  inputGroup: {
    marginBottom: 32,
  },
  label: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1A1C1B',
    marginBottom: 16,
  },
  textInput: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    fontSize: 16,
    color: '#1A1C1B',
  },
  continueBtn: {
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
    marginTop: 'auto',
  },
  continueBtnText: {
    color: 'white',
    fontSize: 19,
    fontWeight: '900',
  },
  featuredIconWrapper: {
    alignItems: 'center',
    marginBottom: 32,
  },
  featuredIconCircle: {
    width: 96,
    height: 96,
    backgroundColor: '#DDE4E1',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  featuredCropName: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  form: {
    marginBottom: 32,
  },
  formGroup: {
    marginBottom: 24,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1A1C1B',
    marginBottom: 8,
  },
  readOnlyInput: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  readOnlyText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4D5D55',
  },
  formInput: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    fontSize: 16,
    fontWeight: '500',
    color: '#4D5D55',
  },
  dateInputWrapper: {
    position: 'relative',
  },
  calendarIcon: {
    position: 'absolute',
    right: 24,
    top: 16,
  },
  stagesList: {
    marginBottom: 32,
  },
  stageItem: {
    flexDirection: 'row',
    gap: 16,
  },
  stageIndicator: {
    alignItems: 'center',
  },
  stageCircle: {
    width: 48,
    height: 48,
    backgroundColor: '#1A1C1B',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stageNumber: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
  stageLine: {
    width: 4,
    height: 32,
    backgroundColor: '#1A1C1B',
    marginVertical: 4,
  },
  stageContent: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    marginBottom: 16,
  },
  stageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  stageName: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  stageDuration: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4D5D55',
  },
  stageDates: {
    flexDirection: 'row',
    gap: 16,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4D5D55',
  },
  dateValue: {
    color: '#1A1C1B',
    backgroundColor: '#DDE4E1',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  dateValueEnd: {
    backgroundColor: '#1A1C1B',
    color: 'white',
  },
  stageActions: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  stageActionBtn: {
    flex: 1,
    backgroundColor: '#DDE4E1',
    paddingVertical: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  stageActionText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  summaryList: {
    marginBottom: 32,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    paddingBottom: 8,
    marginBottom: 16,
  },
  summaryLabel: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1A1C1B',
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4D5D55',
  },
  monitorCard: {
    backgroundColor: '#1F2923',
    borderRadius: 32,
    padding: 24,
    marginBottom: 32,
  },
  monitorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  monitorBadge: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 20,
  },
  monitorBadgeText: {
    color: '#1F2923',
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  monitorText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    lineHeight: 22,
  },
  checkCircle: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
  },
  finalActions: {
    gap: 16,
    marginTop: 'auto',
  },
  editBtn: {
    backgroundColor: '#1A1C1B',
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBtnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
  finishBtn: {
    backgroundColor: '#1A1C1B',
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  finishBtnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
});

export default CreateCropView;

