import React from "react";
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="border-2 border-gray-600 dark:border-slate-600 p-4 rounded-xl mt-4 text-2xl dark:text-white/90">
      <Link
        href={`/posts/${id}`}
        className="underline hover:text-black/70 dark:hover:text-white"
      >
        {title}
      </Link>
      <br />
      <span className="text-sm mt-1">{formattedDate}</span>
    </li>
  );
}
