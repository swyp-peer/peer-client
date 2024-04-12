import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { SiNaver } from 'react-icons/si';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { Logo } from '@/components/logo/logo';
import Image from 'next/image';

const SignInPage = () => {
  return (
    <main className='bg-gradient-to-br from-pc-500 to-orange-200 h-full w-full flex2 flex-col gap-5'>
      <Logo className='hidden sm:block mb-5 text-8xl' />
      <Card className='bg-white flex2 w-full h-full sm:w-auto sm:h-[500px] overflow-hidden'>
        <Logo className='text-pc-500 absolute top-[10%] sm:hidden' />
        <section>
          <CardHeader>
            <CardTitle>로그인</CardTitle>
            <CardDescription>세가지의 소셜 로그인 중 인증</CardDescription>
          </CardHeader>
          <Separator className='ml-[10%] w-[80%] mb-7' />
          <CardContent className='flex flex-col gap-5'>
            <Button className='bg-green-500 hover:bg-green-500/70 py-6'>
              <div className='w-full flex pl-5'>
                <SiNaver className='text-xl mr-5' />
                <span>네이버로 로그인</span>
              </div>
            </Button>
            <Button className='bg-yellow-500 hover:bg-yellow-500/70 py-6'>
              <div className='w-full flex pl-5'>
                <RiKakaoTalkFill className='text-2xl mr-5' />
                <span>카카오로 로그인</span>
              </div>
            </Button>
            <Button className='py-6'>
              <div className='w-full flex pl-5'>
                <FcGoogle className='text-2xl mr-5' />
                <span>구글로 로그인</span>
              </div>
            </Button>
          </CardContent>
        </section>
        <Image
          src={'/3193464.jpg'}
          alt='sign-in'
          height={500}
          width={500}
          className='hidden lg:block ml-5 h-full border-l'
        />
      </Card>
    </main>
  );
};

export default SignInPage;
