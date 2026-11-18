export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  category: 'broadcast' | 'branding' | 'production' | 'operations';
  description: string[];
  skills: string[];
  timecode: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  specialization?: string;
  details?: string;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  badge: string;
  skills: { name: string; level: string; description?: string }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Sudip Raj',
    roleHeadline: 'Multimedia & Mass Communication Professional',
    subheadline: 'Broadcast Camera Operator • Video Editor • Digital Communications & Branding Specialist',
    summary:
      'Multimedia professional with 7+ years of hands-on experience in photography, videography, and video editing, including live shoots, green-screen production, and Adobe Premiere Pro post-production. Skilled in framing, lighting judgment, and fast turnaround editing for broadcast, educational, and institutional media platforms.',
    currentStatus: 'Active at KVS HQ (Kendriya Vidyalaya Sangathan, New Delhi)',
    location: 'New Delhi / Varanasi, India',
    email: 'Sudipraj111@gmail.com',
    phone: '+91 9140805890',
    resumePdfUrl: '/assets/Sudip_Raj_Resume.pdf',
    photoUrl: '/assets/sudip-portrait.jpg',
    experienceYears: '7+',
    stats: [
      { label: 'Years Production Experience', value: '7+' },
      { label: 'National Broadcast Projects', value: 'Swayam Prabha' },
      { label: 'Academic Qualification', value: 'Master (BHU)' },
      { label: 'Specialization', value: 'Public Relations' },
    ],
  },

  disciplines: [
    {
      number: '01',
      title: 'Broadcast Camera & Multi-Camera Shoots',
      description:
        'Proven expertise in broadcast-quality framing, studio lighting, live multi-camera production, and on-location educational television recording under tight broadcast guidelines.',
      tag: 'Studio & Field',
      icon: 'Camera',
    },
    {
      number: '02',
      title: 'Video Post-Production & Editing',
      description:
        'Extensive fast-turnaround video editing in Adobe Premiere Pro, green screen / chroma key composite recording, and creation of motion graphics and text overlays for news packages.',
      tag: 'Premiere Pro',
      icon: 'Film',
    },
    {
      number: '03',
      title: 'Institutional Branding & Digital Strategy',
      description:
        'Designing and executing official digital communication campaigns, managing institutional social media channels, and crafting engaging public-facing educational narratives.',
      tag: 'KVS HQ',
      icon: 'Share2',
    },
    {
      number: '04',
      title: 'Mass Communication & Media Research',
      description:
        'Master’s degree from Banaras Hindu University (BHU) in Public Relations with published analysis on digital political communication and election social media trends.',
      tag: 'BHU PR Research',
      icon: 'Award',
    },
  ],

  experiences: [
    {
      id: 'kvs-hq',
      role: 'Publication & Branding Expert',
      organization: 'Kendriya Vidyalaya Sangathan (KVS HQ)',
      location: 'New Delhi',
      period: 'Feb 2025 – Present',
      isCurrent: true,
      category: 'branding',
      timecode: 'TC 00:07:00:00',
      description: [
        'Lead institutional digital communications and social media strategy for Kendriya Vidyalaya Sangathan headquarters.',
        'Manage official social media handles, curating strategic educational and promotional campaigns.',
        'Oversee content creation, creative digital assets, and high-visibility publication releases.',
      ],
      skills: ['Digital Communications', 'Branding Strategy', 'Social Media Management', 'Content Creation'],
    },
    {
      id: 'ignou-swayam',
      role: 'Camera Person',
      organization: 'IGNOU – Swayam / Swayam Prabha Project',
      location: 'New Delhi',
      period: 'Apr 2024 – Feb 2025',
      category: 'broadcast',
      timecode: 'TC 00:06:02:15',
      description: [
        'Operated broadcast cameras for Swayam and Swayam Prabha, India’s national educational DTH television channels.',
        'Managed on-location and studio multi-camera shoots, upholding strict broadcast framing and lighting standards.',
        'Coordinated video production, educational content development, and media communication workflows.',
      ],
      skills: ['Broadcast Camera', 'Studio Lighting', 'Swayam Prabha DTH', 'Framing & Composition'],
    },
    {
      id: 'becil-aaiclas',
      role: 'Supervisor Cum DEO',
      organization: 'BECIL – AAICLAS',
      location: 'Varanasi',
      period: 'Mar 2023 – Mar 2024',
      category: 'operations',
      timecode: 'TC 00:05:01:00',
      description: [
        'Supervised operations and data documentation at the AAI Cargo Logistics and Allied Services Company Limited complex in Varanasi under BECIL.',
        'Strengthened large-scale logistical coordination, team management, and critical deadline operations.',
      ],
      skills: ['Operations Supervision', 'Data Analysis', 'Logistics Management', 'Team Coordination'],
    },
    {
      id: 'motion-picture-learners',
      role: 'Social Media Executive cum Video Editor',
      organization: 'Motion Picture Learners (M P L)',
      location: 'Varanasi',
      period: 'Nov 2020 – Mar 2023',
      category: 'production',
      timecode: 'TC 00:03:02:00',
      description: [
        'Captured photographs and video footage for commercial, artistic, and corporate client assignments.',
        'Produced, edited, and post-processed video content with advanced text overlays, motion graphics, and audio sync.',
        'Managed end-to-end social media channels, publishing calendars, and performance reporting for commercial clients.',
      ],
      skills: ['Commercial Photography', 'Video Editing', 'Motion Graphics', 'Client Social Management'],
    },
    {
      id: 'den-kashi-cable',
      role: 'Cameraman cum Video Editor',
      organization: 'Den Kashi Cable Channel',
      location: 'Varanasi',
      period: 'Apr 2017 – Nov 2020',
      category: 'broadcast',
      timecode: 'TC 00:00:00:00',
      description: [
        'Operated green-screen (chroma key) studio setups for daily live news telecasts and recorded program packages.',
        'Edited raw news feeds and special feature stories in Adobe Premiere Pro to meet strict broadcast deadlines.',
        'Delivered broadcast-grade video packages daily with consistent color, audio levels, and graphics.',
      ],
      skills: ['Adobe Premiere Pro', 'Green Screen / Chroma Key', 'Live News Recording', 'Deadline Turnaround'],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: 'Master in Mass Communication',
      institution: 'Banaras Hindu University (BHU)',
      location: 'Varanasi',
      period: 'Jul 2020 – Jun 2022',
      specialization: 'Specialization: Public Relations (PR)',
      details:
        'Dissertation Research: "Use of Twitter by Politicians in Uttar Pradesh Assembly Elections (Analysis-2022)" — An empirical examination of digital messaging, political branding, and voter engagement on social platforms.',
      highlights: ['Public Relations', 'Political Media Analysis', 'Media Ethics & Governance'],
    },
    {
      degree: 'Bachelor in Mass Communication with Honours',
      institution: 'Mahatma Gandhi Kashi Vidyapith',
      location: 'Varanasi',
      period: 'Aug 2017 – Nov 2020',
      details:
        'Comprehensive curriculum covering television production, print journalism, audience behavior analysis, media laws, and audio-visual communication.',
      highlights: ['Mass Media Studies', 'Audience Behavior', 'Visual Media Production'],
    },
    {
      degree: 'Diploma in Photography',
      institution: 'SIFDI',
      location: 'Varanasi',
      period: 'Apr 2019 – Mar 2020',
      details:
        'Specialized practical diploma covering photographic composition, natural and studio lighting control, portraiture, and digital darkroom techniques.',
      highlights: ['Studio Lighting', 'Artistic Composition', 'Portraiture'],
    },
    {
      degree: "DOEACC 'O' Level (IT Certification)",
      institution: 'National Institute of Electronics & Information Technology (NIELIT / AIESECI)',
      location: 'Varanasi',
      period: 'Jan 2018 – Jan 2020',
      details:
        'Foundational qualification in Information Technology systems, computer applications, digital tools, and technical data handling.',
      highlights: ['IT Fundamentals', 'Data Management', 'Computer Systems'],
    },
  ] as EducationItem[],

  technicalProficiencies: [
    {
      category: 'Video Editing & Post-Production',
      items: [
        { name: 'Adobe Premiere Pro', description: 'Nonlinear multi-track editing, timeline trimming, color grading, audio leveling' },
        { name: 'Green Screen / Chroma Keying', description: 'Studio background extraction, lighting matching, clean keying' },
        { name: 'Motion Graphics & Overlays', description: 'Lower thirds, news titles, text graphics, transition packaging' },
        { name: 'Fast Turnaround News Packaging', description: 'Real-time ingestion and delivery for live broadcast slots' },
      ],
    },
    {
      category: 'Camera & Studio Production',
      items: [
        { name: 'Broadcast Camera Operation', description: 'Multi-camera studio rigs, pedestal systems, field documentary filming' },
        { name: 'Lighting & Framing Judgment', description: 'Three-point lighting, color temperature balancing, composition rules' },
        { name: 'Live Multi-Camera Direction', description: 'On-location coordination, intercom cues, switcher timing' },
        { name: 'Still Photography & Optics', description: 'Focal length selection, depth of field management, commercial portraits' },
      ],
    },
    {
      category: 'Digital Strategy & Institutional PR',
      items: [
        { name: 'Social Media Management', description: 'Page administration, content planning, audience growth' },
        { name: 'Institutional Branding', description: 'Aligning video and visual messaging with national educational goals' },
        { name: 'Digital Content Development', description: 'Short-form social cuts, educational documentaries, announcements' },
        { name: 'Data Analysis & Operations', description: 'Audience insights, documentation integrity, deadline management' },
      ],
    },
  ],

  certifications: [
    { title: 'Video Production and Editing', issuer: 'Professional Certification' },
    { title: "DOEACC 'O' Level", issuer: 'NIELIT' },
    { title: 'Course on Computer Concepts (CCC)', issuer: 'NIELIT' },
    { title: 'Computer Application', issuer: 'Certified Technical Course' },
    { title: 'ITI Electrician', issuer: 'Technical Training Board' },
  ],

  honors: [
    {
      title: 'Outstanding Contribution in the Field of Communication & Promotion',
      event: 'Lighthouse of Media Professionals – National Webinar',
      description:
        'Awarded in national recognition of exceptional work in media promotion, visual communication, and public engagement initiatives.',
    },
  ],

  languages: [
    { name: 'Hindi', proficiency: 'Native / Fluent' },
    { name: 'English', proficiency: 'Professional Working Proficiency' },
  ],
};
