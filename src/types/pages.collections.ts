import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const cooperation = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/cooperation",
  }),
  schema: z.object({
    banner: z.object({
      enable: z.boolean(),
      title: z.string(),
      image: z.string(),
      description: z.string(),
      buttons: z.array(
        z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        })
      ),
      statistics: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
    whyJoinUs: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        subtitle: z.string(),
        list: z.array(
          z.object({
            icon: z.string(),
            title: z.string(),
            description: z.string(),
          })
        ),
      })
      .optional(),
    clientFeedback: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        subtitle: z.string(),
        image: z.string(),
        description: z.string(),
        author: z.string(),
        designation: z.string(),
        quote: z.string(),
        button: z.object({
          label: z.string(),
          link: z.string(),
        }),
      })
      .optional(),
    gallery: z.object({
      enable: z.boolean(),
      title: z.string(),
      subtitle: z.string(),
      images: z.array(
        z.object({
          position: z.enum(["left", "right"]),
          src: z.string(),
        })
      ),
    }),
    team: z.object({
      enable: z.boolean(),
      title: z.string(),
      subtitle: z.string(),
      members: z.array(
        z.object({
          name: z.string(),
          designation: z.string(),
          image: z.string(),
          social: z.array(
            z.object({
              name: z.string(),
              icon: z.string(),
              link: z.string(),
            })
          ),
        })
      ),
    }),
  }),
});

export const legal = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/legal",
  }),
  schema: z.object({
    banner: z
      .object({
        title: z.string(),
        subtitle: z.string(),
      })
      .optional(),
    recentPosts: z
      .object({
        enable: z.boolean(),
        title: z.string(),
      })
      .optional(),
    featured: z.boolean().optional(),
    excerpt: z.string().optional(),
    date: z.union([z.date(), z.string()]).optional(),
    title: z.string(),
    description: z.string(),
    meta_title: z.string().optional(),
    categories: z.array(z.string()).optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const careers = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/careers",
  }),
  schema: z.object({
    banner: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        image: z.string(),
        video: z.object({
          enable: z.boolean(),
          link: z.string(),
        }),
      })
      .optional(),
    aboutUs: z
      .object({
        enable: z.boolean(),
        subtitle: z.string(),
        title: z.string(),
        description: z.string(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
        stats: z.array(
          z.object({
            count: z.string(),
            rating: z.optional(z.number()),
            rating_description: z.string(),
            source: z.string(),
            image: z.string(),
            alt: z.string(),
          })
        ),
      })
      .optional(),
    gallery: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        subtitle: z.string(),
        images: z.array(
          z.object({
            position: z.string(),
            src: z.string(),
          })
        ),
      })
      .optional(),
    openedPositions: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
      })
      .optional(),
    shortDescription: z.string().optional(),
    title: z.string(),
    date: z.union([z.date(), z.string()]).optional(),
    draft: z.boolean().optional(),
    hours: z.string().optional(),
    location: z.string().optional(),
    categories: z.array(z.string()).optional(),
    sidebar: z
      .object({
        title: z.string(),
        description: z.string(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      })
      .optional(),
  }),
});

export const contact = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/contact",
  }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      description: z.string(),
    }),
    locations: z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      list: z.array(
        z.object({
          city: z.string(),
          address: z.string(),
        })
      ),
    }),
    draft: z.boolean(),
  }),
});

export const services = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/services",
  }),
  schema: z.object({
    banner: z.object({
      enable: z.boolean(),
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      stats: z.array(
        z.object({
          title: z.string(),
          value: z.union([z.number(), z.string()]),
          suffix: z.string(),
        })
      ),
      leads: z.object({
        title: z.string(),
        description: z.string(),
        value: z.string(),
      }),
      graph: z.object({
        title: z.string(),
        value: z.string(),
      }),
      team_members: z.array(
        z.object({
          name: z.string(),
          image: z.string(),
        })
      ),
    }),
    features: z.object({
      enable: z.boolean(),
      image: z.string(),
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      list: z.array(z.string()),
    }),
    integrations: z.object({
      enable: z.boolean(),
      image: z.string(),
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
    draft: z.boolean(),
  }),
});

