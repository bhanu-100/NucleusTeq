// src/__tests__/PostList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import PostList from '../components/PostList';

const mockPosts = [
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
];

test('renders post titles and handles click', () => {
  const handleSelect = jest.fn();

  render(<PostList posts={mockPosts} onSelect={handleSelect} />);

  const titles = screen.getAllByTestId('post-title');
  expect(titles.length).toBe(2);
  expect(titles[0]).toHaveTextContent('The Future of Education in the Digital Age');
  expect(titles[1]).toHaveTextContent('Global Terrorism in 2025: Threats and Responses');

  fireEvent.click(titles[0]);
  expect(handleSelect).toHaveBeenCalledWith(mockPosts[0]);
});
