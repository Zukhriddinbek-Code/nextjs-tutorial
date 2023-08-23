import { useRouter } from "next/router";

// domain.com/news/sth-important

const DetailPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;

  return <h1>Detail Page</h1>;
};

export default DetailPage;
