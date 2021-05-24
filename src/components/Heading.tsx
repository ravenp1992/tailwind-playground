import React, { ReactElement, ReactNode } from 'react';

export interface HeadingProps {
  title?: string;
  children?: ReactNode;
}

export default function Heading({ title, children }: HeadingProps): ReactElement | null {
  return (
    <div>
      <p>Heading was here</p>
      <p>{title}</p>
      <p>{children}</p>
    </div>
  );
}
