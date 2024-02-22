import ContentBanner from "@/components/ui/ContentBanner";
import CreativeDesigns from "@/components/ui/CreativeDesigns";
import GrowingAudienceBanner from "@/components/ui/GrowingAudienceBanner";
import Hero from "@/components/ui/Hero";
import RedefineYourBrand from "@/components/ui/RedefineYourBrand";
import ReputationSalesBanner from "@/components/ui/ReputationSalesBanner";
import SocialMediaBanner from "@/components/ui/SocialMediaBanner";
import TroublesWithAudienceBanner from "@/components/ui/TroublesWithAudienceBanner";
import WhatWeDo from "@/components/ui/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <SocialMediaBanner />
      <ContentBanner />
      <ReputationSalesBanner />
      <GrowingAudienceBanner />
      <TroublesWithAudienceBanner />
      <RedefineYourBrand />
      <CreativeDesigns />
      <WhatWeDo />
    </div>
  );
}
