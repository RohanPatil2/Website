"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface EnhancedCardProps {
  glass?: boolean;
  hoverLift?: boolean;
  gradient?: boolean;
  delay?: number;
  className?: string;
  children?: React.ReactNode;
}

export function EnhancedCard({
  className,
  children,
  glass = false,
  hoverLift = true,
  gradient = false,
  delay = 0,
}: EnhancedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hoverLift ? { y: -8, scale: 1.02 } : {}}
      className={cn(
        "relative rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300",
        glass && "backdrop-blur-xl bg-card/50 border-border/50",
        hoverLift && "hover:shadow-xl hover:border-primary/20",
        gradient && "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

interface EnhancedCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function EnhancedCardHeader({
  className,
  ...props
}: EnhancedCardHeaderProps) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
}

interface EnhancedCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  gradient?: boolean;
}

export function EnhancedCardTitle({
  className,
  gradient = false,
  ...props
}: EnhancedCardTitleProps) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        gradient && "gradient-text",
        className
      )}
      {...props}
    />
  );
}

interface EnhancedCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function EnhancedCardDescription({
  className,
  ...props
}: EnhancedCardDescriptionProps) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

interface EnhancedCardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function EnhancedCardContent({
  className,
  ...props
}: EnhancedCardContentProps) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}

interface EnhancedCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function EnhancedCardFooter({
  className,
  ...props
}: EnhancedCardFooterProps) {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  );
}
