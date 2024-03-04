"use client";

import { SessionProvider } from "next-auth/react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProvider,
} from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import React from "react";

// having a provider to provide some styles around certain part of application

const Providers = ({ children, props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      <SessionProvider>{children}</SessionProvider>
    </NextThemesProvider>
  );
};

export default Providers;
