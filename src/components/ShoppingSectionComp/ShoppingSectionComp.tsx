import { Category } from "@/types/category.model";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SectionSlider from "../SectionSliderComp/SectionSliderComp";

const ShoppingSectionItem = ({
  sectionTitle,
  item,
}: {
  sectionTitle?: string;
  item: Category;
}) => {
  let subTitle = "";
  switch (sectionTitle) {
    case "categories":
      subTitle = "SingleCategoryPage";
      break;
    case "brands":
      subTitle = "brands";
      break;
  }
  return (
    <div className="flex flex-col text-center">
      <div className="item-image relative w-40 h-40 rounded-full overflow-hidden border-secondary border-2 group-[&:hover]:border-primary duration-75">
        <Image
          src={item?.image}
          alt={"item"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain object-center"
        />
      </div>
      <p className="item-title mt-5 font-bold">{item?.name}</p>
    </div>
  );
};

const ShoppingSection = ({
  sectionTitle,
  sectionData,
}: {
  sectionTitle: string;
  sectionData: Category[];
}) => {
  return (
    <>
      <section className="mt-10 mb-20 items-section">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold capitalize">
            <span className="text-primary">
              {sectionTitle === "categories" ? "top categories" : sectionTitle}
            </span>
          </h2>
        </div>
        <div className="line-separator w-full h-0.5 bg-secondary mt-2">
          <div className="line-separator w-1/5 h-0.5 bg-primary mt-2"></div>
        </div>
        {/* send sectionTitle & sectionData to a swipper slide */}
        <SectionSlider sectionTitle={sectionTitle} sectionData={sectionData} />
      </section>
    </>
  );
};

export { ShoppingSection, ShoppingSectionItem };
