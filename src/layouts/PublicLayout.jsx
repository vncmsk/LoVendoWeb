import React from 'react';

const PublicLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <main className="flex w-full overflow-y-scroll items-center justify-center">
      {children}
      </main>
    </div>
  );
};

export default PublicLayout;