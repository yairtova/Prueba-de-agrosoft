
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EventType, CropItem } from '../types';

interface ReportFormViewProps {
  type: EventType;
  crop: CropItem;
  onBack: () => void;
  onSubmit: (data: any) => void;
}

const ReportFormView: React.FC<ReportFormViewProps> = ({ type, crop, onBack, onSubmit }) => {
  const [formData, setFormData] = useState<any>({
    // Common fields
    date: new Date().toISOString().split('T')[0],
    
    // Riego
    cantidad_agua: '',
    metodo_riego: 'goteo',
    duracion_minutos: '',

    // Fertilizacion
    tipo_fertilizante: 'organico',
    nombre_fertilizante: '',
    cantidad_aplicada: '',
    unidad_medida: 'kg',
    metodo_aplicacion: 'edafico',
    costo: '',

    // Fumigacion
    nombre_producto: '',
    tipo_producto: 'insecticida',
    ingrediente_activo: '',
    dosis: '',
    total_mezcla_litros: '',
    plaga_objetivo: '',
    periodo_seguridad_dias: '',

    // Poda
    tipo_poda: 'mantenimiento',
    partes_podadas: '',
    porcentaje_podado: '',
    herramientas_utilizadas: '',
    estado_planta_despues: '',

    // Crecimiento
    altura_planta: '',
    grosor_tallo: '',
    diametro: '',
    estado_salud: 'buena',

    // Plaga/Irregularidad
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
          <>
            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Cantidad de agua (Litros)</label>
              <input type="number" value={formData.cantidad_agua} onChange={(e) => handleChange('cantidad_agua', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" placeholder="Ej: 50" />
            </div>
            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Método de riego</label>
              <select value={formData.metodo_riego} onChange={(e) => handleChange('metodo_riego', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]">
                <option value="goteo">Goteo</option>
                <option value="aspersion">Aspersión</option>
                <option value="manual">Manual</option>
                <option value="inundacion">Inundación</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Duración (Minutos)</label>
              <input type="number" value={formData.duracion_minutos} onChange={(e) => handleChange('duracion_minutos', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" placeholder="Ej: 30" />
            </div>
          </>
        );
      case 'fertilizacion':
        return (
          <>
            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Tipo de fertilizante</label>
              <select value={formData.tipo_fertilizante} onChange={(e) => handleChange('tipo_fertilizante', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]">
                <option value="organico">Orgánico</option>
                <option value="quimico">Químico</option>
                <option value="foliar">Foliar</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Nombre del fertilizante</label>
              <input type="text" value={formData.nombre_fertilizante} onChange={(e) => handleChange('nombre_fertilizante', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" placeholder="Ej: Urea" />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 space-y-2">
                <label className="text-[16px] font-black text-[#1A1C1B]">Cantidad</label>
                <input type="number" value={formData.cantidad_aplicada} onChange={(e) => handleChange('cantidad_aplicada', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" placeholder="Ej: 5" />
              </div>
              <div className="w-24 space-y-2">
                <label className="text-[16px] font-black text-[#1A1C1B]">Unidad</label>
                <select value={formData.unidad_medida} onChange={(e) => handleChange('unidad_medida', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]">
                  <option value="kg">Kg</option>
                  <option value="l">L</option>
                  <option value="g">g</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Método de aplicación</label>
              <select value={formData.metodo_aplicacion} onChange={(e) => handleChange('metodo_aplicacion', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]">
                <option value="edafico">Edáfico</option>
                <option value="foliar">Foliar</option>
                <option value="fertirriego">Fertirriego</option>
              </select>
            </div>
          </>
        );
      case 'fumigacion':
        return (
          <>
            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Nombre del producto</label>
              <input type="text" value={formData.nombre_producto} onChange={(e) => handleChange('nombre_producto', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" placeholder="Ej: Abamectina" />
            </div>
            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Tipo de producto</label>
              <select value={formData.tipo_producto} onChange={(e) => handleChange('tipo_producto', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]">
                <option value="insecticida">Insecticida</option>
                <option value="fungicida">Fungicida</option>
                <option value="herbicida">Herbicida</option>
                <option value="acaricida">Acaricida</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Plaga objetivo</label>
              <input type="text" value={formData.plaga_objetivo} onChange={(e) => handleChange('plaga_objetivo', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" placeholder="Ej: Pulgón" />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 space-y-2">
                <label className="text-[16px] font-black text-[#1A1C1B]">Dosis</label>
                <input type="text" value={formData.dosis} onChange={(e) => handleChange('dosis', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" placeholder="Ej: 2ml/L" />
              </div>
              <div className="flex-1 space-y-2">
                <label className="text-[16px] font-black text-[#1A1C1B]">Total mezcla (L)</label>
                <input type="number" value={formData.total_mezcla_litros} onChange={(e) => handleChange('total_mezcla_litros', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" placeholder="Ej: 20" />
              </div>
            </div>
          </>
        );
      case 'poda':
        return (
          <>
            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Tipo de poda</label>
              <select value={formData.tipo_poda} onChange={(e) => handleChange('tipo_poda', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]">
                <option value="formacion">Formación</option>
                <option value="mantenimiento">Mantenimiento</option>
                <option value="sanitaria">Sanitaria</option>
                <option value="rejuvenecimiento">Rejuvenecimiento</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Partes podadas</label>
              <input type="text" value={formData.partes_podadas} onChange={(e) => handleChange('partes_podadas', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" placeholder="Ej: Hojas basales" />
            </div>
            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Porcentaje podado (%)</label>
              <input type="number" value={formData.porcentaje_podado} onChange={(e) => handleChange('porcentaje_podado', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" placeholder="Ej: 10" />
            </div>
          </>
        );
      case 'crecimiento':
        return (
          <>
            <div className="flex gap-4">
              <div className="flex-1 space-y-2">
                <label className="text-[16px] font-black text-[#1A1C1B]">Altura (cm)</label>
                <input type="number" value={formData.altura_planta} onChange={(e) => handleChange('altura_planta', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" placeholder="Ej: 15" />
              </div>
              <div className="flex-1 space-y-2">
                <label className="text-[16px] font-black text-[#1A1C1B]">Grosor tallo (mm)</label>
                <input type="number" value={formData.grosor_tallo} onChange={(e) => handleChange('grosor_tallo', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" placeholder="Ej: 5" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Estado de salud</label>
              <select value={formData.estado_salud} onChange={(e) => handleChange('estado_salud', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]">
                <option value="buena">Buena</option>
                <option value="regular">Regular</option>
                <option value="mala">Mala</option>
              </select>
            </div>
          </>
        );
      case 'plaga':
        return (
          <>
            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Tipo de irregularidad</label>
              <select value={formData.tipo_irregularidad} onChange={(e) => handleChange('tipo_irregularidad', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]">
                <option value="plaga">Plaga</option>
                <option value="enfermedad">Enfermedad</option>
                <option value="deficiencia">Deficiencia nutricional</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Nombre (Plaga/Enfermedad)</label>
              <input type="text" value={formData.nombre_plaga} onChange={(e) => handleChange('nombre_plaga', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" placeholder="Ej: Araña roja" />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 space-y-2">
                <label className="text-[16px] font-black text-[#1A1C1B]">Nivel daño</label>
                <select value={formData.nivel_dano} onChange={(e) => handleChange('nivel_dano', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]">
                  <option value="bajo">Bajo</option>
                  <option value="medio">Medio</option>
                  <option value="alto">Alto</option>
                </select>
              </div>
              <div className="flex-1 space-y-2">
                <label className="text-[16px] font-black text-[#1A1C1B]">Severidad</label>
                <select value={formData.severidad} onChange={(e) => handleChange('severidad', e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]">
                  <option value="leve">Leve</option>
                  <option value="moderada">Moderada</option>
                  <option value="critica">Crítica</option>
                </select>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#F5F7F6] overflow-y-auto no-scrollbar pb-32">
      <header className="px-6 pt-10 pb-4 flex items-center gap-5">
        <button onClick={onBack} className="w-12 h-12 bg-[#1A1C1B] rounded-full flex items-center justify-center text-white shadow-md active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-[22px] font-bold tracking-tight">{titles[type]}</h1>
      </header>

      <div className="px-6 mb-6">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-[15px] font-bold text-[#1A1C1B]">Paso 2 de 2</span>
          <div className="flex-grow h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-full h-full bg-[#8BB29E] rounded-full"></div>
          </div>
        </div>
      </div>

      <main className="px-6 space-y-6">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm space-y-6">
          <h2 className="text-[28px] font-black text-center text-[#1A1C1B] mb-4">{crop.name}</h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-[16px] font-black text-[#1A1C1B]">Variedad</span>
              <span className="text-[16px] font-bold text-[#4D5D55]">{crop.variety}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-[16px] font-black text-[#1A1C1B]">Tipo</span>
              <span className="text-[16px] font-bold text-[#4D5D55]">{crop.type}</span>
            </div>
          </div>

          <div className="space-y-6 pt-4">
            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Fecha del reporte</label>
              <div className="relative">
                <input 
                  type="date" 
                  value={formData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute right-6 top-1/2 -translate-y-1/2 text-[#4D5D55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {renderFields()}

            <div className="space-y-2">
              <label className="text-[16px] font-black text-[#1A1C1B]">Notas adicionales</label>
              <textarea 
                value={formData.descripcion}
                onChange={(e) => handleChange('descripcion', e.target.value)}
                className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55] min-h-[100px]"
                placeholder="Describa cualquier observación importante..."
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm">
          <h3 className="text-[18px] font-black text-center text-[#1A1C1B] mb-6">Fotos del reporte</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-[#F9FAFB] rounded-[1.5rem] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-[#9CA3AF] gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="text-[12px] font-bold">Agregar</span>
            </div>
            <div className="aspect-square bg-[#F9FAFB] rounded-[1.5rem] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-[#9CA3AF] gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="text-[12px] font-bold">Agregar</span>
            </div>
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onSubmit(formData)}
          className="w-full bg-[#1A1C1B] text-white py-5 rounded-2xl text-[20px] font-black shadow-xl flex items-center justify-center gap-3"
        >
          Enviar reporte <span className="text-2xl font-light opacity-80">&gt;</span>
        </motion.button>
      </main>
    </div>
  );
};

export default ReportFormView;

