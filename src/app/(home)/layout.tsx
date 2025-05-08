import Header from "@/components/home/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
