const data = [
	{
		id: '001',
		name: 'bulbasaur',
		types: ['grass', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png'
	},
	{
		id: '002',
		name: 'ivysaur',
		types: ['grass', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/002.png'
	},
	{
		id: '003',
		name: 'venusaur',
		types: ['grass', 'poison'],
		mega: [
			{
				name: 'mega venusaur',
				types: ['grass', 'poison'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/003-Mega.png'
			}
		],
		variant: [],
		forms: [
			{
				name: 'gigantamax venusaur',
				types: ['grass', 'poison'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/003-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/003.png'
	},
	{
		id: '004',
		name: 'charmander',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/004.png'
	},
	{
		id: '005',
		name: 'charmeleon',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/005.png'
	},
	{
		id: '006',
		name: 'charizard',
		types: ['fire', 'flying'],
		mega: [
			{
				name: 'mega charizard x',
				types: ['fire', 'dragon'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/006-Mega-X.png'
			},
			{
				name: 'mega charizard y',
				types: ['fire', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/006-Mega-Y.png'
			}
		],
		variant: [],
		forms: [
			{
				name: 'gigantamax charizard',
				types: ['fire', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/006-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/006.png'
	},
	{
		id: '007',
		name: 'squirtle',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/007.png'
	},
	{
		id: '008',
		name: 'wartortle',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/008.png'
	},
	{
		id: '009',
		name: 'blastoise',
		types: ['water'],
		mega: [
			{
				name: 'mega blastoise',
				types: ['water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/009-Mega.png'
			}
		],
		variant: [],
		forms: [
			{
				name: 'gigantamax blastoise',
				types: ['water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/009-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/009.png'
	},
	{
		id: '010',
		name: 'caterpie',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/010.png'
	},
	{
		id: '011',
		name: 'metapod',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/011.png'
	},
	{
		id: '012',
		name: 'butterfree',
		types: ['bug', 'flying'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax butterfree',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/012-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/012.png'
	},
	{
		id: '013',
		name: 'weedle',
		types: ['bug', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/013.png'
	},
	{
		id: '014',
		name: 'kakuna',
		types: ['bug', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/014.png'
	},
	{
		id: '015',
		name: 'beedrill',
		types: ['bug', 'poison'],
		mega: [
			{
				name: 'mega beedrill',
				types: ['bug', 'poison'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/015-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/015.png'
	},
	{
		id: '016',
		name: 'pidgey',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/016.png'
	},
	{
		id: '017',
		name: 'pidgeotto',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/017.png'
	},
	{
		id: '018',
		name: 'pidgeot',
		types: ['normal', 'flying'],
		mega: [
			{
				name: 'mega pidgeot',
				types: ['normal', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/018-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/018.png'
	},
	{
		id: '019',
		name: 'rattata',
		types: ['normal'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['dark', 'normal'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/019-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/019.png'
	},
	{
		id: '020',
		name: 'raticate',
		types: ['normal'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['dark', 'normal'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/020-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/020.png'
	},
	{
		id: '021',
		name: 'spearow',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/021.png'
	},
	{
		id: '022',
		name: 'fearow',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/022.png'
	},
	{
		id: '023',
		name: 'ekans',
		types: ['poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/023.png'
	},
	{
		id: '024',
		name: 'arbok',
		types: ['poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/024.png'
	},
	{
		id: '025',
		name: 'pikachu',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax pikachu',
				types: ['electric'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/025-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/025.png'
	},
	{
		id: '026',
		name: 'raichu',
		types: ['electric'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['electric', 'psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/026-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/026.png'
	},
	{
		id: '027',
		name: 'sandshrew',
		types: ['ground'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['ice', 'steel'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/027-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/027.png'
	},
	{
		id: '028',
		name: 'sandslash',
		types: ['ground'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['ice', 'steel'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/028-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/028.png'
	},
	{
		id: '029',
		name: 'nidoran-f',
		types: ['poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/029.png'
	},
	{
		id: '030',
		name: 'nidorina',
		types: ['poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/030.png'
	},
	{
		id: '031',
		name: 'nidoqueen',
		types: ['poison', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/031.png'
	},
	{
		id: '032',
		name: 'nidoran-m',
		types: ['poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/032.png'
	},
	{
		id: '033',
		name: 'nidorino',
		types: ['poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/033.png'
	},
	{
		id: '034',
		name: 'nidoking',
		types: ['poison', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/034.png'
	},
	{
		id: '035',
		name: 'clefairy',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/035.png'
	},
	{
		id: '036',
		name: 'clefable',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/036.png'
	},
	{
		id: '037',
		name: 'vulpix',
		types: ['fire'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['ice'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/037-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/037.png'
	},
	{
		id: '038',
		name: 'ninetales',
		types: ['fire'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['ice', 'fairy'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/038-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/038.png'
	},
	{
		id: '039',
		name: 'jigglypuff',
		types: ['normal', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/039.png'
	},
	{
		id: '040',
		name: 'wigglytuff',
		types: ['normal', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/040.png'
	},
	{
		id: '041',
		name: 'zubat',
		types: ['poison', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/041.png'
	},
	{
		id: '042',
		name: 'golbat',
		types: ['poison', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/042.png'
	},
	{
		id: '043',
		name: 'oddish',
		types: ['grass', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/043.png'
	},
	{
		id: '044',
		name: 'gloom',
		types: ['grass', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/044.png'
	},
	{
		id: '045',
		name: 'vileplume',
		types: ['grass', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/045.png'
	},
	{
		id: '046',
		name: 'paras',
		types: ['bug', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/046.png'
	},
	{
		id: '047',
		name: 'parasect',
		types: ['bug', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/047.png'
	},
	{
		id: '048',
		name: 'venonat',
		types: ['bug', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/048.png'
	},
	{
		id: '049',
		name: 'venomoth',
		types: ['bug', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/049.png'
	},
	{
		id: '050',
		name: 'diglett',
		types: ['ground'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['ground', 'steel'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/050-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/050.png'
	},
	{
		id: '051',
		name: 'dugtrio',
		types: ['ground'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['ground', 'steel'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/051-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/051.png'
	},
	{
		id: '052',
		name: 'meowth',
		types: ['normal'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['dark'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/052-Alola.png'
			},
			{
				name: 'galarian form',
				types: ['steel'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/052-Galar.png'
			}
		],
		forms: [
			{
				name: 'gigantamax meowth',
				types: ['normal'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/052-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/052.png'
	},
	{
		id: '053',
		name: 'persian',
		types: ['normal'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['dark'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/053-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/053.png'
	},
	{
		id: '054',
		name: 'psyduck',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/054.png'
	},
	{
		id: '055',
		name: 'golduck',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/055.png'
	},
	{
		id: '056',
		name: 'mankey',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/056.png'
	},
	{
		id: '057',
		name: 'primeape',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/057.png'
	},
	{
		id: '058',
		name: 'growlithe',
		types: ['fire'],
		mega: [],
		variant: [
			{
				name: 'hisuian form',
				types: ['fire', 'rock'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/058-Hisui.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/058.png'
	},
	{
		id: '059',
		name: 'arcanine',
		types: ['fire'],
		mega: [],
		variant: [
			{
				name: 'hisuian form',
				types: ['fire', 'rock'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/059-Hisui.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/059.png'
	},
	{
		id: '060',
		name: 'poliwag',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/060.png'
	},
	{
		id: '061',
		name: 'poliwhirl',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/061.png'
	},
	{
		id: '062',
		name: 'poliwrath',
		types: ['water', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/062.png'
	},
	{
		id: '063',
		name: 'abra',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/063.png'
	},
	{
		id: '064',
		name: 'kadabra',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/064.png'
	},
	{
		id: '065',
		name: 'alakazam',
		types: ['psychic'],
		mega: [
			{
				name: 'mega alakazam',
				types: ['psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/065-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/065.png'
	},
	{
		id: '066',
		name: 'machop',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/066.png'
	},
	{
		id: '067',
		name: 'machoke',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/067.png'
	},
	{
		id: '068',
		name: 'machamp',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax machamp',
				types: ['fighting'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/068-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/068.png'
	},
	{
		id: '069',
		name: 'bellsprout',
		types: ['grass', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/069.png'
	},
	{
		id: '070',
		name: 'weepinbell',
		types: ['grass', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/070.png'
	},
	{
		id: '071',
		name: 'victreebel',
		types: ['grass', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/071.png'
	},
	{
		id: '072',
		name: 'tentacool',
		types: ['water', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/072.png'
	},
	{
		id: '073',
		name: 'tentacruel',
		types: ['water', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/073.png'
	},
	{
		id: '074',
		name: 'geodude',
		types: ['rock', 'ground'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['rock', 'electric'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/074-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/074.png'
	},
	{
		id: '075',
		name: 'graveler',
		types: ['rock', 'ground'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['rock', 'electric'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/075-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/075.png'
	},
	{
		id: '076',
		name: 'golem',
		types: ['rock', 'ground'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['rock', 'electric'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/076-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/076.png'
	},
	{
		id: '077',
		name: 'ponyta',
		types: ['fire'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/077-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/077.png'
	},
	{
		id: '078',
		name: 'rapidash',
		types: ['fire'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['psychic', 'fairy'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/078-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/078.png'
	},
	{
		id: '079',
		name: 'slowpoke',
		types: ['water', 'psychic'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/079-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/079.png'
	},
	{
		id: '080',
		name: 'slowbro',
		types: ['water', 'psychic'],
		mega: [
			{
				name: 'mega slowbro',
				types: ['water', 'psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/080-Mega.png'
			}
		],
		variant: [
			{
				name: 'galarian form',
				types: ['poison', 'psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/080-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/080.png'
	},
	{
		id: '081',
		name: 'magnemite',
		types: ['electric', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/081.png'
	},
	{
		id: '082',
		name: 'magneton',
		types: ['electric', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/082.png'
	},
	{
		id: '083',
		name: 'farfetchd',
		types: ['normal', 'flying'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['fighting'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/083-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/083.png'
	},
	{
		id: '084',
		name: 'doduo',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/084.png'
	},
	{
		id: '085',
		name: 'dodrio',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/085.png'
	},
	{
		id: '086',
		name: 'seel',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/086.png'
	},
	{
		id: '087',
		name: 'dewgong',
		types: ['water', 'ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/087.png'
	},
	{
		id: '088',
		name: 'grimer',
		types: ['poison'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['poison', 'dark'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/088-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/088.png'
	},
	{
		id: '089',
		name: 'muk',
		types: ['poison'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['poison', 'dark'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/089-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/089.png'
	},
	{
		id: '090',
		name: 'shellder',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/090.png'
	},
	{
		id: '091',
		name: 'cloyster',
		types: ['water', 'ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/091.png'
	},
	{
		id: '092',
		name: 'gastly',
		types: ['ghost', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/092.png'
	},
	{
		id: '093',
		name: 'haunter',
		types: ['ghost', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/093.png'
	},
	{
		id: '094',
		name: 'gengar',
		types: ['ghost', 'poison'],
		mega: [
			{
				name: 'mega gengar',
				types: ['ghost', 'poison'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/094-Mega.png'
			}
		],
		variant: [],
		forms: [
			{
				name: 'gigantamax gengar',
				types: ['ghost', 'poison'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/094-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/094.png'
	},
	{
		id: '095',
		name: 'onix',
		types: ['rock', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/095.png'
	},
	{
		id: '096',
		name: 'drowzee',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/096.png'
	},
	{
		id: '097',
		name: 'hypno',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/097.png'
	},
	{
		id: '098',
		name: 'krabby',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/098.png'
	},
	{
		id: '099',
		name: 'kingler',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax kingler',
				types: ['water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/099-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/099.png'
	},
	{
		id: '100',
		name: 'voltorb',
		types: ['electric'],
		mega: [],
		variant: [
			{
				name: 'hisuian form',
				types: ['electric', 'grass'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/100-Hisui.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/100.png'
	},
	{
		id: '101',
		name: 'electrode',
		types: ['electric'],
		mega: [],
		variant: [
			{
				name: 'hisuian form',
				types: ['electric', 'grass'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/101-Hisui.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/101.png'
	},
	{
		id: '102',
		name: 'exeggcute',
		types: ['grass', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/102.png'
	},
	{
		id: '103',
		name: 'exeggutor',
		types: ['grass', 'psychic'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['grass', 'dragon'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/103-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/103.png'
	},
	{
		id: '104',
		name: 'cubone',
		types: ['ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/104.png'
	},
	{
		id: '105',
		name: 'marowak',
		types: ['ground'],
		mega: [],
		variant: [
			{
				name: 'alolan form',
				types: ['fire', 'ghost'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/105-Alola.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/105.png'
	},
	{
		id: '106',
		name: 'hitmonlee',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/106.png'
	},
	{
		id: '107',
		name: 'hitmonchan',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/107.png'
	},
	{
		id: '108',
		name: 'lickitung',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/108.png'
	},
	{
		id: '109',
		name: 'koffing',
		types: ['poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/109.png'
	},
	{
		id: '110',
		name: 'weezing',
		types: ['poison'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['poison', 'fairy'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/110-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/110.png'
	},
	{
		id: '111',
		name: 'rhyhorn',
		types: ['ground', 'rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/111.png'
	},
	{
		id: '112',
		name: 'rhydon',
		types: ['ground', 'rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/112.png'
	},
	{
		id: '113',
		name: 'chansey',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/113.png'
	},
	{
		id: '114',
		name: 'tangela',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/114.png'
	},
	{
		id: '115',
		name: 'kangaskhan',
		types: ['normal'],
		mega: [
			{
				name: 'mega kangaskhan',
				types: ['normal'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/115-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/115.png'
	},
	{
		id: '116',
		name: 'horsea',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/116.png'
	},
	{
		id: '117',
		name: 'seadra',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/117.png'
	},
	{
		id: '118',
		name: 'goldeen',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/118.png'
	},
	{
		id: '119',
		name: 'seaking',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/119.png'
	},
	{
		id: '120',
		name: 'staryu',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/120.png'
	},
	{
		id: '121',
		name: 'starmie',
		types: ['water', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/121.png'
	},
	{
		id: '122',
		name: 'mr-mime',
		types: ['psychic', 'fairy'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['ice', 'psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/122-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/122.png'
	},
	{
		id: '123',
		name: 'scyther',
		types: ['bug', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/123.png'
	},
	{
		id: '124',
		name: 'jynx',
		types: ['ice', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/124.png'
	},
	{
		id: '125',
		name: 'electabuzz',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/125.png'
	},
	{
		id: '126',
		name: 'magmar',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/126.png'
	},
	{
		id: '127',
		name: 'pinsir',
		types: ['bug'],
		mega: [
			{
				name: 'mega pinsir',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/127-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/127.png'
	},
	{
		id: '128',
		name: 'tauros',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/128.png'
	},
	{
		id: '129',
		name: 'magikarp',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/129.png'
	},
	{
		id: '130',
		name: 'gyarados',
		types: ['water', 'flying'],
		mega: [
			{
				name: 'mega gyarados',
				types: ['water', 'dark'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/130-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/130.png'
	},
	{
		id: '131',
		name: 'lapras',
		types: ['water', 'ice'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax lapras',
				types: ['water', 'ice'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/131-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/131.png'
	},
	{
		id: '132',
		name: 'ditto',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/132.png'
	},
	{
		id: '133',
		name: 'eevee',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax eevee',
				types: ['normal'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/133-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/133.png'
	},
	{
		id: '134',
		name: 'vaporeon',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/134.png'
	},
	{
		id: '135',
		name: 'jolteon',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/135.png'
	},
	{
		id: '136',
		name: 'flareon',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/136.png'
	},
	{
		id: '137',
		name: 'porygon',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/137.png'
	},
	{
		id: '138',
		name: 'omanyte',
		types: ['rock', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/138.png'
	},
	{
		id: '139',
		name: 'omastar',
		types: ['rock', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/139.png'
	},
	{
		id: '140',
		name: 'kabuto',
		types: ['rock', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/140.png'
	},
	{
		id: '141',
		name: 'kabutops',
		types: ['rock', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/141.png'
	},
	{
		id: '142',
		name: 'aerodactyl',
		types: ['rock', 'flying'],
		mega: [
			{
				name: 'mega aerodactyl',
				types: ['rock', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/142-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/142.png'
	},
	{
		id: '143',
		name: 'snorlax',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax snorlax',
				types: ['normal'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/143-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/143.png'
	},
	{
		id: '144',
		name: 'articuno',
		types: ['ice', 'flying'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['psychic', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/144-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/144.png'
	},
	{
		id: '145',
		name: 'zapdos',
		types: ['electric', 'flying'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['fighting', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/145-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/145.png'
	},
	{
		id: '146',
		name: 'moltres',
		types: ['fire', 'flying'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['dark', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/146-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/146.png'
	},
	{
		id: '147',
		name: 'dratini',
		types: ['dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/147.png'
	},
	{
		id: '148',
		name: 'dragonair',
		types: ['dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/148.png'
	},
	{
		id: '149',
		name: 'dragonite',
		types: ['dragon', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/149.png'
	},
	{
		id: '150',
		name: 'mewtwo',
		types: ['psychic'],
		mega: [
			{
				name: 'mega mewtwo x',
				types: ['psychic', 'fighting'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/150-Mega-X.png'
			},
			{
				name: 'mega mewtwo y',
				types: ['psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/150-Mega-Y.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/150.png'
	},
	{
		id: '151',
		name: 'mew',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/151.png'
	},
	{
		id: '152',
		name: 'chikorita',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/152.png'
	},
	{
		id: '153',
		name: 'bayleef',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/153.png'
	},
	{
		id: '154',
		name: 'meganium',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/154.png'
	},
	{
		id: '155',
		name: 'cyndaquil',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/155.png'
	},
	{
		id: '156',
		name: 'quilava',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/156.png'
	},
	{
		id: '157',
		name: 'typhlosion',
		types: ['fire'],
		mega: [],
		variant: [
			{
				name: 'hisuian form',
				types: ['fire', 'ghost'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/157-Hisui.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/157.png'
	},
	{
		id: '158',
		name: 'totodile',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/158.png'
	},
	{
		id: '159',
		name: 'croconaw',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/159.png'
	},
	{
		id: '160',
		name: 'feraligatr',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/160.png'
	},
	{
		id: '161',
		name: 'sentret',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/161.png'
	},
	{
		id: '162',
		name: 'furret',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/162.png'
	},
	{
		id: '163',
		name: 'hoothoot',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/163.png'
	},
	{
		id: '164',
		name: 'noctowl',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/164.png'
	},
	{
		id: '165',
		name: 'ledyba',
		types: ['bug', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/165.png'
	},
	{
		id: '166',
		name: 'ledian',
		types: ['bug', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/166.png'
	},
	{
		id: '167',
		name: 'spinarak',
		types: ['bug', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/167.png'
	},
	{
		id: '168',
		name: 'ariados',
		types: ['bug', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/168.png'
	},
	{
		id: '169',
		name: 'crobat',
		types: ['poison', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/169.png'
	},
	{
		id: '170',
		name: 'chinchou',
		types: ['water', 'electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/170.png'
	},
	{
		id: '171',
		name: 'lanturn',
		types: ['water', 'electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/171.png'
	},
	{
		id: '172',
		name: 'pichu',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/172.png'
	},
	{
		id: '173',
		name: 'cleffa',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/173.png'
	},
	{
		id: '174',
		name: 'igglybuff',
		types: ['normal', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/174.png'
	},
	{
		id: '175',
		name: 'togepi',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/175.png'
	},
	{
		id: '176',
		name: 'togetic',
		types: ['fairy', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/176.png'
	},
	{
		id: '177',
		name: 'natu',
		types: ['psychic', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/177.png'
	},
	{
		id: '178',
		name: 'xatu',
		types: ['psychic', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/178.png'
	},
	{
		id: '179',
		name: 'mareep',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/179.png'
	},
	{
		id: '180',
		name: 'flaaffy',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/180.png'
	},
	{
		id: '181',
		name: 'ampharos',
		types: ['electric'],
		mega: [
			{
				name: 'mega ampharos',
				types: ['electric', 'dragon'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/181-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/181.png'
	},
	{
		id: '182',
		name: 'bellossom',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/182.png'
	},
	{
		id: '183',
		name: 'marill',
		types: ['water', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/183.png'
	},
	{
		id: '184',
		name: 'azumarill',
		types: ['water', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/184.png'
	},
	{
		id: '185',
		name: 'sudowoodo',
		types: ['rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/185.png'
	},
	{
		id: '186',
		name: 'politoed',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/186.png'
	},
	{
		id: '187',
		name: 'hoppip',
		types: ['grass', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/187.png'
	},
	{
		id: '188',
		name: 'skiploom',
		types: ['grass', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/188.png'
	},
	{
		id: '189',
		name: 'jumpluff',
		types: ['grass', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/189.png'
	},
	{
		id: '190',
		name: 'aipom',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/190.png'
	},
	{
		id: '191',
		name: 'sunkern',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/191.png'
	},
	{
		id: '192',
		name: 'sunflora',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/192.png'
	},
	{
		id: '193',
		name: 'yanma',
		types: ['bug', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/193.png'
	},
	{
		id: '194',
		name: 'wooper',
		types: ['water', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/194.png'
	},
	{
		id: '195',
		name: 'quagsire',
		types: ['water', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/195.png'
	},
	{
		id: '196',
		name: 'espeon',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/196.png'
	},
	{
		id: '197',
		name: 'umbreon',
		types: ['dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/197.png'
	},
	{
		id: '198',
		name: 'murkrow',
		types: ['dark', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/198.png'
	},
	{
		id: '199',
		name: 'slowking',
		types: ['water', 'psychic'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['poison', 'psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/199-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/199.png'
	},
	{
		id: '200',
		name: 'misdreavus',
		types: ['ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/200.png'
	},
	{
		id: '201',
		name: 'unown',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/201.png'
	},
	{
		id: '202',
		name: 'wobbuffet',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/202.png'
	},
	{
		id: '203',
		name: 'girafarig',
		types: ['normal', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/203.png'
	},
	{
		id: '204',
		name: 'pineco',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/204.png'
	},
	{
		id: '205',
		name: 'forretress',
		types: ['bug', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/205.png'
	},
	{
		id: '206',
		name: 'dunsparce',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/206.png'
	},
	{
		id: '207',
		name: 'gligar',
		types: ['ground', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/207.png'
	},
	{
		id: '208',
		name: 'steelix',
		types: ['steel', 'ground'],
		mega: [
			{
				name: 'mega steelix',
				types: ['steel', 'ground'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/208-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/208.png'
	},
	{
		id: '209',
		name: 'snubbull',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/209.png'
	},
	{
		id: '210',
		name: 'granbull',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/210.png'
	},
	{
		id: '211',
		name: 'qwilfish',
		types: ['water', 'poison'],
		mega: [],
		variant: [
			{
				name: 'hisuian form',
				types: ['dark', 'poison'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/211-Hisui.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/211.png'
	},
	{
		id: '212',
		name: 'scizor',
		types: ['bug', 'steel'],
		mega: [
			{
				name: 'mega scizor',
				types: ['bug', 'steel'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/212-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/212.png'
	},
	{
		id: '213',
		name: 'shuckle',
		types: ['bug', 'rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/213.png'
	},
	{
		id: '214',
		name: 'heracross',
		types: ['bug', 'fighting'],
		mega: [
			{
				name: 'mega heracross',
				types: ['bug', 'fighting'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/214-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/214.png'
	},
	{
		id: '215',
		name: 'sneasel',
		types: ['dark', 'ice'],
		mega: [],
		variant: [
			{
				name: 'hisuian form',
				types: ['fighting', 'poison'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/215-Hisui.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/215.png'
	},
	{
		id: '216',
		name: 'teddiursa',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/216.png'
	},
	{
		id: '217',
		name: 'ursaring',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/217.png'
	},
	{
		id: '218',
		name: 'slugma',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/218.png'
	},
	{
		id: '219',
		name: 'magcargo',
		types: ['fire', 'rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/219.png'
	},
	{
		id: '220',
		name: 'swinub',
		types: ['ice', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/220.png'
	},
	{
		id: '221',
		name: 'piloswine',
		types: ['ice', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/221.png'
	},
	{
		id: '222',
		name: 'corsola',
		types: ['water', 'rock'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['ghost'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/222-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/222.png'
	},
	{
		id: '223',
		name: 'remoraid',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/223.png'
	},
	{
		id: '224',
		name: 'octillery',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/224.png'
	},
	{
		id: '225',
		name: 'delibird',
		types: ['ice', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/225.png'
	},
	{
		id: '226',
		name: 'mantine',
		types: ['water', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/226.png'
	},
	{
		id: '227',
		name: 'skarmory',
		types: ['steel', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/227.png'
	},
	{
		id: '228',
		name: 'houndour',
		types: ['dark', 'fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/228.png'
	},
	{
		id: '229',
		name: 'houndoom',
		types: ['dark', 'fire'],
		mega: [
			{
				name: 'mega houndoom',
				types: ['dark', 'fire'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/229-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/229.png'
	},
	{
		id: '230',
		name: 'kingdra',
		types: ['water', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/230.png'
	},
	{
		id: '231',
		name: 'phanpy',
		types: ['ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/231.png'
	},
	{
		id: '232',
		name: 'donphan',
		types: ['ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/232.png'
	},
	{
		id: '233',
		name: 'porygon2',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/233.png'
	},
	{
		id: '234',
		name: 'stantler',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/234.png'
	},
	{
		id: '235',
		name: 'smeargle',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/235.png'
	},
	{
		id: '236',
		name: 'tyrogue',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/236.png'
	},
	{
		id: '237',
		name: 'hitmontop',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/237.png'
	},
	{
		id: '238',
		name: 'smoochum',
		types: ['ice', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/238.png'
	},
	{
		id: '239',
		name: 'elekid',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/239.png'
	},
	{
		id: '240',
		name: 'magby',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/240.png'
	},
	{
		id: '241',
		name: 'miltank',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/241.png'
	},
	{
		id: '242',
		name: 'blissey',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/242.png'
	},
	{
		id: '243',
		name: 'raikou',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/243.png'
	},
	{
		id: '244',
		name: 'entei',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/244.png'
	},
	{
		id: '245',
		name: 'suicune',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/245.png'
	},
	{
		id: '246',
		name: 'larvitar',
		types: ['rock', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/246.png'
	},
	{
		id: '247',
		name: 'pupitar',
		types: ['rock', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/247.png'
	},
	{
		id: '248',
		name: 'tyranitar',
		types: ['rock', 'dark'],
		mega: [
			{
				name: 'mega tyranitar',
				types: ['rock', 'dark'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/248-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/248.png'
	},
	{
		id: '249',
		name: 'lugia',
		types: ['psychic', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/249.png'
	},
	{
		id: '250',
		name: 'ho-oh',
		types: ['fire', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/250.png'
	},
	{
		id: '251',
		name: 'celebi',
		types: ['psychic', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/251.png'
	},
	{
		id: '252',
		name: 'treecko',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/252.png'
	},
	{
		id: '253',
		name: 'grovyle',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/253.png'
	},
	{
		id: '254',
		name: 'sceptile',
		types: ['grass'],
		mega: [
			{
				name: 'mega sceptile',
				types: ['grass', 'dragon'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/254-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/254.png'
	},
	{
		id: '255',
		name: 'torchic',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/255.png'
	},
	{
		id: '256',
		name: 'combusken',
		types: ['fire', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/256.png'
	},
	{
		id: '257',
		name: 'blaziken',
		types: ['fire', 'fighting'],
		mega: [
			{
				name: 'mega blaziken',
				types: ['fire', 'fighting'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/257-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/257.png'
	},
	{
		id: '258',
		name: 'mudkip',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/258.png'
	},
	{
		id: '259',
		name: 'marshtomp',
		types: ['water', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/259.png'
	},
	{
		id: '260',
		name: 'swampert',
		types: ['water', 'ground'],
		mega: [
			{
				name: 'mega swampert',
				types: ['water', 'ground'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/260-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/260.png'
	},
	{
		id: '261',
		name: 'poochyena',
		types: ['dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/261.png'
	},
	{
		id: '262',
		name: 'mightyena',
		types: ['dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/262.png'
	},
	{
		id: '263',
		name: 'zigzagoon',
		types: ['normal'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['dark', 'normal'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/263-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/263.png'
	},
	{
		id: '264',
		name: 'linoone',
		types: ['normal'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['dark', 'normal'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/264-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/264.png'
	},
	{
		id: '265',
		name: 'wurmple',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/265.png'
	},
	{
		id: '266',
		name: 'silcoon',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/266.png'
	},
	{
		id: '267',
		name: 'beautifly',
		types: ['bug', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/267.png'
	},
	{
		id: '268',
		name: 'cascoon',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/268.png'
	},
	{
		id: '269',
		name: 'dustox',
		types: ['bug', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/269.png'
	},
	{
		id: '270',
		name: 'lotad',
		types: ['water', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/270.png'
	},
	{
		id: '271',
		name: 'lombre',
		types: ['water', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/271.png'
	},
	{
		id: '272',
		name: 'ludicolo',
		types: ['water', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/272.png'
	},
	{
		id: '273',
		name: 'seedot',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/273.png'
	},
	{
		id: '274',
		name: 'nuzleaf',
		types: ['grass', 'dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/274.png'
	},
	{
		id: '275',
		name: 'shiftry',
		types: ['grass', 'dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/275.png'
	},
	{
		id: '276',
		name: 'taillow',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/276.png'
	},
	{
		id: '277',
		name: 'swellow',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/277.png'
	},
	{
		id: '278',
		name: 'wingull',
		types: ['water', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/278.png'
	},
	{
		id: '279',
		name: 'pelipper',
		types: ['water', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/279.png'
	},
	{
		id: '280',
		name: 'ralts',
		types: ['psychic', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/280.png'
	},
	{
		id: '281',
		name: 'kirlia',
		types: ['psychic', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/281.png'
	},
	{
		id: '282',
		name: 'gardevoir',
		types: ['psychic', 'fairy'],
		mega: [
			{
				name: 'mega gardevoir',
				types: ['psychic', 'fairy'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/282-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/282.png'
	},
	{
		id: '283',
		name: 'surskit',
		types: ['bug', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/283.png'
	},
	{
		id: '284',
		name: 'masquerain',
		types: ['bug', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/284.png'
	},
	{
		id: '285',
		name: 'shroomish',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/285.png'
	},
	{
		id: '286',
		name: 'breloom',
		types: ['grass', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/286.png'
	},
	{
		id: '287',
		name: 'slakoth',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/287.png'
	},
	{
		id: '288',
		name: 'vigoroth',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/288.png'
	},
	{
		id: '289',
		name: 'slaking',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/289.png'
	},
	{
		id: '290',
		name: 'nincada',
		types: ['bug', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/290.png'
	},
	{
		id: '291',
		name: 'ninjask',
		types: ['bug', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/291.png'
	},
	{
		id: '292',
		name: 'shedinja',
		types: ['bug', 'ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/292.png'
	},
	{
		id: '293',
		name: 'whismur',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/293.png'
	},
	{
		id: '294',
		name: 'loudred',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/294.png'
	},
	{
		id: '295',
		name: 'exploud',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/295.png'
	},
	{
		id: '296',
		name: 'makuhita',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/296.png'
	},
	{
		id: '297',
		name: 'hariyama',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/297.png'
	},
	{
		id: '298',
		name: 'azurill',
		types: ['normal', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/298.png'
	},
	{
		id: '299',
		name: 'nosepass',
		types: ['rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/299.png'
	},
	{
		id: '300',
		name: 'skitty',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/300.png'
	},
	{
		id: '301',
		name: 'delcatty',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/301.png'
	},
	{
		id: '302',
		name: 'sableye',
		types: ['dark', 'ghost'],
		mega: [
			{
				name: 'mega sableye',
				types: ['dark', 'ghost'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/302-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/302.png'
	},
	{
		id: '303',
		name: 'mawile',
		types: ['steel', 'fairy'],
		mega: [
			{
				name: 'mega mawile',
				types: ['steel', 'fairy'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/303-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/303.png'
	},
	{
		id: '304',
		name: 'aron',
		types: ['steel', 'rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/304.png'
	},
	{
		id: '305',
		name: 'lairon',
		types: ['steel', 'rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/305.png'
	},
	{
		id: '306',
		name: 'aggron',
		types: ['steel', 'rock'],
		mega: [
			{
				name: 'mega aggron',
				types: ['steel'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/306-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/306.png'
	},
	{
		id: '307',
		name: 'meditite',
		types: ['fighting', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/307.png'
	},
	{
		id: '308',
		name: 'medicham',
		types: ['fighting', 'psychic'],
		mega: [
			{
				name: 'mega medicham',
				types: ['fighting', 'psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/308-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/308.png'
	},
	{
		id: '309',
		name: 'electrike',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/309.png'
	},
	{
		id: '310',
		name: 'manectric',
		types: ['electric'],
		mega: [
			{
				name: 'mega manectric',
				types: ['electric'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/310-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/310.png'
	},
	{
		id: '311',
		name: 'plusle',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/311.png'
	},
	{
		id: '312',
		name: 'minun',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/312.png'
	},
	{
		id: '313',
		name: 'volbeat',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/313.png'
	},
	{
		id: '314',
		name: 'illumise',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/314.png'
	},
	{
		id: '315',
		name: 'roselia',
		types: ['grass', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/315.png'
	},
	{
		id: '316',
		name: 'gulpin',
		types: ['poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/316.png'
	},
	{
		id: '317',
		name: 'swalot',
		types: ['poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/317.png'
	},
	{
		id: '318',
		name: 'carvanha',
		types: ['water', 'dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/318.png'
	},
	{
		id: '319',
		name: 'sharpedo',
		types: ['water', 'dark'],
		mega: [
			{
				name: 'mega sharpedo',
				types: ['water', 'dark'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/319-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/319.png'
	},
	{
		id: '320',
		name: 'wailmer',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/320.png'
	},
	{
		id: '321',
		name: 'wailord',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/321.png'
	},
	{
		id: '322',
		name: 'numel',
		types: ['fire', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/322.png'
	},
	{
		id: '323',
		name: 'camerupt',
		types: ['fire', 'ground'],
		mega: [
			{
				name: 'mega camerupt',
				types: ['fire', 'ground'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/323-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/323.png'
	},
	{
		id: '324',
		name: 'torkoal',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/324.png'
	},
	{
		id: '325',
		name: 'spoink',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/325.png'
	},
	{
		id: '326',
		name: 'grumpig',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/326.png'
	},
	{
		id: '327',
		name: 'spinda',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/327.png'
	},
	{
		id: '328',
		name: 'trapinch',
		types: ['ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/328.png'
	},
	{
		id: '329',
		name: 'vibrava',
		types: ['ground', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/329.png'
	},
	{
		id: '330',
		name: 'flygon',
		types: ['ground', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/330.png'
	},
	{
		id: '331',
		name: 'cacnea',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/331.png'
	},
	{
		id: '332',
		name: 'cacturne',
		types: ['grass', 'dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/332.png'
	},
	{
		id: '333',
		name: 'swablu',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/333.png'
	},
	{
		id: '334',
		name: 'altaria',
		types: ['dragon', 'flying'],
		mega: [
			{
				name: 'mega altaria',
				types: ['dragon', 'fairy'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/334-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/334.png'
	},
	{
		id: '335',
		name: 'zangoose',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/335.png'
	},
	{
		id: '336',
		name: 'seviper',
		types: ['poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/336.png'
	},
	{
		id: '337',
		name: 'lunatone',
		types: ['rock', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/337.png'
	},
	{
		id: '338',
		name: 'solrock',
		types: ['rock', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/338.png'
	},
	{
		id: '339',
		name: 'barboach',
		types: ['water', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/339.png'
	},
	{
		id: '340',
		name: 'whiscash',
		types: ['water', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/340.png'
	},
	{
		id: '341',
		name: 'corphish',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/341.png'
	},
	{
		id: '342',
		name: 'crawdaunt',
		types: ['water', 'dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/342.png'
	},
	{
		id: '343',
		name: 'baltoy',
		types: ['ground', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/343.png'
	},
	{
		id: '344',
		name: 'claydol',
		types: ['ground', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/344.png'
	},
	{
		id: '345',
		name: 'lileep',
		types: ['rock', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/345.png'
	},
	{
		id: '346',
		name: 'cradily',
		types: ['rock', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/346.png'
	},
	{
		id: '347',
		name: 'anorith',
		types: ['rock', 'bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/347.png'
	},
	{
		id: '348',
		name: 'armaldo',
		types: ['rock', 'bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/348.png'
	},
	{
		id: '349',
		name: 'feebas',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/349.png'
	},
	{
		id: '350',
		name: 'milotic',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/350.png'
	},
	{
		id: '351',
		name: 'castform',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'sunny form',
				types: ['fire'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/351-Sunny.png'
			},
			{
				name: 'rainy form',
				types: ['water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/351-Rainy.png'
			},
			{
				name: 'snowy form',
				types: ['ice'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/351-Snowy.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/351.png'
	},
	{
		id: '352',
		name: 'kecleon',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/352.png'
	},
	{
		id: '353',
		name: 'shuppet',
		types: ['ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/353.png'
	},
	{
		id: '354',
		name: 'banette',
		types: ['ghost'],
		mega: [
			{
				name: 'mega banette',
				types: ['ghost'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/354-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/354.png'
	},
	{
		id: '355',
		name: 'duskull',
		types: ['ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/355.png'
	},
	{
		id: '356',
		name: 'dusclops',
		types: ['ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/356.png'
	},
	{
		id: '357',
		name: 'tropius',
		types: ['grass', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/357.png'
	},
	{
		id: '358',
		name: 'chimecho',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/358.png'
	},
	{
		id: '359',
		name: 'absol',
		types: ['dark'],
		mega: [
			{
				name: 'mega absol',
				types: ['dark'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/359-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/359.png'
	},
	{
		id: '360',
		name: 'wynaut',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/360.png'
	},
	{
		id: '361',
		name: 'snorunt',
		types: ['ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/361.png'
	},
	{
		id: '362',
		name: 'glalie',
		types: ['ice'],
		mega: [
			{
				name: 'mega glalie',
				types: ['ice'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/362-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/362.png'
	},
	{
		id: '363',
		name: 'spheal',
		types: ['ice', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/363.png'
	},
	{
		id: '364',
		name: 'sealeo',
		types: ['ice', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/364.png'
	},
	{
		id: '365',
		name: 'walrein',
		types: ['ice', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/365.png'
	},
	{
		id: '366',
		name: 'clamperl',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/366.png'
	},
	{
		id: '367',
		name: 'huntail',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/367.png'
	},
	{
		id: '368',
		name: 'gorebyss',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/368.png'
	},
	{
		id: '369',
		name: 'relicanth',
		types: ['water', 'rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/369.png'
	},
	{
		id: '370',
		name: 'luvdisc',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/370.png'
	},
	{
		id: '371',
		name: 'bagon',
		types: ['dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/371.png'
	},
	{
		id: '372',
		name: 'shelgon',
		types: ['dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/372.png'
	},
	{
		id: '373',
		name: 'salamence',
		types: ['dragon', 'flying'],
		mega: [
			{
				name: 'mega salamence',
				types: ['dragon', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/373-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/373.png'
	},
	{
		id: '374',
		name: 'beldum',
		types: ['steel', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/374.png'
	},
	{
		id: '375',
		name: 'metang',
		types: ['steel', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/375.png'
	},
	{
		id: '376',
		name: 'metagross',
		types: ['steel', 'psychic'],
		mega: [
			{
				name: 'mega metagross',
				types: ['steel', 'psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/376-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/376.png'
	},
	{
		id: '377',
		name: 'regirock',
		types: ['rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/377.png'
	},
	{
		id: '378',
		name: 'regice',
		types: ['ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/378.png'
	},
	{
		id: '379',
		name: 'registeel',
		types: ['steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/379.png'
	},
	{
		id: '380',
		name: 'latias',
		types: ['dragon', 'psychic'],
		mega: [
			{
				name: 'mega latias',
				types: ['dragon', 'psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/380-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/380.png'
	},
	{
		id: '381',
		name: 'latios',
		types: ['dragon', 'psychic'],
		mega: [
			{
				name: 'mega latios',
				types: ['dragon', 'psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/381-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/381.png'
	},
	{
		id: '382',
		name: 'kyogre',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'primal kyogre',
				types: ['water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/382-Primal.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/382.png'
	},
	{
		id: '383',
		name: 'groudon',
		types: ['ground'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'primal groudon',
				types: ['ground', 'fire'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/383-Primal.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/383.png'
	},
	{
		id: '384',
		name: 'rayquaza',
		types: ['dragon', 'flying'],
		mega: [
			{
				name: 'mega rayquaza',
				types: ['dragon', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/384-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/384.png'
	},
	{
		id: '385',
		name: 'jirachi',
		types: ['steel', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/385.png'
	},
	{
		id: '386',
		name: 'deoxys',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'normal forme',
				types: ['psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/386.png'
			},
			{
				name: 'attack forme',
				types: ['psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/386-Attack.png'
			},
			{
				name: 'defense forme',
				types: ['psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/386-Defense.png'
			},
			{
				name: 'speed forme',
				types: ['psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/386-Speed.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/386.png'
	},
	{
		id: '387',
		name: 'turtwig',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/387.png'
	},
	{
		id: '388',
		name: 'grotle',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/388.png'
	},
	{
		id: '389',
		name: 'torterra',
		types: ['grass', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/389.png'
	},
	{
		id: '390',
		name: 'chimchar',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/390.png'
	},
	{
		id: '391',
		name: 'monferno',
		types: ['fire', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/391.png'
	},
	{
		id: '392',
		name: 'infernape',
		types: ['fire', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/392.png'
	},
	{
		id: '393',
		name: 'piplup',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/393.png'
	},
	{
		id: '394',
		name: 'prinplup',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/394.png'
	},
	{
		id: '395',
		name: 'empoleon',
		types: ['water', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/395.png'
	},
	{
		id: '396',
		name: 'starly',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/396.png'
	},
	{
		id: '397',
		name: 'staravia',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/397.png'
	},
	{
		id: '398',
		name: 'staraptor',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/398.png'
	},
	{
		id: '399',
		name: 'bidoof',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/399.png'
	},
	{
		id: '400',
		name: 'bibarel',
		types: ['normal', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/400.png'
	},
	{
		id: '401',
		name: 'kricketot',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/401.png'
	},
	{
		id: '402',
		name: 'kricketune',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/402.png'
	},
	{
		id: '403',
		name: 'shinx',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/403.png'
	},
	{
		id: '404',
		name: 'luxio',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/404.png'
	},
	{
		id: '405',
		name: 'luxray',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/405.png'
	},
	{
		id: '406',
		name: 'budew',
		types: ['grass', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/406.png'
	},
	{
		id: '407',
		name: 'roserade',
		types: ['grass', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/407.png'
	},
	{
		id: '408',
		name: 'cranidos',
		types: ['rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/408.png'
	},
	{
		id: '409',
		name: 'rampardos',
		types: ['rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/409.png'
	},
	{
		id: '410',
		name: 'shieldon',
		types: ['rock', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/410.png'
	},
	{
		id: '411',
		name: 'bastiodon',
		types: ['rock', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/411.png'
	},
	{
		id: '412',
		name: 'burmy',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'plant cloak',
				types: ['bug'],
				image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/412.png'
			},
			{
				name: 'sandy cloak',
				types: ['bug'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/412-Sandy.png'
			},
			{
				name: 'trash cloak',
				types: ['bug'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/412-Trash.png'
			}
		],
		image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/412.png'
	},
	{
		id: '413',
		name: 'wormadam',
		types: ['bug', 'grass'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'plant cloak',
				types: ['bug', 'grass'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/413.png'
			},
			{
				name: 'sandy cloak',
				types: ['bug', 'ground'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/413-Sandy.png'
			},
			{
				name: 'trash cloak',
				types: ['bug', 'steel'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/413-Trash.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/413.png'
	},
	{
		id: '414',
		name: 'mothim',
		types: ['bug', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/414.png'
	},
	{
		id: '415',
		name: 'combee',
		types: ['bug', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/415.png'
	},
	{
		id: '416',
		name: 'vespiquen',
		types: ['bug', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/416.png'
	},
	{
		id: '417',
		name: 'pachirisu',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/417.png'
	},
	{
		id: '418',
		name: 'buizel',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/418.png'
	},
	{
		id: '419',
		name: 'floatzel',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/419.png'
	},
	{
		id: '420',
		name: 'cherubi',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/420.png'
	},
	{
		id: '421',
		name: 'cherrim',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'overcast form',
				types: ['grass'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/421.png'
			},
			{
				name: 'sunshine form',
				types: ['grass'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/421-Sunshine.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/421.png'
	},
	{
		id: '422',
		name: 'shellos',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'west sea',
				types: ['water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/422-West.png'
			},
			{
				name: 'east sea',
				types: ['water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/422-East.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/422-West.png'
	},
	{
		id: '423',
		name: 'gastrodon',
		types: ['water', 'ground'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'west sea',
				types: ['water', 'ground'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/423-West.png'
			},
			{
				name: 'east sea',
				types: ['water', 'ground'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/423-East.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/423-West.png'
	},
	{
		id: '424',
		name: 'ambipom',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/424.png'
	},
	{
		id: '425',
		name: 'drifloon',
		types: ['ghost', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/425.png'
	},
	{
		id: '426',
		name: 'drifblim',
		types: ['ghost', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/426.png'
	},
	{
		id: '427',
		name: 'buneary',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/427.png'
	},
	{
		id: '428',
		name: 'lopunny',
		types: ['normal'],
		mega: [
			{
				name: 'mega lopunny',
				types: ['normal', 'fighting'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/428-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/428.png'
	},
	{
		id: '429',
		name: 'mismagius',
		types: ['ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/429.png'
	},
	{
		id: '430',
		name: 'honchkrow',
		types: ['dark', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/430.png'
	},
	{
		id: '431',
		name: 'glameow',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/431.png'
	},
	{
		id: '432',
		name: 'purugly',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/432.png'
	},
	{
		id: '433',
		name: 'chingling',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/433.png'
	},
	{
		id: '434',
		name: 'stunky',
		types: ['poison', 'dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/434.png'
	},
	{
		id: '435',
		name: 'skuntank',
		types: ['poison', 'dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/435.png'
	},
	{
		id: '436',
		name: 'bronzor',
		types: ['steel', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/436.png'
	},
	{
		id: '437',
		name: 'bronzong',
		types: ['steel', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/437.png'
	},
	{
		id: '438',
		name: 'bonsly',
		types: ['rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/438.png'
	},
	{
		id: '439',
		name: 'mime-jr',
		types: ['psychic', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/439.png'
	},
	{
		id: '440',
		name: 'happiny',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/440.png'
	},
	{
		id: '441',
		name: 'chatot',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/441.png'
	},
	{
		id: '442',
		name: 'spiritomb',
		types: ['ghost', 'dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/442.png'
	},
	{
		id: '443',
		name: 'gible',
		types: ['dragon', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/443.png'
	},
	{
		id: '444',
		name: 'gabite',
		types: ['dragon', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/444.png'
	},
	{
		id: '445',
		name: 'garchomp',
		types: ['dragon', 'ground'],
		mega: [
			{
				name: 'mega garchomp',
				types: ['dragon', 'ground'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/445-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/445.png'
	},
	{
		id: '446',
		name: 'munchlax',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/446.png'
	},
	{
		id: '447',
		name: 'riolu',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/447.png'
	},
	{
		id: '448',
		name: 'lucario',
		types: ['fighting', 'steel'],
		mega: [
			{
				name: 'mega lucario',
				types: ['fighting', 'steel'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/448-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/448.png'
	},
	{
		id: '449',
		name: 'hippopotas',
		types: ['ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/449.png'
	},
	{
		id: '450',
		name: 'hippowdon',
		types: ['ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/450.png'
	},
	{
		id: '451',
		name: 'skorupi',
		types: ['poison', 'bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/451.png'
	},
	{
		id: '452',
		name: 'drapion',
		types: ['poison', 'dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/452.png'
	},
	{
		id: '453',
		name: 'croagunk',
		types: ['poison', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/453.png'
	},
	{
		id: '454',
		name: 'toxicroak',
		types: ['poison', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/454.png'
	},
	{
		id: '455',
		name: 'carnivine',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/455.png'
	},
	{
		id: '456',
		name: 'finneon',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/456.png'
	},
	{
		id: '457',
		name: 'lumineon',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/457.png'
	},
	{
		id: '458',
		name: 'mantyke',
		types: ['water', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/458.png'
	},
	{
		id: '459',
		name: 'snover',
		types: ['grass', 'ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/459.png'
	},
	{
		id: '460',
		name: 'abomasnow',
		types: ['grass', 'ice'],
		mega: [
			{
				name: 'mega abomasnow',
				types: ['grass', 'ice'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/460-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/460.png'
	},
	{
		id: '461',
		name: 'weavile',
		types: ['dark', 'ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/461.png'
	},
	{
		id: '462',
		name: 'magnezone',
		types: ['electric', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/462.png'
	},
	{
		id: '463',
		name: 'lickilicky',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/463.png'
	},
	{
		id: '464',
		name: 'rhyperior',
		types: ['ground', 'rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/464.png'
	},
	{
		id: '465',
		name: 'tangrowth',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/465.png'
	},
	{
		id: '466',
		name: 'electivire',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/466.png'
	},
	{
		id: '467',
		name: 'magmortar',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/467.png'
	},
	{
		id: '468',
		name: 'togekiss',
		types: ['fairy', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/468.png'
	},
	{
		id: '469',
		name: 'yanmega',
		types: ['bug', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/469.png'
	},
	{
		id: '470',
		name: 'leafeon',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/470.png'
	},
	{
		id: '471',
		name: 'glaceon',
		types: ['ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/471.png'
	},
	{
		id: '472',
		name: 'gliscor',
		types: ['ground', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/472.png'
	},
	{
		id: '473',
		name: 'mamoswine',
		types: ['ice', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/473.png'
	},
	{
		id: '474',
		name: 'porygon-z',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/474.png'
	},
	{
		id: '475',
		name: 'gallade',
		types: ['psychic', 'fighting'],
		mega: [
			{
				name: 'mega lopunny',
				types: ['psychic', 'fighting'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/475-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/475.png'
	},
	{
		id: '476',
		name: 'probopass',
		types: ['rock', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/476.png'
	},
	{
		id: '477',
		name: 'dusknoir',
		types: ['ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/477.png'
	},
	{
		id: '478',
		name: 'froslass',
		types: ['ice', 'ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/478.png'
	},
	{
		id: '479',
		name: 'rotom',
		types: ['electric', 'ghost'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'heat rotom',
				types: ['electric', 'fire'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/479-Heat.png'
			},
			{
				name: 'wash rotom',
				types: ['electric', 'water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/479-Wash.png'
			},
			{
				name: 'frost rotom',
				types: ['electric', 'ice'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/479-Frost.png'
			},
			{
				name: 'fan rotom',
				types: ['electric', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/479-Fan.png'
			},
			{
				name: 'mow rotom',
				types: ['electric', 'grass'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/479-Mow.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/479.png'
	},
	{
		id: '480',
		name: 'uxie',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/480.png'
	},
	{
		id: '481',
		name: 'mesprit',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/481.png'
	},
	{
		id: '482',
		name: 'azelf',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/482.png'
	},
	{
		id: '483',
		name: 'dialga',
		types: ['steel', 'dragon'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'origin forme',
				types: ['steel', 'dragon'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/483-Origin.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/483.png'
	},
	{
		id: '484',
		name: 'palkia',
		types: ['water', 'dragon'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'origin forme',
				types: ['water', 'dragon'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/484-Origin.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/484.png'
	},
	{
		id: '485',
		name: 'heatran',
		types: ['fire', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/485.png'
	},
	{
		id: '486',
		name: 'regigigas',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/486.png'
	},
	{
		id: '487',
		name: 'giratina',
		types: ['ghost', 'dragon'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'altered forme',
				types: ['ghost', 'dragon'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/487.png'
			},
			{
				name: 'origin forme',
				types: ['ghost', 'dragon'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/487-Origin.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/487.png'
	},
	{
		id: '488',
		name: 'cresselia',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/488.png'
	},
	{
		id: '489',
		name: 'phione',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/489.png'
	},
	{
		id: '490',
		name: 'manaphy',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/490.png'
	},
	{
		id: '491',
		name: 'darkrai',
		types: ['dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/491.png'
	},
	{
		id: '492',
		name: 'shaymin',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'land forme',
				types: ['grass', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/492.png'
			},
			{
				name: 'sky forme',
				types: ['grass', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/492-Sky.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/492.png'
	},
	{
		id: '493',
		name: 'arceus',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/493.png'
	},
	{
		id: '494',
		name: 'victini',
		types: ['psychic', 'fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/494.png'
	},
	{
		id: '495',
		name: 'snivy',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/495.png'
	},
	{
		id: '496',
		name: 'servine',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/496.png'
	},
	{
		id: '497',
		name: 'serperior',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/497.png'
	},
	{
		id: '498',
		name: 'tepig',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/498.png'
	},
	{
		id: '499',
		name: 'pignite',
		types: ['fire', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/499.png'
	},
	{
		id: '500',
		name: 'emboar',
		types: ['fire', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/500.png'
	},
	{
		id: '501',
		name: 'oshawott',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/501.png'
	},
	{
		id: '502',
		name: 'dewott',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/502.png'
	},
	{
		id: '503',
		name: 'samurott',
		types: ['water'],
		mega: [],
		variant: [
			{
				name: 'hisuian form',
				types: ['water', 'dark'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/503-Hisui.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/503.png'
	},
	{
		id: '504',
		name: 'patrat',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/504.png'
	},
	{
		id: '505',
		name: 'watchog',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/505.png'
	},
	{
		id: '506',
		name: 'lillipup',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/506.png'
	},
	{
		id: '507',
		name: 'herdier',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/507.png'
	},
	{
		id: '508',
		name: 'stoutland',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/508.png'
	},
	{
		id: '509',
		name: 'purrloin',
		types: ['dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/509.png'
	},
	{
		id: '510',
		name: 'liepard',
		types: ['dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/510.png'
	},
	{
		id: '511',
		name: 'pansage',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/511.png'
	},
	{
		id: '512',
		name: 'simisage',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/512.png'
	},
	{
		id: '513',
		name: 'pansear',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/513.png'
	},
	{
		id: '514',
		name: 'simisear',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/514.png'
	},
	{
		id: '515',
		name: 'panpour',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/515.png'
	},
	{
		id: '516',
		name: 'simipour',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/516.png'
	},
	{
		id: '517',
		name: 'munna',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/517.png'
	},
	{
		id: '518',
		name: 'musharna',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/518.png'
	},
	{
		id: '519',
		name: 'pidove',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/519.png'
	},
	{
		id: '520',
		name: 'tranquill',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/520.png'
	},
	{
		id: '521',
		name: 'unfezant',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/521.png'
	},
	{
		id: '522',
		name: 'blitzle',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/522.png'
	},
	{
		id: '523',
		name: 'zebstrika',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/523.png'
	},
	{
		id: '524',
		name: 'roggenrola',
		types: ['rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/524.png'
	},
	{
		id: '525',
		name: 'boldore',
		types: ['rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/525.png'
	},
	{
		id: '526',
		name: 'gigalith',
		types: ['rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/526.png'
	},
	{
		id: '527',
		name: 'woobat',
		types: ['psychic', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/527.png'
	},
	{
		id: '528',
		name: 'swoobat',
		types: ['psychic', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/528.png'
	},
	{
		id: '529',
		name: 'drilbur',
		types: ['ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/529.png'
	},
	{
		id: '530',
		name: 'excadrill',
		types: ['ground', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/530.png'
	},
	{
		id: '531',
		name: 'audino',
		types: ['normal'],
		mega: [
			{
				name: 'mega audino',
				types: ['normal', 'fairy'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/531-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/531.png'
	},
	{
		id: '532',
		name: 'timburr',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/532.png'
	},
	{
		id: '533',
		name: 'gurdurr',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/533.png'
	},
	{
		id: '534',
		name: 'conkeldurr',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/534.png'
	},
	{
		id: '535',
		name: 'tympole',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/535.png'
	},
	{
		id: '536',
		name: 'palpitoad',
		types: ['water', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/536.png'
	},
	{
		id: '537',
		name: 'seismitoad',
		types: ['water', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/537.png'
	},
	{
		id: '538',
		name: 'throh',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/538.png'
	},
	{
		id: '539',
		name: 'sawk',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/539.png'
	},
	{
		id: '540',
		name: 'sewaddle',
		types: ['bug', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/540.png'
	},
	{
		id: '541',
		name: 'swadloon',
		types: ['bug', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/541.png'
	},
	{
		id: '542',
		name: 'leavanny',
		types: ['bug', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/542.png'
	},
	{
		id: '543',
		name: 'venipede',
		types: ['bug', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/543.png'
	},
	{
		id: '544',
		name: 'whirlipede',
		types: ['bug', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/544.png'
	},
	{
		id: '545',
		name: 'scolipede',
		types: ['bug', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/545.png'
	},
	{
		id: '546',
		name: 'cottonee',
		types: ['grass', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/546.png'
	},
	{
		id: '547',
		name: 'whimsicott',
		types: ['grass', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/547.png'
	},
	{
		id: '548',
		name: 'petilil',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/548.png'
	},
	{
		id: '549',
		name: 'lilligant',
		types: ['grass'],
		mega: [],
		variant: [
			{
				name: 'hisuian form',
				types: ['grass', 'fighting'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/549-Hisui.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/549.png'
	},
	{
		id: '550',
		name: 'basculin',
		types: ['water'],
		mega: [],
		variant: [
			{
				name: 'white-striped form',
				types: ['water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/550-White-Striped.png'
			}
		],
		forms: [
			{
				name: 'red-striped form',
				types: ['water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/550-Red-Striped.png'
			},
			{
				name: 'blue-striped form',
				types: ['water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/550-Blue-Striped.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/550-Red-Striped.png'
	},
	{
		id: '551',
		name: 'sandile',
		types: ['ground', 'dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/551.png'
	},
	{
		id: '552',
		name: 'krokorok',
		types: ['ground', 'dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/552.png'
	},
	{
		id: '553',
		name: 'krookodile',
		types: ['ground', 'dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/553.png'
	},
	{
		id: '554',
		name: 'darumaka',
		types: ['fire'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['ice'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/554-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/554.png'
	},
	{
		id: '555',
		name: 'darmanitan',
		types: ['fire'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['ice'],
				forms: [
					{
						name: 'standard mode',
						types: ['ice'],
						image:
							'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/555-Galar-Standard.png'
					},
					{
						name: 'zen mode',
						types: ['ice', 'fire'],
						image:
							'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/555-Galar-Zen.png'
					}
				]
			}
		],
		forms: [
			{
				name: 'standard mode',
				types: ['fire'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/555.png'
			},
			{
				name: 'zen mode',
				types: ['fire', 'psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/555-Zen.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/555.png'
	},
	{
		id: '556',
		name: 'maractus',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/556.png'
	},
	{
		id: '557',
		name: 'dwebble',
		types: ['bug', 'rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/557.png'
	},
	{
		id: '558',
		name: 'crustle',
		types: ['bug', 'rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/558.png'
	},
	{
		id: '559',
		name: 'scraggy',
		types: ['dark', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/559.png'
	},
	{
		id: '560',
		name: 'scrafty',
		types: ['dark', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/560.png'
	},
	{
		id: '561',
		name: 'sigilyph',
		types: ['psychic', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/561.png'
	},
	{
		id: '562',
		name: 'yamask',
		types: ['ghost'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['ground', 'ghost'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/562-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/562.png'
	},
	{
		id: '563',
		name: 'cofagrigus',
		types: ['ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/563.png'
	},
	{
		id: '564',
		name: 'tirtouga',
		types: ['water', 'rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/564.png'
	},
	{
		id: '565',
		name: 'carracosta',
		types: ['water', 'rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/565.png'
	},
	{
		id: '566',
		name: 'archen',
		types: ['rock', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/566.png'
	},
	{
		id: '567',
		name: 'archeops',
		types: ['rock', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/567.png'
	},
	{
		id: '568',
		name: 'trubbish',
		types: ['poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/568.png'
	},
	{
		id: '569',
		name: 'garbodor',
		types: ['poison'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax garbodor',
				types: ['poison'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/569-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/569.png'
	},
	{
		id: '570',
		name: 'zorua',
		types: ['dark'],
		mega: [],
		variant: [
			{
				name: 'hisuian form',
				types: ['normal', 'ghost'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/570-Hisui.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/570.png'
	},
	{
		id: '571',
		name: 'zoroark',
		types: ['dark'],
		mega: [],
		variant: [
			{
				name: 'hisuian form',
				types: ['normal', 'ghost'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/571-Hisui.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/571.png'
	},
	{
		id: '572',
		name: 'minccino',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/572.png'
	},
	{
		id: '573',
		name: 'cinccino',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/573.png'
	},
	{
		id: '574',
		name: 'gothita',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/574.png'
	},
	{
		id: '575',
		name: 'gothorita',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/575.png'
	},
	{
		id: '576',
		name: 'gothitelle',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/576.png'
	},
	{
		id: '577',
		name: 'solosis',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/577.png'
	},
	{
		id: '578',
		name: 'duosion',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/578.png'
	},
	{
		id: '579',
		name: 'reuniclus',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/579.png'
	},
	{
		id: '580',
		name: 'ducklett',
		types: ['water', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/580.png'
	},
	{
		id: '581',
		name: 'swanna',
		types: ['water', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/581.png'
	},
	{
		id: '582',
		name: 'vanillite',
		types: ['ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/582.png'
	},
	{
		id: '583',
		name: 'vanillish',
		types: ['ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/583.png'
	},
	{
		id: '584',
		name: 'vanilluxe',
		types: ['ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/584.png'
	},
	{
		id: '585',
		name: 'deerling',
		types: ['normal', 'grass'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'spring form',
				types: ['normal', 'grass'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/585.png'
			},
			{
				name: 'summer form',
				types: ['normal', 'grass'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/585-Summer.png'
			},
			{
				name: 'autumn form',
				types: ['normal', 'grass'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/585-Autumn.png'
			},
			{
				name: 'winter form',
				types: ['normal', 'grass'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/585-Winter.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/585.png'
	},
	{
		id: '586',
		name: 'sawsbuck',
		types: ['normal', 'grass'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'spring form',
				types: ['normal', 'grass'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/586.png'
			},
			{
				name: 'summer form',
				types: ['normal', 'grass'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/586-Summer.png'
			},
			{
				name: 'autumn form',
				types: ['normal', 'grass'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/586-Autumn.png'
			},
			{
				name: 'winter form',
				types: ['normal', 'grass'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/586-Winter.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/586.png'
	},
	{
		id: '587',
		name: 'emolga',
		types: ['electric', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/587.png'
	},
	{
		id: '588',
		name: 'karrablast',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/588.png'
	},
	{
		id: '589',
		name: 'escavalier',
		types: ['bug', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/589.png'
	},
	{
		id: '590',
		name: 'foongus',
		types: ['grass', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/590.png'
	},
	{
		id: '591',
		name: 'amoonguss',
		types: ['grass', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/591.png'
	},
	{
		id: '592',
		name: 'frillish',
		types: ['water', 'ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/592.png'
	},
	{
		id: '593',
		name: 'jellicent',
		types: ['water', 'ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/593.png'
	},
	{
		id: '594',
		name: 'alomomola',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/594.png'
	},
	{
		id: '595',
		name: 'joltik',
		types: ['bug', 'electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/595.png'
	},
	{
		id: '596',
		name: 'galvantula',
		types: ['bug', 'electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/596.png'
	},
	{
		id: '597',
		name: 'ferroseed',
		types: ['grass', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/597.png'
	},
	{
		id: '598',
		name: 'ferrothorn',
		types: ['grass', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/598.png'
	},
	{
		id: '599',
		name: 'klink',
		types: ['steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/599.png'
	},
	{
		id: '600',
		name: 'klang',
		types: ['steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/600.png'
	},
	{
		id: '601',
		name: 'klinklang',
		types: ['steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/601.png'
	},
	{
		id: '602',
		name: 'tynamo',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/602.png'
	},
	{
		id: '603',
		name: 'eelektrik',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/603.png'
	},
	{
		id: '604',
		name: 'eelektross',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/604.png'
	},
	{
		id: '605',
		name: 'elgyem',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/605.png'
	},
	{
		id: '606',
		name: 'beheeyem',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/606.png'
	},
	{
		id: '607',
		name: 'litwick',
		types: ['ghost', 'fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/607.png'
	},
	{
		id: '608',
		name: 'lampent',
		types: ['ghost', 'fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/608.png'
	},
	{
		id: '609',
		name: 'chandelure',
		types: ['ghost', 'fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/609.png'
	},
	{
		id: '610',
		name: 'axew',
		types: ['dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/610.png'
	},
	{
		id: '611',
		name: 'fraxure',
		types: ['dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/611.png'
	},
	{
		id: '612',
		name: 'haxorus',
		types: ['dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/612.png'
	},
	{
		id: '613',
		name: 'cubchoo',
		types: ['ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/613.png'
	},
	{
		id: '614',
		name: 'beartic',
		types: ['ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/614.png'
	},
	{
		id: '615',
		name: 'cryogonal',
		types: ['ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/615.png'
	},
	{
		id: '616',
		name: 'shelmet',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/616.png'
	},
	{
		id: '617',
		name: 'accelgor',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/617.png'
	},
	{
		id: '618',
		name: 'stunfisk',
		types: ['ground', 'electric'],
		mega: [],
		variant: [
			{
				name: 'galarian form',
				types: ['ground', 'steel'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/618-Galar.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/618.png'
	},
	{
		id: '619',
		name: 'mienfoo',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/619.png'
	},
	{
		id: '620',
		name: 'mienshao',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/620.png'
	},
	{
		id: '621',
		name: 'druddigon',
		types: ['dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/621.png'
	},
	{
		id: '622',
		name: 'golett',
		types: ['ground', 'ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/622.png'
	},
	{
		id: '623',
		name: 'golurk',
		types: ['ground', 'ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/623.png'
	},
	{
		id: '624',
		name: 'pawniard',
		types: ['dark', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/624.png'
	},
	{
		id: '625',
		name: 'bisharp',
		types: ['dark', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/625.png'
	},
	{
		id: '626',
		name: 'bouffalant',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/626.png'
	},
	{
		id: '627',
		name: 'rufflet',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/627.png'
	},
	{
		id: '628',
		name: 'braviary',
		types: ['normal', 'flying'],
		mega: [],
		variant: [
			{
				name: 'hisuian form',
				types: ['psychic', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/628-Hisui.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/628.png'
	},
	{
		id: '629',
		name: 'vullaby',
		types: ['dark', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/629.png'
	},
	{
		id: '630',
		name: 'mandibuzz',
		types: ['dark', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/630.png'
	},
	{
		id: '631',
		name: 'heatmor',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/631.png'
	},
	{
		id: '632',
		name: 'durant',
		types: ['bug', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/632.png'
	},
	{
		id: '633',
		name: 'deino',
		types: ['dark', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/633.png'
	},
	{
		id: '634',
		name: 'zweilous',
		types: ['dark', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/634.png'
	},
	{
		id: '635',
		name: 'hydreigon',
		types: ['dark', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/635.png'
	},
	{
		id: '636',
		name: 'larvesta',
		types: ['bug', 'fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/636.png'
	},
	{
		id: '637',
		name: 'volcarona',
		types: ['bug', 'fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/637.png'
	},
	{
		id: '638',
		name: 'cobalion',
		types: ['steel', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/638.png'
	},
	{
		id: '639',
		name: 'terrakion',
		types: ['rock', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/639.png'
	},
	{
		id: '640',
		name: 'virizion',
		types: ['grass', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/640.png'
	},
	{
		id: '641',
		name: 'tornadus',
		types: ['flying'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'incarnate forme',
				types: ['flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/641.png'
			},
			{
				name: 'therian forme',
				types: ['flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/641-Therian.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/641.png'
	},
	{
		id: '642',
		name: 'thundurus-incarnate',
		types: ['electric', 'flying'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'incarnate forme',
				types: ['electric', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/642.png'
			},
			{
				name: 'therian forme',
				types: ['electric', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/642-Therian.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/642.png'
	},
	{
		id: '643',
		name: 'reshiram',
		types: ['dragon', 'fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/643.png'
	},
	{
		id: '644',
		name: 'zekrom',
		types: ['dragon', 'electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/644.png'
	},
	{
		id: '645',
		name: 'landorus',
		types: ['ground', 'flying'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'incarnate forme',
				types: ['ground', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/645.png'
			},
			{
				name: 'therian forme',
				types: ['ground', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/645-Therian.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/645.png'
	},
	{
		id: '646',
		name: 'kyurem',
		types: ['dragon', 'ice'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'white kyurem',
				types: ['dragon', 'ice'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/646-White.png'
			},
			{
				name: 'black kyurem',
				types: ['dragon', 'ice'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/646-Black.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/646.png'
	},
	{
		id: '647',
		name: 'keldeo',
		types: ['water', 'fighting'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'ordinary form',
				types: ['water', 'fighting'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/647.png'
			},
			{
				name: 'resolute form',
				types: ['water', 'fighting'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/647-Resolute.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/647.png'
	},
	{
		id: '648',
		name: 'meloetta',
		types: ['normal', 'psychic'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'aria forme',
				types: ['normal', 'psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/648.png'
			},
			{
				name: 'pirouette forme',
				types: ['normal', 'fighting'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/648-Pirouette.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/648.png'
	},
	{
		id: '649',
		name: 'genesect',
		types: ['bug', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/649.png'
	},
	{
		id: '650',
		name: 'chespin',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/650.png'
	},
	{
		id: '651',
		name: 'quilladin',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/651.png'
	},
	{
		id: '652',
		name: 'chesnaught',
		types: ['grass', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/652.png'
	},
	{
		id: '653',
		name: 'fennekin',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/653.png'
	},
	{
		id: '654',
		name: 'braixen',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/654.png'
	},
	{
		id: '655',
		name: 'delphox',
		types: ['fire', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/655.png'
	},
	{
		id: '656',
		name: 'froakie',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/656.png'
	},
	{
		id: '657',
		name: 'frogadier',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/657.png'
	},
	{
		id: '658',
		name: 'greninja',
		types: ['water', 'dark'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'ash-greninja',
				types: ['water', 'dark'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/658-Ash.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/658.png'
	},
	{
		id: '659',
		name: 'bunnelby',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/659.png'
	},
	{
		id: '660',
		name: 'diggersby',
		types: ['normal', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/660.png'
	},
	{
		id: '661',
		name: 'fletchling',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/661.png'
	},
	{
		id: '662',
		name: 'fletchinder',
		types: ['fire', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/662.png'
	},
	{
		id: '663',
		name: 'talonflame',
		types: ['fire', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/663.png'
	},
	{
		id: '664',
		name: 'scatterbug',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/664.png'
	},
	{
		id: '665',
		name: 'spewpa',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/665.png'
	},
	{
		id: '666',
		name: 'vivillon',
		types: ['bug', 'flying'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'meadow pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666.png'
			},
			{
				name: 'archipelago pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Archipelago.png'
			},
			{
				name: 'continental pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Continental.png'
			},
			{
				name: 'elegant pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Elegant.png'
			},
			{
				name: 'garden pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Garden.png'
			},
			{
				name: 'high plains pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-High-Plains.png'
			},
			{
				name: 'icy snow pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Icy-Snow.png'
			},
			{
				name: 'jungle pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Jungle.png'
			},
			{
				name: 'marine pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Marine.png'
			},
			{
				name: 'modern pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Modern.png'
			},
			{
				name: 'monsoon pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Monsoon.png'
			},
			{
				name: 'ocean pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Ocean.png'
			},
			{
				name: 'polar pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Polar.png'
			},
			{
				name: 'river pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-River.png'
			},
			{
				name: 'sandstorm pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Sandstorm.png'
			},
			{
				name: 'savanna pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Savanna.png'
			},
			{
				name: 'sun pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Sun.png'
			},
			{
				name: 'tundra pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Tundra.png'
			},
			{
				name: 'fancy pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Fancy.png'
			},
			{
				name: 'poké ball pattern',
				types: ['bug', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666-Poke-Ball.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/666.png'
	},
	{
		id: '667',
		name: 'litleo',
		types: ['fire', 'normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/667.png'
	},
	{
		id: '668',
		name: 'pyroar',
		types: ['fire', 'normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/668.png'
	},
	{
		id: '669',
		name: 'flabebe',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/669.png'
	},
	{
		id: '670',
		name: 'floette',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/670.png'
	},
	{
		id: '671',
		name: 'florges',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/671.png'
	},
	{
		id: '672',
		name: 'skiddo',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/672.png'
	},
	{
		id: '673',
		name: 'gogoat',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/673.png'
	},
	{
		id: '674',
		name: 'pancham',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/674.png'
	},
	{
		id: '675',
		name: 'pangoro',
		types: ['fighting', 'dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/675.png'
	},
	{
		id: '676',
		name: 'furfrou',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'natural form',
				types: ['normal'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/676.png'
			},
			{
				name: 'heart form',
				types: ['normal'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/676-Heart.png'
			},
			{
				name: 'star form',
				types: ['normal'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/676-Star.png'
			},
			{
				name: 'diamond form',
				types: ['normal'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/676-Diamond.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/676.png'
	},
	{
		id: '677',
		name: 'espurr',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/677.png'
	},
	{
		id: '678',
		name: 'meowstic-male',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/678.png'
	},
	{
		id: '679',
		name: 'honedge',
		types: ['steel', 'ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/679.png'
	},
	{
		id: '680',
		name: 'doublade',
		types: ['steel', 'ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/680.png'
	},
	{
		id: '681',
		name: 'aegislash',
		types: ['steel', 'ghost'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'shield forme',
				types: ['steel', 'ghost'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/681.png'
			},
			{
				name: 'blade forme',
				types: ['steel', 'ghost'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/681-Blade.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/681.png'
	},
	{
		id: '682',
		name: 'spritzee',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/682.png'
	},
	{
		id: '683',
		name: 'aromatisse',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/683.png'
	},
	{
		id: '684',
		name: 'swirlix',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/684.png'
	},
	{
		id: '685',
		name: 'slurpuff',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/685.png'
	},
	{
		id: '686',
		name: 'inkay',
		types: ['dark', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/686.png'
	},
	{
		id: '687',
		name: 'malamar',
		types: ['dark', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/687.png'
	},
	{
		id: '688',
		name: 'binacle',
		types: ['rock', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/688.png'
	},
	{
		id: '689',
		name: 'barbaracle',
		types: ['rock', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/689.png'
	},
	{
		id: '690',
		name: 'skrelp',
		types: ['poison', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/690.png'
	},
	{
		id: '691',
		name: 'dragalge',
		types: ['poison', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/691.png'
	},
	{
		id: '692',
		name: 'clauncher',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/692.png'
	},
	{
		id: '693',
		name: 'clawitzer',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/693.png'
	},
	{
		id: '694',
		name: 'helioptile',
		types: ['electric', 'normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/694.png'
	},
	{
		id: '695',
		name: 'heliolisk',
		types: ['electric', 'normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/695.png'
	},
	{
		id: '696',
		name: 'tyrunt',
		types: ['rock', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/696.png'
	},
	{
		id: '697',
		name: 'tyrantrum',
		types: ['rock', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/697.png'
	},
	{
		id: '698',
		name: 'amaura',
		types: ['rock', 'ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/698.png'
	},
	{
		id: '699',
		name: 'aurorus',
		types: ['rock', 'ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/699.png'
	},
	{
		id: '700',
		name: 'sylveon',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/700.png'
	},
	{
		id: '701',
		name: 'hawlucha',
		types: ['fighting', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/701.png'
	},
	{
		id: '702',
		name: 'dedenne',
		types: ['electric', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/702.png'
	},
	{
		id: '703',
		name: 'carbink',
		types: ['rock', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/703.png'
	},
	{
		id: '704',
		name: 'goomy',
		types: ['dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/704.png'
	},
	{
		id: '705',
		name: 'sliggoo',
		types: ['dragon'],
		mega: [],
		variant: [
			{
				name: 'hisuian form',
				types: ['steel', 'dragon'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/705-Hisui.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/705.png'
	},
	{
		id: '706',
		name: 'goodra',
		types: ['dragon'],
		mega: [],
		variant: [
			{
				name: 'hisuian form',
				types: ['steel', 'dragon'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/706-Hisui.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/706.png'
	},
	{
		id: '707',
		name: 'klefki',
		types: ['steel', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/707.png'
	},
	{
		id: '708',
		name: 'phantump',
		types: ['ghost', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/708.png'
	},
	{
		id: '709',
		name: 'trevenant',
		types: ['ghost', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/709.png'
	},
	{
		id: '710',
		name: 'pumpkaboo-average',
		types: ['ghost', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/710.png'
	},
	{
		id: '711',
		name: 'gourgeist-average',
		types: ['ghost', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/711.png'
	},
	{
		id: '712',
		name: 'bergmite',
		types: ['ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/712.png'
	},
	{
		id: '713',
		name: 'avalugg',
		types: ['ice'],
		mega: [],
		variant: [
			{
				name: 'hisuian form',
				types: ['ice', 'rock'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/713-Hisui.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/713.png'
	},
	{
		id: '714',
		name: 'noibat',
		types: ['flying', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/714.png'
	},
	{
		id: '715',
		name: 'noivern',
		types: ['flying', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/715.png'
	},
	{
		id: '716',
		name: 'xerneas',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/716.png'
	},
	{
		id: '717',
		name: 'yveltal',
		types: ['dark', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/717.png'
	},
	{
		id: '718',
		name: 'zygarde-50',
		types: ['dragon', 'ground'],
		mega: [],
		variant: [],
		forms: [
			{
				name: '50% forme',
				types: ['dragon', 'ground'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/718.png'
			},
			{
				name: '10% forme',
				types: ['dragon', 'ground'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/718-10.png'
			},
			{
				name: 'complete forme',
				types: ['dragon', 'ground'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/718-Complete.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/718.png'
	},
	{
		id: '719',
		name: 'diancie',
		types: ['rock', 'fairy'],
		mega: [
			{
				name: 'mega diancie',
				types: ['rock', 'fairy'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/719-Mega.png'
			}
		],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/719.png'
	},
	{
		id: '720',
		name: 'hoopa',
		types: ['psychic', 'ghost'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'hoopa confined',
				types: ['psychic', 'ghost'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/720.png'
			},
			{
				name: 'hoopa unbound',
				types: ['psychic', 'ghost'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/720-Unbound.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/720.png'
	},
	{
		id: '721',
		name: 'volcanion',
		types: ['fire', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/721.png'
	},
	{
		id: '722',
		name: 'rowlet',
		types: ['grass', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/722.png'
	},
	{
		id: '723',
		name: 'dartrix',
		types: ['grass', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/723.png'
	},
	{
		id: '724',
		name: 'decidueye',
		types: ['grass', 'ghost'],
		mega: [],
		variant: [
			{
				name: 'hisuian form',
				types: ['grass', 'fighting'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/724-Hisui.png'
			}
		],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/724.png'
	},
	{
		id: '725',
		name: 'litten',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/725.png'
	},
	{
		id: '726',
		name: 'torracat',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/726.png'
	},
	{
		id: '727',
		name: 'incineroar',
		types: ['fire', 'dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/727.png'
	},
	{
		id: '728',
		name: 'popplio',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/728.png'
	},
	{
		id: '729',
		name: 'brionne',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/729.png'
	},
	{
		id: '730',
		name: 'primarina',
		types: ['water', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/730.png'
	},
	{
		id: '731',
		name: 'pikipek',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/731.png'
	},
	{
		id: '732',
		name: 'trumbeak',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/732.png'
	},
	{
		id: '733',
		name: 'toucannon',
		types: ['normal', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/733.png'
	},
	{
		id: '734',
		name: 'yungoos',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/734.png'
	},
	{
		id: '735',
		name: 'gumshoos',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/735.png'
	},
	{
		id: '736',
		name: 'grubbin',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/736.png'
	},
	{
		id: '737',
		name: 'charjabug',
		types: ['bug', 'electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/737.png'
	},
	{
		id: '738',
		name: 'vikavolt',
		types: ['bug', 'electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/738.png'
	},
	{
		id: '739',
		name: 'crabrawler',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/739.png'
	},
	{
		id: '740',
		name: 'crabominable',
		types: ['fighting', 'ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/740.png'
	},
	{
		id: '741',
		name: 'oricorio',
		types: ['fire', 'flying'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'baile style',
				types: ['fire', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/741.png'
			},
			{
				name: 'pom-pom style',
				types: ['electric', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/741-Pom-Pom.png'
			},
			{
				name: 'pa&lsquo;u style',
				types: ['psychic', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/741-Pau.png'
			},
			{
				name: 'sensu style',
				types: ['ghost', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/741-Sensu.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/741.png'
	},
	{
		id: '742',
		name: 'cutiefly',
		types: ['bug', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/742.png'
	},
	{
		id: '743',
		name: 'ribombee',
		types: ['bug', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/743.png'
	},
	{
		id: '744',
		name: 'rockruff',
		types: ['rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/744.png'
	},
	{
		id: '745',
		name: 'lycanroc',
		types: ['rock'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'midday form',
				types: ['rock'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/745.png'
			},
			{
				name: 'midnight form',
				types: ['rock'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/745-Midnight.png'
			},
			{
				name: 'dusk form',
				types: ['rock'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/745-Dusk.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/745.png'
	},
	{
		id: '746',
		name: 'wishiwashi-solo',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'solo form',
				types: ['water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/746.png'
			},
			{
				name: 'school form',
				types: ['water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/746-School.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/746.png'
	},
	{
		id: '747',
		name: 'mareanie',
		types: ['poison', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/747.png'
	},
	{
		id: '748',
		name: 'toxapex',
		types: ['poison', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/748.png'
	},
	{
		id: '749',
		name: 'mudbray',
		types: ['ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/749.png'
	},
	{
		id: '750',
		name: 'mudsdale',
		types: ['ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/750.png'
	},
	{
		id: '751',
		name: 'dewpider',
		types: ['water', 'bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/751.png'
	},
	{
		id: '752',
		name: 'araquanid',
		types: ['water', 'bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/752.png'
	},
	{
		id: '753',
		name: 'fomantis',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/753.png'
	},
	{
		id: '754',
		name: 'lurantis',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/754.png'
	},
	{
		id: '755',
		name: 'morelull',
		types: ['grass', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/755.png'
	},
	{
		id: '756',
		name: 'shiinotic',
		types: ['grass', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/756.png'
	},
	{
		id: '757',
		name: 'salandit',
		types: ['poison', 'fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/757.png'
	},
	{
		id: '758',
		name: 'salazzle',
		types: ['poison', 'fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/758.png'
	},
	{
		id: '759',
		name: 'stufful',
		types: ['normal', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/759.png'
	},
	{
		id: '760',
		name: 'bewear',
		types: ['normal', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/760.png'
	},
	{
		id: '761',
		name: 'bounsweet',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/761.png'
	},
	{
		id: '762',
		name: 'steenee',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/762.png'
	},
	{
		id: '763',
		name: 'tsareena',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/763.png'
	},
	{
		id: '764',
		name: 'comfey',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/764.png'
	},
	{
		id: '765',
		name: 'oranguru',
		types: ['normal', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/765.png'
	},
	{
		id: '766',
		name: 'passimian',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/766.png'
	},
	{
		id: '767',
		name: 'wimpod',
		types: ['bug', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/767.png'
	},
	{
		id: '768',
		name: 'golisopod',
		types: ['bug', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/768.png'
	},
	{
		id: '769',
		name: 'sandygast',
		types: ['ghost', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/769.png'
	},
	{
		id: '770',
		name: 'palossand',
		types: ['ghost', 'ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/770.png'
	},
	{
		id: '771',
		name: 'pyukumuku',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/771.png'
	},
	{
		id: '772',
		name: 'type-null',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/772.png'
	},
	{
		id: '773',
		name: 'silvally',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/773.png'
	},
	{
		id: '774',
		name: 'minior',
		types: ['rock', 'flying'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'meteor form',
				types: ['rock', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/774.png'
			},
			{
				name: 'core form',
				types: ['rock', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/774-Red.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/774.png'
	},
	{
		id: '775',
		name: 'komala',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/775.png'
	},
	{
		id: '776',
		name: 'turtonator',
		types: ['fire', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/776.png'
	},
	{
		id: '777',
		name: 'togedemaru',
		types: ['electric', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/777.png'
	},
	{
		id: '778',
		name: 'mimikyu-disguised',
		types: ['ghost', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/778.png'
	},
	{
		id: '779',
		name: 'bruxish',
		types: ['water', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/779.png'
	},
	{
		id: '780',
		name: 'drampa',
		types: ['normal', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/780.png'
	},
	{
		id: '781',
		name: 'dhelmise',
		types: ['ghost', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/781.png'
	},
	{
		id: '782',
		name: 'jangmo-o',
		types: ['dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/782.png'
	},
	{
		id: '783',
		name: 'hakamo-o',
		types: ['dragon', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/783.png'
	},
	{
		id: '784',
		name: 'kommo-o',
		types: ['dragon', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/784.png'
	},
	{
		id: '785',
		name: 'tapu-koko',
		types: ['electric', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/785.png'
	},
	{
		id: '786',
		name: 'tapu-lele',
		types: ['psychic', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/786.png'
	},
	{
		id: '787',
		name: 'tapu-bulu',
		types: ['grass', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/787.png'
	},
	{
		id: '788',
		name: 'tapu-fini',
		types: ['water', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/788.png'
	},
	{
		id: '789',
		name: 'cosmog',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/789.png'
	},
	{
		id: '790',
		name: 'cosmoem',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/790.png'
	},
	{
		id: '791',
		name: 'solgaleo',
		types: ['psychic', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/791.png'
	},
	{
		id: '792',
		name: 'lunala',
		types: ['psychic', 'ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/792.png'
	},
	{
		id: '793',
		name: 'nihilego',
		types: ['rock', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/793.png'
	},
	{
		id: '794',
		name: 'buzzwole',
		types: ['bug', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/794.png'
	},
	{
		id: '795',
		name: 'pheromosa',
		types: ['bug', 'fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/795.png'
	},
	{
		id: '796',
		name: 'xurkitree',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/796.png'
	},
	{
		id: '797',
		name: 'celesteela',
		types: ['steel', 'flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/797.png'
	},
	{
		id: '798',
		name: 'kartana',
		types: ['grass', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/798.png'
	},
	{
		id: '799',
		name: 'guzzlord',
		types: ['dark', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/799.png'
	},
	{
		id: '800',
		name: 'necrozma',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'dusk mane',
				types: ['psychic', 'steel'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/800-Dusk.png'
			},
			{
				name: 'dawn wings',
				types: ['psychic', 'ghost'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/800-Dawn.png'
			},
			{
				name: 'ultra necrozma',
				types: ['psychic', 'dragon'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/800-Ultra.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/800.png'
	},
	{
		id: '801',
		name: 'magearna',
		types: ['steel', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/801.png'
	},
	{
		id: '802',
		name: 'marshadow',
		types: ['fighting', 'ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/802.png'
	},
	{
		id: '803',
		name: 'poipole',
		types: ['poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/803.png'
	},
	{
		id: '804',
		name: 'naganadel',
		types: ['poison', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/804.png'
	},
	{
		id: '805',
		name: 'stakataka',
		types: ['rock', 'steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/805.png'
	},
	{
		id: '806',
		name: 'blacephalon',
		types: ['fire', 'ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/806.png'
	},
	{
		id: '807',
		name: 'zeraora',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/807.png'
	},
	{
		id: '808',
		name: 'meltan',
		types: ['steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/808.png'
	},
	{
		id: '809',
		name: 'melmetal',
		types: ['steel'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax melmetal',
				types: ['steel'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/809-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/809.png'
	},
	{
		id: '810',
		name: 'grookey',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/810.png'
	},
	{
		id: '811',
		name: 'thwackey',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/811.png'
	},
	{
		id: '812',
		name: 'rillaboom',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax rillaboom',
				types: ['grass'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/812-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/812.png'
	},
	{
		id: '813',
		name: 'scorbunny',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/813.png'
	},
	{
		id: '814',
		name: 'raboot',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/814.png'
	},
	{
		id: '815',
		name: 'cinderace',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax cinderace',
				types: ['fire'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/815-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/815.png'
	},
	{
		id: '816',
		name: 'sobble',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/816.png'
	},
	{
		id: '817',
		name: 'drizzile',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/817.png'
	},
	{
		id: '818',
		name: 'inteleon',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax inteleon',
				types: ['water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/818-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/818.png'
	},
	{
		id: '819',
		name: 'skwovet',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/819.png'
	},
	{
		id: '820',
		name: 'greedent',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/820.png'
	},
	{
		id: '821',
		name: 'rookidee',
		types: ['flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/821.png'
	},
	{
		id: '822',
		name: 'corvisquire',
		types: ['flying'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/822.png'
	},
	{
		id: '823',
		name: 'corviknight',
		types: ['flying', 'steel'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax corviknight',
				types: ['flying', 'steel'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/823-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/823.png'
	},
	{
		id: '824',
		name: 'blipbug',
		types: ['bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/824.png'
	},
	{
		id: '825',
		name: 'dottler',
		types: ['bug', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/825.png'
	},
	{
		id: '826',
		name: 'orbeetle',
		types: ['bug', 'psychic'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax orbeetle',
				types: ['bug', 'psychic'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/826-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/826.png'
	},
	{
		id: '827',
		name: 'nickit',
		types: ['dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/827.png'
	},
	{
		id: '828',
		name: 'thievul',
		types: ['dark'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/828.png'
	},
	{
		id: '829',
		name: 'gossifleur',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/829.png'
	},
	{
		id: '830',
		name: 'eldegoss',
		types: ['grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/830.png'
	},
	{
		id: '831',
		name: 'wooloo',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/831.png'
	},
	{
		id: '832',
		name: 'dubwool',
		types: ['normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/832.png'
	},
	{
		id: '833',
		name: 'chewtle',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/833.png'
	},
	{
		id: '834',
		name: 'drednaw',
		types: ['water', 'rock'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax drednaw',
				types: ['water', 'rock'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/834-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/834.png'
	},
	{
		id: '835',
		name: 'yamper',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/835.png'
	},
	{
		id: '836',
		name: 'boltund',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/836.png'
	},
	{
		id: '837',
		name: 'rolycoly',
		types: ['rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/837.png'
	},
	{
		id: '838',
		name: 'carkol',
		types: ['rock', 'fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/838.png'
	},
	{
		id: '839',
		name: 'coalossal',
		types: ['rock', 'fire'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax coalossal',
				types: ['rock', 'fire'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/839-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/839.png'
	},
	{
		id: '840',
		name: 'applin',
		types: ['grass', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/840.png'
	},
	{
		id: '841',
		name: 'flapple',
		types: ['grass', 'dragon'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax flapple',
				types: ['grass', 'dragon'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/841-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/841.png'
	},
	{
		id: '842',
		name: 'appletun',
		types: ['grass', 'dragon'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax appletun',
				types: ['grass', 'dragon'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/842-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/842.png'
	},
	{
		id: '843',
		name: 'silicobra',
		types: ['ground'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/843.png'
	},
	{
		id: '844',
		name: 'sandaconda',
		types: ['ground'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax sandaconda',
				types: ['ground'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/844-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/844.png'
	},
	{
		id: '845',
		name: 'cramorant',
		types: ['flying', 'water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/845.png'
	},
	{
		id: '846',
		name: 'arrokuda',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/846.png'
	},
	{
		id: '847',
		name: 'barraskewda',
		types: ['water'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/847.png'
	},
	{
		id: '848',
		name: 'toxel',
		types: ['electric', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/848.png'
	},
	{
		id: '849',
		name: 'toxtricity',
		types: ['electric', 'poison'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'amped form',
				types: ['electric', 'poison'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/849.png'
			},
			{
				name: 'low key form',
				types: ['electric', 'poison'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/849-Low-Key.png'
			},
			{
				name: 'gigantamax toxtricity',
				types: ['electric', 'poison'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/849-Amped-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/849.png'
	},
	{
		id: '850',
		name: 'sizzlipede',
		types: ['fire', 'bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/850.png'
	},
	{
		id: '851',
		name: 'centiskorch',
		types: ['fire', 'bug'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax centiskorch',
				types: ['fire', 'bug'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/851-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/851.png'
	},
	{
		id: '852',
		name: 'clobbopus',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/852.png'
	},
	{
		id: '853',
		name: 'grapploct',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/853.png'
	},
	{
		id: '854',
		name: 'sinistea',
		types: ['ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/854.png'
	},
	{
		id: '855',
		name: 'polteageist',
		types: ['ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/855.png'
	},
	{
		id: '856',
		name: 'hatenna',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/856.png'
	},
	{
		id: '857',
		name: 'hattrem',
		types: ['psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/857.png'
	},
	{
		id: '858',
		name: 'hatterene',
		types: ['psychic', 'fairy'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax hatterene',
				types: ['psychic', 'fairy'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/858-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/858.png'
	},
	{
		id: '859',
		name: 'impidimp',
		types: ['dark', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/859.png'
	},
	{
		id: '860',
		name: 'morgrem',
		types: ['dark', 'fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/860.png'
	},
	{
		id: '861',
		name: 'grimmsnarl',
		types: ['dark', 'fairy'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax grimmsnarl',
				types: ['dark', 'fairy'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/861-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/861.png'
	},
	{
		id: '862',
		name: 'obstagoon',
		types: ['dark', 'normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/862.png'
	},
	{
		id: '863',
		name: 'perrserker',
		types: ['steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/863.png'
	},
	{
		id: '864',
		name: 'cursola',
		types: ['ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/864.png'
	},
	{
		id: '865',
		name: 'sirfetchd',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/865.png'
	},
	{
		id: '866',
		name: 'mr-rime',
		types: ['ice', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/866.png'
	},
	{
		id: '867',
		name: 'runerigus',
		types: ['ground', 'ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/867.png'
	},
	{
		id: '868',
		name: 'milcery',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/868.png'
	},
	{
		id: '869',
		name: 'alcremie',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax alcremie',
				types: ['fairy'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/869-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/869.png'
	},
	{
		id: '870',
		name: 'falinks',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/870.png'
	},
	{
		id: '871',
		name: 'pincurchin',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/871.png'
	},
	{
		id: '872',
		name: 'snom',
		types: ['ice', 'bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/872.png'
	},
	{
		id: '873',
		name: 'frosmoth',
		types: ['ice', 'bug'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/873.png'
	},
	{
		id: '874',
		name: 'stonjourner',
		types: ['rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/874.png'
	},
	{
		id: '875',
		name: 'eiscue',
		types: ['ice'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'ice face',
				types: ['ice'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/875.png'
			},
			{
				name: 'noice face',
				types: ['ice'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/875-Noice.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/875.png'
	},
	{
		id: '876',
		name: 'indeedee-male',
		types: ['psychic', 'normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/876.png'
	},
	{
		id: '877',
		name: 'morpeko',
		types: ['electric', 'dark'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'full belly mode',
				types: ['electric', 'dark'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/877.png'
			},
			{
				name: 'hangry mode',
				types: ['electric', 'dark'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/877-Hangry.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/877.png'
	},
	{
		id: '878',
		name: 'cufant',
		types: ['steel'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/878.png'
	},
	{
		id: '879',
		name: 'copperajah',
		types: ['steel'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax copperajah',
				types: ['steel'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/879-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/879.png'
	},
	{
		id: '880',
		name: 'dracozolt',
		types: ['electric', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/880.png'
	},
	{
		id: '881',
		name: 'arctozolt',
		types: ['electric', 'ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/881.png'
	},
	{
		id: '882',
		name: 'dracovish',
		types: ['water', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/882.png'
	},
	{
		id: '883',
		name: 'arctovish',
		types: ['water', 'ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/883.png'
	},
	{
		id: '884',
		name: 'duraludon',
		types: ['steel', 'dragon'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'gigantamax duraludon',
				types: ['steel', 'dragon'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/884-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/884.png'
	},
	{
		id: '885',
		name: 'dreepy',
		types: ['dragon', 'ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/885.png'
	},
	{
		id: '886',
		name: 'drakloak',
		types: ['dragon', 'ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/886.png'
	},
	{
		id: '887',
		name: 'dragapult',
		types: ['dragon', 'ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/887.png'
	},
	{
		id: '888',
		name: 'zacian',
		types: ['fairy'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'hero of many battles',
				types: ['fairy'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/888.png'
			},
			{
				name: 'crowned sword',
				types: ['fairy', 'steel'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/888-Crowned.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/888.png'
	},
	{
		id: '889',
		name: 'zamazenta',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'hero of many battles',
				types: ['fighting'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/889.png'
			},
			{
				name: 'crowned shield',
				types: ['fighting', 'steel'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/889-Crowned.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/889.png'
	},
	{
		id: '890',
		name: 'eternatus',
		types: ['poison', 'dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/890.png'
	},
	{
		id: '891',
		name: 'kubfu',
		types: ['fighting'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/891.png'
	},
	{
		id: '892',
		name: 'urshifu',
		types: ['fighting', 'dark'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'single strike style',
				types: ['fighting', 'dark'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/892.png'
			},
			{
				name: 'rapid strike style',
				types: ['fighting', 'water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/892-Rapid-Strike.png'
			},
			{
				name: 'gigantamax urshifu (single strike style)',
				types: ['water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/892-Single-Strike-Gmax.png'
			},
			{
				name: 'gigantamax urshifu (rapid strike style)',
				types: ['water'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/892-Rapid-Strike-Gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/892.png'
	},
	{
		id: '893',
		name: 'zarude',
		types: ['dark', 'grass'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/893.png'
	},
	{
		id: '894',
		name: 'regieleki',
		types: ['electric'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/894.png'
	},
	{
		id: '895',
		name: 'regidrago',
		types: ['dragon'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/895.png'
	},
	{
		id: '896',
		name: 'glastrier',
		types: ['ice'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/896.png'
	},
	{
		id: '897',
		name: 'spectrier',
		types: ['ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/897.png'
	},
	{
		id: '898',
		name: 'calyrex',
		types: ['psychic', 'grass'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'ice rider calyrex',
				types: ['psychic', 'ice'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/898-Ice.png'
			},
			{
				name: 'shadow rider calyrex',
				types: ['psychic', 'ghost'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/898-Shadow.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/898.png'
	},
	{
		id: '899',
		name: 'wyrdeer',
		types: ['normal', 'psychic'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/899.png'
	},
	{
		id: '900',
		name: 'kleavor',
		types: ['bug', 'rock'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/900.png'
	},
	{
		id: '901',
		name: 'ursaluna',
		types: ['ground', 'normal'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/901.png'
	},
	{
		id: '902',
		name: 'basculegion-male',
		types: ['water', 'ghost'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/902.png'
	},
	{
		id: '903',
		name: 'sneasler',
		types: ['fighting', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/903.png'
	},
	{
		id: '904',
		name: 'overqwil',
		types: ['dark', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/904.png'
	},
	{
		id: '905',
		name: 'enamorus',
		types: ['fairy', 'flying'],
		mega: [],
		variant: [],
		forms: [
			{
				name: 'incarnate forme',
				types: ['fairy', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/905.png'
			},
			{
				name: 'therian forme',
				types: ['fairy', 'flying'],
				image:
					'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/905-Therian.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/905.png'
	}
]

export default data
