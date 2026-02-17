import React from 'react';

type ComponentContainerProps = {
  className?: string;
  children: React.ReactNode;
};
export default function Container({
  className = 'bg-transparent',
  children,
}: ComponentContainerProps) {
  return (
    <div className={className}>
      <div className="max-w-7xl m-auto">{children}</div>
    </div>
  );
}
