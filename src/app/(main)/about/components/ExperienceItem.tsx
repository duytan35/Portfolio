interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const ExperienceItem = ({
  title,
  company,
  period,
  description,
}: ExperienceItemProps) => {
  return (
    <div className="mb-12 relative pl-8 before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:bg-gray-300 before:rounded-full before:z-10 after:absolute after:left-1.5 after:top-8 after:bottom-0 after:w-[1px] after:bg-gray-200 after:-z-10 last:after:hidden">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="flex justify-between items-center mb-2">
        <p className="text-gray-600">{company}</p>
        <span className="text-sm text-gray-500">{period}</span>
      </div>
      <div
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};
