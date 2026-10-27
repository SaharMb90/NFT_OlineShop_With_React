import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from './i18n';
import { StoreProvider } from './store';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Collections from './components/Card';
import Nft from './components/Nft';
import Collection from './components/Collection';
import ConnectToWallet from './components/ConnectToWallet';
import MyNfts from './components/MyNfts';
import Footer from './components/Footer';
import Toast from './components/Toast';
import './main.css';

export default function App() {
  return (
    <LangProvider>
      <StoreProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<><Carousel /><Collections /><Nft /></>} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/collection/:id" element={<Collection />} />
              <Route path="/connecttowallet" element={<ConnectToWallet />} />
              <Route path="/me" element={<MyNfts />} />
              <Route path="*" element={<><Carousel /><Collections /><Nft /></>} />
            </Routes>
          </main>
          <Footer />
          <Toast />
        </BrowserRouter>
      </StoreProvider>
    </LangProvider>
  );
}
