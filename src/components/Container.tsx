interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="px-4 md:px-24 mb-4">{children}</div>;
}
