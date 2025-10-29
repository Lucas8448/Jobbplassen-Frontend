import { useEffect, useState } from "react";
import JobbBoks from "./JobbBoks";

export default function Jobber() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p>Laster...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Ledige stillinger</h1>
      <ul className="space-y-2">
        {jobs.slice(0, 10).map((job, i) => (
          <JobbBoks
            key={i}
            title={job.title}
            content={job.description}
            employer={job.company}
          />
        ))}
      </ul>
    </div>
  );
}
