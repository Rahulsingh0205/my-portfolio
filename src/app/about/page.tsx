import AboutBanner from './parts/AboutBanner';
import AboutProfile from './parts/AboutProfile';
import AboutToolkit from './parts/AboutToolkit';
import AboutCapabilities from './parts/AboutCapabilities';

import AboutCta from './parts/AboutCta';

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50 relative overflow-hidden">
      <AboutBanner />
      <AboutProfile />
      <AboutToolkit />
      <AboutCapabilities />
   
      <AboutCta />
    </main>
  );
}