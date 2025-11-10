"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronRight, Clock, TrendingUp } from "lucide-react";
import { currentStatus, statusColors, categoryColors } from "@/config/current-status";
import { Badge } from "@/components/ui/badge";

export function StatusWidget() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const statusColor = statusColors[currentStatus.availability];

  return (
    <>
      {/* Floating Status Bubble */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed top-24 left-4 z-50 hidden lg:block"
      >
        {!isExpanded ? (
          <motion.button
            onClick={() => setIsExpanded(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            {/* Pulsing Ring Animation */}
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />

            {/* Main Bubble */}
            <div className="relative flex items-center gap-3 px-4 py-3 rounded-full bg-card/80 backdrop-blur-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Status Indicator Dot */}
              <div className="relative flex items-center">
                <div className={`w-3 h-3 rounded-full ${statusColor.dot} animate-pulse`} />
                <div className={`absolute inset-0 w-3 h-3 rounded-full ${statusColor.dot} animate-ping`} />
              </div>

              {/* Status Text */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">
                  Currently Working
                </span>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.button>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-[380px] rounded-2xl bg-card/95 backdrop-blur-2xl border border-border shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="relative px-6 py-4 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className={`w-3 h-3 rounded-full ${statusColor.dot} animate-pulse`} />
                      <div className={`absolute inset-0 w-3 h-3 rounded-full ${statusColor.dot} animate-ping`} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Currently Working On</h3>
                      <p className="text-xs text-muted-foreground">
                        {currentStatus.statusMessage}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="p-1 rounded-full hover:bg-muted transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>

                {/* Status Badge */}
                <div className="mt-3">
                  <Badge
                    variant="outline"
                    className={`${statusColor.bg} ${statusColor.border} ${statusColor.text} text-xs`}
                  >
                    <div className={`w-2 h-2 rounded-full ${statusColor.dot} mr-2`} />
                    {currentStatus.availability.charAt(0).toUpperCase() + currentStatus.availability.slice(1)}
                  </Badge>
                </div>
              </div>

              {/* Content - Scrollable */}
              <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
                <div className="p-4 space-y-3">
                  {currentStatus.currentWork.map((item, index) => {
                    const categoryColor = categoryColors[item.category];

                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative p-4 rounded-xl bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-primary/20 transition-all duration-300"
                      >
                        {/* Category Badge - Top Right */}
                        <div className="absolute top-3 right-3">
                          <Badge
                            variant="outline"
                            className={`${categoryColor.bg} ${categoryColor.text} text-[10px] px-2 py-0.5 border-0`}
                          >
                            {item.category}
                          </Badge>
                        </div>

                        {/* Icon & Title */}
                        <div className="flex items-start gap-3 mb-2">
                          <motion.div
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl"
                          >
                            {item.icon}
                          </motion.div>
                          <div className="flex-1 pr-16">
                            <h4 className="text-sm font-semibold text-foreground mb-1">
                              {item.title}
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        {item.progress !== undefined && (
                          <div className="mt-3">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[10px] text-muted-foreground font-medium">
                                Progress
                              </span>
                              <span className="text-[10px] text-primary font-semibold">
                                {item.progress}%
                              </span>
                            </div>
                            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${item.progress}%` }}
                                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                              />
                            </div>
                          </div>
                        )}

                        {/* Status Indicator */}
                        <div className="mt-3 flex items-center gap-2">
                          <div className="flex items-center gap-1.5">
                            <TrendingUp className="w-3 h-3 text-green-500" />
                            <span className="text-[10px] text-muted-foreground capitalize">
                              {item.status}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-border bg-muted/20">
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      <span>
                        Last updated: {currentStatus.lastUpdated.toLocaleDateString()}
                      </span>
                    </div>
                    <button
                      onClick={() => setIsVisible(false)}
                      className="text-primary hover:underline"
                    >
                      Hide
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>

      {/* Mobile Version - Bottom Floating Button */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed bottom-6 left-4 z-50 lg:hidden"
      >
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-card/90 backdrop-blur-xl border border-border shadow-lg"
        >
          <div className={`w-2.5 h-2.5 rounded-full ${statusColor.dot} animate-pulse`} />
          <span className="text-xs font-semibold text-foreground">Working</span>
        </motion.button>

        {/* Mobile Expanded View - Bottom Sheet */}
        <AnimatePresence>
          {isExpanded && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsExpanded(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              />

              {/* Bottom Sheet */}
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed inset-x-0 bottom-0 z-50 max-h-[80vh] rounded-t-3xl bg-card border-t border-border shadow-2xl overflow-hidden"
              >
                {/* Handle */}
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-12 h-1.5 bg-muted rounded-full" />
                </div>

                {/* Header */}
                <div className="px-6 py-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${statusColor.dot} animate-pulse`} />
                      <div>
                        <h3 className="text-sm font-bold text-foreground">Currently Working On</h3>
                        <p className="text-xs text-muted-foreground">
                          {currentStatus.statusMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
                  {currentStatus.currentWork.map((item, index) => {
                    const categoryColor = categoryColors[item.category];

                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-xl bg-muted/30 border border-border"
                      >
                        <div className="flex items-start gap-3 mb-2">
                          <div className="text-2xl">{item.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="text-sm font-semibold text-foreground">
                                {item.title}
                              </h4>
                              <Badge
                                variant="outline"
                                className={`${categoryColor.bg} ${categoryColor.text} text-[10px] border-0`}
                              >
                                {item.category}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {item.progress !== undefined && (
                          <div className="mt-3">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[10px] text-muted-foreground">Progress</span>
                              <span className="text-[10px] text-primary font-semibold">
                                {item.progress}%
                              </span>
                            </div>
                            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                                style={{ width: `${item.progress}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--muted-foreground) / 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--muted-foreground) / 0.5);
        }
      `}</style>
    </>
  );
}
