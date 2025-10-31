import { useEffect, useState } from "react";
import JobbBoks from "./JobbBoks";
import SorterTreff, { SortType } from "./SorterTreff";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  job_type: string;
  description: string;
  posted_at: string;
  cover_image?: Uint8Array | null;
};

type Props = {
  readonly searchQuery?: string;
};

export default function Jobber({ searchQuery = "" }: Props) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSort, setCurrentSort] = useState<SortType>("nyeste");

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/jobs");
        if (!res.ok) throw new Error("Feil ved henting av data");
        const data = await res.json();
        // Sort by newest on initial load
        const sorted = [...data].sort((a, b) => {
          const dateA = new Date(a.posted_at).getTime();
          const dateB = new Date(b.posted_at).getTime();
          if (isNaN(dateA) || isNaN(dateB)) return 0;
          return dateB - dateA;
        });
        setJobs(sorted);
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

      case "eldste": // Oldest first
        sortedJobs.sort((a, b) => {
          const dateA = new Date(a.posted_at).getTime();
          const dateB = new Date(b.posted_at).getTime();
          if (isNaN(dateA) || isNaN(dateB)) return 0;
          return dateA - dateB;
        });
        break;

      case "nyeste":
      default:
        sortedJobs.sort((a, b) => {
          const dateA = new Date(a.posted_at).getTime();
          const dateB = new Date(b.posted_at).getTime();
          if (isNaN(dateA) || isNaN(dateB)) return 0;
          return dateB - dateA;
        });
        break;
    }

    setJobs(sortedJobs);
  };

  if (loading) return <p>Laster...</p>;

  // Filter jobs based on search query
  const filteredJobs = jobs.filter((job) => {
    if (!searchQuery) return true;
    const queries = searchQuery.split(",").map(q => q.trim().toLowerCase()).filter(q => q);
    if (queries.length === 0) return true;
    
    return queries.some(query =>
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
        {filteredJobs.map((job) => (
          <JobbBoks
            key={job.id}
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
  if (isNaN(date.getTime())) {
    return "Ugyldig dato";
  }
  return date.toLocaleDateString("no-NB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}