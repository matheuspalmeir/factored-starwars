interface TableHeaderProps {
  title: string;
  description?: string;
}

const ListHeader = ({ title, description }: TableHeaderProps) => {
  return (
    <div className="px-4 sm:px-0">
      <h3 className="text-base/7 font-semibold text-white">{title}</h3>
      <p className="mt-1 max-w-6xl text-sm/6 text-gray-300">{description}</p>
    </div>
  );
};

export default ListHeader;
