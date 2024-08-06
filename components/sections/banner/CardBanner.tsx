import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

interface CardBannerProps {
  background: string;
  brandName: string;
}

const CardBanner: FC<CardBannerProps> = ({ background, brandName }) => {
  return (
    <div className={cn("rounded-xl", background)}>
      <div className=" relative">
        <div className=" flex  justify-between items-center">
          <div className=" flex flex-col relative z-20 justify-between items-start p-10">
            <h2 className=" text-3xl font-bold ">Best Solo</h2>
            <h4 className=" text-[100px] font-bold">Branded</h4>
            <div>
              <Button className=" rounded-full bg-blue-600">
                Shop By Category
              </Button>
            </div>
          </div>
          <Image
            className="mx-auto relative z-20"
            src={"https://eshop-tcj.netlify.app/assets/macbook-MZGIbM5F.png"}
            alt=""
            width={500}
            height={400}
          />
          <h6 className=" tracking-wider bottom-3 right-0 text-[10rem] absolute -rotate-12  text-opacity-35 z-0 font-roboto uppercase text-white font-bold">
            {brandName}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CardBanner;
