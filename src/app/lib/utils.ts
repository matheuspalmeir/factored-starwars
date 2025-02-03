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

const isDateString = (value: string): boolean => {
  // Matches both ISO dates and simple YYYY-MM-DD format
  const datePatterns = [
    /^\d{4}-\d{2}-\d{2}$/, // Matches "1977-05-25"
    /^\d{4}-\d{2}-\d{2}T?\d{2}?:?\d{2}?:?\d{2}?.?\d{3}?Z?$/, // Matches ISO format
  ];
  return (
    datePatterns.some((pattern) => pattern.test(value)) &&
    !isNaN(Date.parse(value))
  );
};

type ParseOptions = {
  arrayToLength?: boolean;
};

export const parseApiData = <T extends Record<string, any>>(
  data: Record<string, any>,
  options: ParseOptions = {}
): T => {
  const result: Record<string, any> = {};

  Object.entries(data).forEach(([key, value]) => {
    const camelKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());

    if (options.arrayToLength && Array.isArray(value)) {
      result[camelKey] = value.length;
    } else if (value && typeof value === "object" && !Array.isArray(value)) {
      result[camelKey] = parseApiData(value, options);
    } else if (typeof value === "string" && isDateString(value)) {
      result[camelKey] = new Date(value);
    } else {
      result[camelKey] = value;
    }
  });

  return result as T;
};
