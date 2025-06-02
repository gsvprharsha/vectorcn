import BlockPreview from "@/components/global/block-preview";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mb-20">
        <BlockPreview category="notification-bars" id="one" height="300px" />
        <BlockPreview category="notification-bars" id="two" height="300px" />
        <BlockPreview category="notification-bars" id="three" height="300px" />
        <BlockPreview category="notification-bars" id="four" height="300px" />
    </div>
  );
}