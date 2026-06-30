import {
  Activity,
  BadgeCheck,
  BarChart3,
  CalendarClock,
  Eye,
  FileCheck2,
  FileSearch,
  FileText,
  GitBranch,
  ListChecks,
  ShieldCheck,
  TriangleAlert,
  UserCheck,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const auditorIcons: Record<string, LucideIcon> = {
  Activity,
  BadgeCheck,
  BarChart3,
  CalendarClock,
  Eye,
  FileCheck2,
  FileSearch,
  FileText,
  GitBranch,
  ListChecks,
  ShieldCheck,
  TriangleAlert,
  UserCheck,
  Users,
  Workflow,
  Zap,
};

export function AuditorIcon({
  name,
  size = 20,
  strokeWidth = 1.75,
}: {
  name: string;
  size?: number;
  strokeWidth?: number;
}) {
  const Icon = auditorIcons[name] ?? ShieldCheck;
  return <Icon size={size} strokeWidth={strokeWidth} aria-hidden />;
}
