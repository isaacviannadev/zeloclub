export type MailTypes = {
  name: string
  email: string
  phone?: string
  type: 'caregiver' | 'client'
}

export type ClientSelectionProps = {
  title: string
  description: string
  type: MailTypes['type']
}[]
