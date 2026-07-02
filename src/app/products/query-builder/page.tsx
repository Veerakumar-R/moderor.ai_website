import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { QueryBuilderVisual } from "@/components/products/QueryBuilderVisual";

export const metadata: Metadata = {
  title: "Query Builder | moderor.ai",
  description:
    "Query Builder is Moderor's natural-language-to-SQL product. It uses MCP connections plus RAG for schema awareness, generating correct joins from plain English.",
};

export default function QueryBuilderPage() {
  return (
    <ProductHero
      badge="APPcelerate Suite · Product"
      title="English in. SQL out."
      description="Query Builder is Moderor's natural-language-to-SQL product. It uses MCP connections plus RAG for schema awareness, generating correct joins from plain English."
      visual={<QueryBuilderVisual />}
    />
  );
}
