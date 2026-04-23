import { whatsNewFeatures } from '../../utils/mockData';
import Card from '../common/Card';
import { FaChevronRight } from 'react-icons/fa';
import './WhatsNewSection.css';

export default function WhatsNewSection() {
  return (
    <section className="whatsnew-section" id="whatsnew-section">
      <div className="container">
        <div className="section-title-row">
          <h2 className="section-title">What's new</h2>
        </div>

        <div className="whatsnew-scroll">
          {whatsNewFeatures.map((feature, idx) => (
            <Card key={feature.id} className={`whatsnew-card stagger-${idx + 1}`} id={`whatsnew-${feature.id}`}>
              <div className="whatsnew-card-accent" style={{ background: feature.color }} />
              <div className="whatsnew-icon" style={{ background: feature.bgColor, color: feature.color }}>
                {feature.icon}
              </div>
              <h4 className="whatsnew-title" style={{ color: feature.color }}>{feature.title}</h4>
              <p className="whatsnew-desc">{feature.description}</p>
              <span className="whatsnew-link" style={{ color: feature.color }}>
                Know more <FaChevronRight size={10} />
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
