import { Team } from './types'

const DesignTeamIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect width="48" height="48" rx="12" fill="#3B82F6" fillOpacity="0.1" />
    <rect x="10" y="10" width="28" height="28" rx="2" stroke="#3B82F6" strokeWidth="2" />
    <path d="M10 22h28M22 10v28" stroke="#3B82F6" strokeWidth="2" />
  </svg>
)

const DevTeamIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect width="48" height="48" rx="12" fill="#8B5CF6" fillOpacity="0.1" />
    <path d="M16 28L10 22l6-6M32 28l6-6-6-6M26 10l-4 28" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ProductTeamIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect width="48" height="48" rx="12" fill="#10B981" fillOpacity="0.1" />
    <rect x="12" y="14" width="24" height="20" rx="2" stroke="#10B981" strokeWidth="2" />
    <path d="M12 18h24M18 28h2M24 28h2M30 28h2" stroke="#10B981" strokeWidth="2" />
  </svg>
)

const SupportTeamIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect width="48" height="48" rx="12" fill="#F59E0B" fillOpacity="0.1" />
    <path d="M24 12C17.37 12 12 17.37 12 24s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12Z" stroke="#F59E0B" strokeWidth="2" />
    <path d="M24 22v2M24 28h0.01" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const NEXFIY_TEAMS: Team[] = [
  {
    id: 'design-team',
    name: 'Design Team',
    role: 'Product Design & UX',
    description: 'Crafting beautiful, intuitive interfaces',
    longDescription: 'Our design team is dedicated to creating beautiful, intuitive interfaces that users love. We focus on user research, interaction design, and visual excellence to ensure every pixel serves a purpose.',
    icon: <DesignTeamIcon />,
    color: '#3B82F6',
    mission: 'Design interfaces that inspire and delight users',
    focus: [
      'User-centered design',
      'Visual design excellence',
      'Interaction design',
      'Design systems',
      'Accessibility',
      'Prototyping',
    ],
    members: [
      {
        id: 'designer-1',
        name: 'Sarah Chen',
        role: 'Lead Designer',
        avatar: '/avatars/sarah.jpg',
        bio: 'Creative director with 8 years of experience in product design and brand development.',
      },
      {
        id: 'designer-2',
        name: 'Marcus Johnson',
        role: 'UX Designer',
        avatar: '/avatars/marcus.jpg',
        bio: 'Specializes in user research and interaction design for mobile applications.',
      },
      {
        id: 'designer-3',
        name: 'Elena Rodriguez',
        role: 'Visual Designer',
        avatar: '/avatars/elena.jpg',
        bio: 'Expert in design systems and creating cohesive visual languages across platforms.',
      },
    ],
  },
  {
    id: 'development-team',
    name: 'Development Team',
    role: 'Engineering & Backend',
    description: 'Building robust, scalable applications',
    longDescription: 'Our development team builds the foundation that powers our applications. We focus on code quality, performance, and reliability to ensure your experience is seamless.',
    icon: <DevTeamIcon />,
    color: '#8B5CF6',
    mission: 'Engineer solutions that are fast, secure, and scalable',
    focus: [
      'Full-stack development',
      'API design',
      'Database architecture',
      'Performance optimization',
      'Security implementation',
      'Testing & QA',
    ],
    members: [
      {
        id: 'dev-1',
        name: 'Alex Kim',
        role: 'Senior Backend Engineer',
        avatar: '/avatars/alex.jpg',
        bio: 'Architect of our backend infrastructure with 10 years of experience in distributed systems.',
      },
      {
        id: 'dev-2',
        name: 'Jessica Lee',
        role: 'Full-Stack Developer',
        avatar: '/avatars/jessica.jpg',
        bio: 'Passionate about clean code and building delightful user experiences.',
      },
      {
        id: 'dev-3',
        name: 'David Okonkwo',
        role: 'Mobile Developer',
        avatar: '/avatars/david.jpg',
        bio: 'Expert in iOS and Android development with focus on performance and battery efficiency.',
      },
      {
        id: 'dev-4',
        name: 'Sophie Martin',
        role: 'DevOps Engineer',
        avatar: '/avatars/sophie.jpg',
        bio: 'Ensures our infrastructure is reliable, secure, and optimized for performance.',
      },
    ],
  },
  {
    id: 'product-team',
    name: 'Product Team',
    role: 'Product Strategy & Management',
    description: 'Guiding our vision and roadmap',
    longDescription: 'Our product team combines data insights with user feedback to guide our product strategy. We ensure every feature we build solves real problems for our users.',
    icon: <ProductTeamIcon />,
    color: '#10B981',
    mission: 'Create products that solve real problems for real people',
    focus: [
      'Product strategy',
      'Feature prioritization',
      'User research',
      'Market analysis',
      'Roadmap planning',
      'Analytics & metrics',
    ],
    members: [
      {
        id: 'product-1',
        name: 'Lisa Wong',
        role: 'Head of Product',
        avatar: '/avatars/lisa.jpg',
        bio: 'Visionary product leader passionate about building products that matter.',
      },
      {
        id: 'product-2',
        name: 'James Thompson',
        role: 'Product Manager',
        avatar: '/avatars/james.jpg',
        bio: 'Focused on health and wellness product vertical with 6 years of PM experience.',
      },
    ],
  },
  {
    id: 'support-team',
    name: 'Support Team',
    role: 'Customer Success & Support',
    description: 'Here to help you succeed',
    longDescription: 'Our support team is committed to providing exceptional customer service. We respond quickly to issues and go the extra mile to ensure our users are successful.',
    icon: <SupportTeamIcon />,
    color: '#F59E0B',
    mission: 'Provide exceptional support that exceeds expectations',
    focus: [
      'Customer support',
      'Issue resolution',
      'User education',
      'Feedback collection',
      'Community engagement',
      'Documentation',
    ],
    members: [
      {
        id: 'support-1',
        name: 'Priya Patel',
        role: 'Support Lead',
        avatar: '/avatars/priya.jpg',
        bio: 'Dedicated to helping users succeed with our products and building strong relationships.',
      },
      {
        id: 'support-2',
        name: 'Carlos Rodriguez',
        role: 'Support Specialist',
        avatar: '/avatars/carlos.jpg',
        bio: 'Passionate about solving customer issues and gathering feedback for product improvement.',
      },
    ],
  },
]
