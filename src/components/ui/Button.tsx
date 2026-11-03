import { type ButtonHTMLAttributes, type ReactNode } from 'react';
type Variant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: Variant; size?: Size; children: ReactNode; }
const variantClasses: Record<Variant, string> = { primary: 'bg-primary-700 hover:bg-primary-800 text-white shadow-md hover:shadow-lg', secondary: 'bg-secondary-300 hover:bg-secondary-400 text-primary-900 shadow-md', accent: 'bg-accent-500 hover:bg-accent-600 text-white shadow-md hover:shadow-lg', outline: 'border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white', ghost: 'text-primary-700 hover:bg-primary-50', danger: 'bg-red-600 hover:bg-red-700 text-white shadow-md' };
const sizeClasses: Record<Size, string> = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-2.5 text-base', lg: 'px-8 py-3.5 text-lg' };
export default function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) { return <button className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>{children}</button>; }
