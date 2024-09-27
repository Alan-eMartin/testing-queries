'use client';

import { Suspense } from 'react';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Input = () => {
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
    <input type="text" defaultValue={searchParams.get("q") || ''} onChange={handleQueryChange} className="w-full p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
  )
}

const InputWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Input />
  </Suspense>
);

export default InputWrapper;
