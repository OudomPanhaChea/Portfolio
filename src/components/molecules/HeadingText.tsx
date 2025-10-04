

interface HeadingProps {
  heading: React.ReactNode;
  description?: string; 
}

const HeadingText: React.FC<HeadingProps> = ({ heading, description }) => {
  return (
    <div className="flex-center flex-col gap-3">
      <h1 
        className="text-4xl font-semibold text-primary"
      >
        {heading}
      </h1>
      {description && <p className="text-primary/70 text-base">{description}</p>}
    </div>
  );
};

export default HeadingText;
