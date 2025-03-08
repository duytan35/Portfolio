import { CodeSection, ImageSection, TextSection } from "@/types";
import { trimZeroWidth } from "@/utils/trim-zero-width";
import Image from "next/image";
import CodeBlock from "../code-block";

const TextSectionRenderer = ({ content }: { content: string }) => {
  return <div className="mb-5" dangerouslySetInnerHTML={{ __html: content }} />;
};

const ImageSectionRenderer = ({
  image,
  imageMaxHeight,
  meta,
  metaMaxWidth,
}: ImageSection) => {
  return (
    <div className="mb-5">
      <Image
        src={image}
        alt="image section"
        width={1000}
        height={600}
        className="w-full object-contain rounded-sm"
        style={{
          maxHeight: trimZeroWidth(imageMaxHeight) || "auto",
        }}
      />
      <p
        style={{
          maxWidth: trimZeroWidth(metaMaxWidth) || "auto",
          textAlign: "center",
          paddingTop: "4px",
        }}
      >
        {meta}
      </p>
    </div>
  );
};

export function SectionRenderer({
  sections,
}: {
  sections: (TextSection | ImageSection | CodeSection)[];
}) {
  return (
    <div className="section-renderer tracking-wide">
      {sections.map((section, index) => {
        switch (section._type) {
          case "TextSection":
            return (
              <TextSectionRenderer key={index} content={section.content} />
            );
          case "ImageSection":
            return (
              <ImageSectionRenderer
                _type={section._type}
                key={index}
                image={section.image}
                imageMaxHeight={section.imageMaxHeight}
                meta={section.meta}
                metaMaxWidth={section.metaMaxWidth}
              />
            );
          case "CodeSection":
            return (
              <CodeBlock
                language={section.code.language ?? "typescript"}
                code={section.code.code}
                filename={section.code.filename}
                key={index}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
