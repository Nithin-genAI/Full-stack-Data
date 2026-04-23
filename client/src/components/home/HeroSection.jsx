import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero" id="hero-section">
      <div className="hero-bg">
        {/* Animated gradient orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />

        {/* Animated road */}
        <div className="hero-road">
          <div className="road-dashes" />
        </div>

        {/* Animated buses */}
        <div className="hero-bus hero-bus-1">
          <div className="bus-body">
            <div className="bus-window" /><div className="bus-window" /><div className="bus-window" />
            <div className="bus-wheel bus-wheel-front" />
            <div className="bus-wheel bus-wheel-rear" />
          </div>
        </div>
        <div className="hero-bus hero-bus-2">
          <div className="bus-body bus-body-alt">
            <div className="bus-window" /><div className="bus-window" /><div className="bus-window" /><div className="bus-window" />
            <div className="bus-wheel bus-wheel-front" />
            <div className="bus-wheel bus-wheel-rear" />
          </div>
        </div>
        <div className="hero-bus hero-bus-3">
          <div className="bus-body bus-body-premium">
            <div className="bus-window" /><div className="bus-window" /><div className="bus-window" />
            <div className="bus-wheel bus-wheel-front" />
            <div className="bus-wheel bus-wheel-rear" />
          </div>
        </div>

        {/* Twinkling dots */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="hero-star"
            style={{
              left: `${8 + Math.random() * 84}%`,
              top: `${10 + Math.random() * 50}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          India's <span className="hero-title-accent">Premium</span> Bus Booking
          <br />Platform
        </h1>
        <p className="hero-subtitle">
          Safe • Bold • Luxurious — Travel with confidence
        </p>
      </div>
    </section>
  );
}
