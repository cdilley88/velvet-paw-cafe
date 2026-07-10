export type Cat = {
  caseNumber: string
  name: string
  alias: string
  age: string
  personality: string
  associates: string
  offenses: string[]
  snack: string
  status: string
  adoptionStatus: string
  lastSeen: string
  note: string
  portrait: string
  portraitPosition?: string
}

export type MenuItem = {
  name: string
  plainName: string
  description: string
  price: number
  tags?: string[]
}

export type MenuCategory = {
  id: string
  label: string
  items: MenuItem[]
}

export type FieldReport = {
  date: string
  category: string
  title: string
  summary: string
  reference: string
}
