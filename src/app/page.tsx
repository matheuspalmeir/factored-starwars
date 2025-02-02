import Greetings from "./ui/components/Greetings";
import MovieCovers from "./ui/components/MovieCovers";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Greetings />
      <MovieCovers />
    </div>
  );
}
