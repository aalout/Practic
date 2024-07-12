import dynamic from 'next/dynamic';

const Auth = dynamic(() => import('../../components/Auth'), { ssr: false });

export default function Sign_in() {
  return (
    <div>
        <Auth/>
    </div>
  );
}
