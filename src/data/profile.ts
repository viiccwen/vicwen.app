import type { Profile, SocialLink } from './types'

export const profile = {
  location: 'Taipei, Taiwan',
  headline: 'Building backend systems, data pipelines, and open source software with a community-first mindset.',
  summary:
    "I am Vic, a passionate Software Engineer who loves open source contribution and community building. My work spans backend engineering, distributed systems, data infrastructure, CUDA/quantum-adjacent performance work, and developer communities.",
  portrait: '/vicwen.webp',
  portraitAlt: 'Portrait of Vic Wen',
} satisfies Profile

export const socials = [
  { label: 'GitHub', href: 'https://github.com/viiccwen' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/viiccwen/' },
] satisfies readonly SocialLink[]
