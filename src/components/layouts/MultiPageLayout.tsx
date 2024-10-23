import { Route, Routes } from 'react-router-dom';

export default function MultiPageLayout(): JSX.Element {
  return (
    <main>
      <h2>Multi-Page Layout</h2>
      <Routes>
        <Route index element={<h3>Home</h3>} />
        <Route path="/about" element={<h3>About</h3>} />
      </Routes>
    </main>
  );
}
