import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Pokemon from './components/Pokemon';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ErrorBoundary
        fallback={
          <p className="text-red-600 text-2xl font-bold">
            Something went wrong...
          </p>
        }
      >
        <Suspense
          fallback={
            <p className="text-orange-600 text-2xl font-bold">
              Loading pokemon...
            </p>
          }
        >
          <Pokemon />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
