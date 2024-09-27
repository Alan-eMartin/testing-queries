'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.set("q", event.target.value);
    if (event.target.value === "") {
      urlSearchParams.delete("q");
    }
    replace(`${pathname}?${urlSearchParams.toString()}`);
  }


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="py-20">
        <input type="text" defaultValue={searchParams.get("q") || ''} onChange={handleQueryChange} className="w-full p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
      </div>
    </div>
  );
}
