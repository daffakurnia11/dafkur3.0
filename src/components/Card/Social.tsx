import Image from "next/image";
import Icon from "../Icon";
import Card from ".";
import { useMobile } from "@/hooks/useMobile.hook";

const SocialCard = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useMobile();

  return (
    <Card.Gradient className="w-full overflow-hidden group" isSquare>
      <div className="w-0 h-0 absolute top-0 right-0 transition-all duration-300 group-hover:w-[40px] group-hover:h-[40px] group-hover:sm:w-[72px] group-hover:sm:h-[72px]">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src={"/icons/arrow-top-right-bg.svg"}
          style={{ width: "100%", height: "100%" }}
          alt="Arrow Background"
        />
      </div>
      <Icon
        size={isMobile ? 16 : 24}
        icon="arrow-top-right"
        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-green-secondary"
      />
      {children}
    </Card.Gradient>
  );
};

export default SocialCard;
