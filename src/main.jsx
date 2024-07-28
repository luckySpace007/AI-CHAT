import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage.jsx'
import RootLayout from '../src/layouts/rootLayout/RootLayout.jsx'
import DashboardLayout from '../src/layouts/dashboardLayout/DashboardLayout.jsx'
import DashBoardPage from './routes/dashboardPage/DashboardPage.jsx'
import ChatPage from './routes/chatPage/ChatPage.jsx'


const router = createBrowserRouter([
  {
    element : <RootLayout />,
    children : [
      {
        path : "/",
        element : <Homepage />,
      },
      {
        element : <DashboardLayout />,
        children : [
          {
            path : "/dashboard",
            element : <DashBoardPage />,

          },
          {
            path : "/dashboard/chats/id",
            element : <ChatPage />,

          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
