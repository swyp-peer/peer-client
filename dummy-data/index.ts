import { User } from '@/types';

// TODO: auth-context.tsx 수정 필요
export const fakeMentee: User = {
  name: '김멘티',
  email: 'kim-mentee@peer.com',
  imageUrl: '/avtar.jpg',
  role: 'MENTEE',
};

// TODO: auth-context.tsx 수정 필요
export const fakeMentor: User = {
  name: '장멘토',
  email: 'mentor@peer.com',
  imageUrl: '/avtar.jpg',
  role: 'MENTOR',
};
