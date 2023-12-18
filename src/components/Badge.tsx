"use client";
import CountUp from "react-countup";

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-2xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl font-bold text-primary leading-none">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-20 leading-none font-bold text-black text-sm">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
