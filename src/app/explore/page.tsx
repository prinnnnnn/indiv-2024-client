"use client";

import { useTheme } from "@/app/ui/ThemeContext";

const DiscoveryPage = () => {
  const { palette } = useTheme();

  return (
    <>
      <div
        className={`w-full min-h-96 rounded-lg p-4 mb-2`}
        style={{ background: palette.bgPrimary }}
      >
        <div className="flex flex-col gap-3">EXPLORING ENGINEER</div>
      </div>
    </>
  );
};

export default DiscoveryPage;
