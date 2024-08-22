interface Props {
  title: string;
  links: string[];
}

const Sublink = ({ title, links }: Props) => {
  return (
    <nav>
      <p className="mb-6 font-satoshi font-medium uppercase">{title}</p>

      <ul className="flex flex-col gap-4 text-black/60">
        {links.map((link, index) => (
          <p key={index}>{link}</p>
        ))}
      </ul>
    </nav>
  );
};

export default Sublink;
