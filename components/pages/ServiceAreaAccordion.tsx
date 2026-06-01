"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceArea {
  number: string;
  title: string;
  color: string;
  services: string[];
}

export default function ServiceAreaAccordion({ areas }: { areas: ServiceArea[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {areas.map((area, i) => (
        <div
          key={area.number}
          className="rounded-2xl overflow-hidden"
          style={{
            border: `1px solid ${openIndex === i ? area.color + "30" : "rgba(0,0,0,0.06)"}`,
            background: openIndex === i ? `${area.color}04` : "white",
            transition: "all 0.2s ease",
          }}
        >
          <button
            className="w-full flex items-center justify-between p-5 md:p-6 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="flex items-center gap-4">
              <span
                className="text-sm font-black w-8 flex-shrink-0"
                style={{ color: area.color + "60" }}
              >
                {area.number}
              </span>
              <h3
                className="text-base md:text-lg font-bold"
                style={{ color: openIndex === i ? area.color : "#111827" }}
              >
                {area.title}
              </h3>
            </div>
            <motion.div
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 ml-4"
            >
              <svg
                className="w-5 h-5"
                style={{ color: openIndex === i ? area.color : "#9CA3AF" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0">
                  <div
                    className="h-px mb-5"
                    style={{ background: area.color + "20" }}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {area.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-2.5 p-3 rounded-xl text-sm text-gray-700"
                        style={{
                          background: `${area.color}08`,
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: area.color }}
                        />
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
