import React from "react";
import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto ">
      <Image
        src="/images/profile-picture.jpg"
        alt="Lamees Nd"
        width={200}
        height={200}
        priority={true}
        className="rounded-full border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black mx-auto mt-8"
      />
    </section>
  );
}
