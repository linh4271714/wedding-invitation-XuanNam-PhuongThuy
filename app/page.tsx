import Header from "@/components/sections/header";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <main className="min-h-screen light:bg-white dark:bg-black m-0">
        <Header />
      </main>
    </RootLayout>
  );
}
