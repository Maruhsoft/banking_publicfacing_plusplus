import React, { useState, useEffect } from 'react';

export interface Route {
  path: string;
  component: React.ComponentType;
}

interface RouterProps {
  routes: Route[];
}

export function Router({ routes }: RouterProps) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const route = routes.find((r) => r.path === currentPath) || routes[0];
  const Component = route.component;

  return <Component />;
}

export function navigate(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function Link({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
