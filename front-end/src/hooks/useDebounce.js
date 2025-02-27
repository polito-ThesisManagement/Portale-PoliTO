import { useEffect, useState } from 'react';

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler); // Pulisce il timeout se il valore cambia prima del delay
  }, [value, delay]);

  return debouncedValue;
}
