// Import statements
import Image from 'next/image';
import SideNavbar from '/home/tahseer/Desktop/Workshop/achieve.ai/src/app/components/side-navbar';
import Frame from '@/app/components/frame';

// Component definition
export default function Home() {
  return (
    <div>
      <h1>bhai index page hai ye</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Content */}
      </div>
      <SideNavbar />
      <div>
        <h1>bhai index page hai ye</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Content */}
        </div>
        <Frame />
      </div>
    </div>
  );
}
