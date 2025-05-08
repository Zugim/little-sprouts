interface LayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <div className="min-h-dvh flex justify-center items-center">{children}</div>
  );
}
