import { type ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { AuthProvider } from '@/context/AuthContext';
import { SettingsProvider } from '@/context/SettingsContext';
import { CartProvider } from '@/context/CartContext';
import PublicLayout from '@/components/public/PublicLayout';
import CartDrawer from '@/components/public/CartDrawer';
import AdminLayout from '@/components/admin/AdminLayout';
import Loader from '@/components/ui/Loader';
import Home from '@/pages/public/Home';
import Services from '@/pages/public/Services';
import Products from '@/pages/public/Products';
import Gallery from '@/pages/public/Gallery';
import About from '@/pages/public/About';
import Contact from '@/pages/public/Contact';
import PaymentGateway from '@/pages/public/PaymentGateway';
import Checkout from '@/pages/public/Checkout';
import TrackDelivery from '@/pages/public/TrackDelivery';
import AdminLogin from '@/pages/admin/AdminLogin';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminSettings from '@/pages/admin/AdminSettings';
import AdminPaymentSettings from '@/pages/admin/AdminPaymentSettings';
import AdminProducts from '@/pages/admin/AdminProducts';
import AdminCategories from '@/pages/admin/AdminCategories';
import AdminInventory from '@/pages/admin/AdminInventory';
import AdminOrders from '@/pages/admin/AdminOrders';
import AdminPayments from '@/pages/admin/AdminPayments';
import AdminInvoices from '@/pages/admin/AdminInvoices';
import AdminSales from '@/pages/admin/AdminSales';
import AdminStaff from '@/pages/admin/AdminStaff';
import AdminTasks from '@/pages/admin/AdminTasks';
import AdminPosts from '@/pages/admin/AdminPosts';
import AdminAnnouncements from '@/pages/admin/AdminAnnouncements';
import AdminGallery from '@/pages/admin/AdminGallery';
import AdminServices from '@/pages/admin/AdminServices';
import AdminPages from '@/pages/admin/AdminPages';
import AdminContests from '@/pages/admin/AdminContests';
import AdminSocial from '@/pages/admin/AdminSocial';
import AdminMessages from '@/pages/admin/AdminMessages';

function ProtectedRoute({ children }: { children: ReactNode }) { const { session, loading } = useAuth(); const location = useLocation(); if (loading) return <Loader label="Checking authentication..." />; if (!session) return <Navigate to="/admin/login" state={{ from: location.pathname }} replace />; return <>{children}</>; }
function PublicRoute({ children }: { children: ReactNode }) { return <PublicLayout>{children}</PublicLayout>; }
function AppRoutes() { return <Routes><Route path="/" element={<PublicRoute><Home /></PublicRoute>} /><Route path="/services" element={<PublicRoute><Services /></PublicRoute>} /><Route path="/products" element={<PublicRoute><Products /></PublicRoute>} /><Route path="/gallery" element={<PublicRoute><Gallery /></PublicRoute>} /><Route path="/about" element={<PublicRoute><About /></PublicRoute>} /><Route path="/contact" element={<PublicRoute><Contact /></PublicRoute>} /><Route path="/payment/:orderId" element={<PaymentGateway />} /><Route path="/checkout" element={<Checkout />} /><Route path="/track" element={<TrackDelivery />} /><Route path="/track/:trackingNumber" element={<TrackDelivery />} /><Route path="/admin/login" element={<AdminLogin />} /><Route path="/admin" element={<ProtectedRoute><AdminLayout><AdminDashboard /></AdminLayout></ProtectedRoute>} /><Route path="/admin/settings" element={<ProtectedRoute><AdminLayout><AdminSettings /></AdminLayout></ProtectedRoute>} /><Route path="/admin/payment-settings" element={<ProtectedRoute><AdminLayout><AdminPaymentSettings /></AdminLayout></ProtectedRoute>} /><Route path="/admin/products" element={<ProtectedRoute><AdminLayout><AdminProducts /></AdminLayout></ProtectedRoute>} /><Route path="/admin/categories" element={<ProtectedRoute><AdminLayout><AdminCategories /></AdminLayout></ProtectedRoute>} /><Route path="/admin/inventory" element={<ProtectedRoute><AdminLayout><AdminInventory /></AdminLayout></ProtectedRoute>} /><Route path="/admin/orders" element={<ProtectedRoute><AdminLayout><AdminOrders /></AdminLayout></ProtectedRoute>} /><Route path="/admin/payments" element={<ProtectedRoute><AdminLayout><AdminPayments /></AdminLayout></ProtectedRoute>} /><Route path="/admin/invoices" element={<ProtectedRoute><AdminLayout><AdminInvoices /></AdminLayout></ProtectedRoute>} /><Route path="/admin/sales" element={<ProtectedRoute><AdminLayout><AdminSales /></AdminLayout></ProtectedRoute>} /><Route path="/admin/staff" element={<ProtectedRoute><AdminLayout><AdminStaff /></AdminLayout></ProtectedRoute>} /><Route path="/admin/tasks" element={<ProtectedRoute><AdminLayout><AdminTasks /></AdminLayout></ProtectedRoute>} /><Route path="/admin/posts" element={<ProtectedRoute><AdminLayout><AdminPosts /></AdminLayout></ProtectedRoute>} /><Route path="/admin/announcements" element={<ProtectedRoute><AdminLayout><AdminAnnouncements /></AdminLayout></ProtectedRoute>} /><Route path="/admin/gallery" element={<ProtectedRoute><AdminLayout><AdminGallery /></AdminLayout></ProtectedRoute>} /><Route path="/admin/services" element={<ProtectedRoute><AdminLayout><AdminServices /></AdminLayout></ProtectedRoute>} /><Route path="/admin/pages" element={<ProtectedRoute><AdminLayout><AdminPages /></AdminLayout></ProtectedRoute>} /><Route path="/admin/contests" element={<ProtectedRoute><AdminLayout><AdminContests /></AdminLayout></ProtectedRoute>} /><Route path="/admin/social" element={<ProtectedRoute><AdminLayout><AdminSocial /></AdminLayout></ProtectedRoute>} /><Route path="/admin/messages" element={<ProtectedRoute><AdminLayout><AdminMessages /></AdminLayout></ProtectedRoute>} /><Route path="*" element={<Navigate to="/" replace />} /></Routes>; }
export default function App() { return <BrowserRouter><AuthProvider><SettingsProvider><CartProvider><AppRoutes /><CartDrawer /></CartProvider></SettingsProvider></AuthProvider></BrowserRouter>; }
