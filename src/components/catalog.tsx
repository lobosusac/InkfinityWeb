"use client";

import { useState } from "react";
import { categories, products, type CategorySlug } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { Container, SectionHeading } from "@/components/ui";

export function Catalog() {
  const [active, setActive] = useState<CategorySlug>("todas");

  const visible =
    active === "todas" ? products : products.filter((p) => p.category === active);

  return (
    <section id="catalogo" className="border-b border-line py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Catálogo"
            title={
              <>
                Elegí tu
                <br />
                modelo
              </>
            }
          />

          <div
            role="group"
            aria-label="Filtrar por categoría"
            className="flex flex-wrap gap-1.5"
          >
            {categories.map((c) => (
              <button
                key={c.slug}
                type="button"
                onClick={() => setActive(c.slug)}
                aria-pressed={active === c.slug}
                className={`border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  active === c.slug
                    ? "border-bone bg-bone text-black"
                    : "border-line text-muted hover:border-bone/50 hover:text-bone"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 text-center text-muted">
            Todavía no hay modelos en esta categoría.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
