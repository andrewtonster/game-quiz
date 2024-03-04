import { SessionProvider } from "next-auth/react";
import React from "react";

type Props = {};

const Providers = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
