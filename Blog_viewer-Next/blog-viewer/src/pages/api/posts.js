export default function handler(req, res) {
  const posts = [
    {
      id: 1,
      title: 'The Future of Education in the Digital Age',
      content:
        'Online learning platforms and AI tutors are transforming traditional classrooms, making education more accessible and personalized.',
      image: 'https://picsum.photos/seed/edu/600/400',
      author: 'Ananya Sharma',
      date: '2025-07-05',
      time: '10:30 AM',
      rating: 4.7,
    },
    {
      id: 2,
      title: 'Global Terrorism in 2025: Threats and Responses',
      content:
        'Governments are adopting advanced surveillance and international cooperation to combat new-age cyber-terrorism and radicalization.',
      image: 'https://picsum.photos/seed/security/600/400',
      author: 'Omar Khalid',
      date: '2025-07-03',
      time: '4:45 PM',
      rating: 4.5,
    },
    {
      id: 3,
      title: 'Understanding Inflation: What It Means for the Average Citizen',
      content:
        'From grocery bills to loan interest, inflation is affecting everyday life—here’s how to stay financially aware in uncertain times.',
      image: 'https://picsum.photos/seed/finance/600/400',
      author: 'Riya Desai',
      date: '2025-06-30',
      time: '2:00 PM',
      rating: 4.3,
    },
    {
      id: 4,
      title: 'Russia-Ukraine War: The Ongoing Crisis and Global Impact',
      content:
        'The war continues to disrupt global energy and food supply chains, affecting economies and diplomacy across continents.',
      image: 'https://picsum.photos/seed/war/600/400',
      author: 'James Novak',
      date: '2025-07-01',
      time: '9:15 AM',
      rating: 4.8,
    },
    {
      id: 5,
      title: 'Climate Change: Are We Running Out of Time?',
      content:
        'With rising sea levels and extreme weather events, urgent action is needed at both the policy and individual level.',
      image: 'https://picsum.photos/seed/climate/600/400',
      author: 'Meera Iqbal',
      date: '2025-06-28',
      time: '11:10 AM',
      rating: 4.9,
    },
    {
      id: 6,
      title: 'Youth Unemployment and the Global Skills Gap',
      content:
        'Millions of young people are entering a job market that demands skills traditional education often doesn’t provide.',
      image: 'https://picsum.photos/seed/jobs/600/400',
      author: 'Kabir Verma',
      date: '2025-07-02',
      time: '3:30 PM',
      rating: 4.2,
    },
    {
      id: 7,
      title: 'The Rise of Digital Currencies and Government Regulation',
      content:
        'From Bitcoin to CBDCs, digital currencies are shaking up global finance—but regulation is still catching up.',
      image: 'https://picsum.photos/seed/crypto/600/400',
      author: 'Isha Rajput',
      date: '2025-06-27',
      time: '12:00 PM',
      rating: 4.6,
    },
    {
      id: 8,
      title: 'Artificial Intelligence and Ethics in 2025',
      content:
        'As AI systems become more powerful, debates over ethics, privacy, and control are more important than ever.',
      image: 'https://picsum.photos/seed/ai/600/400',
      author: 'Dr. Aditya Narayan',
      date: '2025-07-04',
      time: '6:00 PM',
      rating: 4.9,
    },
    {
      id: 9,
      title: 'Mental Health Crisis Among Students Post-Pandemic',
      content:
        'Isolation, academic pressure, and screen time are taking a toll—what institutions and parents can do to help.',
      image: 'https://picsum.photos/seed/mentalhealth/600/400',
      author: 'Sophia Mathews',
      date: '2025-07-01',
      time: '1:20 PM',
      rating: 4.4,
    },
    {
      id: 10,
      title: 'Global Water Scarcity: The Next Big Conflict?',
      content:
        'With rivers drying and groundwater overused, water could become the most valuable—and fought over—resource of the future.',
      image: 'https://picsum.photos/seed/water/600/400',
      author: 'Rajeev Thakur',
      date: '2025-06-29',
      time: '8:45 AM',
      rating: 4.8,
    },
  ];

  res.status(200).json(posts);
}
