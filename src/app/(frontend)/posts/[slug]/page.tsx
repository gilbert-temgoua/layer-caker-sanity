import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from '@/sanity/lib/queries'
import { Post } from '@/components/Post'
import { notFound } from 'next/navigation'
import type { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

const getPage = async (params: RouteProps["params"]) =>
  sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { data: page } = await getPage(params);

  if (!page) {
    return {}
  }

  const metadata: Metadata = {
    title: page.seo.title,
    description: page.seo.description,
  };

  if (page.seo.image) {
    metadata.openGraph = {
      images: {
        url: urlFor(page.seo.image).width(1200).height(630).url(),
        width: 1200,
        height: 630,
      },
    };
  }

  metadata.openGraph = {
    images: {
      url: page.seo.image
        ? urlFor(page.seo.image).width(1200).height(630).url()
        : `/api/og?id=${page._id}`,
      width: 1200,
      height: 630,
    },
  };

  if (page.seo.noIndex) {
    metadata.robots = "noindex";
  }

  return metadata;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
const {data: post} = await getPage(params)

  if (!post) {
    notFound()
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Post {...post} />
    </main>
  )
}
