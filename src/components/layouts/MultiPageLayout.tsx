import { Route, Routes } from 'react-router-dom';

export default function MultiPageLayout(): JSX.Element {
  return (
    <main className="multi-page">
      <Routes>
        <Route index element={<h2>Home</h2>} />
        <Route path="/about" element={<h2>About</h2>} />
      </Routes>
    </main>
  );
}
