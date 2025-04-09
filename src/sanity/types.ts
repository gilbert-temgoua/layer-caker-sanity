/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Redirect = {
  _id: string;
  _type: "redirect";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  source: string;
  destination: string;
  permanent: boolean;
  isEnabled?: boolean;
};

export type SiteSettings = {
  _id: string;
  _type: "siteSettings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  homePage?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  };
};

export type SplitImage = {
  _type: "splitImage";
  orientation?: "imageLeft" | "imageRight";
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Hero = {
  _type: "hero";
  title?: string;
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Features = {
  _type: "features";
  title?: string;
  features?: Array<{
    title?: string;
    text?: string;
    _type: "feature";
    _key: string;
  }>;
};

export type Faqs = {
  _type: "faqs";
  title?: string;
  faqs?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "faq";
  }>;
};

export type Faq = {
  _id: string;
  _type: "faq";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
};

export type PageBuilder = Array<{
  _key: string;
} & Hero | {
  _key: string;
} & SplitImage | {
  _key: string;
} & Features | {
  _key: string;
} & Faqs>;

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  content?: PageBuilder;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  seo?: Seo;
  social?: Social;
};

export type Social = {
  _type: "social";
  linkedIn?: string;
  x?: string;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  publishedAt?: string;
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  relatedPosts?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "post";
  }>;
  seo?: Seo;
};

export type Seo = {
  _type: "seo";
  title?: string;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  noIndex?: boolean;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  bio?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
};

export type Slug = {
  _type: "slug";
  current: string;
  source?: string;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
}>;

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type SanityAssistInstructionTask = {
  _type: "sanity.assist.instructionTask";
  path?: string;
  instructionKey?: string;
  started?: string;
  updated?: string;
  info?: string;
};

export type SanityAssistTaskStatus = {
  _type: "sanity.assist.task.status";
  tasks?: Array<{
    _key: string;
  } & SanityAssistInstructionTask>;
};

export type SanityAssistSchemaTypeAnnotations = {
  _type: "sanity.assist.schemaType.annotations";
  title?: string;
  fields?: Array<{
    _key: string;
  } & SanityAssistSchemaTypeField>;
};

export type SanityAssistOutputType = {
  _type: "sanity.assist.output.type";
  type?: string;
};

export type SanityAssistOutputField = {
  _type: "sanity.assist.output.field";
  path?: string;
};

export type SanityAssistInstructionContext = {
  _type: "sanity.assist.instruction.context";
  reference: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "assist.instruction.context";
  };
};

export type AssistInstructionContext = {
  _id: string;
  _type: "assist.instruction.context";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  context?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: null;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type SanityAssistInstructionUserInput = {
  _type: "sanity.assist.instruction.userInput";
  message: string;
  description?: string;
};

export type SanityAssistInstructionPrompt = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  } | {
    _key: string;
  } & SanityAssistInstructionFieldRef | {
    _key: string;
  } & SanityAssistInstructionContext | {
    _key: string;
  } & SanityAssistInstructionUserInput>;
  style?: "normal";
  listItem?: never;
  markDefs?: null;
  level?: number;
  _type: "block";
  _key: string;
}>;

export type SanityAssistInstructionFieldRef = {
  _type: "sanity.assist.instruction.fieldRef";
  path?: string;
};

export type SanityAssistInstruction = {
  _type: "sanity.assist.instruction";
  prompt?: SanityAssistInstructionPrompt;
  icon?: string;
  title?: string;
  userId?: string;
  createdById?: string;
  output?: Array<{
    _key: string;
  } & SanityAssistOutputField | {
    _key: string;
  } & SanityAssistOutputType>;
};

