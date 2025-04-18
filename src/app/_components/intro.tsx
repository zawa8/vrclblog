// "use client";
import { CMS_NAME } from "@/lib/constants";
// import FontPicker from "./FontPicker";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        blog.
      </h1>
      {/* <FontPicker /> */}
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A staticAlly generAted blog example usiNg{" "}
        <a href="https://nextjs.org/" className="underline hover:text-blue-600 duration-200 transition-colors" >
          next.js
        </a>{" "}
        and {CMS_NAME}.
      </h4>
    </section>
  );
}
