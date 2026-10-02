import { img } from './imageMap.js';

const usedImage = img('usados-icon.png');
const samsungUsedImage = img('samsung/Z_Flip/zflip-corte.png');
const iphone13Image = img('usados/iphone-13.png');
const iphone12ProImage = img('usados/iphone-12-pro.png');
const iphone11Image = img('usados/image-removebg-preview.png');
const iphoneSeImage = img('usados/iphone-se.png');
const iphone16Image = img('iphone/16_/iphone-16-negro.png');
const iphone15ProMaxBlackImage = img('iphone/15_Promax/iphone-15-promax-negro.png');
const iphone15ProMaxBlueImage = img('iphone/15_Promax/iphone-15-promax-azul.png');
const iphone15ProMaxNaturalImage = img('iphone/15_Promax/iphone-15-promax-dorado.png');
const iphone15ProWhiteImage = img('iphone/15_Pro/iphone-15-pro-blanco.png');
const iphone15ProNaturalImage = img('iphone/15_Pro/iphone-15-pro-dorado.png');
const iphone14ProMaxBlackImage = img('iphone/14_ProMax/iphone-14-promax-negro.png');
const iphone14ProMaxPurpleImage = img('iphone/14_ProMax/iphone-14-promax-morado.png');
const iphone14BlackImage = img('iphone/14_/iphone-14-negro.png');
const iphone16ProMaxWhiteImage = img('iphone/16_ProMax/iphone-16-promax-blanco.png');
const iphone16ProMaxBlackImage = img('iphone/16_ProMax/iphone-16-promax-negro.png');
const iphone16ProMaxDesertImage = img('iphone/16_ProMax/iphone-16-promax-dorado.png');
const iphone16ProMaxNaturalImage = img('iphone/16_ProMax/iphone-16-promax-gris.png');

