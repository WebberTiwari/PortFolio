// @flow strict
import Link from "next/link";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <footer className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      {/* Top gradient line */}
      <div className="flex justify-center -z-40">
        <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
      </div>

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10 flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © Developer Portfolio by{" "}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/priyanshutiwari80/"
            className="text-[#16f2b3] hover:underline"
          >
            Priyanshu Tiwari
          </Link>
        </p>

        {/* GitHub links */}
        <div className="flex items-center gap-5 mt-4 md:mt-0">
          <Link
            target="_blank"
            href="https://github.com/WebberTiwari"
            className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
          >
            <IoStar />
            <span>Star</span>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/WebberTiwari"
            className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
          >
            <CgGitFork />
            <span>Fork</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
