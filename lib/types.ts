export interface TeamMember {
  id: string
  name: string
  role: string
  avatar: string
  bio: string
}

export interface PrivacyPolicy {
  dataCollection: string
  dataStorage: string
  userRights: string
}

export interface SecurityDetails {
  encryption: string
  compliance: string[]
  audits: string
}

export interface DetailedFeature {
  name: string
  description: string
  icon?: string
}

export interface NexfiyApp {
  id: string
  name: string
  tagline: string
  icon: React.ReactNode
  description: string
  fullDescription: string
  longDescription: string
  features: string[]
  detailedFeatures: DetailedFeature[]
  platforms: string[]
  screenshots: string[]
  version: string
  rating: number
  reviews: number
  downloads: string
  price: string
  team: TeamMember[]
  privacy: PrivacyPolicy
  security: SecurityDetails
  color: string
  gradient: string
}

export interface Service {
  id: string
  name: string
  description: string
  shortDescription: string
  details: string
  icon: React.ReactNode
  features: string[]
  team: string
  pricing?: string
  color: string
}

export interface Team {
  id: string
  name: string
  role: string
  description: string
  longDescription: string
  members: TeamMember[]
  mission: string
  focus: string[]
  icon: React.ReactNode
  color: string
}
