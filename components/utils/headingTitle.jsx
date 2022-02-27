import React from 'react';

export default function HeadingTitle({children, className, ...props}) {
  return (
    <div className={`mb-4 min-h-[200px] px-8 py-10 setflex-center ${className}`} {...props}>
      <h1 className='titlestyle'>
        {children}
      </h1>
    </div>
  );
}
