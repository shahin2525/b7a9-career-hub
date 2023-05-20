import { getShoppingCart } from "../utilities/fakedb";

const appliedJobLoader = async () => {
  const loadedJobs = await fetch("/featured.json");
  const jobs = await loadedJobs.json();
  // console.log(jobs);
  const storedJob = getShoppingCart();
  // console.log(storedJob);

  const savedApplied = [];

  for (const id in storedJob) {
    // console.log(id);
    const addedJob = jobs.find((job) => job.id == id);

    if (addedJob) {
      // console.log(addedJob);
      const quantity = storedJob[id];
      addedJob.quantity = quantity;
      savedApplied.push(addedJob);
      // console.log(savedApplied);
    }
    // }
    // console.log(savedApplied);
    return savedApplied;
  }
};

export default appliedJobLoader;
