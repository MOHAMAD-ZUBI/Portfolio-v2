"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  RiCss3Line,
  RiHtml5Line,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import {
  SiAmazonaws,
  SiExpress,
  SiGit,
  SiGithub,
  SiLaravel,
  SiMongodb,
  SiReactquery,
  SiVercel,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { RxExternalLink } from "react-icons/rx";
import Link from "next/link";

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const technologies = [
  { label: "NextJs", icon: <RiNextjsLine size={18} /> },
  { label: "Typescript", icon: <TbBrandTypescript size={18} /> },
  { label: "ReactJs", icon: <RiReactjsLine size={18} /> },
  { label: "React Query", icon: <SiReactquery size={18} /> },
  { label: "Tailwind CSS", icon: <RiTailwindCssLine size={18} /> },
  { label: "HTML5", icon: <RiHtml5Line size={18} /> },
  { label: "CSS3", icon: <RiCss3Line size={18} /> },
  { label: "NodeJs", icon: <RiNodejsLine size={18} /> },
  { label: "ExpressJs", icon: <SiExpress size={18} /> },
  { label: "MongoDB", icon: <SiMongodb size={18} /> },
  { label: "Laravel", icon: <SiLaravel size={18} /> },
  { label: "AWS", icon: <SiAmazonaws size={18} /> },
  { label: "Git", icon: <SiGit size={18} /> },
  { label: "Github", icon: <SiGithub size={18} /> },
  { label: "Vercel", icon: <SiVercel size={18} /> },
];

const ProjectsCard = ({ projectData }) => {
  return (
    <div className=" w-full snap-start bg-gradient-to-r h-[400px] dark:from-[#0E0F11] overflow-hidden border-[1px] border-white  dark:to-[#1b1d20] from-slate-100  to-slate-100 rounded-2xl px-5 pt-5 pb-1  max-md:pb-5">
      <div className="flex flex-row justify-between md:text-lg font-semibold  ">
        <div className="flex flex-row items-center gap-5">
          <h1 className="">{projectData.title}</h1>
          <Link
            href={projectData.github ? projectData.github : "#"}
            target={projectData.github ? "target='_blank'" : ""}
          >
            <div
              className={`flex flex-row ${
                projectData.github.length > 0
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              } select-none gap-2 dark:bg-[#333333] bg-white text-sm w-fit rounded-3xl py-1 px-4 items-center`}
            >
              <SiGithub size={18} />{" "}
              {projectData.github.length > 0 ? "Public" : "Private"}
            </div>
          </Link>
        </div>
        {projectData.link.length > 0 && (
          <Link href={projectData.link} target="_blank">
            <RxExternalLink size={28} />
          </Link>
        )}
      </div>
      <div className="flex  flex-row justify-between w-full mt-12">
        <div>
          <p>{projectData.description}</p>

          <motion.div
            variants={container}
            className="flex flex-wrap gap-2 mt-12"
          >
            {technologies
              .filter((tech) => projectData.technologies.includes(tech.label))
              .map(({ label, icon }) => (
                <motion.div
                  key={label}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=" flex flex-row cursor-pointer select-none gap-2 dark:bg-[#1d1d1d] bg-white text-sm w-fit rounded-3xl py-2 px-4 items-center"
                >
                  {icon} {label}
                </motion.div>
              ))}
          </motion.div>
        </div>

        <div className=" max-md:hidden  w-full">
          <Image
            alt="test img"
            src={projectData.img}
            className=" object-contain"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
