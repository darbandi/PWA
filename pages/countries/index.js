import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "src/components/card";
import { getAllCountry } from "src/store/slices/country";
import Layout from "src/components/layout";
import { Container } from "./style";
import Search from "src/components/search";
import CountriesLoading from "src/components/loading/countries";
import NotFound from "../../src/components/not-fount";

const Countries = () => {
  const dispatch = useDispatch();

  const { countries, isLoading, error, searchText, sortType } = useSelector(
    (state) => state.country
  );

  const sort = sortType?.split("-")[0];
  const type = sortType?.split("-")[1];

  useEffect(() => {
    dispatch(getAllCountry());
  }, []);

  const sorts = {
    populationask: (x, y) =>
      Number(x.population) > Number(y.population) ? 1 : -1,
    populationdesc: (x, y) =>
      Number(x.population) < Number(y.population) ? 1 : -1,
    nameask: (x, y) => (x.name.common > y.name.common ? 1 : -1),
  };

  if (error) return error;

  const finalCountries = countries
    ?.filter((x) => x.name.common.toLowerCase().includes(searchText))
    ?.sort(sorts[sort + type]);

  return (
    <Layout>
      <Search count={finalCountries.length} />
      {isLoading ? (
        <Container>
          <CountriesLoading />
        </Container>
      ) : (
        <Container>
          {finalCountries?.map((item) => {
            return <Card key={item.name.common} {...item} />;
          })}
          {!finalCountries.length && (
            <NotFound text="جستجوی شما نتیجه‌ای در بر نداشت" />
          )}
        </Container>
      )}
    </Layout>
  );
};

export default Countries;
