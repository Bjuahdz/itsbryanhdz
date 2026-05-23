import type { ExperienceEvent } from '../types'

export const experienceEvents: ExperienceEvent[] = [
  {
    id: 'south-atlanta-mechanical',
    date: '2025',
    label: 'Moreland, GA',
    title: 'Production Support - South Atlanta Mechanical',
    titleHighlight: 'South Atlanta Mechanical',
    summary:
      'Shop-floor support for precision metal bending and custom fabrication, keeping inventory, equipment, and client deliveries moving on schedule.',
    summaryHighlights: ['precision metal bending', 'custom fabrication'],
    details: [
      {
        text: 'Supported fabrication runs for Yamaha, Delta, Southwest Airlines, Coca-Cola, and other client accounts.',
        highlight: 'client accounts',
      },
      {
        text: 'Tracked stock levels and equipment upkeep so daily production stayed predictable.',
        highlight: 'stock levels',
      },
      {
        text: 'Coordinated finished-part deliveries to client sites across the metro area.',
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
      'Seasonal lead for retail merchandising crews, balancing vendor coordination, staff training, and inventory reporting.',
    summaryHighlights: ['retail merchandising crews'],
    details: [
      {
        text: 'Aligned vendor deliveries with store schedules so displays stayed stocked.',
        highlight: 'vendor deliveries',
      },
      {
        text: 'Helped hire, onboard, train, and retain seasonal merchandisers across locations.',
        highlight: 'train',
      },
      {
        text: 'Maintained inventory logs and reports managers could pull on demand.',
        highlight: 'reports',
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
      'Front-of-house role in a high-volume dining room, keeping payment, table, and guest workflows steady under pressure.',
    summaryHighlights: ['high-volume dining room'],
    details: [
      {
        text: 'Handled cash, card, and check payments accurately through busy rushes.',
        highlight: 'payments',
      },
      {
        text: 'Coordinated table needs while serving 40+ guests per shift.',
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
      'Early role on residential rehab projects, supporting estimates, planning details, and client communication.',
    summaryHighlights: ['residential rehab projects'],
    details: [
      {
        text: 'Prepared quotes, take-offs, and estimate inputs for preconstruction planning.',
        highlight: 'estimate inputs',
      },
      {
        text: 'Handled client questions on-site with clear communication.',
        highlight: 'client questions',
      },
      {
        text: 'Troubleshot project details when timelines or site conditions changed.',
        highlight: 'Troubleshot',
      },
    ],
  },
]
