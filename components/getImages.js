export async function getStaticProps() {
  const images = await fetch('/images.json').then((res) => res.json());
  return {
    props: {
      images: images.map((filename) => `/images/${filename}`),
    },
  };
}