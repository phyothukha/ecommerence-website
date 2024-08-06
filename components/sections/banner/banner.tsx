import Container from "@/components/layout/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import CardBanner from "./CardBanner";

const BannerSection = () => {
  return (
    <section className=" my-5">
      <Container>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="">
              <CardBanner brandName="MACBOOk" background=" bg-red-300" />
            </CarouselItem>
            <CarouselItem>
              <CardBanner brandName="Headphone" background=" bg-green-300" />
            </CarouselItem>
            <CarouselItem>
              <CardBanner brandName="APPLE VISION" background=" bg-blue-300" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </section>
  );
};

export default BannerSection;
