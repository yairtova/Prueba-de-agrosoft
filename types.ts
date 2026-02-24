
export type View = 'splash' | 'login' | 'register' | 'home' | 'dashboard' | 'create' | 'detail' | 'report-select' | 'report-form' | 'report-success' | 'report-detail' | 'history' | 'ai-analysis' | 'ai-alerts' | 'profile';

export type CropType = 'Maiz' | 'Frijol' | 'Lechuga' | 'Tomate' | 'Hortaliza' | 'Otro';
export type CropStatus = 'Activo' | 'Hecho' | 'en_proceso' | 'completado';
export type HealthStatus = 'Excelente' | 'Bueno' | 'Regular' | 'Malo' | 'Buena' | 'Mala';
export type RiskLevel = 'Bajo' | 'Medio' | 'Alto' | 'Critico';
export type EventType = 'riego' | 'fertilizacion' | 'fumigacion' | 'poda' | 'crecimiento' | 'plaga';

export interface User {
  id: string;
  nombre: string;
  apellido: string;
  correo: string;
}

export interface CropItem {
  id: string;
  name: string;
  variety: string;
  type: CropType;
  startDate: string;
  day: number;
  totalDays: number;
  progress: number;
  status: CropStatus;
  phase: string;
  health: HealthStatus;
  risk: RiskLevel;
  terrainSize?: string;
  seedQuantity?: string;
}

export interface GrowthStage {
  id: string;
  name: string;
  duration: number;
  startDate: string;
  endDate: string;
  order: number;
}

export interface CareEvent {
  id: string;
  cropId: string;
  type: EventType;
  date: string;
  description: string;
  phase: string;
  details?: any;
}

export interface Irregularity {
  id: string;
  cropId: string;
  type: 'crecimiento_anormal' | 'plaga' | 'enfermedad';
  name: string;
  damageLevel: 'leve' | 'moderado' | 'severo' | 'critico';
  status: 'activa' | 'en_tratamiento' | 'resuelta';
  date: string;
}

export interface CropState {
  type: CropType | null;
  variety: string;
  step: number;
}
