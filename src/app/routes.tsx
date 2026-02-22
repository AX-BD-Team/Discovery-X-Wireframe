import { createBrowserRouter, Navigate } from 'react-router';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Ideas } from './pages/Ideas';
import { Proposal } from './pages/Proposal';
import { Lab } from './pages/Lab';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        Component: Dashboard,
      },
      {
        path: 'ideas',
        Component: Ideas,
      },
      {
        path: 'proposal',
        Component: Proposal,
      },
      {
        path: 'lab',
        Component: Lab,
      },
      {
        path: '*',
        element: <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">404</h1>
            <p className="text-neutral-600">페이지를 찾을 수 없습니다</p>
          </div>
        </div>,
      },
    ],
  },
]);
