import React, { useEffect, useRef } from 'react';

function AngularWrapper() {
  const ref = useRef(null);

  useEffect(() => {
    import('angularApp/Component').then((m) => {
      m.mountAngularComponent(ref.current);
    });
  }, []);

  return <div ref={ref} />;
}

function App() {
  return (
    <div>
      <h1>React Host App</h1>
      <AngularWrapper />
    </div>
  );
}

export default App;
