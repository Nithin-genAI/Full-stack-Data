import HeroSection from '../components/home/HeroSection';
import SearchForm from '../components/home/SearchForm';
import OffersSection from '../components/home/OffersSection';
import WhatsNewSection from '../components/home/WhatsNewSection';
import GovernmentBusesSection from '../components/home/GovernmentBusesSection';

export default function HomePage() {
  return (
    <div className="home-page" id="home-page">
      <HeroSection />
      <SearchForm />
      <OffersSection />
      <WhatsNewSection />
      <GovernmentBusesSection />
    </div>
  );
}
