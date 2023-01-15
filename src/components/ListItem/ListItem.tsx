/* eslint-disable @next/next/no-img-element */
import { ItemContainer } from "./style";
import Image from "next/image";

import { CaretRight } from "phosphor-react";

interface IListItem {
  src: string;
  title: string;
  description: string;
  onClick: () => void;
}

// Todo - Fix wikipedia on next image loader, this will improve the performance

export function ListItem({ src, title, description, onClick }: IListItem) {
  const handleClick = () => {
    onClick();
  };

  return (
    <ItemContainer onClick={handleClick}>
      {/* <Image src={src} alt={title} width={50} height={50} /> */}

      <img src={src} alt={title} />

      <div>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <CaretRight size={32} weight="light" />
    </ItemContainer>
  );
}
