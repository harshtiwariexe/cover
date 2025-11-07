import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-muted flex min-h-svh flex-col justify-center items-center gap-6 p-6 md:p-10">
        <div className="flex flex-col max-w-sm w-full gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 self-center font-medium"
          >
            <Image src="/logo.svg" width={120} height={120} alt="Logo" />
          </Link>
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
