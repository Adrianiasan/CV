"use client";

import React, { createContext, useContext, useState } from "react";
import type { Lang } from "@/lib/translations";

export type SectionId = "home" | "about" | "education" | "experience" | "skills" | "projects" | "contact";

interface AppContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  activeSection: SectionId;
  setActiveSection: (s: SectionId) => void;
}

const AppContext = createContext<AppContextType>({
  lang: "ro",
  setLang: () => {},
  activeSection: "home",
  setActiveSection: () => {},
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ro");
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  return (
    <AppContext.Provider value={{ lang, setLang, activeSection, setActiveSection }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
