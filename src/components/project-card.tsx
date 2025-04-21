import Image, { StaticImageData } from "next/image";
import React from "react";
import Title from "./title";

export type ProjectCardProps = {
  image_url: StaticImageData;
  url?: string;
  title: string;
  description: string;
};
const ProjectCard = ({ data }: { data: ProjectCardProps }) => {
  const { image_url, title, description } = data;
  return (
    <div className="w-[480px] space-y-3 border border-black/30 rounded-lg">
      <Image
        src={image_url}
        className="w-full rounded-lg"
        alt={title || "Image"}
      />
      <div className="p-4">
        <Title size="sm">{title}</Title>
        <p className="text-sm text-neutral-800">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
