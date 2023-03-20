import React from "react";

type Title = "area" | "population";

interface BadgeProps {
  color: string;
  count: number;
  title: Title;
}

export const Badge = ({ color, count, title }: BadgeProps) => {
  return (
    <div style={{ width: 200 }}>
      <span className={color}>
        {title}: {count}
      </span>
    </div>
  );
};
