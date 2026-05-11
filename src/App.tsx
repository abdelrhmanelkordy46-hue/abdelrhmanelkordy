/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  Users, 
  Calendar, 
  LayoutDashboard, 
  Settings, 
  Search,
  Bell,
  Menu,
  X,
  CreditCard,
  Wrench,
  Fuel,
  ShieldCheck,
  FileText
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Default to Arabic/RTL for this UI
  return (
    <div className="min-h-screen bg-zinc-50 flex rtl font-sans" dir="rtl">
      {/* Sidebar */}
      <aside className={`bg-zinc-900 text-zinc-100 flex-shrink-0 transition-all duration-300 overflow-hidden ${isSidebarOpen ? 'w-64' : 'w-0'}`}>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Car className="text-blue-500" />
            <span>أوتو برو</span>
          </h1>
          <p className="text-zinc-500 text-xs mt-1">نسخة الشركات الاحترافية</p>
        </div>

        <nav className="mt-6 px-4 space-y-1">
          <SidebarItem 
            icon={<LayoutDashboard size={20} />} 
            label="لوحة التحكم" 
            active={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')} 
          />
          <SidebarItem 
            icon={<Car size={20} />} 
            label="الأسطول" 
            active={activeTab === 'fleet'} 
            onClick={() => setActiveTab('fleet')} 
          />
          <SidebarItem 
            icon={<Calendar size={20} />} 
            label="الحجوزات" 
            active={activeTab === 'bookings'} 
            onClick={() => setActiveTab('bookings')} 
          />
          <SidebarItem 
            icon={<Users size={20} />} 
            label="العملاء" 
            active={activeTab === 'customers'} 
            onClick={() => setActiveTab('customers')} 
          />
          <SidebarItem 
            icon={<CreditCard size={20} />} 
            label="المحاسبة" 
            active={activeTab === 'accounting'} 
            onClick={() => setActiveTab('accounting')} 
          />
          <SidebarItem 
            icon={<Wrench size={20} />} 
            label="الصيانة" 
            active={activeTab === 'maintenance'} 
            onClick={() => setActiveTab('maintenance')} 
          />
          <div className="pt-4 pb-2 border-t border-zinc-800">
            <p className="px-4 text-[10px] uppercase tracking-wider text-zinc-600 mb-2">إضافات ذكية</p>
            <SidebarItem 
              icon={<ShieldCheck size={20} />} 
              label="الحوادث والأضرار" 
              active={activeTab === 'accidents'} 
              onClick={() => setActiveTab('accidents')} 
            />
            <SidebarItem 
              icon={<FileText size={20} />} 
              label="العقود الذكية" 
              active={activeTab === 'contracts'} 
              onClick={() => setActiveTab('contracts')} 
            />
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-zinc-200 px-6 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-zinc-100 rounded-lg text-zinc-600 transition-colors"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="relative group">
              <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors" />
              <input 
                type="text" 
                placeholder="بحث ذكي..." 
                className="bg-zinc-100 border-none rounded-full py-2 pr-10 pl-4 text-sm w-64 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-zinc-100 rounded-full text-zinc-600 relative">
              <Bell size={20} />
              <span className="absolute top-1.5 left-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs ring-2 ring-white">
              AK
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">
                {activeTab === 'dashboard' && 'اللوحة الذكية'}
                {activeTab === 'fleet' && 'إدارة الأسطول'}
                {activeTab === 'bookings' && 'إدارة الحجوزات'}
                {activeTab === 'customers' && 'قاعدة بيانات العملاء'}
                {activeTab === 'accounting' && 'الحسابات والتقارير'}
                {activeTab === 'maintenance' && 'سجل الصيانة'}
                {activeTab === 'accidents' && 'إدارة الحوادث'}
                {activeTab === 'contracts' && 'نظام العقود'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard label="أرباح اليوم" value="4,500 ر.س" trend="+12%" icon={<CreditCard className="text-green-500" />} />
                <StatsCard label="سيارات مؤجرة" value="48/55" trend="87%" icon={<Car className="text-blue-500" />} />
                <StatsCard label="حجوزات جديدة" value="12" trend="+3" icon={<Calendar className="text-purple-500" />} />
                <StatsCard label="تحتاج صيانة" value="3" trend="مطلوب" icon={<Wrench className="text-amber-500" />} />
              </div>

              {/* Placeholder for content */}
              <div className="bg-white rounded-2xl border border-zinc-200 p-8 flex flex-col items-center justify-center text-zinc-400 min-h-[400px]">
                <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck size={40} className="text-zinc-200" />
                </div>
                <p>يرجى إكمال إعداد قاعدة البيانات لتفعيل كافة الميزات...</p>
                <div className="mt-4 flex gap-4">
                   <div className="animate-pulse bg-zinc-200 h-2 w-24 rounded"></div>
                   <div className="animate-pulse bg-zinc-200 h-2 w-32 rounded scale-95"></div>
                   <div className="animate-pulse bg-zinc-200 h-2 w-16 rounded scale-110"></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
        active 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
          : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function StatsCard({ label, value, trend, icon }: { label: string, value: string, trend: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-zinc-50 rounded-xl">
          {icon}
        </div>
        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${trend.includes('+') || trend.includes('%') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {trend}
        </span>
      </div>
      <div>
        <h3 className="text-zinc-500 text-xs font-medium mb-1">{label}</h3>
        <p className="text-2xl font-bold text-zinc-900">{value}</p>
      </div>
    </div>
  );
}

