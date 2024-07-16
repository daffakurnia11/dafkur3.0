import classNames from "classnames";
import { HTMLAttributes } from "react";

interface GradientCardProps extends HTMLAttributes<HTMLDivElement> {
  isSquare?: boolean;
}

const GradientCard = ({
  children,
  className,
  isSquare = true,
  ...props
}: GradientCardProps) => (
  <div
    {...props}
    className={classNames(
      "p-[1px] bg-gradient-to-b from-green-primary from-30% to-green-primary/15 hover:bg-green-primary to-80% rounded-[18px] transition-all duration-300",
      isSquare && "aspect-square",
      className
    )}
  >
    <div
      className={classNames(
        "w-full h-full bg-black rounded-[17px] p-5 sm:p-8 relative",
        isSquare && "aspect-square"
      )}
    >
      {children}
    </div>
  </div>
);

export default GradientCard;
