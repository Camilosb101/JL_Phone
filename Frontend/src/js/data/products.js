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
		{ id: 'iphone-18-pro-max', brand: 'Apple', model: 'iPhone 18 Pro Max 256GB 5G', name: 'iPhone 18 Pro Max', price: 5200000, storage: ['256 GB', '512 GB', '1 TB'], description: 'El buque insignia con chip A19 Pro y el mejor sistema de cámaras.', specifications: { pantalla: '6.9 pulgadas Super Retina XDR 120Hz', camara: '48 MP Fusion Pro', bateria: 'Hasta 35 horas' }, stock: 8, featured: true },
		'iphone/18_Pro_Max',
		[['Negro', 'iphone-18-promax-negro.png'], ['Blanco', 'iphone-18-promax-blanco.png'], ['Azul', 'iphone-18-promax-azul.png'], ['Vino (Dark Cherry)', 'iphone-18-promax-morado.png']]
	),
	crear(
		{ id: 'iphone-18-pro', brand: 'Apple', model: 'iPhone 18 Pro 256GB 5G', name: 'iPhone 18 Pro', price: 4600000, storage: ['128 GB', '256 GB', '512 GB'], description: 'Potencia Pro con chip A19 Pro en un tamaño ergonómico.', specifications: { pantalla: '6.3 pulgadas ProMotion 120Hz', camara: '48 MP Pro', bateria: 'Hasta 29 horas' }, stock: 7, featured: true },
		'iphone/18_Pro',
		[['Negro', 'iphone-18-pro-negro.png'], ['Blanco', 'iphone-18-pro-blanco.png'], ['Azul', 'iphone-18-pro-azul.png'], ['Vino (Dark Cherry)', 'iphone-18-pro-morado.png']]
	),
	crear(
		{ id: 'iphone-17-pro-max', brand: 'Apple', model: 'iPhone 17 Pro Max 256GB 5G', name: 'iPhone 17 Pro Max', price: 4800000, storage: ['256 GB', '512 GB', '1 TB'], description: 'Pantalla máxima, gran batería y cámaras Pro.', specifications: { pantalla: '6.9 pulgadas Super Retina XDR 120Hz', camara: '48 MP Fusion con teleobjetivo 5x', bateria: 'Hasta 33 horas' }, stock: 6, featured: true },
		'iphone/17_Pro_Max',
		[['Azul medianoche profundo', 'iphone-17-promax-azul.png'], ['Blanco', 'iphone-17-promax-blanco.png'], ['Naranja cósmico', 'iphone-17-promax-camaras-naranja.png']]
	),
	crear(
		{ id: 'iphone-17-pro', brand: 'Apple', model: 'iPhone 17 Pro 256GB 5G', name: 'iPhone 17 Pro', price: 4300000, storage: ['128 GB', '256 GB', '512 GB'], description: 'Rendimiento Pro con chip A19 Pro y diseño en titanio.', specifications: { pantalla: '6.3 pulgadas ProMotion 120Hz', camara: '48 MP Pro con teleobjetivo 5x', bateria: 'Hasta 27 horas' }, stock: 7, featured: true },
		'iphone/17_Pro',
		[['Azul medianoche profundo', 'iphone-17-pro-azul.png'], ['Blanco', 'iphone-17-pro-blanco.png'], ['Naranja cósmico', 'iphone-17-pro-camaras-naranja.png']]
	),
	crear(
		{ id: 'iphone-17-air', brand: 'Apple', model: 'iPhone 17 Air 256GB 5G', name: 'iPhone 17 Air', price: 4000000, storage: ['256 GB', '512 GB'], description: 'El iPhone más delgado y ligero, con diseño premium.', specifications: { pantalla: '6.5 pulgadas Super Retina XDR OLED', camara: '48 MP Fusion', bateria: 'Hasta 25 horas' }, stock: 5, featured: true },
		'iphone/17_Air',
		[['Negro grafito', 'iphone-17-air-negro.png'], ['Plata', 'iphone-17-air-blanco.png'], ['Azul hielo', 'iphone-17-air-azul.png'], ['Dorado claro', 'iphone-17-air-dorado.png']]
	),
	crear(
		{ id: 'iphone-17', brand: 'Apple', model: 'iPhone 17 256GB 5G', name: 'iPhone 17', price: 3170000, storage: ['256 GB', '512 GB'], description: 'La nueva generación con gran rendimiento y cámara de 48 MP.', specifications: { pantalla: '6.3 pulgadas Super Retina XDR', camara: '48 MP Fusion', bateria: 'Hasta 28 horas' }, stock: 8, featured: false },
		'iphone/17_',
		[['Negro', 'iphone-17-negro.png'], ['Blanco', 'iphone-17-blanco.png'], ['Azul', 'iphone-17-azul.png'], ['Lila', 'iphone-17-rosado.png'], ['Verde', 'iphone-17-verde.png']]
	),
	crear(
		{ id: 'iphone-16-pro-max', brand: 'Apple', model: 'iPhone 16 Pro Max 256GB 5G', name: 'iPhone 16 Pro Max', price: 4400000, storage: ['256 GB', '512 GB', '1 TB'], description: 'Titanio, cámaras Pro y la pantalla más grande de su generación.', specifications: { pantalla: '6.9 pulgadas ProMotion 120Hz', camara: '48 MP Pro con teleobjetivo 5x', bateria: 'Hasta 33 horas' }, stock: 6, featured: false },
		'iphone/16_ProMax',
		[['Titanio negro', 'iphone-16-promax-negro.png'], ['Titanio blanco', 'iphone-16-promax-blanco.png'], ['Titanio natural', 'iphone-16-promax-gris.png'], ['Titanio del desierto', 'iphone-16-promax-dorado.png']]
	),
	crear(
		{ id: 'iphone-16-pro', brand: 'Apple', model: 'iPhone 16 Pro 256GB 5G', name: 'iPhone 16 Pro', price: 3900000, storage: ['128 GB', '256 GB', '512 GB'], description: 'Estructura de titanio, chip A18 Pro y sistema de cámaras Pro.', specifications: { pantalla: '6.3 pulgadas ProMotion 120Hz', camara: '48 MP Pro con teleobjetivo 5x', bateria: 'Hasta 27 horas' }, stock: 7, featured: false },
		'iphone/16_Pro',
		[['Titanio negro', 'iphone-16-pro-negro.png'], ['Titanio blanco', 'iphone-16-pro-blanco.png'], ['Titanio natural', 'iphone-16-pro-gris.png'], ['Titanio del desierto', 'iphone-16-pro-dorado.png']]
	),
	crear(
		{ id: 'iphone-16', brand: 'Apple', model: 'iPhone 16 128GB 5G', name: 'iPhone 16', price: 2750000, storage: ['128 GB', '256 GB', '512 GB'], description: 'Chip A18, cámara avanzada y conectividad 5G.', specifications: { pantalla: '6.1 pulgadas Super Retina XDR', camara: '48 MP Fusion', bateria: 'Hasta 22 horas' }, stock: 10, featured: false },
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
		{ id: 'iphone-15', brand: 'Apple', model: 'iPhone 15 128GB 5G', name: 'iPhone 15', price: 2500000, storage: ['128 GB', '256 GB'], description: 'USB-C, Dynamic Island y cámara principal de 48 MP.', specifications: { pantalla: '6.1 pulgadas Super Retina XDR', camara: '48 MP', bateria: 'Hasta 20 horas' }, stock: 9, featured: false },
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
		{ id: 'galaxy-s26-ultra', brand: 'Samsung', model: 'Galaxy S26 Ultra 512GB', name: 'Galaxy S26 Ultra', price: 3780000, storage: ['512 GB', '1 TB'], description: 'Lo último de Samsung: Galaxy AI, cámara de 200 MP y S Pen.', specifications: { pantalla: '6.9 pulgadas Dynamic AMOLED 2X 120Hz', camara: '200 MP con zoom avanzado', bateria: '5000 mAh' }, stock: 6, featured: true },
		'samsung/S26_Ultra',
		[['Negro', 'sg-s26-ultra-negro.png'], ['Blanco', 'sg-s26-ultra-blanco.png'], ['Azul claro', 'sg-s26-ultra-azulclaro.png'], ['Morado', 'sg-s26-ultra-morado.png']]
	),
	crear(
		{ id: 'galaxy-s25-ultra', brand: 'Samsung', model: 'Galaxy S25 Ultra 256GB', name: 'Galaxy S25 Ultra', price: 3250000, storage: ['256 GB', '512 GB'], description: 'Galaxy AI, sensor de 200 MP y S Pen integrado.', specifications: { pantalla: '6.86 pulgadas Dynamic AMOLED 2X', camara: '200 MP principal', bateria: '5000 mAh' }, stock: 7, featured: true },
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
