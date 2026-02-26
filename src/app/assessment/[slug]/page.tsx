"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { formConfigs } from "@/config/forms";
import AssessmentForm from "@/components/AssessmentForm";

export default function AssessmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const config = formConfigs[slug];

  if (!config) {
    notFound();
  }

  return <AssessmentForm config={config} />;
}
