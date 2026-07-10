import type { MenuCategory } from './types'

export const menuCategories: MenuCategory[] = [
  { id: 'coffee', label: 'Coffee & Espresso', items: [
    { name: 'The Usual', plainName: 'House coffee', description: 'Our rotating medium roast, served without questions.', price: 4 },
    { name: 'The Alibi', plainName: 'Vanilla latte', description: 'Espresso, steamed milk, and house vanilla.', price: 6, tags: ['Vegan option'] },
    { name: 'Midnight Stakeout', plainName: 'Cold brew', description: 'Steeped eighteen hours. Patient, dark, and alert.', price: 5.5 },
    { name: 'Hot Lead', plainName: 'Spiced mocha', description: 'Dark chocolate, espresso, and a discreet cayenne finish.', price: 6.5 },
  ]},
  { id: 'tea', label: 'Tea & Quiet Leads', items: [
    { name: 'Fog on Fifth', plainName: 'Earl Grey latte', description: 'Bergamot tea, steamed milk, and vanilla.', price: 5.5 },
    { name: 'The Green Room', plainName: 'Jasmine green tea', description: 'Fragrant loose leaf tea, served by the pot.', price: 4.5, tags: ['Vegan', 'GF'] },
    { name: 'Ruby Statement', plainName: 'Hibiscus tisane', description: 'Tart hibiscus, orange peel, and rosehip.', price: 4.5, tags: ['Caffeine-free'] },
  ]},
  { id: 'pastry', label: 'Pastries & Small Crimes', items: [
    { name: 'The Paw Print', plainName: 'Chocolate shortbread', description: 'Buttery cocoa biscuit with a dark chocolate toe-bean print.', price: 4 },
    { name: 'Morning Paper', plainName: 'Almond croissant', description: 'Flaky layers, almond cream, and toasted almonds.', price: 5 },
    { name: 'Crumb Scene', plainName: 'Seasonal coffee cake', description: 'Brown sugar streusel and whatever fruit has an alibi.', price: 4.75 },
  ]},
  { id: 'lunch', label: 'Lunch Briefings', items: [
    { name: 'The Informant', plainName: 'Grilled cheese & tomato', description: 'Sharp cheddar, fontina, tomato jam, and sourdough.', price: 11 },
    { name: 'Club Confidential', plainName: 'Turkey club', description: 'Roasted turkey, bacon, greens, tomato, and herb mayo.', price: 13 },
    { name: 'Garden Alias', plainName: 'Hummus sandwich', description: 'Herbed hummus, cucumber, pickled carrot, greens, and rye.', price: 11, tags: ['Vegan'] },
  ]},
  { id: 'specials', label: 'House Special Operations', items: [
    { name: 'Nine Lives Flight', plainName: 'Coffee tasting trio', description: 'Three four-ounce pours selected by our bar team.', price: 9 },
    { name: 'The Full Dossier', plainName: 'Coffee, pastry & lounge visit', description: 'The Usual, today’s pastry, and a reserved lounge session.', price: 22 },
    { name: 'Tiny Accomplice', plainName: 'Kids cocoa', description: 'Warm cocoa, light whip, and a cinnamon paw.', price: 4.5 },
  ]},
]
