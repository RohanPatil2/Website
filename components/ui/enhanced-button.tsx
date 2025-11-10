"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EnhancedButtonProps extends ButtonProps {
  shimmer?: boolean;
  pulse?: boolean;
  icon?: React.ReactNode;
}

export function EnhancedButton({
  className,
  children,
  shimmer = false,
  pulse = false,
  icon,
  ...props
}: EnhancedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          pulse && "animate-pulse",
          className
        )}
        {...props}
      >
        {shimmer && (
          <span className="absolute inset-0 shimmer pointer-events-none" />
        )}

        <span className="relative z-10 flex items-center gap-2">
          {children}
          {icon && (
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              {icon}
            </motion.span>
          )}
        </span>
      </Button>
    </motion.div>
  );
}
