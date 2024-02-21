import ContentBanner from "@/components/ui/ContentBanner";
import GrowingAudienceBanner from "@/components/ui/GrowingAudienceBanner";
import Hero from "@/components/ui/Hero";
import ReputationSalesBanner from "@/components/ui/ReputationSalesBanner";
import SocialMediaBanner from "@/components/ui/SocialMediaBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <SocialMediaBanner />
      <ContentBanner />
      <ReputationSalesBanner />
      <GrowingAudienceBanner />
    </div>
  );
}
