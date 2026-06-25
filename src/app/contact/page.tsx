import ContactBanner from './contactparts/contactbanner';
import ContactSection from './contactparts/contactsection';

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50">
      <ContactBanner />
      <ContactSection />
    </main>
  );
}