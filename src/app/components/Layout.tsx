import { Outlet, Link, useLocation } from 'react-router';
import { Home, Lightbulb, FileText, Sun, Moon, Beaker } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Layout() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-white">
      {/* Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <div className="flex items-center justify-between px-6 py-0 relative">
          <div className="flex items-center gap-10">
            <div className="text-xl font-extrabold italic py-4">Discovery-X</div>
            <nav className="flex gap-0 h-full">
              {[
                { to: '/dashboard', icon: <Home className="w-5 h-5" />, label: '대시보드' },
                { to: '/ideas', icon: <Lightbulb className="w-5 h-5" />, label: '아이디어' },
                { to: '/proposal', icon: <FileText className="w-5 h-5" />, label: '사업 제안' },
                { to: '/lab', icon: <Beaker className="w-5 h-5" />, label: '실험실' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative flex items-center gap-2 text-sm px-4 py-4 transition-colors ${
                    isActive(item.to)
                      ? 'font-semibold text-black dark:text-white'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {item.icon}
                  {item.label}
                  {isActive(item.to) && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-neutral-800 dark:bg-white rounded-full" />
                  )}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3 py-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="text-sm">김정원</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="h-[calc(100vh-73px)]">
        <Outlet />
      </main>
    </div>
  );
}