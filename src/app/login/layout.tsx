import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Link href="/login"> Main page</Link>
      <Link href="/login/studentLogin"> student login </Link>
      <Link href="/login/teacherLogin"> teacher login </Link>

      {children}
    </div>
  );
}
