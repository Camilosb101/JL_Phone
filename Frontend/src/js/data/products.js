// ============================================================
//  PRODUCTOS DE LA TIENDA
// ============================================================
// Cada producto usa las imágenes reales de assets/images/catalogo.
// El ayudante img() (imageMap.js) resuelve la ruta a la imagen final.
//
// Los COLORES de cada modelo corresponden a las fotos reales que existen
// en su carpeta (identificados visualmente). No se listan colores sin foto.
//
// IMPORTANTE (para ti):
//   - Los PRECIOS son de referencia. Revísalos y ajústalos a los reales.
//   - Cada color apunta a su foto real.
//
// Estructura de cada producto:
//   id, brand, model, name, price, images[0] (miniatura),
//   colorOptions[{name, hex, image}], colors[], storage[],
//   description, specifications{}, stock, featured
// ============================================================

import { img } from './imageMap.js';

// Código de color (hex) para el círculo del selector, por nombre de color.
const HEX = {
	'negro': '#1d1d1f',
	'blanco': '#f2f0ec',
	'azul': '#4f6d8e',
	'azul claro': '#a7c7e7',
	'azul oscuro': '#2c3e50',
	'azul hielo': '#bcd4e6',
	'azul ultramar': '#3a4ea8',
	'azul medianoche profundo': '#2a3550',
	'verde': '#7d9b76',
	'verde azulado': '#4e8f88',
	'rosa': '#e7c6c9',
	'lila': '#b9a6d6',
	'lavanda': '#c3b2dc',
	'amarillo': '#f0e395',
	'rojo (product)red': '#b23b3b',
	'morado': '#6c4bb0',
	'morado claro': '#c3a8dd',
	'morado oscuro': '#4d3b59',
	'vino (dark cherry)': '#5a2330',
	'naranja cósmico': '#d4722e',
	'dorado': '#d4af7a',
	'dorado claro': '#e8d6b0',
	'oro': '#d4af7a',
	'gris': '#8e8e93',
	'plata': '#d5d7d8',
	'crema': '#ece6d6',
	'medianoche': '#17191d',
	'blanco estelar': '#f5f3ed',
	'negro espacial': '#17191d',
	'color plata': '#d5d7d8',
	'color oro': '#d4af7a',
	'titanio negro': '#2a2a2c',
	'titanio blanco': '#eceae4',
	'titanio natural': '#9b9b96',
	'titanio azul': '#4f6076',
	'titanio del desierto': '#b89a7a'
};

// Crea la lista de colores {name, hex, image} desde una carpeta y una lista
// de [nombreVisible, archivo].
function colores(ruta, lista) {
	return lista.map(([name, archivo]) => ({
		name,
		hex: HEX[name.toLowerCase()] || '#888888',
		image: img(`${ruta}/${archivo}`)
	}));
}

function crear(base, ruta, lista) {
	const colorOptions = colores(ruta, lista);
	return {
		...base,
		colorOptions,
		colors: colorOptions.map((c) => c.name),
		images: [colorOptions[0].image]
	};
}

