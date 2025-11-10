"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CalendarDays, GraduationCap, Briefcase, Award, MapPin } from "lucide-react";
import { EducationInterface } from "@/config/education";
import { ExperienceInterface } from "@/config/experience";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface JourneyTimelineProps {
  education: EducationInterface[];
  experience: ExperienceInterface[];
}

interface TimelineItem {
  type: "education" | "experience";
  data: EducationInterface | ExperienceInterface;
  date: Date;
}

export function JourneyTimeline({ education, experience }: JourneyTimelineProps) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Combine and sort all items by date
  const allItems: TimelineItem[] = [
    ...education.map((edu) => ({
      type: "education" as const,
      data: edu,
      date: edu.startDate,
    })),
    ...experience.map((exp) => ({
      type: "experience" as const,
      data: exp,
      date: exp.startDate,
    })),
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => {
                const newSet = new Set(prev);
                newSet.add(index);
                return newSet;
              });
            }
          },
          { threshold: 0.2 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const formatDate = (date: Date | "Present") => {
    if (date === "Present") return "Present";
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const getDateRange = (item: TimelineItem) => {
    const start = formatDate(item.data.startDate);
    const end = formatDate(item.data.endDate);
    return `${start} - ${end}`;
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12">
      {/* Central Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 hidden lg:block" />

      {/* Mobile Center Line */}
      <div className="absolute left-8 md:left-12 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 lg:hidden" />

      <div className="space-y-12 lg:space-y-16">
        {allItems.map((item, index) => {
          const isEducation = item.type === "education";
          const isVisible = visibleItems.has(index);
          const isOngoing = item.data.endDate === "Present";

          return (
            <div
              key={`${item.type}-${item.data.id}`}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ${
                isEducation ? "" : "lg:grid-flow-dense"
              }`}
            >
              {/* Timeline Node - Desktop */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <div className={`relative ${isOngoing ? "animate-pulse" : ""}`}>
                  <div
                    className={`w-16 h-16 rounded-full border-4 ${
                      isOngoing
                        ? "border-primary bg-primary/10"
                        : "border-background bg-card"
                    } shadow-lg flex items-center justify-center`}
                  >
                    {isEducation ? (
                      <GraduationCap className="w-7 h-7 text-primary" />
                    ) : (
                      <Briefcase className="w-7 h-7 text-primary" />
                    )}
                  </div>
                  {isOngoing && (
                    <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping" />
                  )}
                </div>
              </motion.div>

              {/* Timeline Node - Mobile */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="lg:hidden absolute left-8 md:left-12 top-8 transform -translate-x-1/2 z-10"
              >
                <div className={`relative ${isOngoing ? "animate-pulse" : ""}`}>
                  <div
                    className={`w-12 h-12 rounded-full border-4 ${
                      isOngoing
                        ? "border-primary bg-primary/10"
                        : "border-background bg-card"
                    } shadow-lg flex items-center justify-center`}
                  >
                    {isEducation ? (
                      <GraduationCap className="w-5 h-5 text-primary" />
                    ) : (
                      <Briefcase className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  {isOngoing && (
                    <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping" />
                  )}
                </div>
              </motion.div>

              {/* Content Card */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: isEducation ? -50 : 50,
                }}
                animate={
                  isVisible
                    ? { opacity: 1, x: 0 }
                    : {
                        opacity: 0,
                        x: isEducation ? -50 : 50,
                      }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`${
                  isEducation ? "lg:col-start-1 lg:text-right" : "lg:col-start-2 lg:text-left"
                } ml-20 md:ml-24 lg:ml-0`}
              >
                <div className="group relative">
                  {/* Connector Line to Central Node - Desktop */}
                  <div
                    className={`hidden lg:block absolute top-8 ${
                      isEducation ? "left-full ml-4" : "right-full mr-4"
                    } w-8 h-0.5 bg-gradient-to-${
                      isEducation ? "r" : "l"
                    } from-primary/50 to-transparent`}
                  />

                  <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
                    {/* Type Badge */}
                    <div className={`flex items-center gap-2 mb-3 ${isEducation ? "lg:justify-end" : "lg:justify-start"}`}>
                      <Badge
                        variant={isEducation ? "default" : "secondary"}
                        className="flex items-center gap-1.5"
                      >
                        {isEducation ? (
                          <>
                            <GraduationCap className="w-3.5 h-3.5" />
                            Education
                          </>
                        ) : (
                          <>
                            <Briefcase className="w-3.5 h-3.5" />
                            Experience
                          </>
                        )}
                      </Badge>
                      {isOngoing && (
                        <Badge variant="outline" className="text-primary border-primary">
                          Current
                        </Badge>
                      )}
                    </div>

                    {/* Institution/Company Logo and Name */}
                    <div className={`flex items-center gap-3 mb-4 ${isEducation ? "lg:flex-row-reverse" : ""}`}>
                      {item.data.logo && (
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-border flex-shrink-0">
                          <Image
                            src={item.data.logo}
                            alt={isEducation ? (item.data as EducationInterface).institution : (item.data as ExperienceInterface).company}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className={isEducation ? "lg:text-right" : ""}>
                        <h3 className="text-xl font-bold text-foreground">
                          {isEducation
                            ? (item.data as EducationInterface).degree
                            : (item.data as ExperienceInterface).position}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {isEducation
                            ? (item.data as EducationInterface).institution
                            : (item.data as ExperienceInterface).company}
                        </p>
                      </div>
                    </div>

                    {/* Field/Location and Date */}
                    <div className={`space-y-2 mb-4 text-sm ${isEducation ? "lg:text-right" : ""}`}>
                      {isEducation ? (
                        <p className="text-muted-foreground flex items-center gap-2 ${isEducation ? 'lg:justify-end' : ''}">
                          <Award className="w-4 h-4" />
                          {(item.data as EducationInterface).field}
                        </p>
                      ) : null}
                      <p className={`text-muted-foreground flex items-center gap-2 ${isEducation ? "lg:justify-end" : ""}`}>
                        <MapPin className="w-4 h-4" />
                        {item.data.location}
                      </p>
                      <p className={`text-primary font-semibold flex items-center gap-2 ${isEducation ? "lg:justify-end" : ""}`}>
                        <CalendarDays className="w-4 h-4" />
                        {getDateRange(item)}
                      </p>
                    </div>

                    {/* GPA for Education */}
                    {isEducation && (item.data as EducationInterface).gpa && (
                      <div className={`mb-4 ${isEducation ? "lg:text-right" : ""}`}>
                        <Badge variant="outline" className="border-primary/50">
                          GPA: {(item.data as EducationInterface).gpa}
                        </Badge>
                      </div>
                    )}

                    {/* Honors/Achievements */}
                    {isEducation && (item.data as EducationInterface).honors && (item.data as EducationInterface).honors!.length > 0 && (
                      <div className="mb-4">
                        <h4 className={`text-sm font-semibold text-foreground mb-2 ${isEducation ? "lg:text-right" : ""}`}>
                          Honors
                        </h4>
                        <ul className={`space-y-1 text-sm text-muted-foreground ${isEducation ? "lg:text-right" : ""}`}>
                          {(item.data as EducationInterface).honors!.map((honor, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className={`text-primary mt-1 ${isEducation ? "lg:order-2" : ""}`}>•</span>
                              <span className="flex-1">{honor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Key Achievements */}
                    <div>
                      <h4 className={`text-sm font-semibold text-foreground mb-2 ${isEducation ? "lg:text-right" : ""}`}>
                        Key Achievements
                      </h4>
                      <ul className={`space-y-1.5 text-sm text-muted-foreground ${isEducation ? "lg:text-right" : ""}`}>
                        {item.data.achievements.slice(0, 3).map((achievement, idx) => (
                          <li key={idx} className={`flex items-start gap-2 ${isEducation ? "lg:flex-row-reverse" : ""}`}>
                            <span className="text-primary mt-1 flex-shrink-0">•</span>
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Spacer for opposite column on desktop */}
              <div className="hidden lg:block" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
