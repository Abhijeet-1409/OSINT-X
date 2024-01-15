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
const features = [
  {
    id: 1,
    name: "PDF Analysis",
    icon: "",
    info: "Websites are just one part of the Internet. Use Shodan to discover everything from power plants, mobile phones, refrigerators and Minecraft servers.",
    description: "feature 1 is IMP feature",
  },
  {
    id: 2,
    name: "Username Checker",
    icon: "",
    info: "Websites are just one part of the Internet. Use Shodan to discover everything from power plants, mobile phones, refrigerators and Minecraft servers.",
    description: "feature 2 is IMP feature",
  },
  {
    id: 3,
    name: "Ip Locator",
    icon: "",
    info: "Websites are just one part of the Internet. Use Shodan to discover everything from power plants, mobile phones, refrigerators and Minecraft servers.",
    description: "feature 3 is IMP feature",
  },
  {
    id: 4,
    name: "Image Recognizer",
    icon: "",
    info: "Websites are just one part of the Internet. Use Shodan to discover everything from power plants, mobile phones, refrigerators and Minecraft servers.",
    description: "feature 4 is IMP feature",
  },
  {
    id: 5,
    name: "Web Scraping",
    icon: "",
    info: "Websites are jujkbkfjWBDKjbdlkqbjst one part of the Internet. Use Shodan to discover everything from power plants, mobile phones, refrigerators and Minecraft servers.",
    description: "feature 5 is IMP feature",
  },
  {
    id: 6,
    name: "Url Validator",
    icon: "",
    info: "Websites are just one part of the Internet. Use Shodan to discover everything from power plants, mobile phones, refrigerators and Minecraft servers.",
    description: "feature 6 is IMP feature",
  },
  {
    id: 7,
    name: "feature 7",
    info: "Websites are just one part of the Internet. Use Shodan to discover everything from power plants, mobile phones, refrigerators and Minecraft servers.",
    description: "feature 7 is IMP feature",
  },
  {
    id: 8,
    name: "feature 8",
    icon: "",
    info: "Websites are just one part of the Internet. Use Shodan to discover everything from power plants, mobile phones, refrigerators and Minecraft servers.",
    description: "feature 8 is IMP feature",
  },
  {
    id: 9,
    name: "feature 9",
    icon: "",
    info: "Websites are just one part of the Internet. Use Shodan to discover everything from power plants, mobile phones, refrigerators and Minecraft servers.",
    description: "feature 8 is IMP feature",
  },
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
      {path:'signup',element:<SignUp/>}
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
