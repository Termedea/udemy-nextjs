import React from 'react';
type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return <div className={`mt-lg p-md shadow-md bg-foreground rounded-md ${className ?? ''}"`}>{children}</div>;
}
