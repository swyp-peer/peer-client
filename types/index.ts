export type User = {
  name: string;
  email: string;
  imageUrl: string;
  role: 'MENTEE' | 'MENTOR' | 'ADMIN';
};
