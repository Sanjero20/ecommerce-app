interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div className={`${className} bg-card rounded-[20px]`}>{children}</div>
  );
};

export default Card;
