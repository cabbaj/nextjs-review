const AboutDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  //   const id = (await params).id;
  //   console.log(id);

  // destructuring
  const { id } = await params;
  console.log(id);

  return <div>AboutDetailPage {id}</div>;
};
export default AboutDetailPage;
