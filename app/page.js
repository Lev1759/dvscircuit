"use client";

import Image from "next/image";
import {
  MdEngineering,
  MdPhoneCallback,
  MdLocationPin,
  MdEmail,
} from "react-icons/md";
import { BsBuildingGear } from "react-icons/bs";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-screen flex-col items-center justify-between px-4 py-28 lg:py-12 lg:px-16">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="fixed left-0 top-0 w-full flex gap-4 justify-center backdrop-blur-sm dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:p-4 lg:dark:bg-zinc-800/30">
            <div className="flex items-center gap-2 text-gray-100 py-4 lg:py-0">
              <MdPhoneCallback className="h-8 w-8 bg-white rounded-full p-2 text-gray-900 " />
             <div className="flex flex-col">
             <a
                href="tel:+2348037442025"
                className="text-xs lg:text-sm leading-6 text-gray-900"
              >
                +2348037442025
              </a>
              <a
                href="tel:+2347012122207"
                className="text-xs lg:text-sm leading-6 text-gray-900"
              >
                +2347012122207
              </a>
             </div>
            </div>
            <div className="flex items-center gap-2 text-gray-100">
              <MdEmail className="h-8 w-8 bg-white rounded-full p-2 text-gray-900" />
              <a
                href="mailto:
                dvscircuits@gmail.com"
                className="text-xs lg:text-sm leading-6 text-gray-900"
              >
                dvscircuits@gmail.com
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-gray-100">
              <MdLocationPin className="h-8 w-8 bg-white rounded-full p-2 text-gray-900" />
              <p className="text-xs lg:text-sm leading-6 text-gray-900 max-w-xs">
                Plot 11, Mahthma Ghandi Street, Off Lord Lugard Crescent, Area
                11, Abuja
              </p>
            </div>
          </div>
          <div className="fixed bottom-0 left-0 flex flex-col h-48 w-full lg:items-end items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none gap-3">
           <div className="flex gap-3">
           <Link
              href="/"
              target="_blank"
            >
              <TiSocialFacebook
                size={40}
                className="p-2 bg-white rounded-md "
              />
            </Link>
            <Link href="/" target="_blank">
              <TiSocialTwitter size={40} className="p-2 bg-white rounded-md " />
            </Link>
            <Link
              href="/"
              target="_blank"
            >
              <TiSocialInstagram
                size={40}
                className="p-2 bg-white rounded-md "
              />
            </Link>
           </div>
            <div className="flex lg:hidden items-center gap-2 text-gray-100">
              <MdLocationPin className="h-8 w-8 bg-white rounded-full p-2 text-gray-900" />
              <p className="text-xs lg:text-sm leading-6 text-gray-900 max-w-xs">
                Plot 11, Mahthma Ghandi Street, Off Lord Lugard Crescent, Area
                11, Abuja
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert h-16 lg:h-28 w-auto "
            src="/dvs.png"
            alt="DVS Logo"
            width={120}
            height={24}
            priority
          />
          <h1 className="text-lg md:text-2xl font-extrabold text-indigo-900 mt-3">
            Circuit & Synergy Limited
          </h1>
          <p className={` max-w-[60ch] text-xs lg:text-sm text-center opacity-50 mt-4 mb-12`}>
            Is an indigenous Company registered with the Corporate Affairs
            Commission – CAC. Since inception, the Company have calved a niche
            for itself in all areas of operations through the provision of
            quality Services to Clients throughout Nigeria. As a Company who is
            vast and knowledgeable in Constructions, ICT and Pest Control, DVS
            Circuit have distinguished itself in the area of Service Delivery
            and Timely Execution of Jobs.
          </p>
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-y-6">
          <a
            href="/"
            className="flex flex-col items-center group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <Image
              className="h-20 lg:h-28 w-auto "
              src="/pest-control.png"
              alt="Pest control image"
              width={100}
              height={24}
              priority
            />
            <h2 className={`mb-3 text-xl lg:text-2xl font-semibold`}>
              Fumigation{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-xs lg:text-sm opacity-50`}>
            We employ Integrated Pest Management approach to pest control
            </p>
            <button className="bg-indigo-900 text-sm text-white px-4 py-2 mt-2">
              Get services
            </button>
          </a>

          <a
            href="/"
            className="flex flex-col items-center group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            rel="noopener noreferrer"
          >
            <BsBuildingGear className="h-20 lg:h-28 w-auto " />
            <h2 className={`mb-3 text-xl lg:text-2xl font-semibold`}>
              Facility{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-xs lg:text-sm opacity-50`}>
              Environmental, and Management Consultancy
            </p>
            <button className="border border-indigo-900 text-sm text-indigo-600 px-4 py-2 mt-2">
              Learn more
            </button>
          </a>

          <a
            href="/"
            className="flex flex-col items-center group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <MdEngineering className="h-20 lg:h-28 w-auto "/>
            <h2 className={`mb-3 text-xl lg:text-2xl font-semibold`}>
              Engineering{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-xs lg:text-sm opacity-50`}>
              General Construction, and ICT Services
            </p>
            <button className="bg-indigo-900 text-sm text-white px-4 py-2 mt-2">
              Learn more
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
