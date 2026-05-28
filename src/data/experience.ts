import type { ExperienceEvent } from '../types'

export const experienceEvents: ExperienceEvent[] = [
  {
    id: 'south-atlanta-mechanical',
    date: '2025',
    label: 'Moreland, GA',
    title: 'Production Support - South Atlanta Mechanical',
    titleHighlight: 'South Atlanta Mechanical',
    summary:
      'Shop-floor support for precision metal bending and custom fabrication, helping coordinate inventory, equipment upkeep, and client deliveries.',
    summaryHighlights: ['precision metal bending', 'custom fabrication'],
    details: [
      {
        text: 'Supported fabrication runs for Yamaha, Delta, Southwest Airlines, Coca-Cola, and other client accounts.',
        highlight: 'client accounts',
      },
      {
        text: 'Coordinated inventory control and equipment upkeep to help maintain smooth daily operations.',
        highlight: 'inventory control',
      },
      {
        text: 'Organized timely delivery of fabricated parts to client sites.',
        highlight: 'deliveries',
      },
    ],
  },
  {
    id: 'plant-partners',
    date: 'Seasonal',
    label: 'Atlanta, GA',
    title: 'Lead Merchandiser - Plant Partners',
    titleHighlight: 'Plant Partners',
    summary:
      'Seasonal lead for retail merchandising crews, supporting vendor coordination, staff training, scheduling, and inventory reporting.',
    summaryHighlights: ['retail merchandising crews'],
    details: [
      {
        text: 'Coordinated with vendors and staff to schedule and procure products.',
        highlight: 'vendors and staff',
      },
      {
        text: 'Assisted with recruiting, onboarding, training, and retention of seasonal merchandisers.',
        highlight: 'train',
      },
      {
        text: 'Maintained product inventory logs and up-to-date filing reports available upon request.',
        highlight: 'inventory logs',
      },
    ],
  },
  {
    id: 'red-lobster',
    date: '2021-23',
    label: 'Newnan, GA',
    title: 'FOH Team Member - Red Lobster',
    titleHighlight: 'Red Lobster',
    summary:
      'Front-of-house role in a high-volume dining room, supporting payment, guest service, and team communication workflows.',
    summaryHighlights: ['high-volume dining room'],
    details: [
      {
        text: 'Handled cash, card, and check payments accurately while supporting front-of-house workflows.',
        highlight: 'payments',
      },
      {
        text: 'Communicated with guests and team members to provide quality service to 40+ guests per shift.',
        highlight: '40+ guests',
      },
    ],
  },
  {
    id: 'home-restoration',
    date: '2020-21',
    label: 'Newnan, GA',
    title: 'Home Restoration Assistant - Contractor',
    titleHighlight: 'Home Restoration',
    summary:
      'Residential project support role focused on preconstruction estimates, take-offs, practical problem solving, and client communication.',
    summaryHighlights: ['residential rehab projects'],
    details: [
      {
        text: 'Prepared quotes, take-offs, and estimate inputs for preconstruction planning.',
        highlight: 'estimate inputs',
      },
      {
        text: 'Communicated with clients on-site and provided service-focused support.',
        highlight: 'clients',
      },
      {
        text: 'Assisted with preparing practical solutions in a fast-paced project environment.',
        highlight: 'practical solutions',
      },
    ],
  },
]
