import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Features from './pages/Features';
import Login from './pages/Login';
import FeatureDetail from './pages/FeatureDetail';
import FeatureLayout from './pages/FeatureLayout';
const features = [
  { id: 1, name: 'feature 1', description: 'feature 1 is IMP feature' },
  { id: 2, name: 'feature 2', description: 'feature 2 is IMP feature' },
  { id: 3, name: 'feature 3', description: 'feature 3 is IMP feature' },
  { id: 4, name: 'feature 4', description: 'feature 4 is IMP feature' },
  { id: 5, name: 'feature 5', description: 'feature 5 is IMP feature' },
  { id: 6, name: 'feature 6', description: 'feature 6 is IMP feature' },
  { id: 7, name: 'feature 7', description: 'feature 7 is IMP feature' },
  { id: 8, name: 'feature 8', description: 'feature 8 is IMP feature' },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'features',
        element: <FeatureLayout />,
        children: [
          { index: true, element: <Features /> },
          { path: ':featureId', element: <FeatureDetail /> },
        ],
      },
      { path: 'login', element: <Login /> },
    ]
  },
]);

localStorage.setItem('features', JSON.stringify(features));

function App() {
  return <RouterProvider router={router} />;
}

export default App
