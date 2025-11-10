export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

// Rohan Patil's Open Source Contributions
// Note: Add your actual open-source contributions here
// These are placeholder examples - replace with your real contributions

export const contributionsUnsorted: contributionsInterface[] = [
  // Example format - replace with your actual contributions:
  // {
  //   repo: "pytorch",
  //   contibutionDescription:
  //     "Improved documentation for distributed training with detailed examples for multi-GPU setups.",
  //   repoOwner: "PyTorch",
  //   link: "https://github.com/pytorch/pytorch/pull/xxxxx",
  // },
  
  // Add your contributions here following the format above
  // If you don't have open-source contributions yet, you can:
  // 1. Leave this array empty
  // 2. Remove the contributions section from your portfolio
  // 3. Start contributing to open source projects!
  
  // Some suggestions for getting started:
  // - Documentation improvements in popular ML libraries
  // - Bug fixes in tools you use (PyTorch, TensorFlow, Hugging Face)
  // - Adding examples or tutorials to project repositories
  // - Contributing to awesome lists or community resources
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
