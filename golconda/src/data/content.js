// All public copy lives here. In Phase 2 services, events, notifications and
// profiles move to PostgreSQL and are edited from the team dashboard.
// Items marked SAMPLE are placeholders: replace before launch.

export const company = {
  name: 'Golconda Security Services',
  tagline: 'Security built in layers, from the gate to the network.',
  email: 'info@golcondasecurity.example', // SAMPLE
  phone: '+91 00000 00000', // SAMPLE
  address: 'Hyderabad, Telangana, India',
};

export const nav = [
  { to: '/services', label: 'Services' },
  { to: '/company', label: 'Company' },
  { to: '/events', label: 'Events' },
  { to: '/notifications', label: 'Notifications' },
  { to: '/careers', label: 'Work with us' },
  { to: '/contact', label: 'Contact' },
];

export const services = [
  { id: 'guarding', domain: 'physical', title: 'Manned guarding',
    summary: 'Trained, uniformed guards for offices, campuses, factories, residences and retail.',
    points: ['Site risk assessment and post orders', 'Supervisor-led shift management', 'Daily activity and incident reporting'] },
  { id: 'access', domain: 'physical', title: 'Access control and visitor management',
    summary: 'Know who is on site, where they went and when they left.',
    points: ['Card, biometric and mobile credentials', 'Visitor pre-registration and badges', 'Audit trails for compliance reviews'] },
  { id: 'surveillance', domain: 'physical', title: 'CCTV and surveillance',
    summary: 'Camera design, installation and monitoring that covers real blind spots.',
    points: ['Site survey and camera placement plan', 'Central monitoring and alert escalation', 'Retention and footage-handling policy'] },
  { id: 'events', domain: 'physical', title: 'Event security',
    summary: 'Crowd management, entry screening and emergency planning for corporate and public events.',
    points: ['Pre-event venue assessment', 'Entry screening and crowd flow', 'On-site command and coordination'] },
  { id: 'vapt', domain: 'cyber', title: 'Vulnerability assessment and penetration testing',
    summary: 'Find the weaknesses in your applications, networks and cloud before an attacker does.',
    points: ['Web, mobile and API testing', 'Network and cloud configuration review', 'Prioritised fixes with retesting'] },
  { id: 'monitoring', domain: 'cyber', title: 'Security monitoring and response',
    summary: 'Round-the-clock watch over logs, endpoints and alerts, with a plan for when something fires.',
    points: ['Log and alert triage', 'Incident response playbooks', 'Monthly threat and posture reports'] },
  { id: 'compliance', domain: 'cyber', title: 'Compliance and security advisory',
    summary: 'Policies, audits and readiness support for ISO 27001, SOC 2 and data-protection requirements.',
    points: ['Gap assessment against your chosen framework', 'Policy and procedure drafting', 'Audit preparation support'] },
  { id: 'awareness', domain: 'cyber', title: 'Security awareness training',
    summary: 'Practical training for staff, including phishing simulations and physical-security habits.',
    points: ['Role-based training sessions', 'Phishing simulations with reporting', 'Tailgating and badge-discipline workshops'] },
];

export const layers = [
  { name: 'Perimeter', text: 'Guards, barriers and surveillance at the edge of your site.' },
  { name: 'Entry', text: 'Access control and visitor records at every door that matters.' },
  { name: 'Network', text: 'Testing and monitoring across your systems and cloud.' },
  { name: 'People', text: 'Training and clear procedures so staff strengthen the system.' },
];

// SAMPLE data: replace or manage from the dashboard in Phase 2.
export const notifications = [
  { id: 1, date: '2026-10-01', title: 'Updated visitor policy for client sites', body: 'All visitors to client premises now require photo ID and pre-registration. Site supervisors have the revised checklist.' },
  { id: 2, date: '2026-09-24', title: 'Festival season deployment plan', body: 'Additional guard rosters are active for the festival period. Clients with events should confirm requirements with their account lead.' },
  { id: 3, date: '2026-09-15', title: 'Phishing awareness sessions open for booking', body: 'Book a half-day session for your team. Sessions cover email, phone and in-person social engineering.' },
];

export const events = [
  { id: 1, date: '2026-11-12', title: 'Corporate security briefing', place: 'Hyderabad', body: 'A half-day briefing for facility and IT heads on joining physical and cyber risk assessments.' },
  { id: 2, date: '2026-12-03', title: 'Guard training and certification day', place: 'Golconda training centre', body: 'Refresher training for deployed guards: emergency response, first aid and reporting.' },
  { id: 3, date: '2027-01-21', title: 'Cybersecurity readiness workshop', place: 'Online', body: 'A practical workshop on ransomware preparedness for small and mid-size businesses.' },
];

export const profile = {
  intro: 'Golconda Security Services protects people, property and information. We take the name from the Golconda fort in Hyderabad, a place known for defence built in layers.',
  values: [
    { title: 'Discipline', text: 'Clear procedures, trained people and reporting that stands up to review.' },
    { title: 'Integrity', text: 'We say what we can deliver and then deliver it.' },
    { title: 'Joined-up thinking', text: 'Physical and cyber risks are assessed together, because attackers do not respect the boundary.' },
  ],
  leadership: [
    { name: 'Name to be added', role: 'Managing Director', bio: 'Short biography goes here.' },
    { name: 'Name to be added', role: 'Head of Physical Security', bio: 'Short biography goes here.' },
    { name: 'Name to be added', role: 'Head of Cybersecurity', bio: 'Short biography goes here.' },
  ],
};

export const openings = [
  { id: 1, title: 'Security supervisor', type: 'Full time', place: 'Hyderabad', body: 'Lead guard teams at client sites, manage shift rosters and handle incident reports.' },
  { id: 2, title: 'Security guard', type: 'Full time', place: 'Hyderabad', body: 'Uniformed post duty at corporate, residential and industrial sites. Training provided.' },
  { id: 3, title: 'Security analyst', type: 'Full time', place: 'Hyderabad / hybrid', body: 'Monitor alerts, triage incidents and contribute to penetration-testing engagements.' },
];
