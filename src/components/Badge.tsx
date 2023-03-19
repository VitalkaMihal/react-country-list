import React from "react";

interface BadgeProps {
  color: string;
  count: number;
  title: string;
}

export const Badge = ({ color, count, title }: BadgeProps) => {
  return (
    <div style={{width: 200}}>
      <span className={color}>
        {title}: {count}
      </span>
    </div>
  );
};
