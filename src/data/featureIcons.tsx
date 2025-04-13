import { UserCheck, School, BadgePercent, PlaneTakeoff } from "lucide-react";

export interface Feature {
  title: string;
  icon: React.ReactNode;
}

export const features: Feature[] = [
  {
    title: "Personalized Counseling",
    icon: <UserCheck className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "University Tie-ups",
    icon: <School className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Scholarship Assistance",
    icon: <BadgePercent className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Visa & Pre-departure Support",
    icon: <PlaneTakeoff className="w-10 h-10 text-orange-600" />,
  },
];
