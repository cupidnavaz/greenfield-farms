import { type ReactNode } from 'react';
interface CardProps { children: ReactNode; className?: string; hover?: boolean; }
export default function Card({ children, className = '', hover = false }: CardProps) { return <div className={`bg-white rounded-2xl shadow-md border border-gray-100 ${hover ? 'card-hover' : ''} ${className}`}>{children}</div>; }
