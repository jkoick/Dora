declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	export interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export type ReferenceDataEntry<
		C extends CollectionKey,
		E extends keyof DataEntryMap[C] = string,
	> = {
		collection: C;
		id: E;
	};
	export type ReferenceContentEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}) = string,
	> = {
		collection: C;
		slug: E;
	};

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		entry: ReferenceContentEntry<C, E>,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		entry: ReferenceDataEntry<C, E>,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? string extends keyof DataEntryMap[C]
			? Promise<DataEntryMap[C][E]> | undefined
			: Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: ReferenceContentEntry<C, ValidContentEntrySlug<C>>[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: ReferenceDataEntry<C, keyof DataEntryMap[C]>[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? ReferenceContentEntry<C, ValidContentEntrySlug<C>>
			: ReferenceDataEntry<C, keyof DataEntryMap[C]>
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		
	};

	type DataEntryMap = {
		"careers": Record<string, {
  id: string;
  body?: string;
  collection: "careers";
  data: InferEntrySchema<"careers">;
  rendered?: RenderedContent;
  filePath?: string;
}>;
"contact": Record<string, {
  id: string;
  body?: string;
  collection: "contact";
  data: InferEntrySchema<"contact">;
  rendered?: RenderedContent;
  filePath?: string;
}>;
"cooperation": Record<string, {
  id: string;
  body?: string;
  collection: "cooperation";
  data: InferEntrySchema<"cooperation">;
  rendered?: RenderedContent;
  filePath?: string;
}>;
"ctaSection": Record<string, {
  id: string;
  body?: string;
  collection: "ctaSection";
  data: InferEntrySchema<"ctaSection">;
  rendered?: RenderedContent;
  filePath?: string;
}>;
"faqSection": Record<string, {
  id: string;
  body?: string;
  collection: "faqSection";
  data: InferEntrySchema<"faqSection">;
  rendered?: RenderedContent;
  filePath?: string;
}>;
"homepage": Record<string, {
  id: string;
  body?: string;
  collection: "homepage";
  data: InferEntrySchema<"homepage">;
  rendered?: RenderedContent;
  filePath?: string;
}>;
"howItWorks": Record<string, {
  id: string;
  body?: string;
  collection: "howItWorks";
  data: InferEntrySchema<"howItWorks">;
  rendered?: RenderedContent;
  filePath?: string;
}>;
"integrationSection": Record<string, {
  id: string;
  body?: string;
  collection: "integrationSection";
  data: InferEntrySchema<"integrationSection">;
  rendered?: RenderedContent;
  filePath?: string;
}>;
"legal": Record<string, {
  id: string;
  body?: string;
  collection: "legal";
  data: InferEntrySchema<"legal">;
  rendered?: RenderedContent;
  filePath?: string;
}>;
"pages": Record<string, {
  id: string;
  body?: string;
  collection: "pages";
  data: InferEntrySchema<"pages">;
  rendered?: RenderedContent;
  filePath?: string;
}>;
"pricingSection": Record<string, {
  id: string;
  body?: string;
  collection: "pricingSection";
  data: InferEntrySchema<"pricingSection">;
  rendered?: RenderedContent;
  filePath?: string;
}>;
"services": Record<string, {
  id: string;
  body?: string;
  collection: "services";
  data: InferEntrySchema<"services">;
  rendered?: RenderedContent;
  filePath?: string;
}>;
"tests": Record<string, {
  id: string;
  body?: string;
  collection: "tests";
  data: InferEntrySchema<"tests">;
  rendered?: RenderedContent;
  filePath?: string;
}>;

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content.config.js");
}
