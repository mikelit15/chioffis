interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: 'full' | 'large' | 'medium';
  children?: React.ReactNode;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage = '/hero-bg.jpg',
  height = 'full',
  children,
}: HeroProps) {
  const heightClasses = {
    full: 'h-screen',
    large: 'h-[80vh]',
    medium: 'h-[60vh]',
  };

  return (
    <div
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8 animate-fade-in-up animation-delay-200">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="animate-fade-in-up animation-delay-400">
            {children}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}

