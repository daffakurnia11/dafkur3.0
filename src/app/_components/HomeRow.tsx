export const FirstRow = ({ children }: { children?: React.ReactNode }) => (
  <div className="sm:block hidden shrink-0 w-[85px]">{children}</div>
);

export const SecondRow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-1 w-full">{children}</div>
);