export const homepage = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/homepage",
  }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      buttons: z.array(
        z.object({
          label: z.string(),
          link: z.string(),
        })
      ),
      benefits: z.array(z.string()),
    }),
    clients: z.object({
      enable: z.boolean(),
      title: z.string(),
      list: z.array(
        z.object({
          image: z.string(),
          alt: z.string(),
        })
      ),
    }),
    features: z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      listOptions: z.array(z.string()).optional(),
      cta: z.object({
        enable: z.boolean(),
        title: z.string(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      }),
      list: z.array(
        z.object({
          enable: z.boolean(),
          icon: z.string(),
          image: z.string(),
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
    about: z
      .array(
        z.object({
          enable: z.boolean(),
          image: z.string(),
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
          list: z.array(z.string()).optional(),
          video: z
            .object({
              enable: z.boolean(),
              link: z.string(),
            })
            .optional(),
        })
      )
      .optional(),
    testimonials: z.object({
      title: z.string(),
      subtitle: z.string(),
      list: z.array(
        z.object({
          tab_button: z.object({
            icon: z.string(),
            title: z.string(),
          }),
          tab_content: z.array(
            z.object({
              title: z.string(),
              image: z.string(),
              description: z.string(),
            })
          ),
        })
      ),
    }),
    draft: z.boolean().optional(),
  }),
});

export const tests = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/tests",
  }),
  schema: z.object({
    integration: z
      .object({
        title: z.string(),
        subtitle: z.string(),
        image: z.string(),
      })
      .optional(),
    other_integration: z
      .object({
        enable: z.boolean(),
        title: z.string(),
        subtitle: z.string(),
        number_of_items: z.number(),
      })
      .optional(),
    title: z.string().optional(),
    image: z.string().optional(),
    short_description: z.string().optional(),
    date: z.union([z.date(), z.string()]).optional(),
    draft: z.boolean().optional(),
    brief: z
      .object({
        title: z.string(),
        description: z.string(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      })
      .optional(),
  }),
});

export const pages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/pages",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string(),
    description: z.string(),
    draft: z.boolean(),
  }),
});

export const howItWorks = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/how-it-works",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string(),
    description: z.string(),
    draft: z.boolean(),
    pricing_compare: z.object({
      enable: z.boolean(),
      title: z.string(),
      subtitle: z.string(),
      columns: z.array(
        z.object({
          title: z.string(),
          price: z.optional(z.string()),
        })
      ),
      rows: z.array(
        z.object({
          title: z.string(),
          basic: z.object({
            title: z.string(),
            value: z.optional(z.string()),
            icon: z.optional(
              z.object({
                value: z.string(),
                style: z.optional(z.string()),
              })
            ),
            button: z.optional(
              z.object({
                enable: z.boolean(),
                label: z.string(),
                link: z.string(),
                style: z.optional(z.string()),
              })
            ),
          }),
          standard: z.object({
            title: z.string(),
            value: z.optional(z.string()),
            icon: z.optional(
              z.object({
                value: z.string(),
                style: z.optional(z.string()),
              })
            ),
            button: z.optional(
              z.object({
                enable: z.boolean(),
                label: z.string(),
                link: z.string(),
                style: z.optional(z.string()),
              })
            ),
          }),
          executive: z.object({
            title: z.string(),
            value: z.optional(z.string()),
            icon: z.optional(
              z.object({
                value: z.string(),
                style: z.optional(z.string()),
              })
            ),
            button: z.optional(
              z.object({
                enable: z.boolean(),
                label: z.string(),
                link: z.string(),
                style: z.optional(z.string()),
              })
            ),
          }),
        })
      ),
    }),
  }),
});
