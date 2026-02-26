"use client";

import { formConfigs } from "@/config/forms";
import AssessmentForm from "@/components/AssessmentForm";

export default function AssessmentPage() {
  // Default to homepage form when accessed via /assessment (backwards compat)
  return <AssessmentForm config={formConfigs.homepage} />;
}