export type SanityAssistSchemaTypeField = {
  _type: "sanity.assist.schemaType.field";
  path?: string;
  instructions?: Array<{
    _key: string;
  } & SanityAssistInstruction>;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Redirect | SiteSettings | SplitImage | Hero | Features | Faqs | Faq | PageBuilder | Page | Social | Post | Seo | Author | Category | Slug | BlockContent | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | SanityAssistInstructionTask | SanityAssistTaskStatus | SanityAssistSchemaTypeAnnotations | SanityAssistOutputType | SanityAssistOutputField | SanityAssistInstructionContext | AssistInstructionContext | SanityAssistInstructionUserInput | SanityAssistInstructionPrompt | SanityAssistInstructionFieldRef | SanityAssistInstruction | SanityAssistSchemaTypeField;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: POSTS_QUERY
// Query: *[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{  _id,  title,  slug,  body,  mainImage,  publishedAt,  "categories": coalesce(    categories[]->{      _id,      slug,      title    },    []  ),  author->{    name,    image  }}
export type POSTS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  mainImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  publishedAt: string | null;
  categories: Array<{
    _id: string;
    slug: Slug | null;
    title: string | null;
  }> | Array<never>;
  author: {
    name: string | null;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
  } | null;
}>;
// Variable: POSTS_SLUGS_QUERY
// Query: *[_type == "post" && defined(slug.current)]{  "slug": slug.current}
export type POSTS_SLUGS_QUERYResult = Array<{
  slug: string | null;
}>;
// Variable: POST_QUERY
// Query: *[_type == "post" && slug.current == $slug][0]{  _id,  title,  body,  mainImage,  publishedAt,  "categories": coalesce(    categories[]->{      _id,      slug,      title    },    []  ),  author->{    name,    image  },  "seo": {    "title": coalesce(seo.title, title, ""),    "description": coalesce(seo.description,  ""),    "image": seo.image,    "noIndex": seo.noIndex == true  },  relatedPosts[]{    _key, // required for drag and drop    ...@->{_id, title, slug} // get fields from the referenced post  }}
export type POST_QUERYResult = {
  _id: string;
  title: string | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  mainImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  publishedAt: string | null;
  categories: Array<{
    _id: string;
    slug: Slug | null;
    title: string | null;
  }> | Array<never>;
  author: {
    name: string | null;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
  } | null;
  seo: {
    title: string | "";
    description: string | "";
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    noIndex: boolean | false;
  };
  relatedPosts: Array<{
    _key: string;
    _id: string;
    title: string | null;
    slug: Slug | null;
  }> | null;
} | null;
// Variable: PAGE_QUERY
// Query: *[_type == "page" && slug.current == $slug][0]{  ...,  "seo": {    "title": coalesce(seo.title, title, ""),    "description": coalesce(seo.description,  ""),    "image": seo.image,    "noIndex": seo.noIndex == true  },  content[]{    ...,    _type == "faqs" => {      ...,      faqs[]->{        _id,        title,        body,        "text": pt::text(body)      }    }  }}
export type PAGE_QUERYResult = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  content: Array<{
    _key: string;
    _type: "faqs";
    title?: string;
    faqs: Array<{
      _id: string;
      title: string | null;
      body: Array<{
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
        listItem?: "bullet";
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      } | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: "image";
        _key: string;
      }> | null;
      text: string;
    }> | null;
  } | {
    _key: string;
    _type: "features";
    title?: string;
    features?: Array<{
      title?: string;
      text?: string;
      _type: "feature";
      _key: string;
    }>;
  } | {
    _key: string;
    _type: "hero";
    title?: string;
    text?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
      listItem?: "bullet";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    } | {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
      _key: string;
    }>;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  } | {
    _key: string;
    _type: "splitImage";
    orientation?: "imageLeft" | "imageRight";
    title?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  }> | null;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  seo: {
    title: string | "";
    description: string | "";
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    noIndex: boolean | false;
  };
  social?: Social;
} | null;
// Variable: HOME_PAGE_QUERY
// Query: *[_id == "siteSettings"][0]{  homePage->{    ...,    content[]{      ...,      _type == "faqs" => {        ...,        faqs[]->{          _id,          title,          body,          "text": pt::text(body)        }      }    }  }}
export type HOME_PAGE_QUERYResult = {
  homePage: null;
} | {
  homePage: {
    _id: string;
    _type: "page";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    slug?: Slug;
    content: Array<{
      _key: string;
      _type: "faqs";
      title?: string;
      faqs: Array<{
        _id: string;
        title: string | null;
        body: Array<{
          children?: Array<{
            marks?: Array<string>;
            text?: string;
            _type: "span";
            _key: string;
          }>;
          style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
          listItem?: "bullet";
          markDefs?: Array<{
            href?: string;
            _type: "link";
            _key: string;
          }>;
          level?: number;
          _type: "block";
          _key: string;
        } | {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          alt?: string;
          _type: "image";
          _key: string;
        }> | null;
        text: string;
      }> | null;
    } | {
      _key: string;
      _type: "features";
      title?: string;
      features?: Array<{
        title?: string;
        text?: string;
        _type: "feature";
        _key: string;
      }>;
    } | {
      _key: string;
      _type: "hero";
      title?: string;
      text?: Array<{
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
        listItem?: "bullet";
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      } | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: "image";
        _key: string;
      }>;
      image?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      };
    } | {
      _key: string;
      _type: "splitImage";
      orientation?: "imageLeft" | "imageRight";
      title?: string;
      image?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      };
    }> | null;
    mainImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    seo?: Seo;
    social?: Social;
  } | null;
} | null;
// Variable: REDIRECTS_QUERY
// Query: *[_type == "redirect" && isEnabled == true] {      source,      destination,      permanent  }
export type REDIRECTS_QUERYResult = Array<{
  source: string;
  destination: string;
  permanent: boolean;
}>;
// Variable: OG_IMAGE_QUERY
// Query: *[_id == $id][0]{    title,    "image": mainImage.asset->{      url,      metadata {        palette      }    }  }
export type OG_IMAGE_QUERYResult = {
  title: null;
  image: null;
} | {
  title: string | null;
  image: null;
} | {
  title: string | null;
  image: {
    url: string | null;
    metadata: {
      palette: SanityImagePalette | null;
    } | null;
  } | null;
} | null;
// Variable: SITEMAP_QUERY
// Query: *[_type in ["page", "post"] && defined(slug.current)] {      "href": select(        _type == "page" => "/" + slug.current,        _type == "post" => "/posts/" + slug.current,        slug.current      ),      _updatedAt  }
export type SITEMAP_QUERYResult = Array<{
  href: string | null;
  _updatedAt: string;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"post\" && defined(slug.current)]|order(publishedAt desc)[0...12]{\n  _id,\n  title,\n  slug,\n  body,\n  mainImage,\n  publishedAt,\n  \"categories\": coalesce(\n    categories[]->{\n      _id,\n      slug,\n      title\n    },\n    []\n  ),\n  author->{\n    name,\n    image\n  }\n}": POSTS_QUERYResult;
    "*[_type == \"post\" && defined(slug.current)]{\n  \"slug\": slug.current\n}": POSTS_SLUGS_QUERYResult;
    "*[_type == \"post\" && slug.current == $slug][0]{\n  _id,\n  title,\n  body,\n  mainImage,\n  publishedAt,\n  \"categories\": coalesce(\n    categories[]->{\n      _id,\n      slug,\n      title\n    },\n    []\n  ),\n  author->{\n    name,\n    image\n  },\n  \"seo\": {\n    \"title\": coalesce(seo.title, title, \"\"),\n    \"description\": coalesce(seo.description,  \"\"),\n    \"image\": seo.image,\n    \"noIndex\": seo.noIndex == true\n  },\n  relatedPosts[]{\n    _key, // required for drag and drop\n    ...@->{_id, title, slug} // get fields from the referenced post\n  }\n}": POST_QUERYResult;
    "*[_type == \"page\" && slug.current == $slug][0]{\n  ...,\n  \"seo\": {\n    \"title\": coalesce(seo.title, title, \"\"),\n    \"description\": coalesce(seo.description,  \"\"),\n    \"image\": seo.image,\n    \"noIndex\": seo.noIndex == true\n  },\n  content[]{\n    ...,\n    _type == \"faqs\" => {\n      ...,\n      faqs[]->{\n        _id,\n        title,\n        body,\n        \"text\": pt::text(body)\n      }\n    }\n  }\n}": PAGE_QUERYResult;
    "*[_id == \"siteSettings\"][0]{\n  homePage->{\n    ...,\n    content[]{\n      ...,\n      _type == \"faqs\" => {\n        ...,\n        faqs[]->{\n          _id,\n          title,\n          body,\n          \"text\": pt::text(body)\n        }\n      }\n    }\n  }\n}": HOME_PAGE_QUERYResult;
    "\n  *[_type == \"redirect\" && isEnabled == true] {\n      source,\n      destination,\n      permanent\n  }\n": REDIRECTS_QUERYResult;
    "\n  *[_id == $id][0]{\n    title,\n    \"image\": mainImage.asset->{\n      url,\n      metadata {\n        palette\n      }\n    }\n  }\n": OG_IMAGE_QUERYResult;
    "\n  *[_type in [\"page\", \"post\"] && defined(slug.current)] {\n      \"href\": select(\n        _type == \"page\" => \"/\" + slug.current,\n        _type == \"post\" => \"/posts/\" + slug.current,\n        slug.current\n      ),\n      _updatedAt\n  }\n  ": SITEMAP_QUERYResult;
  }
}
