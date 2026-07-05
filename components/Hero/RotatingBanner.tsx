const BANNER_ITEMS = [
  "🌍 Magical Continent Ltd",
  "✈️ Excellent Travel Services with Ease.",
  "Experience seamless and luxurious travel arrangements designed just for you.",
  "☎️ +254 714-837 324 / +254 732-861973",
  "✉️ Magicalcontinentltd@outlook.com",
  "Book Now via Phone call, WhatsApp or Email",
];

const RotatingBanner = () => {
  // Render the sequence twice so the -50% translate loops seamlessly with no gap.
  const items = [...BANNER_ITEMS, ...BANNER_ITEMS];

  return (
    <div className="banner-container">
      <div className="banner-track">
        {items.map((item, i) => (
          <span key={i} className="banner-item">
            • {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RotatingBanner;
