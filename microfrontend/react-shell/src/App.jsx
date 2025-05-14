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

// 👇 Dynamically import from remote
const App1Component = lazy(() => import('app1/App'));

export default function App() {
  return (
    <div>
      <h1>React Host App</h1>
      <Suspense fallback={<div>Loading remote...</div>}>
        <App1Component />
      </Suspense>
    </div>
  );
}
