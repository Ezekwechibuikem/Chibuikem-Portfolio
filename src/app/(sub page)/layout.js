import HomeBtn from "@/components/HomeBtn";

export default function RootLayout({ children }) {
  return (
        <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 py-20 lg:px-32 overflow-x-hidden overflow-y-auto">
        <HomeBtn />
        {children}
    </main>
  );
}