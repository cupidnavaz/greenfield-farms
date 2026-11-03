import { type ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
export default function PublicLayout({ children }: { children: ReactNode }) { const location = useLocation(); useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]); return <div className="min-h-screen flex flex-col bg-white"><Navbar /><main className="flex-1">{children}</main><Footer /></div>; }
