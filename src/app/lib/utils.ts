export const formatKey = (str: string): string => {
  return str
    .replace(/(?<!^)([A-Z])/g, " $1") // Separate camel case
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter
};

export const formatToSlug = (str: string): string => {
  return str
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^a-z0-9-]/g, ""); // Remove special characters (optional)
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
