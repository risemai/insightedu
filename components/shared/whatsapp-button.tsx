import Image from 'next/image';
import Link from 'next/link';

export function WhatsappButton() {
  return (
    <Link
      href={`https://wa.me/+8801635282882?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
      className='fixed bottom-5 right-5 z-50 cursor-pointer animate-bounce'
    >
      <Image
        width={56}
        height={56}
        src='/assets/png/whatsapp-logo.png'
        className='w-14 h-14 object-cover rounded-full'
        alt='whatsapp logo'
      />
    </Link>
  );
}
