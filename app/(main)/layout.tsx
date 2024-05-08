import BottomNavbar from "@/components/navbar/bottom-nav";
import { SideNavBar } from "@/components/navbar/side-nav";
import { TopNavbar } from "@/components/navbar/top-nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideNavBar />
      <TopNavbar />
      {children}
      <BottomNavbar />
    </>
  );
}
