import React, { useState } from "react";

const Accordion = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`accordion ${show && "active"} ${className}`}>
      <button className="accordion-header" onClick={() => setShow(!show)}>
        {title}
        <div className="accordion-icon">
          <div className="absolute inset-0 w-[2px] h-4/5 bg-text-dark m-auto" />
          <div className="absolute inset-0 w-[2px] h-4/5 bg-text-dark m-auto rotate-90" />
        </div>
      </button>
      <div className="accordion-content">{children}</div>
    </div>
  );
};

export default Accordion;
