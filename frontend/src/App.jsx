import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Features from './pages/Features';
import Login from './pages/Login';
import FeatureDetail from './pages/FeatureDetail';
import FeatureLayout from './pages/FeatureLayout';
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from './pages/Signup';
import { AuthContextProvider } from './store/authContext';


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
      {path:'signup',element:<SignUp/>}
    ]
  },
]);


function App() {
  return (
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
  );
}

export default App