export const products = [
	// =========================================================
	//  APPLE
	// =========================================================
	crear(
		{ id: 'iphone-18-pro-max', brand: 'Apple', model: 'iPhone 18 Pro Max 256GB 5G', name: 'iPhone 18 Pro Max', price: 5200000, storage: ['256 GB', '512 GB', '1 TB'], description: 'El buque insignia con chip A20 Pro y el mejor sistema de cámaras.', features: [
			'Pantalla: 6.9" Super Retina XDR OLED, ProMotion 120 Hz adaptativo, brillo pico de 3200 nits, Ceramic Shield de nueva generación.',
			'Procesador: Apple A20 Pro (litografía de 2 nm) con arquitectura Neural Engine para tareas pesadas de Apple Intelligence.',
			'Memoria y almacenamiento: 12 GB RAM + 256 GB NVMe.',
			'Cámara trasera (triple): 48 MP principal (apertura variable) + 48 MP ultra gran angular + 48 MP teleobjetivo periscópico (zoom óptico 6x/10x híbrido) con soporte ProRes 4K a 120 fps y video espacial.',
			'Cámara frontal: 24 MP TrueDepth con autoenfoque.',
			'Batería y carga: autonomía superior a 33 horas de reproducción de video; carga rápida de 40 W vía USB-C 3.2 y carga inalámbrica MagSafe / Qi2 de 25 W.',
			'Diseño y conectividad: chasis de titanio pulido grado aeroespacial, resistencia IP68, Wi‑Fi 7, Bluetooth 6.0 y botón Control de Cámara integrado.'
		], specifications: { pantalla: '6.9 pulgadas Super Retina XDR 120Hz', camara: '48 MP Fusion Pro', bateria: 'Hasta 35 horas' }, stock: 8, featured: true },
		'iphone/18_Pro_Max',
		[['Negro', 'iphone-18-promax-negro.png'], ['Blanco', 'iphone-18-promax-blanco.png'], ['Azul', 'iphone-18-promax-azul.png'], ['Vino (Dark Cherry)', 'iphone-18-promax-morado.png']]
	),
	crear(
		{ id: 'iphone-18-pro', brand: 'Apple', model: 'iPhone 18 Pro 256GB 5G', name: 'iPhone 18 Pro', price: 4900000, pricesByStorage: { '256 GB': { 'Blanco': 4900000, 'Azul': 4900000 } }, storage: ['128 GB', '256 GB', '512 GB'], description: 'Potencia Pro con chip A20 Pro en un tamaño ergonómico.', features: [
			'Pantalla: 6.3" Super Retina XDR OLED, ProMotion 120 Hz, Always-On display, Dynamic Island compactada.',
			'Procesador: Apple A20 Pro con GPU de alto rendimiento y trazado de rayos por hardware.',
			'Memoria y almacenamiento: 12 GB RAM + 256 GB NVMe.',
			'Cámara trasera (triple): 48 MP principal + 48 MP ultra gran angular + 48 MP teleobjetivo (zoom óptico 5x) con estabilización por desplazamiento de sensor 3D.',
			'Cámara frontal: 24 MP con tecnología HDR inteligente de última generación.',
			'Batería y carga: hasta 27 horas de reproducción continua; carga rápida vía USB-C y MagSafe de 25 W.',
			'Diseño: bordes ultrafinos, cuerpo de titanio, resistencia al agua y polvo IP68.'
		], specifications: { pantalla: '6.3 pulgadas ProMotion 120Hz', camara: '48 MP Pro', bateria: 'Hasta 29 horas' }, stock: 7, featured: true },
		'iphone/18_Pro',
		[['Negro', 'iphone-18-pro-negro.png'], ['Blanco', 'iphone-18-pro-blanco.png'], ['Azul', 'iphone-18-pro-azul.png'], ['Vino (Dark Cherry)', 'iphone-18-pro-morado.png']]
	),
	crear(
		{ id: 'iphone-17-pro-max', brand: 'Apple', model: 'iPhone 17 Pro Max 256GB 5G', name: 'iPhone 17 Pro Max', price: 4180000, pricesByStorage: { '256 GB': { 'Azul': 4180000, 'Naranja cósmico': 4230000, 'Blanco': 4250000 } }, storage: ['256 GB', '512 GB', '1 TB'], description: 'Pantalla máxima, gran batería y cámaras Pro.', features: [
			'Pantalla: 6.9" Super Retina XDR OLED (2868 x 1320 a 460 ppi), ProMotion 120 Hz y brillo exterior de hasta 3000 nits.',
			'Procesador: Apple A19 Pro de 3 nm con CPU de 6 núcleos y GPU de 6 núcleos con aceleración neural dedicada.',
			'Memoria y almacenamiento: 12 GB RAM + 256 GB.',
			'Cámara trasera (triple 48 MP): Fusion principal + ultra gran angular + teleobjetivo tetraprisma con zoom óptico 5x; Apple Log 2 y ProRes 4K a 120 fps.',
			'Cámara frontal: 24 MP TrueDepth con modo Noche.',
			'Batería y carga: hasta 35 horas de reproducción de vídeo; carga rápida al 50% en 20 minutos con adaptador de 40 W o superior, y MagSafe / Qi2 hasta 25 W.',
			'Conectividad: chip inalámbrico Apple N1 con Wi-Fi 7 y Bluetooth 6.0.'
		], specifications: { pantalla: '6.9 pulgadas Super Retina XDR OLED, ProMotion 120 Hz', camara: 'Triple 48 MP con teleobjetivo 5x', bateria: 'Hasta 35 horas' }, stock: 6, featured: true },
		'iphone/17_Pro_Max',
		[['Azul', 'iphone-17-promax-azul.png'], ['Blanco', 'iphone-17-promax-blanco.png'], ['Naranja cósmico', 'iphone-17-promax-camaras-naranja.png']]
	),
	crear(
		{ id: 'iphone-17-pro', brand: 'Apple', model: 'iPhone 17 Pro 256GB 5G', name: 'iPhone 17 Pro', price: 4300000, storage: ['128 GB', '256 GB', '512 GB'], description: 'Rendimiento Pro con chip A19 Pro y diseño en titanio.', features: [
			'Pantalla: 6.3" Super Retina XDR OLED (2622 x 1206), ProMotion 120 Hz, Always-On y Ceramic Shield 2.',
			'Procesador: Apple A19 Pro optimizado para Apple Intelligence en el dispositivo.',
			'Memoria y almacenamiento: 12 GB RAM + 256 GB.',
			'Cámara trasera (triple): 48 MP principal + 48 MP ultra gran angular + 48 MP teleobjetivo con zoom óptico 5x; doble captura simultánea en 4K Dolby Vision.',
			'Cámara frontal: 24 MP con apertura f/1.9.',
			'Batería y carga: hasta 28 horas de reproducción multimedia; USB-C 3.2 de alta velocidad para transferencia directa a SSD.',
			'Construcción: chasis de titanio satinado, botón de Acción y Control de Cámara.'
		], specifications: { pantalla: '6.3 pulgadas Super Retina XDR OLED, ProMotion 120 Hz', camara: 'Triple 48 MP con teleobjetivo 5x', bateria: 'Hasta 28 horas' }, stock: 7, featured: true },
		'iphone/17_Pro',
		[['Azul medianoche profundo', 'iphone-17-pro-azul.png'], ['Blanco', 'iphone-17-pro-blanco.png'], ['Naranja cósmico', 'iphone-17-pro-camaras-naranja.png']]
	),
	crear(
		{ id: 'iphone-17-air', brand: 'Apple', model: 'iPhone 17 Air 256GB 5G', name: 'iPhone 17 Air', price: 4000000, storage: ['256 GB', '512 GB'], description: 'El iPhone más delgado y ligero, con diseño premium.', features: [
			'Pantalla: 6.5" Super Retina XDR OLED (2736 x 1260 a 460 ppi), ProMotion 120 Hz y brillo pico de 3000 nits.',
			'Grosor y peso: perfil ultra delgado de 5.64 mm y 165 g.',
			'Procesador: Apple A19 Pro con GPU de 5 núcleos y Neural Accelerators.',
			'Memoria y almacenamiento: 12 GB RAM + 256 GB.',
			'Cámara trasera (Fusion única): 48 MP Fusion (26 mm, f/1.6, OIS por sensor) con teleobjetivo virtual 2x de 12 MP.',
			'Cámara frontal: 18 MP gran angular optimizada para encuadres grupales automáticos.',
			'Batería y carga: autonomía para toda la jornada, batería de 3149 mAh, carga rápida USB-C y MagSafe hasta 20 W.',
			'Estructura: marco de titanio grado 5, frontal Ceramic Shield 2, trasera de cristal reforzado y certificación IP68.'
		], specifications: { pantalla: '6.5 pulgadas Super Retina XDR OLED, ProMotion 120 Hz', camara: '48 MP Fusion con teleobjetivo virtual 2x', bateria: 'Autonomía para toda la jornada' }, stock: 5, featured: true },
		'iphone/17_Air',
		[['Negro grafito', 'iphone-17-air-negro.png'], ['Plata', 'iphone-17-air-blanco.png'], ['Azul hielo', 'iphone-17-air-azul.png'], ['Dorado claro', 'iphone-17-air-dorado.png']]
	),
	crear(
		{ id: 'iphone-17', brand: 'Apple', model: 'iPhone 17 256GB 5G', name: 'iPhone 17', price: 3170000, pricesByStorage: { '256 GB': { 'Verde': 3170000, 'Blanco': 3170000, 'Negro': 3170000 } }, storage: ['256 GB', '512 GB'], description: 'La nueva generación con gran rendimiento y cámara de 48 MP.', features: [
			'Pantalla: 6.3" Super Retina XDR OLED con ProMotion 120 Hz, Dynamic Island y hasta 2000 nits de brillo en exteriores.',
			'Procesador: Apple A19 con arquitectura de 3 nm, compatible con Apple Intelligence.',
			'Memoria y almacenamiento: 8 GB RAM + 256 GB.',
			'Cámara dual: 48 MP Fusion principal con sensor-shift OIS y teleobjetivo virtual 2x de 12 MP + 48 MP ultra gran angular con capacidades Macro.',
			'Cámara frontal: 18 MP con HDR 5.',
			'Batería y carga: hasta 22 horas de reproducción de vídeo, USB-C y carga MagSafe / Qi2.',
			'Diseño: aluminio reciclado, parte trasera de vidrio tintado en masa y botón de Acción.'
		], specifications: { pantalla: '6.3 pulgadas Super Retina XDR OLED, ProMotion 120 Hz', camara: 'Dual 48 MP Fusion + ultra gran angular Macro', bateria: 'Hasta 22 horas de vídeo' }, stock: 8, featured: false },
		'iphone/17_',
		[['Negro', 'iphone-17-negro.png'], ['Blanco', 'iphone-17-blanco.png'], ['Azul', 'iphone-17-azul.png'], ['Lila', 'iphone-17-rosado.png'], ['Verde', 'iphone-17-verde.png']]
	),
	crear(
		{ id: 'iphone-16-pro-max', brand: 'Apple', model: 'iPhone 16 Pro Max 256GB 5G', name: 'iPhone 16 Pro Max', price: 4400000, storage: ['256 GB', '512 GB', '1 TB'], description: 'Titanio, cámaras Pro y la pantalla más grande de su generación.', features: [
			'Pantalla: 6.9" Super Retina XDR OLED (2868 x 1320), ProMotion 120 Hz, Always-On y biseles de tamaño reducido.',
			'Procesador: Apple A18 Pro de 3 nm de segunda generación con Neural Engine de 16 núcleos.',
			'Memoria y almacenamiento: 8 GB RAM + 256 GB NVMe.',
			'Cámara trasera (triple): 48 MP Fusion principal (f/1.78) + 48 MP ultra gran angular (f/2.2) + 12 MP teleobjetivo tetraprisma con zoom óptico 5x; 4K Dolby Vision a 120 fps.',
			'Cámara frontal: 12 MP TrueDepth con enfoque automático.',
			'Batería y carga: hasta 33 horas de reproducción multimedia; carga rápida USB-C 3.0 de hasta 10 Gbps y MagSafe de 25 W.',
			'Diseño: estructura de titanio grado 5, botón táctil Control de Cámara y botón de Acción programable.'
		], specifications: { pantalla: '6.9 pulgadas Super Retina XDR OLED, ProMotion 120 Hz', camara: 'Triple cámara Pro con teleobjetivo 5x', bateria: 'Hasta 33 horas, MagSafe 25 W' }, stock: 6, featured: false },
		'iphone/16_ProMax',
		[['Titanio negro', 'iphone-16-promax-negro.png'], ['Titanio blanco', 'iphone-16-promax-blanco.png'], ['Titanio natural', 'iphone-16-promax-gris.png'], ['Titanio del desierto', 'iphone-16-promax-dorado.png']]
	),
	crear(
		{ id: 'iphone-16-pro', brand: 'Apple', model: 'iPhone 16 Pro 256GB 5G', name: 'iPhone 16 Pro', price: 3900000, storage: ['128 GB', '256 GB', '512 GB'], description: 'Estructura de titanio, chip A18 Pro y sistema de cámaras Pro.', specifications: { pantalla: '6.3 pulgadas ProMotion 120Hz', camara: '48 MP Pro con teleobjetivo 5x', bateria: 'Hasta 27 horas' }, stock: 7, featured: false },
		'iphone/16_Pro',
		[['Titanio negro', 'iphone-16-pro-negro.png'], ['Titanio blanco', 'iphone-16-pro-blanco.png'], ['Titanio natural', 'iphone-16-pro-gris.png'], ['Titanio del desierto', 'iphone-16-pro-dorado.png']]
	),
	crear(
		{ id: 'iphone-16', brand: 'Apple', model: 'iPhone 16 128GB 5G', name: 'iPhone 16', price: 2750000, pricesByStorage: { '128 GB': { 'Blanco': 2750000, 'Negro': 2750000, 'Verde azulado': 2750000, 'Rosa': 2750000, 'Azul ultramar': 2750000 } }, storage: ['128 GB', '256 GB', '512 GB'], description: 'Chip A18, cámara avanzada y conectividad 5G.', specifications: { pantalla: '6.1 pulgadas Super Retina XDR', camara: '48 MP Fusion', bateria: 'Hasta 22 horas' }, stock: 10, featured: false },
		'iphone/16_',
		[['Negro', 'iphone-16-negro.png'], ['Blanco', 'iphone-16-blanco.png'], ['Azul ultramar', 'iphone-16-azul.png'], ['Rosa', 'iphone-16-rosado.png'], ['Verde azulado', 'iphone-16-verde.png']]
	),
	crear(
		{ id: 'iphone-15-pro-max', brand: 'Apple', model: 'iPhone 15 Pro Max 256GB 5G', name: 'iPhone 15 Pro Max', price: 3800000, storage: ['256 GB', '512 GB', '1 TB'], description: 'Titanio, teleobjetivo 5x y chip A17 Pro.', specifications: { pantalla: '6.7 pulgadas ProMotion 120Hz', camara: '48 MP Pro con teleobjetivo 5x', bateria: 'Hasta 29 horas' }, stock: 5, featured: false },
		'iphone/15_Promax',
		[['Titanio negro', 'iphone-15-promax-negro.png'], ['Titanio blanco', 'iphone-15-promax-blanco.png'], ['Titanio azul', 'iphone-15-promax-azul.png'], ['Titanio natural', 'iphone-15-promax-dorado.png']]
	),
	crear(
		{ id: 'iphone-15-pro', brand: 'Apple', model: 'iPhone 15 Pro 256GB 5G', name: 'iPhone 15 Pro', price: 3400000, storage: ['128 GB', '256 GB', '512 GB'], description: 'Titanio ligero, chip A17 Pro y botón de acción.', specifications: { pantalla: '6.1 pulgadas ProMotion 120Hz', camara: '48 MP Pro', bateria: 'Hasta 23 horas' }, stock: 6, featured: false },
		'iphone/15_Pro',
		[['Titanio negro', 'iphone-15-pro-negro.png'], ['Titanio blanco', 'iphone-15-pro-blanco.png'], ['Titanio azul', 'iphone-15-pro-azul.png'], ['Titanio natural', 'iphone-15-pro-dorado.png']]
	),
	crear(
		{ id: 'iphone-15', brand: 'Apple', model: 'iPhone 15 128GB 5G', name: 'iPhone 15', price: 2500000, pricesByStorage: { '128 GB': { 'Negro': 2500000, 'Azul': 2500000 } }, storage: ['128 GB', '256 GB'], description: 'USB-C, Dynamic Island y cámara principal de 48 MP.', specifications: { pantalla: '6.1 pulgadas Super Retina XDR', camara: '48 MP', bateria: 'Hasta 20 horas' }, stock: 9, featured: false },
		'iphone/15_',
		[['Negro', 'iphone-15-negro.png'], ['Azul', 'iphone-15-azul.png'], ['Verde', 'iphone-15-verde.png'], ['Rosa', 'iphone-15-rosado.png'], ['Amarillo', 'iphone-15-amarillo.png']]
	),
	crear(
		{ id: 'iphone-14-pro-max', brand: 'Apple', model: 'iPhone 14 Pro Max 128GB', name: 'iPhone 14 Pro Max', price: 3200000, storage: ['128 GB', '256 GB', '512 GB'], description: 'Dynamic Island, pantalla siempre activa y cámara de 48 MP.', specifications: { pantalla: '6.7 pulgadas ProMotion 120Hz', camara: '48 MP Pro', bateria: 'Hasta 29 horas' }, stock: 5, featured: false },
		'iphone/14_ProMax',
		[['Negro espacial', 'iphone-14-promax-negro.png'], ['Color plata', 'iphone-14-promax-blanco.png'], ['Color oro', 'iphone-14-promax-oro.png'], ['Morado oscuro', 'iphone-14-promax-morado.png']]
	),
	crear(
		{ id: 'iphone-14-pro', brand: 'Apple', model: 'iPhone 14 Pro 128GB', name: 'iPhone 14 Pro', price: 2800000, storage: ['128 GB', '256 GB'], description: 'Dynamic Island y sistema de cámaras Pro de 48 MP.', specifications: { pantalla: '6.1 pulgadas ProMotion 120Hz', camara: '48 MP Pro', bateria: 'Hasta 23 horas' }, stock: 6, featured: false },
		'iphone/14_Pro',
		[['Negro espacial', 'iphone-14-pro-negro.png'], ['Color plata', 'iphone-14-pro-blanco.png'], ['Color oro', 'iphone-14-pro-oro.png'], ['Morado oscuro', 'iphone-14-pro-morado.png']]
	),
	crear(
		{ id: 'iphone-14', brand: 'Apple', model: 'iPhone 14 128GB', name: 'iPhone 14', price: 2400000, storage: ['128 GB', '256 GB'], description: 'Gran cámara, modo Cine y detección de accidentes.', specifications: { pantalla: '6.1 pulgadas Super Retina XDR', camara: 'Dual 12 MP', bateria: 'Hasta 20 horas' }, stock: 12, featured: false },
		'iphone/14_',
		[['Medianoche', 'iphone-14-negro.png'], ['Blanco estelar', 'iphone-14-blanco.png'], ['Azul', 'iphone-14-azul.png'], ['Morado', 'iphone-14-rosa.png'], ['Amarillo', 'iphone-14-amarillo.png'], ['Rojo (PRODUCT)RED', 'iphone-14-rojo.png']]
	),

	// =========================================================
	//  SAMSUNG
	// =========================================================
	crear(
		{ id: 'galaxy-s26-ultra', brand: 'Samsung', model: 'Galaxy S26 Ultra 512GB', name: 'Galaxy S26 Ultra', price: 3780000, storage: ['512 GB', '1 TB'], description: 'Lo último de Samsung: Galaxy AI, cámara de 200 MP y S Pen.', features: [
			'Pantalla: 6.9" Dynamic LTPO AMOLED 2X, Quad HD+ (1440 x 3120), tasa adaptativa de 1-120 Hz y Gorilla Armor 3 antirreflejos con más de 3000 nits de brillo.',
			'Procesador: Qualcomm Snapdragon 8 Elite Gen 5 o Exynos 2600 según región, con NPU avanzada para Galaxy AI multimodales.',
			'Memoria y almacenamiento: 16 GB RAM LPDDR5X + 512 GB UFS 4.1.',
			'Cámara cuádruple: 200 MP principal con OIS (f/1.6) + 50 MP ultra gran angular + 50 MP teleobjetivo 3x + 50 MP teleobjetivo periscópico 5x/10x; vídeo 8K a 30/60 fps.',
			'Cámara frontal: 12 MP con autoenfoque Dual Pixel.',
			'Batería y carga: 5000 mAh, carga por cable de 60 W y carga inalámbrica de 25 W.',
			'Extras: S Pen integrado en el chasis, conectividad satelital y certificación IP68.'
		], specifications: { pantalla: '6.9 pulgadas Dynamic LTPO AMOLED 2X, Quad HD+ 1-120 Hz', camara: '200 MP cuádruple con zoom periscópico 5x/10x', bateria: '5000 mAh, carga de 60 W' }, stock: 6, featured: true },
		'samsung/S26_Ultra',
		[['Negro', 'sg-s26-ultra-negro.png'], ['Blanco', 'sg-s26-ultra-blanco.png'], ['Azul claro', 'sg-s26-ultra-azulclaro.png'], ['Morado', 'sg-s26-ultra-morado.png']]
	),
	crear(
		{ id: 'galaxy-s25-ultra', brand: 'Samsung', model: 'Galaxy S25 Ultra 256GB', name: 'Galaxy S25 Ultra', price: 3250000, storage: ['256 GB', '512 GB'], description: 'Galaxy AI, sensor de 200 MP y S Pen integrado.', features: [
			'Pantalla: 6.9" Dynamic LTPO AMOLED 2X Quad HD+ (3120 x 1440), 120 Hz y Corning Gorilla Armor antirreflejante con brillo de hasta 2600 nits.',
			'Procesador: Qualcomm Snapdragon 8 Elite de 3 nm, 8 núcleos hasta 4.47 GHz y GPU Adreno 830.',
			'Memoria y almacenamiento: 12 GB RAM + 256 GB UFS 4.0.',
			'Cámara cuádruple: 200 MP principal (f/1.7, OIS) + 50 MP ultra gran angular (120°) + 50 MP teleobjetivo periscópico (5x) + 10 MP teleobjetivo (3x).',
			'Cámara frontal: 12 MP f/2.2 con soporte de vídeo en 4K.',
			'Batería y carga: 5000 mAh, carga rápida de 45 W, carga inalámbrica de 15 W y carga reversible.',
			'Extras: S Pen integrado, marco de titanio rediseñado más plano, peso de 218 g y resistencia IP68.'
		], specifications: { pantalla: '6.9 pulgadas Dynamic LTPO AMOLED 2X Quad HD+ 120 Hz', camara: '200 MP cuádruple con teleobjetivo periscópico 5x', bateria: '5000 mAh, carga de 45 W' }, stock: 7, featured: true },
		'samsung/Samsung_S25_Ultra',
		[['Negro', 'sg-s25-ultra-negro.png'], ['Azul', 'sg-s25-ultra-azul.png'], ['Plata', 'sg-s25-ultra-gris.png'], ['Verde', 'sg-s25-ultra-verde.png'], ['Gris', 'sg-s25-ultra-dorado.png']]
	),
	crear(
		{ id: 'galaxy-s23-ultra', brand: 'Samsung', model: 'Galaxy S23 Ultra 256GB', name: 'Galaxy S23 Ultra', price: 3400000, storage: ['256 GB', '512 GB'], description: 'Cámara de 200 MP, S Pen y batería de larga duración.', specifications: { pantalla: '6.8 pulgadas Dynamic AMOLED 2X 120Hz', camara: '200 MP principal', bateria: '5000 mAh' }, stock: 5, featured: false },
		'samsung/s23_Ultra',
		[['Negro', 'sg-s23-ultra-negro.png'], ['Crema', 'sg-s23-ultra-blanco.png'], ['Verde', 'sg-s23-ultra-verde.png'], ['Lavanda', 'sg-s23-ultra-rosa.png']]
	),
	crear(
		{ id: 'galaxy-a57', brand: 'Samsung', model: 'Galaxy A57 256GB', name: 'Galaxy A57', price: 1620000, storage: ['128 GB', '256 GB'], description: 'Gama media con gran pantalla, buena cámara y batería duradera.', specifications: { pantalla: '6.7 pulgadas Super AMOLED 120Hz', camara: '50 MP principal', bateria: '5000 mAh' }, stock: 12, featured: false },
		'samsung/Sansumg_A57',
		[['Azul claro', 'sg-galaxy-a57-azulclaro.png'], ['Azul oscuro', 'sg-galaxy-a57-azuloscuro.png'], ['Gris', 'sg-galaxy-a57-gris.png'], ['Morado claro', 'sg-galaxy-a57-moradoclaro.png']]
	)
];
