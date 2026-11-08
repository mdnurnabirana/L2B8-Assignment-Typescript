// Problem 1
const multiplyValue = (value: number, multiplier?: number): number => {
  return multiplier !== undefined ? value * multiplier : value * 2;
};

// Problem 2
const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
};

// Problem 3
const formatCoordinate = (
  location: readonly [number, number, string],
): string => {
  const [latitude, longitude, locationName] = location;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

// Problem 4
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const result: T[] = [];

  for (const arr of arrays) {
    for (const item of arr) {
      result.push(item);
    }
  }

  return result;
};

// Problem 5
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
};

// Problem 6
const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};