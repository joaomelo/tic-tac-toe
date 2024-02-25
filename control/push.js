export function push({ name, router }) {
  switch (name) {
    default: {
      router.push({ name });
    }
  }
}
