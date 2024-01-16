import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from './store/authContext';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import Login from './pages/Login';
import FeatureDetail from './pages/FeatureDetail';
import FeatureLayout from './pages/FeatureLayout';
import SignUp from './pages/Signup';
import History from './pages/History';


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
      { path: 'signup', element: <SignUp /> },
      { path: 'history', element: <History /> },
    ]
  },
]);

// localStorage.setItem('features', JSON.stringify(features));

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App
