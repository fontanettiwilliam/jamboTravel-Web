import { Overlay } from "./style";
import Image from "next/image";
import loader from "@/assets/loader.svg";
interface ILoader {
  visible: boolean;
}

// TODO - Fix overlay position
export function Loader({ visible }: ILoader) {
  return visible ? (
    <Overlay>
      <Image
        src={loader.src}
        alt="jambo travel loader"
        width={loader.width}
        height={loader.height}
      />
    </Overlay>
  ) : (
    <></>
  );
}