export const usedProducts = [
	{
		id: 'iphone-13-used',
		brand: 'Apple',
		model: 'iPhone 13 128GB',
		name: 'iPhone 13',
		price: 1200000,
		images: [iphone13Image],
		colors: ['Verde'],
		colorOptions: [
			{ name: 'Verde', hex: '#7d9b76', image: iphone13Image }
		],
		storage: ['128 GB'],
		description: 'Verde, batería al 100%. Equipo seminuevo revisado.',
		specifications: { estado: 'Seminuevo', bateria: '100%', garantia: 'JL Mobile' },
		stock: 1,
		featured: false,
		isUsed: true
	},
	{
		id: 'iphone-12-pro-used',
		brand: 'Apple',
		model: 'iPhone 12 Pro 128GB',
		name: 'iPhone 12 Pro',
		price: 1300000,
		images: [iphone12ProImage],
		colors: ['Negro', 'Azul'],
		colorOptions: [
			{ name: 'Negro', hex: '#1d1d1f', image: iphone12ProImage },
			{ name: 'Azul', hex: '#4f6d8e', image: iphone12ProImage }
		],
		storage: ['128 GB'],
		description: 'Negro: 89%, 90% y 100%. Azul: 94%. Hay 4 unidades disponibles.',
		specifications: { estado: 'Seminuevo', bateria: 'Negro: 89%, 90%, 100% | Azul: 94%', garantia: 'JL Mobile' },
		stock: 4,
		featured: false,
		isUsed: true
	},
	{
		id: 'iphone-11-used',
		brand: 'Apple',
		model: 'iPhone 11 256GB',
		name: 'iPhone 11',
		price: 950000,
		images: [iphone11Image],
		colors: ['Amarillo', 'Lila'],
		colorOptions: [
			{ name: 'Amarillo', hex: '#f0e395', image: iphone11Image },
			{ name: 'Lila', hex: '#b9a6d6', image: iphone11Image }
		],
		storage: ['256 GB'],
		description: 'Amarillo y lila, ambos con batería al 84%. Capacidad alta.',
		specifications: { estado: 'Seminuevo', bateria: '84% en ambos colores', garantia: 'JL Mobile' },
		stock: 2,
		featured: false,
		isUsed: true
	},
	{
		id: 'iphone-se-used',
		brand: 'Apple',
		model: 'iPhone SE 128GB',
		name: 'iPhone SE',
		price: 650000,
		images: [iphoneSeImage],
		colors: ['Negro'],
		colorOptions: [
			{ name: 'Negro', hex: '#1d1d1f', image: iphoneSeImage }
		],
		storage: ['128 GB'],
		description: 'Negro, batería al 100%. Equipo seminuevo revisado.',
		specifications: { estado: 'Seminuevo', bateria: '100%', garantia: 'JL Mobile' },
		stock: 1,
		featured: false,
		isUsed: true
	},
	{
		id: 'iphone-16-pro-max-used',
		brand: 'Apple',
		model: 'iPhone 16 Pro Max 256GB',
		name: 'iPhone 16 Pro Max',
		price: 3100000,
		images: [iphone16ProMaxWhiteImage, iphone16ProMaxBlackImage, iphone16ProMaxDesertImage, iphone16ProMaxNaturalImage],
		colors: ['Blanco', 'Negro', 'Desert', 'Natural'],
		colorOptions: [
			{ name: 'Blanco', hex: '#f1f1ec', image: iphone16ProMaxWhiteImage },
			{ name: 'Negro', hex: '#202326', image: iphone16ProMaxBlackImage },
			{ name: 'Desert', hex: '#b89a7a', image: iphone16ProMaxDesertImage },
			{ name: 'Natural', hex: '#9b9b96', image: iphone16ProMaxNaturalImage }
		],
		storage: ['256 GB'],
		description: 'Blanco: 89%, 92%. Negro: 88%, 89%, 90%, 92%, 94%. Desert: 87%, 90%. Natural: 88%, 89%, 96%.',
		specifications: { estado: 'Seminuevo', bateria: 'Blanco 89%-92% | Negro 88%-94% | Desert 87%-90% | Natural 88%-96%', garantia: 'JL Mobile' },
		stock: 13,
		featured: false,
		isUsed: true
	},
	{
		id: 'iphone-16-used',
		brand: 'Apple',
		model: 'iPhone 16 128GB',
		name: 'iPhone 16',
		price: 2200000,
		images: [iphone16Image],
		colors: ['Negro'],
		colorOptions: [
			{ name: 'Negro', hex: '#1d1d1f', image: iphone16Image }
		],
		storage: ['128 GB'],
		description: 'Negro, batería al 100%. Equipo seminuevo revisado.',
		specifications: { estado: 'Seminuevo', bateria: '100%', garantia: 'JL Mobile' },
		stock: 1,
		featured: false,
		isUsed: true
	},
	{
		id: 'iphone-15-pro-max-used',
		brand: 'Apple',
		model: 'iPhone 15 Pro Max 256GB',
		name: 'iPhone 15 Pro Max',
		price: 2550000,
		images: [iphone15ProMaxBlackImage, iphone15ProMaxBlueImage, iphone15ProMaxNaturalImage],
		colors: ['Negro', 'Azul', 'Natural'],
		colorOptions: [
			{ name: 'Negro', hex: '#2a2a2c', image: iphone15ProMaxBlackImage },
			{ name: 'Azul', hex: '#4f6076', image: iphone15ProMaxBlueImage },
			{ name: 'Natural', hex: '#9b9b96', image: iphone15ProMaxNaturalImage }
		],
		storage: ['256 GB'],
		description: 'Negro: 85%, 86%, 87%. Azul: 86%. Natural: 85%.',
		specifications: { estado: 'Seminuevo', bateria: 'Negro 85%-87% | Azul 86% | Natural 85%', garantia: 'JL Mobile' },
		stock: 5,
		featured: false,
		isUsed: true
	},
	{
		id: 'iphone-15-pro-used',
		brand: 'Apple',
		model: 'iPhone 15 Pro 256GB',
		name: 'iPhone 15 Pro',
		price: 2000000,
		images: [iphone15ProWhiteImage],
		colors: ['Blanco'],
		colorOptions: [
			{ name: 'Blanco', hex: '#f1f1ec', image: iphone15ProWhiteImage }
		],
		storage: ['256 GB'],
		description: 'Blanco, batería al 100%. A.T.B.C.P.',
		specifications: { estado: 'Seminuevo', bateria: '100%', observacion: 'A.T.B.C.P.', garantia: 'JL Mobile' },
		stock: 1,
		featured: false,
		isUsed: true
	},
	{
		id: 'iphone-15-pro-128-used',
		brand: 'Apple',
		model: 'iPhone 15 Pro 128GB',
		name: 'iPhone 15 Pro',
		price: 2150000,
		images: [iphone15ProNaturalImage],
		colors: ['Natural'],
		colorOptions: [
			{ name: 'Natural', hex: '#9b9b96', image: iphone15ProNaturalImage }
		],
		storage: ['128 GB'],
		description: 'Natural, batería al 93% y 100%.',
		specifications: { estado: 'Seminuevo', bateria: '93% y 100%', garantia: 'JL Mobile' },
		stock: 2,
		featured: false,
		isUsed: true
	},
	{
		id: 'iphone-14-pro-max-used',
		brand: 'Apple',
		model: 'iPhone 14 Pro Max 128GB',
		name: 'iPhone 14 Pro Max',
		price: 1850000,
		images: [iphone14ProMaxBlackImage, iphone14ProMaxPurpleImage],
		colors: ['Negro', 'Morado'],
		colorOptions: [
			{ name: 'Negro', hex: '#17191d', image: iphone14ProMaxBlackImage },
			{ name: 'Morado', hex: '#6c4bb0', image: iphone14ProMaxPurpleImage }
		],
		storage: ['128 GB'],
		description: 'Negro: 83%, 84%. Morado: 83%, 84%.',
		specifications: { estado: 'Seminuevo', bateria: 'Negro 83%-84% | Morado 83%-84%', garantia: 'JL Mobile' },
		stock: 4,
		featured: false,
		isUsed: true
	},
	{
		id: 'iphone-14-used',
		brand: 'Apple',
		model: 'iPhone 14 128GB',
		name: 'iPhone 14',
		price: 1200000,
		images: [iphone14BlackImage],
		colors: ['Negro'],
		colorOptions: [
			{ name: 'Negro', hex: '#17191d', image: iphone14BlackImage }
		],
		storage: ['128 GB'],
		description: 'Negro, batería al 100%. Equipo seminuevo revisado.',
		specifications: { estado: 'Seminuevo', bateria: '100%', garantia: 'JL Mobile' },
		stock: 1,
		featured: false,
		isUsed: true
	},
	{
		id: 'samsung-z-flip-7-used',
		brand: 'Samsung',
		model: 'Galaxy Z Flip 7 512GB',
		name: 'Galaxy Z Flip 7',
		price: 2650000,
		images: [samsungUsedImage],
		colors: ['Azul'],
		colorOptions: [
			{ name: 'Azul', hex: '#4f6d8e', image: samsungUsedImage }
		],
		storage: ['512 GB'],
		description: 'Galaxy Z Flip 7 azul, 512 GB. Equipo seminuevo.',
		specifications: { estado: 'Seminuevo', bateria: 'Por confirmar', garantia: 'JL Mobile' },
		stock: 1,
		featured: false,
		isUsed: true
	}
];
