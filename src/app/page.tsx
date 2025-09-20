import { getData } from "@/actions/fetchData.action";
import MainSlider from "@/components/MainSlider/MainSlider";
import ProductsShoppingSection from "@/components/ShoppingSectionComp/ProductsShoppingSectionComp";
import { ShoppingSection } from "@/components/ShoppingSectionComp/ShoppingSectionComp";
import { Headset, ShieldCheck, Truck } from "lucide-react";
export default async function Home() {
  // fetch data for display
  const categories = await getData("categories");
  const brands = await getData("brands");
  const products = await getData("products", 8);

  return (
    <>
      <div className="container mx-auto px-1 md:px-0">
        <div id="main-slider" className="scroll-mt-[104px]">
          <MainSlider />
        </div>
        {/* render categories */}
        <section id="categories-section" className="scroll-mt-[104px]">
          <ShoppingSection
            sectionTitle="categories"
            sectionData={categories?.data}
          />
        </section>
        {/* render brands */}
        <section id="brands-section" className="scroll-mt-[104px]">
          <ShoppingSection
            sectionTitle="browse brands"
            sectionData={brands?.data}
          />
        </section>
        {/* render 8 products */}
        <section id="products-section" className="scroll-mt-[104px]">
          <ProductsShoppingSection
            sectionTitle="products"
            sectionData={products?.data}
          />
        </section>
        {/* hero section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
          <div className="flex flex-col text-center items-center gap-1">
            <div className="icon-container relative w-16 h-16 flex justify-center items-center rounded-full bg-foreground mb-7 shadow-[0_0_0_10px_#c1c1c1] ">
              <Truck className="text-background z-[1]" />
            </div>
            {/* content */}
            <p className="uppercase font-bold">free and fast delivery</p>
            <p className="text-sm font-medium">
              Free delivery on all orders over $140
            </p>
          </div>

          <div className="flex flex-col text-center items-center gap-1">
            <div className="icon-container relative w-16 h-16 flex justify-center items-center rounded-full bg-foreground mb-7 shadow-[0_0_0_10px_#c1c1c1] ">
              <Headset className="text-background z-[1]" />
            </div>
            {/* content */}
            <p className="uppercase font-bold">24/7 customer service</p>
            <p className="text-sm font-medium">
              Friendly 24/7 customer service
            </p>
          </div>

          <div className="flex flex-col text-center items-center gap-1">
            <div className="icon-container relative w-16 h-16 flex justify-center items-center rounded-full bg-foreground mb-7 shadow-[0_0_0_10px_#c1c1c1]">
              <ShieldCheck className="text-background z-[1]" />
            </div>
            {/* content */}
            <p className="uppercase font-bold">money back guarantee</p>
            <p className="text-sm font-medium">
              We return money within 30 days
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
