'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { SiNaver } from 'react-icons/si';
import { RiKakaoTalkFill, RiGhostLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { Logo } from '@/components/logo/logo';
import Image from 'next/image';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
  const auth = useAuth();
  const router = useRouter();

  if (auth.isLoggedIn) {
    router.push('/mentors');
    return;
  }

  return (
    <main className='bg-gradient-to-br from-pc-500 to-orange-200 h-full w-full lg:min-h-[700px] flex2 flex-col gap-5'>
      <Logo className='hover:text-white hidden sm:block mb-5 text-8xl duration-700' />
      <Card className='bg-white flex2 w-full h-full sm:w-auto sm:h-[500px] overflow-hidden'>
        <Logo className='absolute top-[10%] sm:hidden duration-500' />
        <section className='min-w-80'>
          <CardHeader>
            <CardTitle>로그인</CardTitle>
            <CardDescription>세가지의 소셜 로그인 중 인증</CardDescription>
          </CardHeader>
          <Separator className='ml-[10%] w-[80%] mb-7' />
          <CardContent className='flex flex-col gap-5'>
            <Button className='bg-green-500 hover:bg-green-500/70 py-6'>
              <a href={process.env.NAVER_AUTH_URL} className='w-full flex pl-5'>
                <SiNaver className='text-xl mr-5' />
                <span>네이버로 로그인</span>
              </a>
            </Button>
            <Button className='bg-yellow-500 hover:bg-yellow-500/70 py-6'>
              <a href={process.env.KAKAO_AUTH_URL} className='w-full flex pl-5'>
                <RiKakaoTalkFill className='text-2xl mr-5' />
                <span>카카오로 로그인</span>
              </a>
            </Button>
            <Button className='py-6'>
              <a href={process.env.GOOGLE_AUTH_URL} className='w-full flex pl-5'>
                <FcGoogle className='text-2xl mr-5' />
                <span>구글로 로그인</span>
              </a>
            </Button>
            <Button className='bg-rose-200 hover:bg-rose-200/70 text-zinc-700 py-6' onClick={auth.signIn}>
              <div className='w-full flex pl-5'>
                <RiGhostLine className='text-2xl mr-5' />
                <span>테스트용 로그인</span>
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
