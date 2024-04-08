"use client";

import { usePathname } from "next/navigation";

export default function ReviewNotFound() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <h1 className="text-3xl font-bold">Review not found! ----------{pathname}</h1>
    </div>
  );
}


//if not client

// export default function NotFound() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold">Page not found! </h1>
//     </div>
//   );
// }
