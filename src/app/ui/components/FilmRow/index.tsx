interface FilmRowProps {
  title: string;
  description: string;
  director: string;
  year: string;
  releaseDate: string;
  starchips: number;
  planets: number;
  vehicles: number;
  characters: number;
}

const FilmRow = ({
  title,
  description,
  director,
  year,
  releaseDate,
  starchips,
  planets,
  vehicles,
  characters,
}: FilmRowProps) => {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-white">{title}</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-300">{description}</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-bold text-white">Director</dt>
            <dd className="mt-1 text-sm/6 text-gray-300 sm:col-span-2 sm:mt-0">
              {director}
            </dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-bold text-white">Year</dt>
            <dd className="mt-1 text-sm/6 text-gray-300 sm:col-span-2 sm:mt-0">
              {year}
            </dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-bold text-white">Release Date</dt>
            <dd className="mt-1 text-sm/6 text-gray-300 sm:col-span-2 sm:mt-0">
              {releaseDate}
            </dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-bold text-white">Starships Count</dt>
            <dd className="mt-1 text-sm/6 text-gray-300 sm:col-span-2 sm:mt-0">
              {starchips}
            </dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-bold text-white">Planets Count</dt>
            <dd className="mt-1 text-sm/6 text-gray-300 sm:col-span-2 sm:mt-0">
              {planets}
            </dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-bold text-white">Vehicles Count</dt>
            <dd className="mt-1 text-sm/6 text-gray-300 sm:col-span-2 sm:mt-0">
              {vehicles}
            </dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-bold text-white">Characters Count</dt>
            <dd className="mt-1 text-sm/6 text-gray-300 sm:col-span-2 sm:mt-0">
              {characters}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
export default FilmRow;
