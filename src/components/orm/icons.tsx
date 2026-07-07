import {
  Activity,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Building2,
  CalendarRange,
  ClipboardCheck,
  Eye,
  FileChartColumn,
  FileCheck2,
  FileSearch,
  FileText,
  GitBranch,
  Globe,
  Layers,
  LayoutDashboard,
  ListChecks,
  Network,
  NotebookPen,
  Radar,
  ScanEye,
  ScanSearch,
  Scale,
  ShieldCheck,
  TrendingUp,
  TriangleAlert,
  UserCheck,
  Users,
  Waypoints,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const ormIcons: Record<string, LucideIcon> = {
  Activity,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Building2,
  CalendarRange,
  ClipboardCheck,
  Eye,
  FileChartColumn,
  FileCheck2,
  FileSearch,
  FileText,
  GitBranch,
  Globe,
  Layers,
  LayoutDashboard,
  ListChecks,
  Network,
  NotebookPen,
  Radar,
  ScanEye,
  ScanSearch,
  Scale,
  ShieldCheck,
  TrendingUp,
  TriangleAlert,
  UserCheck,
  Users,
  Waypoints,
  Workflow,
  Zap,
};

export function OrmIcon({
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
  const Icon = ormIcons[name] ?? ShieldCheck;
  return <Icon size={size} strokeWidth={strokeWidth} className={className} aria-hidden />;
}
