import {
  Activity,
  BadgeCheck,
  BarChart3,
  CalendarClock,
  CalendarRange,
  ClipboardCheck,
  Eye,
  FileChartColumn,
  FileCheck2,
  FileSearch,
  FileText,
  GitBranch,
  LayoutDashboard,
  ListChecks,
  NotebookPen,
  ScanEye,
  ScanSearch,
  ShieldCheck,
  TriangleAlert,
  UserCheck,
  Users,
  Waypoints,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const auditorIcons: Record<string, LucideIcon> = {
  Activity,
  BadgeCheck,
  BarChart3,
  CalendarClock,
  CalendarRange,
  ClipboardCheck,
  Eye,
  FileChartColumn,
  FileCheck2,
  FileSearch,
  FileText,
  GitBranch,
  LayoutDashboard,
  ListChecks,
  NotebookPen,
  ScanEye,
  ScanSearch,
  ShieldCheck,
  TriangleAlert,
  UserCheck,
  Users,
  Waypoints,
  Workflow,
  Zap,
};

export function AuditorIcon({
  name,
  size = 20,
  strokeWidth = 1.75,
  className,
}: {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  const Icon = auditorIcons[name] ?? ShieldCheck;
  return <Icon size={size} strokeWidth={strokeWidth} className={className} aria-hidden />;
}
