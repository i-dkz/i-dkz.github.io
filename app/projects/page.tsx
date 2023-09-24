import LinkCard from "@/components/link-card";
import Link from "next/link";
import React from "react";
import { CgTag } from "react-icons/cg";

const Projects = () => {
  return (
    <>
      <div className="gap-4 flex flex-col items-center justify-center w-[80vw] max-w-[800px] h-[70vh] mb-11 z-10">
        <div className="flex flex-wrap justify-center w-full gap-3">
          <Link href="./projects/image-tool">
            <LinkCard
              title="Image Renaming Tool"
              icon={<CgTag className="rotate-180" />}
              bg="bg-yellow-300"
              color="text-black"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
