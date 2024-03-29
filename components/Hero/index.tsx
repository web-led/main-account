"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46" dir="rtl">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                شريكك للتحول الرقمي
              </h4>
              <h1 className="mb-5  text-3xl font-bold text-black dark:text-white xl:text-hero ">
                جوده اوروبية علي اراضي عربية{"   "}
                <span className=" logo-font relative inline-block before:rounded-lg before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  WEBLED
                </span>
              </h1>
              <p>
                خبرة واسعة: نمتلك خبرة واسعة في مجال البرمجة اكتسبناها على مدار سنوات من العمل مع مختلف الشركات والمؤسسات. <br/>
                فريق متميز: نضم فريقًا من أفضل المبرمجين والمطورين ذوي الخبرة والكفاءة العالية.<br/>
                حلول مُخصصة: نُقدم حلول برمجة مُخصصة تلبي احتياجات كل عميل على حدة.<br/>
                جودة عالمية: نلتزم بأعلى معايير الجودة العالمية في جميع خدماتنا.<br/>
                أسعار تنافسية: نُقدم أسعارًا تنافسية تتناسب مع احتياجات جميع العملاء.<br/>
              </p>


            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
