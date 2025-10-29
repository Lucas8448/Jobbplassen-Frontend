import { useEffect, useState } from "react";
import JobbBoks from "./JobbBoks";
import SorterTreff, { SortType } from "./SorterTreff";

type Props = {
  searchQuery?: string;
};

export default function Jobber({ searchQuery = "" }: Props) {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSort, setCurrentSort] = useState<SortType>("nyeste");

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/jobs");
        if (!res.ok) throw new Error("Feil ved henting av data");
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  const filterOppdatert = (filter: SortType) => {
    setCurrentSort(filter);

    // Lag en kopi av jobs (ikke muter state direkte)
    const sortedJobs = [...jobs];

    switch (filter) {
      case "alfabetisk": // A–Å
        sortedJobs.sort((a, b) =>
          a.title.localeCompare(b.title, "no", { sensitivity: "base" })
        );
        break;

      case "eldste": // Å–A
        sortedJobs.sort((a, b) =>
          b.title.localeCompare(a.title, "no", { sensitivity: "base" })
        );
        break;

      case "nyeste":
      default:
        sortedJobs.sort(
          (a, b) => new Date(b.posted_at).getTime() - new Date(a.posted_at).getTime()
        );
        break;
    }

    setJobs(sortedJobs);
  };

  if (loading) return <p>Laster...</p>;

  // Filter jobs based on search query
  const filteredJobs = jobs.filter((job) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      job.title.toLowerCase().includes(query) ||
      job.description.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <SorterTreff
        antallTreff={filteredJobs.length}
        onFilterChange={filterOppdatert}
        currentSort={currentSort}
      />

      <ul className="space-y-2">
        {filteredJobs.slice(0, 10).map((job, i) => (
          <JobbBoks
            key={job.id || i}
            id={job.id}
            title={job.title}
            content={job.description}
            employer={job.company}
            dato={formaterDato(job.posted_at)}
          />
        ))}
      </ul>
    </div>
  );
}

function formaterDato(dato: string) {
  const date = new Date(dato);
  return date.toLocaleDateString("no-NB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}