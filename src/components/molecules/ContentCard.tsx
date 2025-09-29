import type { IconType } from "react-icons";

const ContentCard = ({
  title,
  subtitle,
  description,
  Icon,
  title2,
  subtitle2,
  description2,
  Icon2,
}: {
  title: string;
  subtitle: string;
  description: string;
  Icon: IconType;
  title2: string;
  subtitle2: string;
  description2: string;
  Icon2: IconType;
}) => {
  return (
    <div
      id="content"
      className="overflow-hidden h-full relative border-2 bg-white border-primary/10 rounded-xl lg:rounded-2xl hover:shadow-sm transition-shadow cursor-default"
    >
      <div
        id="first"
        className="p-4 md:p-5 lg:p-6 space-y-3 text-primary bg-white"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          <h4 className="text-xs sm:text-sm font-medium corner-only">
            {title}
          </h4>
        </div>
        <h3 className="text-sm md:text-base xl:text-lg font-semibold text-primary">
          {subtitle}
        </h3>
        <p className="text-primary/70 text-xs md:text-sm xl:text-base leading-relaxed">
          {description}
        </p>
      </div>

      <div
        id="sec"
        className="p-4 md:p-5 lg:p-6 space-y-3 text-primary bg-white absolute top-full left-0"
      >
        <div className="flex items-center gap-3">
          <Icon2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          <h4 className="text-xs sm:text-sm font-medium corner-only">
            {title2}
          </h4>
        </div>
        <h3 className="text-sm md:text-base xl:text-lg font-semibold text-primary">
          {subtitle2}
        </h3>
        <p className="text-primary/70 text-xs md:text-sm xl:text-base leading-relaxed">
          {description2}
        </p>
      </div>
    </div>
  );
};

export default ContentCard