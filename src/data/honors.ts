import type { Honor } from './types'

export const honors = [
  {
    title: 'Database Bottom-Level Architecture to Application Practice',
    subtitle: '2025 iThome Ironman Challenge',
    period: 'Aug 2025',
    logo: '/clickhouse.svg',
    href: 'https://ithelp.ithome.com.tw/users/20168031/ironman/8221',
    description: 'Completed 30 days of ClickHouse writing from columnar storage and MergeTree internals to Kafka ingestion and Kubernetes deployment.',
  },
  {
    title: 'Software Engineering Practice Award',
    subtitle: '2025 Coding 101',
    period: 'Mar 2025',
    logo: '/coding101.png',
    description: 'Built an AI-powered full-stack learning platform with React, TypeScript, TailwindCSS, Express.js, MongoDB, LangChain, Docker, and GitHub Actions.',
  },
  {
    title: '5th Place',
    subtitle: '2023 ITSA National Software Development Contest',
    period: 'Dec 2023',
    logo: '/itsa.png',
    description: 'National software development contest recognition.',
  },
  {
    title: 'Outstanding Youth',
    subtitle: 'National Taiwan University of Science and Technology',
    period: 'Dec 2024',
    logo: '/ntust.png',
    description: 'Recognized by NTUST for outstanding youth achievement.',
  },
] satisfies readonly Honor[]
