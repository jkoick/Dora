import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const ctaSection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    subtitle: z.string(),
    title: z.string(),
    image: z.string(),
    buttons: z.array(
      z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    ),
  }),
});

export const faqSection = defineCollection({
  loader: glob({
    pattern: "faq.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
    list: z.array(
      z.object({
        title: z.string(),
        content: z.string(),
      }),
    ),
  }),
});

export const integrationSection = defineCollection({
  loader: glob({
    pattern: "integration.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    integrations: z.array(
      z.object({
        title: z.string(),
        direction: z.enum(["left", "right"]),
        link: z.string(),
        alt: z.string(),
        image: z.string(),
      }),
    ),
    cta_button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

export const pricingSection = defineCollection({
  loader: glob({
    pattern: "pricing.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    pricing_types: z.array(z.string()),
    pricing: z.array(
      z.object({
        type: z.enum(["monthly", "yearly"]),
        image: z.string(),
        title_prefix: z.string(),
        title: z.string(),
        plan_prefix: z.string(),
        plan: z.string(),
        price: z.string(),
        price_suffix: z.string(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
        list: z.array(z.string()),
      }),
    ),
  }),
});
