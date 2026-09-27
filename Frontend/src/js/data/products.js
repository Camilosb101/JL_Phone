// ============================================================
//  PRODUCTOS (JL Mobile - Catálogo Completo por Modelo)
// ============================================================
// Incluye los últimos modelos insignia de ambas marcas (Apple y Samsung)
// ordenados de forma que los lanzamientos más recientes encabecen la lista.
// Cada caja representa su modelo correspondiente con imagen en alta calidad
// y fondo transparente recortado.
// ============================================================

import { img } from './imageMap.js';

export const products = [
	// =========================================================
	//  LOS ÚLTIMOS MODELOS INSIGNIA (APPLE & SAMSUNG TOP TIER)
	// =========================================================

	// --- 1. iPhone 18 Pro Max ---
	{
		id: 'iphone-18-pro-max',
		brand: 'Apple',
		model: 'iPhone 18 Pro Max 256GB 5G',
		name: 'iPhone 18 Pro Max',
		price: 5200000,
		images: [img('Iphone_18ProMax_256GB_5G/iphone-18-promax-cherry.png')],
		colorOptions: [
			{ name: 'Dark Cherry', hex: '#5a2328', image: img('Iphone_18ProMax_256GB_5G/iphone-18-promax-cherry.png') },
			{ name: 'Titanio Negro', hex: '#1d1d1f', image: img('Iphone_18ProMax_256GB_5G/iphone-18-promax-negro.png') },
			{ name: 'Titanio Plata', hex: '#d1d1d6', image: img('Iphone_18ProMax_256GB_5G/iphone-18-promax-plata.png') }
		],
		colors: ['Dark Cherry', 'Titanio Negro', 'Titanio Plata'],
		storage: ['256 GB', '512 GB', '1 TB'],
		description: 'El nuevo buque insignia con chip A19 Pro, módulo fotográfico con visor horizontal y acabado exclusivo Dark Cherry Titanium.',
		specifications: { pantalla: '6.9 pulgadas Super Retina XDR OLED 120Hz ProMotion', camara: '48 MP Fusion con visor horizontal periscópico', bateria: 'Hasta 35 horas de reproducción de video' },
		category: 'Apple',
		stock: 8,
		featured: true
	},

	// --- 2. Galaxy S26 Ultra ---
	{
		id: 'galaxy-s26-ultra',
		brand: 'Samsung',
		model: 'Galaxy S26 Ultra 512GB',
		name: 'Galaxy S26 Ultra',
		price: 5400000,
		images: [img('Imagen_Samnsung/S26_ultra_512GB/s26-ultra-clean.png')],
		colorOptions: [
			{ name: 'Phantom Gray', hex: '#4a4a4c', image: img('Imagen_Samnsung/S26_ultra_512GB/s26-ultra-clean.png') }
		],
		colors: ['Phantom Gray', 'Titanium Black'],
		storage: ['512 GB', '1 TB'],
		description: 'Concepto insignia futurista: arquitectura de procesamiento neural cuántico y cámaras de zoom ultra avanzado.',
		specifications: { pantalla: '6.9 pulgadas Dynamic AMOLED Pro 144Hz', camara: '200 MP quad sensor con zoom espacial 150x', bateria: '5500 mAh con carga ultrarrápida' },
		category: 'Samsung',
		stock: 6,
		featured: true
	},

	// --- 3. iPhone 18 Pro ---
	{
		id: 'iphone-18-pro',
		brand: 'Apple',
		model: 'iPhone 18 Pro 256GB 5G',
		name: 'iPhone 18 Pro',
		price: 4600000,
		images: [img('Iphone_18Pro_256GB_5G/iphone-18-pro-cherry.png')],
		colorOptions: [
			{ name: 'Dark Cherry', hex: '#5a2328', image: img('Iphone_18Pro_256GB_5G/iphone-18-pro-cherry.png') },
			{ name: 'Titanio Negro', hex: '#1d1d1f', image: img('Iphone_18Pro_256GB_5G/iphone-18-pro-negro.png') },
			{ name: 'Titanio Plata', hex: '#d1d1d6', image: img('Iphone_18Pro_256GB_5G/iphone-18-pro-plata.png') }
		],
		colors: ['Dark Cherry', 'Titanio Negro', 'Titanio Plata'],
		storage: ['128 GB', '256 GB', '512 GB', '1 TB'],
		description: 'Potencia Pro con chip A19 Pro, visor de cámara horizontal unificado y tamaño ergonómico de 6.3 pulgadas.',
		specifications: { pantalla: '6.3 pulgadas ProMotion 120Hz Always-On', camara: '48 MP Pro triple con visor horizontal', bateria: 'Hasta 29 horas' },
		category: 'Apple',
		stock: 7,
		featured: true
	},

	// --- 4. Galaxy S26 Plus ---
	{
		id: 'galaxy-s26-plus',
		brand: 'Samsung',
		model: 'Galaxy S26 Plus 256GB',
		name: 'Galaxy S26 Plus',
		price: 3800000,
		images: [img('Imagen_Samnsung/S26_Plus_256GB/s26-plus-clean.png')],
		colorOptions: [
			{ name: 'Cobalt Violet', hex: '#585175', image: img('Imagen_Samnsung/S26_Plus_256GB/s26-plus-clean.png') }
		],
		colors: ['Cobalt Violet', 'Silver Shadow'],
		storage: ['256 GB', '512 GB'],
		description: 'Equilibrio perfecto entre una gran pantalla de 6.7 pulgadas, ligereza extrema y batería para todo el día.',
		specifications: { pantalla: '6.7 pulgadas Dynamic AMOLED 2X 120Hz', camara: '50 MP principal triple con IA pro', bateria: '4900 mAh' },
		category: 'Samsung',
		stock: 7,
		featured: true
	},

	// --- 5. iPhone 17 Pro Max ---
	{
		id: 'iphone-17-pro-max',
		brand: 'Apple',
		model: 'iPhone 17 Pro Max 256GB 5G',
		name: 'iPhone 17 Pro Max',
		price: 4800000,
		images: [img('Iphone_17ProMax_256GB/iphone-17-promax-desert.png')],
		colorOptions: [
			{ name: 'Titanio Desierto', hex: '#c5a582', image: img('Iphone_17ProMax_256GB/iphone-17-promax-desert.png') },
			{ name: 'Titanio Natural', hex: '#9e978e', image: img('Iphone_17ProMax_256GB/iphone-17-promax-natural.png') },
			{ name: 'Titanio Negro', hex: '#1d1d1f', image: img('Iphone_17ProMax_256GB/iphone-17-promax-negro.png') }
		],
		colors: ['Titanio Desierto', 'Titanio Natural', 'Titanio Negro'],
		storage: ['256 GB', '512 GB', '1 TB'],
		description: 'Diseño ultra premium en titanio aeroespacial con pantalla expansiva de 6.9 pulgadas y teleobjetivo de largo alcance.',
		specifications: { pantalla: '6.9 pulgadas Super Retina XDR OLED', camara: '48 MP Fusion con teleobjetivo 5x', bateria: 'Hasta 33 horas' },
		category: 'Apple',
		stock: 6,
		featured: true
	},

	// --- 6. Galaxy S25 Ultra ---
	{
		id: 'galaxy-s25-ultra',
		brand: 'Samsung',
		model: 'Galaxy S25 Ultra 256GB',
		name: 'Galaxy S25 Ultra',
		price: 4700000,
		images: [img('Imagen_Samnsung/S25_Ultra_256GB/s25-ultra-clean.png')],
		colorOptions: [
			{ name: 'Titanium Silver', hex: '#c5c5c7', image: img('Imagen_Samnsung/S25_Ultra_256GB/s25-ultra-clean.png') }
		],
		colors: ['Titanium Silver', 'Titanium Black'],
		storage: ['256 GB', '512 GB', '1 TB'],
		description: 'La cumbre de Samsung: nuevo Snapdragon 8 Elite, IA generativa de nivel superior y diseño refinado.',
		specifications: { pantalla: '6.86 pulgadas Dynamic AMOLED 2X antirreflejo', camara: '200 MP sensor principal + ultra gran angular 50 MP', bateria: '5000 mAh' },
		category: 'Samsung',
		stock: 8,
		featured: true
	},

	// --- 7. iPhone 17 ---
	{
		id: 'iphone-17-256gb',
		brand: 'Apple',
		model: 'iPhone 17 256GB 5G',
		name: 'iPhone 17',
		price: 4200000,
		images: [img('Iphone_17_256GB/Imagen pegada-hd.png')],
		colorOptions: [
			{ name: 'Lila', hex: '#b39ddb', image: img('Iphone_17_256GB/Imagen pegada-hd.png') },
			{ name: 'Azul claro', hex: '#a7c7e7', image: img('Iphone_17_256GB/Azul/Imagen pegada-hd.png') },
			{ name: 'Verde', hex: '#7d9b76', image: img('Iphone_17_256GB/Verde/Imagen pegada-hd.png') }
		],
		colors: ['Lila', 'Azul claro', 'Verde'],
		storage: ['256 GB', '512 GB'],
		description: 'La próxima generación con el mejor rendimiento, bordes ultradelgados y cámara de 48 MP.',
		specifications: { pantalla: '6.3 pulgadas Super Retina XDR ProMotion', camara: '48 MP Fusion con sensor de última generación', bateria: 'Hasta 28 horas' },
		category: 'Apple',
		stock: 6,
		featured: true
	},

	// --- 8. Galaxy S24 Ultra ---
	{
		id: 'galaxy-s24-ultra',
		brand: 'Samsung',
		model: 'Galaxy S24 Ultra 256GB',
		name: 'Galaxy S24 Ultra',
		price: 4100000,
		images: [img('Imagen_Samnsung/S24_Ultra/s24-ultra-alpha.png')],
		colorOptions: [
			{ name: 'Titanium Gray', hex: '#6e6e73', image: img('Imagen_Samnsung/S24_Ultra/s24-ultra-alpha.png') }
		],
		colors: ['Titanium Gray', 'Titanium Black'],
		storage: ['256 GB', '512 GB', '1 TB'],
		description: 'Galaxy AI integrado, sensor fotográfico de 200 MP, pantalla plana y S Pen incluido.',
		specifications: { pantalla: '6.8 pulgadas QHD+ Dynamic AMOLED 2X 120Hz', camara: '200 MP principal + 50 MP periscopio 5x', bateria: '5000 mAh con carga de 45W' },
		category: 'Samsung',
		stock: 7,
		featured: true
	},

	// --- 9. iPhone Air ---
	{
		id: 'iphone-air-256gb',
		brand: 'Apple',
		model: 'iPhone Air 256GB 5G',
		name: 'iPhone Air',
		price: 4600000,
		images: [img('Iphone_Air_256GB_5G/Imagen pegada-hd.png')],
		colorOptions: [
			{ name: 'Azul', hex: '#557a95', image: img('Iphone_Air_256GB_5G/Imagen pegada-hd.png') },
			{ name: 'Blanco', hex: '#f2f0ec', image: img('Iphone_Air_256GB_5G/Blanco/Imagen pegada-hd.png') },
			{ name: 'Negro', hex: '#1d1d1f', image: img('Iphone_Air_256GB_5G/Negro/Imagen pegada-hd.png') },
			{ name: 'Dorado', hex: '#d4af7a', image: img('Iphone_Air_256GB_5G/Dorado/Imagen pegada-hd.png') }
		],
		colors: ['Azul', 'Blanco', 'Negro', 'Dorado'],
		storage: ['256 GB', '512 GB'],
		description: 'El iPhone más delgado y ligero jamás diseñado, con acabado futurista aeroespacial.',
		specifications: { pantalla: '6.5 pulgadas Super Retina XDR OLED', camara: '48 MP Fusion ultradelgada', bateria: 'Hasta 25 horas' },
		category: 'Apple',
		stock: 5,
		featured: true
	},

	// --- 10. Galaxy Z Fold5 ---
	{
		id: 'galaxy-z-fold5',
		brand: 'Samsung',
		model: 'Galaxy Z Fold5 512GB',
		name: 'Galaxy Z Fold5',
		price: 5200000,
		images: [img('Imagen_Samnsung/Z_Fold5/fold5-clean.png')],
		colorOptions: [
			{ name: 'Phantom Black', hex: '#1d1d1f', image: img('Imagen_Samnsung/Z_Fold5/fold5-clean.png') }
		],
		colors: ['Phantom Black', 'Icy Blue'],
		storage: ['512 GB', '1 TB'],
		description: 'Dos pantallas en un solo dispositivo: multitarea real y productividad inigualable.',
		specifications: { pantalla: '7.6 pulgadas plegable Dynamic AMOLED 2X + 6.2 exterior', camara: 'Triple 50 MP con grabación 8K', bateria: '4400 mAh' },
		category: 'Samsung',
		stock: 4,
		featured: true
	},

	// =========================================================
	//  LÍNEA PRINCIPAL (IPHONE 16, GALAXY S24 Y MODELOS ESTABLES)
	// =========================================================

	// --- 11. iPhone 16 Pro Max ---
	{
		id: 'iphone-16-pro-max',
		brand: 'Apple',
		model: 'iPhone 16 Pro Max 256GB',
		name: 'iPhone 16 Pro Max',
		price: 4900000,
		images: [img('Iphone_17ProMax_256GB/iphone-16-promax-negro.png')],
		colorOptions: [
			{ name: 'Titanio Negro', hex: '#1d1d1f', image: img('Iphone_17ProMax_256GB/iphone-16-promax-negro.png') },
			{ name: 'Titanio Natural', hex: '#9e978e', image: img('Iphone_17ProMax_256GB/iphone-16-promax-natural.png') }
		],
		colors: ['Titanio Negro', 'Titanio Natural'],
		storage: ['256 GB', '512 GB', '1 TB'],
		description: 'La máxima pantalla, la mayor batería y rendimiento insuperable para creadores.',
		specifications: { pantalla: '6.9 pulgadas Super Retina XDR OLED 120Hz', camara: '48 MP Fusion con teleobjetivo 5x', bateria: 'Hasta 33 horas' },
		category: 'Apple',
		stock: 5,
		featured: false
	},

	// --- 12. iPhone 16 Pro ---
	{
		id: 'iphone-16-pro',
		brand: 'Apple',
		model: 'iPhone 16 Pro 128GB',
		name: 'iPhone 16 Pro',
		price: 4300000,
		images: [img('Iphone_17Pro_256GB/iphone-16-pro-negro.png')],
		colorOptions: [
			{ name: 'Titanio Negro', hex: '#1d1d1f', image: img('Iphone_17Pro_256GB/iphone-16-pro-negro.png') },
			{ name: 'Titanio Desierto', hex: '#c5a582', image: img('Iphone_17Pro_256GB/iphone-16-pro-desert.png') },
			{ name: 'Titanio Natural', hex: '#9e978e', image: img('Iphone_17Pro_256GB/iphone-16-pro-natural.png') }
		],
		colors: ['Titanio Negro', 'Titanio Desierto', 'Titanio Natural'],
		storage: ['128 GB', '256 GB', '512 GB', '1 TB'],
		description: 'Estructura de titanio de grado 5, chip A18 Pro y sistema de cámaras pro.',
		specifications: { pantalla: '6.3 pulgadas ProMotion 120Hz', camara: '48 MP Pro con teleobjetivo 5x', bateria: 'Hasta 27 horas' },
		category: 'Apple',
		stock: 7,
		featured: false
	},

	// --- 13. iPhone 16 ---
	{
		id: 'iphone-16-128gb',
		brand: 'Apple',
		model: 'iPhone 16 128GB 5G',
		name: 'iPhone 16',
		price: 3500000,
		images: [img('Iphone_16_128GB_5G/iphone16128gb-5g-negro.png')],
		colorOptions: [
			{ name: 'Negro', hex: '#1d1d1f', image: img('Iphone_16_128GB_5G/iphone16128gb-5g-negro.png') },
			{ name: 'Azul ultramarino', hex: '#557a95', image: img('Iphone_16_128GB_5G/iphone16128gb-5g-azul.png') },
			{ name: 'Blanco', hex: '#f2f0ec', image: img('Iphone_16_128GB_5G/iphone16128gb-5g-blanco.png') },
			{ name: 'Rosado', hex: '#e7c6c9', image: img('Iphone_16_128GB_5G/iphone16128gb-5g-rosado.png') },
			{ name: 'Verde', hex: '#7d9b76', image: img('Iphone_16_128GB_5G/iphone16128gb-5g-verde.png') }
		],
		colors: ['Negro', 'Azul ultramarino', 'Blanco', 'Rosado', 'Verde'],
		storage: ['128 GB', '256 GB', '512 GB'],
		description: 'El iPhone 16 con chip A18, cámara avanzada y conectividad 5G ultra rápida.',
		specifications: { pantalla: '6.1 pulgadas Super Retina XDR OLED', camara: '48 MP Fusion con sensor quad-pixel', bateria: 'Hasta 22 horas de reproducción de video' },
		category: 'Apple',
		stock: 10,
		featured: false
	},

	// --- 14. Galaxy S24 ---
	{
		id: 'galaxy-s24',
		brand: 'Samsung',
		model: 'Galaxy S24 128GB',
		name: 'Galaxy S24',
		price: 2600000,
		images: [img('Imagen_Samnsung/S24/s24-alpha.png')],
		colorOptions: [
			{ name: 'Onyx Black', hex: '#1d1d1f', image: img('Imagen_Samnsung/S24/s24-alpha.png') }
		],
		colors: ['Onyx Black', 'Cobalt Violet'],
		storage: ['128 GB', '256 GB'],
		description: 'Un buque insignia compacto con potencia Galaxy AI, marcos mínimos y panel brillante.',
		specifications: { pantalla: '6.2 pulgadas FHD+ Dynamic AMOLED 2X 120Hz', camara: '50 MP principal con OIS + teleobjetivo 3x', bateria: '4000 mAh' },
		category: 'Samsung',
		stock: 9,
		featured: false
	},

	// --- 15. iPhone 16e ---
	{
		id: 'iphone-16e',
		brand: 'Apple',
		model: 'iPhone 16e 128GB',
		name: 'iPhone 16e',
		price: 2750000,
		images: [img('Iphone_16e_128GB/iphone-16e-clean.png')],
		colorOptions: [
			{ name: 'Blanco', hex: '#f2f0ec', image: img('Iphone_16e_128GB/iphone-16e-clean.png') },
			{ name: 'Negro', hex: '#1d1d1f', image: img('Iphone_16e_128GB/iphone-16e-clean.png') }
		],
		colors: ['Blanco', 'Negro'],
		storage: ['128 GB', '256 GB'],
		description: 'Diseño moderno, máxima ligereza y la potencia que necesitas en tu día a día.',
		specifications: { pantalla: '6.1 pulgadas OLED', camara: '48 MP principal', bateria: 'Hasta 20 horas' },
		category: 'Apple',
		stock: 8,
		featured: false
	},

	// --- 16. Galaxy A55 ---
	{
		id: 'galaxy-a55',
		brand: 'Samsung',
		model: 'Galaxy A55 256GB',
		name: 'Galaxy A55',
		price: 1500000,
		images: [img('Imagen_Samnsung/A55/a55-clean.png')],
		colorOptions: [
			{ name: 'Awesome Navy', hex: '#2c3e50', image: img('Imagen_Samnsung/A55/a55-clean.png') }
		],
		colors: ['Awesome Navy', 'Awesome Iceblue'],
		storage: ['128 GB', '256 GB'],
		description: 'Gama media con cuerpo de aluminio premium, gran pantalla Super AMOLED y batería insuperable.',
		specifications: { pantalla: '6.6 pulgadas Super AMOLED 120Hz Vision Booster', camara: '50 MP principal con estabilización OIS', bateria: '5000 mAh' },
		category: 'Samsung',
		stock: 12,
		featured: false
	},

	// --- 17. iPhone 15 ---
	{
		id: 'iphone-15-128gb',
		brand: 'Apple',
		model: 'iPhone 15 128GB 5G',
		name: 'iPhone 15',
		price: 2900000,
		images: [img('Iphone_15_128GB_5G/iphone-15-128gb-5g-negro.png')],
		colorOptions: [
			{ name: 'Negro', hex: '#1d1d1f', image: img('Iphone_15_128GB_5G/iphone-15-128gb-5g-negro.png') },
			{ name: 'Azul', hex: '#557a95', image: img('Iphone_15_128GB_5G/iphone-15-128gb-5g-azul.png') },
			{ name: 'Verde', hex: '#7d9b76', image: img('Iphone_15_128GB_5G/iphone-15-128gb-5g-verde.png') },
			{ name: 'Rosado', hex: '#e7c6c9', image: img('Iphone_15_128GB_5G/iphone-15-128gb-5g-rosado.png') },
			{ name: 'Amarillo', hex: '#f0e395', image: img('Iphone_15_128GB_5G/iphone-15-128gb-5g-amarillo.png') }
		],
		colors: ['Negro', 'Azul', 'Verde', 'Rosado', 'Amarillo'],
		storage: ['128 GB', '256 GB'],
		description: 'Un clásico moderno con USB-C, Dynamic Island y sensor principal de 48 MP.',
		specifications: { pantalla: '6.1 pulgadas Super Retina XDR', camara: '48 MP con zoom 2x de calidad óptica', bateria: 'Hasta 20 horas' },
		category: 'Apple',
		stock: 9,
		featured: false
	},

	// --- 18. iPhone 14 ---
	{
		id: 'iphone-14-128gb',
		brand: 'Apple',
		model: 'iPhone 14 128GB 5G',
		name: 'iPhone 14',
		price: 2400000,
		images: [img('Iphone_14_128GB_5G/iphone-14-128gb-5g-negro.png')],
		colorOptions: [
			{ name: 'Medianoche (Negro)', hex: '#1d1d1f', image: img('Iphone_14_128GB_5G/iphone-14-128gb-5g-negro.png') },
			{ name: 'Azul', hex: '#6b8ca8', image: img('Iphone_14_128GB_5G/iphone-14-128gb-5g-azul.png') },
			{ name: 'Morado', hex: '#b39ddb', image: img('Iphone_14_128GB_5G/iphone-14-128gb-5g-morado.png') },
			{ name: 'Blanco estrella', hex: '#f5f5f7', image: img('Iphone_14_128GB_5G/iphone-14-128gb-blanco.png') }
		],
		colors: ['Medianoche (Negro)', 'Azul', 'Morado', 'Blanco estrella'],
		storage: ['128 GB', '256 GB'],
		description: 'Rendimiento sólido con chip A15 Bionic, modo Cine y detección de accidentes.',
		specifications: { pantalla: '6.1 pulgadas Super Retina XDR', camara: 'Sistema dual 12 MP con Photonic Engine', bateria: 'Hasta 20 horas' },
		category: 'Apple',
		stock: 12,
		featured: false
	},

	// --- 19. iPhone 13 Pro ---
	{
		id: 'iphone-13-pro',
		brand: 'Apple',
		model: 'iPhone 13 Pro 128GB',
		name: 'iPhone 13 Pro',
		price: 2500000,
		images: [img('USAdos/Iphone_13Pro_128GB/iphone-13pro-grafito.png')],
		colorOptions: [
			{ name: 'Grafito', hex: '#373739', image: img('USAdos/Iphone_13Pro_128GB/iphone-13pro-grafito.png') },
			{ name: 'Oro', hex: '#fae3c6', image: img('USAdos/Iphone_13Pro_128GB/iphone-13pro-oro.png') },
			{ name: 'Plata', hex: '#f0f0f2', image: img('USAdos/Iphone_13Pro_128GB/iphone-13pro-plata.png') }
		],
		colors: ['Grafito', 'Oro', 'Plata'],
		storage: ['128 GB', '256 GB', '512 GB'],
		description: 'Pantalla ProMotion a 120 Hz, teleobjetivo 3x y acabado premium en acero inoxidable.',
		specifications: { pantalla: '6.1 pulgadas ProMotion 120Hz', camara: 'Triple 12 MP con escáner LiDAR', bateria: 'Hasta 22 horas' },
		category: 'Apple',
		stock: 6,
		featured: false
	},

	// --- 20. iPhone 13 ---
	{
		id: 'iphone-13-128gb',
		brand: 'Apple',
		model: 'iPhone 13 128GB',
		name: 'iPhone 13',
		price: 1950000,
		images: [img('USAdos/Iphone_13_128Gb/iphone-13-negro.png')],
		colorOptions: [
			{ name: 'Medianoche (Negro)', hex: '#1d1d1f', image: img('USAdos/Iphone_13_128Gb/iphone-13-negro.png') },
			{ name: 'Azul', hex: '#395368', image: img('USAdos/Iphone_13_128Gb/iphone-13-azul.png') },
			{ name: 'Blanco estrella', hex: '#f2f0ec', image: img('USAdos/Iphone_13_128Gb/iphone-13-blanco.png') },
			{ name: 'Rosa', hex: '#e8c4c7', image: img('USAdos/Iphone_13_128Gb/iphone-13-rosa.png') }
		],
		colors: ['Medianoche (Negro)', 'Azul', 'Blanco estrella', 'Rosa'],
		storage: ['128 GB', '256 GB'],
		description: 'Excelente relación costo-beneficio con chip A15, gran autonomía y pantalla OLED.',
		specifications: { pantalla: '6.1 pulgadas Super Retina XDR', camara: 'Sistema dual 12 MP con sensor desplazado', bateria: 'Hasta 19 horas' },
		category: 'Apple',
		stock: 11,
		featured: false
	}
];
