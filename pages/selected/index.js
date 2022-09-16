import React from "react";
import { useSelector } from "react-redux";
import Card from "src/components/card";
import Layout from "src/components/layout";
import { Container,LinkWrapper } from "./style";
import NotFound from "../../src/components/not-fount";
import Link from "next/link";

const Countries = () => {
  const { selected } = useSelector((state) => state.country);

  return (
    <Layout>
      <Container>
        {selected?.map((item) => {
          return <Card key={item.name.common} {...item} />;
        })}
        {!selected.length && (
          <>
            <NotFound
              text="هیچ موردی انتخاب نشده است"
              render={<LinkWrapper><Link href="/countries">بازگشت</Link></LinkWrapper>}
            />
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Countries;
