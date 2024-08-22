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
          <li key={index}>
            <p className="w-fit hover:cursor-pointer hover:underline">{link}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sublink;
