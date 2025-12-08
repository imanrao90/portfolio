import React from 'react';

function Section({ children, className = '', id, bgColor = 'white' }) {
  const bgClass = bgColor === 'light' ? 'bg-blue-50' : 'bg-white';

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {children}
      </div>
    </section>
  );
}

export default Section;
