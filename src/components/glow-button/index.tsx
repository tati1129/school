import Link from "next/link";

const GlowStarsButton: React.FC = () => {
  return (
    <div className="relative inline-block mt-6">
      {/* Glow */}
      <span className="absolute inset-0 glow-behind pointer-events-none"></span>

      {/* Stars */}
      <span className="star s1">✨</span>
      <span className="star s2">✨</span>
      <span className="star s3">✨</span>
      <span className="star s4">✨</span>
      <span className="star s5">✨</span>
      <span className="star s6">✨</span>

      {/* Button */}
      <Link
        href="https://pnbgermany.de/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 px-6 py-3 border border-gray-600 rounded-full text-sm bg-white"
      >
        Перейти на сайт
      </Link>
    </div>
  );
};

export default GlowStarsButton;

            // rgba(255, 230, 120, 1) 0%,
            // rgba(255, 200, 0, 0.9) 25%,
            // rgba(255, 180, 0, 0.5) 45%,
            // transparent 70%
