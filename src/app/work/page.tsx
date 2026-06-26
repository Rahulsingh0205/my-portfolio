import WorkBanner from './workpart/workbanner';
import WorkWorked from './workpart/workworked'; 
import Workfooter from './workpart/workfooter'; // 1. Import your footer

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <WorkBanner />
      
      <WorkWorked />
      
      {/* 2. Add the footer here */}
      <Workfooter /> 
    </main>
  );
}