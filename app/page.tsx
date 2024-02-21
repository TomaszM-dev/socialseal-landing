import ContentBanner from "@/components/ui/ContentBanner";
import Hero from "@/components/ui/Hero";
import SocialMediaBanner from "@/components/ui/SocialMediaBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <SocialMediaBanner />
      <ContentBanner />
    </div>
  );
}
