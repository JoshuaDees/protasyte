import '../styles/styles.scss';

import { HashRouter } from 'react-router-dom';
import MultiPageLayout from './layouts/MultiPageLayout';
import SinglePageLayout from './layouts/SinglePageLayout';
import Navigation from './navigation/Navigation';
import { useEffect, useState } from 'react';

type PageLayout = 'single' | 'multi';

interface SiteConfig {
  layout?: PageLayout;
}

export default function App(): JSX.Element {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>({});

  useEffect(() => {
    fetch('./config/site.json')
      .then((response) => response.json())
      .then((siteConfig) => setSiteConfig(siteConfig));
  }, []);

  return (
    <HashRouter>
      <Navigation />
      {siteConfig.layout &&
        {
          single: <SinglePageLayout />,
          multi: <MultiPageLayout />
        }[siteConfig.layout]}
    </HashRouter>
  );
}
