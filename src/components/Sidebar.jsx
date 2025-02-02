import React from 'react';
import { Building2, MapPin, LayoutDashboard, Grid, FormInput, InboxIcon, MessageSquare, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import SidebarLink from './SidebarLink';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Building2, label: 'Properties', path: '/properties' },
  { icon: MapPin, label: 'Locations', path: '/locations' },
  { icon: Grid, label: 'Categories', path: '/categories' },
  { icon: FormInput, label: 'Forms', path: '/forms' },
  { icon: InboxIcon, label: 'Submissions', path: '/submissions' },
  { icon: MessageSquare, label: 'Contact Us', path: '/contact' },
];

function Sidebar() {
  const location = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="bg-white dark:bg-gray-800 h-screen w-64 fixed left-0 top-0 shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Co-Brother Admin</h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <SidebarLink
            key={item.path}
            {...item}
            isActive={location.pathname === item.path}
          />
        ))}
      </nav>
      <div className="absolute bottom-0 w-full p-4">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;