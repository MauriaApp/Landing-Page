import React from "react";
import Button from "@/components/Layout/Button";
import { Apple, GooglePlay } from "@icons";
import { twMerge } from "tailwind-merge";

type DownloadButtonProps = {
  platform: "ios" | "android";
  className?: string;
};
const IOSContent = () => {
  return (
    <>
      <Apple
        className={
          "w-8 h-8 group-hover:-rotate-12 transition ease-back duration-500"
        }
      />
      <div className={"flex flex-col items-start"}>
        <span className={"leading-none text-xs font-normal"}>
          Télécharger sur
        </span>
        <span className={"leading-none text-base"}>l'App Store</span>
      </div>
    </>
  );
};

const AndroidContent = () => {
  return (
    <>
      <GooglePlay
        className={
          "w-8 h-8 group-hover:-rotate-12 transition ease-back duration-500"
        }
      />
      <div className={"flex flex-col items-start"}>
        <span className={"leading-none text-xs font-normal"}>
          Télécharger sur
        </span>
        <span className={"leading-none text-base"}>le Play Store</span>
      </div>
    </>
  );
};

const DownloadButton = (props: DownloadButtonProps) => {
  return (
    <Button
      href={
        props.platform === "android"
          ? "https://play.google.com/store/apps/details?id=io.ionic.mauria"
          : "https://apps.apple.com/fr/app/mauria/id6444381612"
      }
      variant={"dark"}
      className={twMerge("w-48 p-3", props.className)}
      contentClassName={"gap-4 justify-start"}
      rounded={"2xl"}
    >
      {props.platform === "ios" && <IOSContent />}
      {props.platform === "android" && <AndroidContent />}
    </Button>
  );
};

export default DownloadButton;
