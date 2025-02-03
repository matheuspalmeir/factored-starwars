import { formatDate } from "@/components/app/lib/utils";

interface RowProps {
  title: string;
  data: string | number | Date | undefined;
}

const Row = ({ title, data }: RowProps) => {
  return (
    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm/6 font-bold text-white">{title}</dt>
      <dd className="mt-1 text-sm/6 text-gray-300 sm:col-span-1 sm:mt-0">
        {data instanceof Date ? formatDate(data) : data}
      </dd>
    </div>
  );
};
export default Row;
