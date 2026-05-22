import { Service } from './types'

const DesignIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect width="48" height="48" rx="12" fill="#3B82F6" fillOpacity="0.1" />
    <rect x="10" y="10" width="28" height="28" rx="2" stroke="#3B82F6" strokeWidth="2" />
    <path d="M10 22h28M22 10v28" stroke="#3B82F6" strokeWidth="2" />
  </svg>
)

const DevelopmentIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect width="48" height="48" rx="12" fill="#8B5CF6" fillOpacity="0.1" />
    <path d="M16 28L10 22l6-6M32 28l6-6-6-6M26 10l-4 28" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SupportIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect width="48" height="48" rx="12" fill="#10B981" fillOpacity="0.1" />
    <path d="M24 12C17.37 12 12 17.37 12 24s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12Z" stroke="#10B981" strokeWidth="2" />
    <path d="M24 22v2M24 28h0.01" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const SecurityIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect width="48" height="48" rx="12" fill="#EF4444" fillOpacity="0.1" />
    <path d="M24 10l-10 5v8c0 7 10 12 10 12s10-5 10-12v-8l-10-5Z" stroke="#EF4444" strokeWidth="2" />
    <path d="M20 24l2 2 4-4" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const OptimizationIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect width="48" height="48" rx="12" fill="#F59E0B" fillOpacity="0.1" />
    <path d="M12 24h24M20 16v16M28 16v16M24 12v24" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="2" fill="#F59E0B" />
  </svg>
)

const MaintenanceIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect width="48" height="48" rx="12" fill="#06B6D4" fillOpacity="0.1" />
    <circle cx="24" cy="24" r="12" stroke="#06B6D4" strokeWidth="2" />
    <path d="M24 18v6l4 2" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const NEXFIY_SERVICES: Service[] = [
  {
    id: 'custom-design',
    name: 'Custom Design',
    description: 'Tailored UI/UX design for your needs',
    shortDescription: 'Beautiful, custom app design',
    details: 'Get beautiful, custom-designed interfaces that match your brand and delight your users.',
    icon: <DesignIcon />,
    features: [
      'Wireframing and prototyping',
      'Visual design and branding',
      'Design system development',
      'Responsive design for all devices',
      'Accessibility compliance (WCAG AA)',
      'Design documentation and handoff',
    ],
    team: 'Design Team',
    color: '#3B82F6',
    pricing: 'Starting at $5,000',
  },
  {
    id: 'app-development',
    name: 'App Development',
    description: 'Full-stack mobile and web application development',
    shortDescription: 'From concept to launch',
    details: 'Build powerful, scalable applications with our experienced development team.',
    icon: <DevelopmentIcon />,
    features: [
      'iOS and Android development',
      'Web application development',
      'Backend infrastructure setup',
      'API integration and development',
      'Testing and QA',
      'Deployment and launch support',
    ],
    team: 'Development Team',
    color: '#8B5CF6',
    pricing: 'Custom quote',
  },
  {
    id: 'technical-support',
    name: 'Technical Support',
    description: '24/7 support and maintenance for your applications',
    shortDescription: 'Always here when you need us',
    details: 'Comprehensive technical support and maintenance to keep your apps running smoothly.',
    icon: <SupportIcon />,
    features: [
      'Priority 24/7 support',
      'Bug fixes and patches',
      'Performance optimization',
      'Monitoring and alerts',
      'Regular maintenance updates',
      'Security audits',
    ],
    team: 'Support Team',
    color: '#10B981',
    pricing: 'Starting at $2,000/month',
  },
  {
    id: 'security-audit',
    name: 'Security Audit',
    description: 'Comprehensive security assessment and vulnerability testing',
    shortDescription: 'Protect your users data',
    details: 'Thorough security audits and penetration testing to identify and fix vulnerabilities.',
    icon: <SecurityIcon />,
    features: [
      'Penetration testing',
      'Code security audit',
      'Infrastructure assessment',
      'Compliance review',
      'Remediation recommendations',
      'Ongoing security monitoring',
    ],
    team: 'Security Team',
    color: '#EF4444',
    pricing: 'Starting at $3,000',
  },
  {
    id: 'performance-optimization',
    name: 'Performance Optimization',
    description: 'Optimize your app for speed and efficiency',
    shortDescription: 'Fast, responsive apps',
    details: 'Improve your application performance with expert optimization strategies.',
    icon: <OptimizationIcon />,
    features: [
      'Performance profiling',
      'Load time optimization',
      'Caching strategies',
      'Database optimization',
      'Code splitting and bundling',
      'Continuous monitoring',
    ],
    team: 'Technical Team',
    color: '#F59E0B',
    pricing: 'Starting at $2,500',
  },
  {
    id: 'maintenance-support',
    name: 'Maintenance & Updates',
    description: 'Regular maintenance and feature updates for your applications',
    shortDescription: 'Keep your app fresh',
    details: 'Ongoing maintenance, updates, and new features to keep your app competitive.',
    icon: <MaintenanceIcon />,
    features: [
      'Regular feature updates',
      'Dependency updates',
      'Bug fixes',
      'User feedback implementation',
      'Performance improvements',
      'Platform updates (iOS, Android)',
    ],
    team: 'Development Team',
    color: '#06B6D4',
    pricing: 'Starting at $1,500/month',
  },
]
