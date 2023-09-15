import { Suspense } from 'react';
import Pokemon from './components/Pokemon';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense
        fallback={
          <p className="text-orange-600 text-2xl font-bold">
            Loading pokemon...
          </p>
        }
      >
        <Pokemon />
      </Suspense>
    </main>
  );
}
