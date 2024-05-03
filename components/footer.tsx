//heade
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer fixed inset-x-0 bottom-0 bg-orange-400 px-20 py-4 flex justify-between">
      <Link href="" passHref>
        <div className="flex flex-col items-center">
          <img src="" alt="홈" className="h-6 w-6 mb-1" />
          <span className="text-xs">홈</span>
        </div>
      </Link>
      <Link href="" passHref>
        <div className="flex flex-col items-center">
          <img src="" alt="커뮤니티" className="h-6 w-6 mb-1" />
          <span className="text-xs">커뮤니티</span>
        </div>
      </Link>
      <Link href="" passHref>
        <div className="flex flex-col items-center">
          <img src="" alt="나의 상담내역" className="h-6 w-6 mb-1" />
          <span className="text-xs">더보기</span>
        </div>
      </Link>
      <Link href="" passHref>
        <div className="flex flex-col items-center">
          <img src="" alt="홈" className="h-6 w-6 mb-1" />
          <span className="text-xs">아이콘</span>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
