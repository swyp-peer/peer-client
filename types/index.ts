export type User = {
  name: string;
  email: string;
  imageUrl: string;
  role: "MENTEE" | "MENTOR" | "ADMIN";
};

export type Alarm = {
  from: string;
  date: string;
  message: string;
  read: boolean;
  time: string;
};
