// import React, { useEffect, useRef } from 'react';

// function AngularWrapper() {
//   const ref = useRef(null);

//   useEffect(() => {
//     import('angularApp/Component').then((m) => {
//       m.mountAngularComponent(ref.current);
//     });
//   }, []);

//   return <div ref={ref} />;
// }

// function App() {
//   return (
//     <div>
//       <h1>React Host App</h1>
//       <AngularWrapper />
//     </div>
//   );
// }

// export default App;


import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

// 👇 Dynamically import from remote
const RemoteApp = lazy(() => import('app1/App'));

export default function App() {
  const user = useSelector((state) => state.user);

  return (
    <div style={{ padding: '20px', border: '2px solid red' }}>
      <h1>React Host/Parent App {user?.name}</h1>
      <Suspense fallback={<div>Loading remote...</div>}>
        <RemoteApp user={{ name: 'Propdriling from Parent' }}/>
      </Suspense>
    </div>
  );
}
