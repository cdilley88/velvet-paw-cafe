import type { Cat } from './types'

export const cats: Cat[] = [
  {
    caseNumber: '042', name: 'Mabel', alias: 'The Calico Informant', age: '4 years',
    personality: 'Discerning, diplomatic, and suspicious of empty cups.', associates: 'The radiator; anyone carrying chicken.',
    offenses: ['Treat extortion', 'Unauthorized lap occupation', 'Obstruction of paperwork'], snack: 'Shredded chicken',
    status: 'Available for adoption', adoptionStatus: 'Applications open', lastSeen: 'Sleeping beneath the radiator',
    note: 'Mabel prefers a quiet home and will accept gentle negotiations conducted at floor level.', portrait: '/images/cat-mabel.svg', portraitPosition: 'center 32%',
  },
  {
    caseNumber: '117', name: 'Vincent', alias: 'The Velvet Shadow', age: '7 years',
    personality: 'Soft-spoken, observant, and always first to notice a coat left unattended.', associates: 'Night staff; the corner armchair.',
    offenses: ['Coat infiltration', 'Premeditated purring', 'Possession of loose yarn'], snack: 'Tuna pâté',
    status: 'Permanent resident', adoptionStatus: 'Chief of internal affairs', lastSeen: 'Watching the rain from booth six',
    note: 'Vincent is our longest-serving operative and a steady companion to shy lounge visitors.', portrait: '/images/cat-vincent.svg',
  },
  {
    caseNumber: '009', name: 'Juniper', alias: 'June Bug', age: '11 months',
    personality: 'Brave beyond reason, relentlessly curious, professionally unqualified.', associates: 'Paper bags; her sister Clementine.',
    offenses: ['Evidence tampering', 'High-speed corridor pursuit', 'Identity theft of a croissant'], snack: 'Freeze-dried salmon',
    status: 'Available for adoption', adoptionStatus: 'Bonded pair with Clementine', lastSeen: 'Inside a file drawer',
    note: 'Juniper and Clementine are a matched set: one causes the distraction, the other takes the evidence.', portrait: '/images/cat-juniper.svg',
  },
  {
    caseNumber: '088', name: 'Clementine', alias: 'The Marmalade Motive', age: '11 months',
    personality: 'Sunny, strategic, and deeply committed to breakfast.', associates: 'Juniper; the pastry case at a respectful distance.',
    offenses: ['Breakfast fraud', 'Conspiracy to cuddle', 'Tampering with shoelaces'], snack: 'Chicken mousse',
    status: 'Available for adoption', adoptionStatus: 'Bonded pair with Juniper', lastSeen: 'Conducting surveillance from the bookshelf',
    note: 'Clementine is the calmer half of the operation and an accomplished professional nap consultant.', portrait: '/images/cat-clementine.svg',
  },
  {
    caseNumber: '314', name: 'Professor Plum', alias: 'The Lavender Menace', age: '9 years',
    personality: 'Patient, scholarly, and unimpressed by modern policing methods.', associates: 'Large-print mysteries; heated blankets.',
    offenses: ['Monopolizing the ottoman', 'Contempt of cucumber', 'Excessive wisdom'], snack: 'Bonito flakes',
    status: 'Foster-to-adopt', adoptionStatus: 'Senior-home inquiries welcome', lastSeen: 'Asleep on chapter twelve',
    note: 'The Professor seeks a calm retirement with soft furniture and a citizen willing to read aloud.', portrait: '/images/cat-plum.svg',
  },
  {
    caseNumber: '221', name: 'Beatrice', alias: 'The Tuxedo Witness', age: '3 years',
    personality: 'Elegant, social, and prone to giving unsolicited testimony.', associates: 'Front desk personnel; every guest so far.',
    offenses: ['Perjury by omission', 'Counter-surfing conspiracy', 'Repeat head-butting'], snack: 'Turkey morsels',
    status: 'Adoption pending', adoptionStatus: 'Final interview scheduled', lastSeen: 'Greeting a new witness at reception',
    note: 'Beatrice has selected a family. Her file remains open until the final home visit is complete.', portrait: '/images/cat-beatrice.svg',
  },
]
