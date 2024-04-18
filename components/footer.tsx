import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 bg-orange-400 p-4 flex justify-between">
      <Link href="" passHref>
        <div className="flex flex-col items-center">
          <img src="" alt="홈" className="h-6 w-6 mb-1" />
          <span className="text-xs">홈</span>
        </div>
      </Link>
      <Link href="" passHref>
        <div className="flex flex-col items-center">
          <img src="" alt="홈" className="h-6 w-6 mb-1" />
          <span className="text-xs">커뮤니티</span>
        </div>
      </Link>
      <Link href="" passHref>
        <div className="flex flex-col items-center">
          <img src="" alt="홈" className="h-6 w-6 mb-1" />
          <span className="text-xs">더보기</span>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
