"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { site } from "@/config/site";
import { formatPrice } from "@/lib/format";
import { waProduct } from "@/lib/whatsapp";
import { GarmentArt } from "@/components/garment-art";
import { WhatsAppIcon } from "@/components/ui";

export function ProductCard({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes[2] ?? product.sizes[0]);

  const discount = product.compareAt
    ? Math.round((1 - product.price / product.compareAt) * 100)
    : null;

  return (
    <article
      data-category={product.category}
      className="group flex flex-col border border-line bg-surface/80 backdrop-blur transition-colors hover:border-ice/50"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-raised">
        <GarmentArt
          garment={product.category}
          art={product.art}
          className="h-full w-full p-8 transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {product.badge ? (
          <span className="absolute left-0 top-0 bg-bone px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-black">
            {product.badge}
          </span>
        ) : null}
        {discount ? (
          <span className="absolute right-0 top-0 bg-action px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-action-ink">
            −{discount}%
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="display text-2xl">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{product.blurb}</p>
        <p className="mt-3 text-xs text-dim">{product.fabric}</p>

        <div className="mt-5 flex items-baseline gap-3">
          <span className="display text-3xl">{formatPrice(product.price)}</span>
          {product.compareAt ? (
            <span className="text-sm text-dim line-through">
              {formatPrice(product.compareAt)}
            </span>
          ) : null}
        </div>

        <fieldset className="mt-5">
          <legend className="mb-2 text-[0.7rem] uppercase tracking-[0.2em] text-dim">
            Talla
          </legend>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                aria-pressed={size === s}
                className={`min-w-11 border px-2.5 py-2 text-xs font-semibold transition-colors ${
                  size === s
                    ? "border-volt bg-volt text-action-ink"
                    : "border-line text-muted hover:border-ice/60 hover:text-bone"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </fieldset>

        <a
          href={waProduct({ product: product.name, size })}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 bg-action px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-action-ink transition-colors hover:bg-action-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bone"
        >
          <WhatsAppIcon />
          Pedir talla {size}
        </a>

        <p className="mt-3 text-center text-[0.7rem] leading-relaxed text-dim">
          Envío gratis desde {site.shipping.freeFrom} piezas
        </p>
      </div>
    </article>
  );
}
