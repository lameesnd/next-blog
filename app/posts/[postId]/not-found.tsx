import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-6 text-center prose prose-sm prose-slate dark:prose-invert mx-auto">
      <p className="mt-10">Sorry, the requested post does not exist.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
