import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");
  const ogImage = `${protocol}://${host}/og.png`;
  const description =
    "严晗的 AI 产品经理作品集，展示 AI 工作流设计、产品决策、数据分析与技术落地能力。";

  return {
    title: "严晗｜AI 产品经理",
    description,
    keywords: [
      "严晗",
      "AI 产品经理",
      "AI PM",
      "产品作品集",
      "人工智能产品",
    ],
    authors: [{ name: "严晗" }],
    openGraph: {
      title: "严晗｜AI 产品经理",
      description,
      type: "website",
      locale: "zh_CN",
      images: [
        {
          url: ogImage,
          width: 1536,
          height: 1024,
          alt: "严晗 AI 产品经理作品集",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "严晗｜AI 产品经理",
      description,
      images: [ogImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
