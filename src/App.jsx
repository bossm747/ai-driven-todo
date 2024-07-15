import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Wallet, QrCode, History, HelpCircle } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";
import QRCodeGenerator from "./pages/TodoList.jsx";
import EWallet from "./pages/EWallet.jsx";
import UserRegistration from "./pages/UserRegistration.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import TransactionHistory from "./pages/TransactionHistory.jsx";
import HelpSupport from "./pages/HelpSupport.jsx";
import KYCVerification from "./components/KYCVerification.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-6 w-6" />,
  },
  {
    title: "E-Wallet",
    to: "/wallet",
    icon: <Wallet className="h-6 w-6" />,
  },
  {
    title: "QR Code",
    to: "/qrcode",
    icon: <QrCode className="h-6 w-6" />,
  },
  {
    title: "Transactions",
    to: "/history",
    icon: <History className="h-6 w-6" />,
  },
  {
    title: "Support",
    to: "/help-support",
    icon: <HelpCircle className="h-6 w-6" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="qrcode" element={<QRCodeGenerator />} />
              <Route path="wallet" element={<EWallet />} />
              <Route path="history" element={<TransactionHistory />} />
              <Route path="register" element={<UserRegistration />} />
              <Route path="login" element={<UserLogin />} />
              <Route path="help-support" element={<HelpSupport />} />
              <Route path="kyc-verification" element={<KYCVerification />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;