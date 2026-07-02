import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { QaSuiteVisual } from "@/components/products/QaSuiteVisual";

export const metadata: Metadata = {
  title: "QA Suite | moderor.ai",
  description:
    "QA Suite is Moderor's AI test management product. It generates test suites from Swagger/OpenAPI specifications and runs an AI pipeline.",
};

export default function QaSuitePage() {
  return (
    <ProductHero
      badge="APPcelerate Suite · Product"
      title="Tests that write themselves from your specs."
      description="QA Suite is Moderor's AI test management product. It generates test suites from Swagger/OpenAPI specifications and runs an AI pipeline."
      visual={<QaSuiteVisual />}
    />
  );
}
