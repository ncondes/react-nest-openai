import { FC, HTMLAttributes } from "react";
import "./TypingLoader.css";

interface TypingLoaderProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const TypingLoader: FC<TypingLoaderProps> = ({ className }) => {
  return (
    <div className={`typing ${className}`}>
      <span className="circle scaling"></span>
      <span className="circle scaling"></span>
      <span className="circle scaling"></span>
    </div>
  );
};
