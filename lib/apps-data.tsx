import React from 'react';

export interface NexfiyApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  longDescription: string;
  features: string[];
  detailedFeatures: Array<{ name: string; description: string }>;
  platforms: string[];
  screenshots: string[];
  version: string;
  rating: number;
  reviews: number;
  downloads: string;
  price: string;
  color: string;
  gradient: string;
  team: Array<{ id: string; name: string; role: string; avatar: string; bio: string }>;
  privacy: { dataCollection: string; dataStorage: string; userRights: string };
  security: { encryption: string; compliance: string[]; audits: string };
  icon?: React.ReactNode;
}

// Icon component removed in favor of image asset

export const NEXFIY_APPS: NexfiyApp[] = [
  {
    id: 'noven',
    name: 'Noven',
    icon: <img src="/Noven/icon.png" alt="Noven Icon" className="w-full h-full object-contain" />,
    tagline: 'Build better habits with clarity',
    description: 'Create habits, track daily progress, review clean analytics, and keep your routine simple, focused, and easy to return to.',
    fullDescription: 'Noven helps you build better habits by tracking daily progress, visualizing patterns, and keeping your routine simple and focused.',
    longDescription: 'Noven is a calm habit tracker for people who want consistency without noise. Create the habits that matter, check them off as you move through the day, and review progress through clean analytics that make your patterns easier to understand. The app is designed around clarity, lightweight routines, and a focused daily rhythm.',
    features: [
      'Daily Habit Tracking',
      'Clean Progress Analytics',
      'Simple Routine Management',
      'Focused Habit Details',
      'Export Prompt Support',
      'Privacy-Respecting Design'
    ],
    detailedFeatures: [
      { name: 'Daily Tracking', description: 'Create habits and mark progress with a clear interface built for everyday use.' },
      { name: 'Habit Overview', description: 'See your current habits, routine state, and next steps without digging through clutter.' },
      { name: 'Analytics', description: 'Review visual progress charts and habit patterns so consistency is easier to understand.' },
      { name: 'Habit Details', description: 'Open each habit for focused context, progress, and routine information.' },
      { name: 'Export Prompts', description: 'Use export-focused prompts and premium flows where supported by your plan.' },
      { name: 'Calm Design', description: 'A quiet, intentional interface that respects your attention and avoids unnecessary noise.' }
    ],
    platforms: ['iOS'],
    screenshots: [
      '/Noven/screenshots/app-store-tabs-fixed-chart/en-US/01-home.png',
      '/Noven/screenshots/app-store-tabs-fixed-chart/en-US/02-habits.png',
      '/Noven/screenshots/app-store-tabs-fixed-chart/en-US/03-analytics.png',
      '/Noven/screenshots/app-store-tabs-fixed-chart/en-US/04-profile.png',
      '/Noven/screenshots/export-prompt-active/iphone-6-5/en-US/01-export-prompt-active.png'
    ],
    version: '1.0.0',
    rating: 0,
    reviews: 0,
    downloads: '',
    price: 'Free with optional premium features',
    color: '#111827',
    gradient: 'from-zinc-50 to-white',
    team: [
      { id: 't1', name: 'Ahmed Mansour', role: 'Founder & Developer', avatar: '/me.jpg', bio: 'Independent developer focused on creating calm, intentional, and meaningful digital experiences.' },
    ],
    privacy: {
      dataCollection: 'Noven may collect habit names, routine settings, progress records, analytics events, diagnostics, and subscription status when those features are used.',
      dataStorage: 'Habit and progress data is stored to support daily tracking, analytics, subscription access, and continuity across supported app experiences.',
      userRights: 'You can manage your habits, update app permissions, request support, and delete account-related data where account sync is supported.',
    },
    security: {
      encryption: 'AES-256 encryption at rest, TLS 1.3 in transit.',
      compliance: ['GDPR Compliant', 'CCPA Ready'],
      audits: 'Regular internal security assessments and reviews.',
    }
  }
];

export const NEXFIY_FEATURES = [
  {
    title: 'Daily Clarity',
    description: 'Noven keeps the habit loop simple: choose what matters, check in, and move on.',
  },
  {
    title: 'Privacy First',
    description: 'Built without ad-driven design or unnecessary attention traps.',
  },
  {
    title: 'iOS Native',
    description: 'Prepared for TestFlight and App Store distribution on iPhone.',
  },
  {
    title: 'Focused Analytics',
    description: 'Charts and progress views reveal patterns without overwhelming the routine.',
  },
  {
    title: 'Quality Over Noise',
    description: 'Designed by one developer with a bias for calm, practical software.',
  },
  {
    title: 'Ready for Review',
    description: 'Screenshots, metadata, and publishing flow are organized around the App Store launch.',
  },
];

// PushUpCounterIcon removed
