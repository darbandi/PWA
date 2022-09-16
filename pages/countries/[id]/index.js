import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "src/components/layout";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { getCountry } from "src/store/slices/country";
import { useDispatch, useSelector } from "react-redux";
import {
  Conatiner,
  Title,
  Flag,
  Col,
  Row,
  ButtonBack,
  Label,
  ButtonSelect,
  Details,
  RightSection,
  LeftSection,
  Info,
  Value,
  Detail,
  Item,
  ButtonDelete,
  Seperator,
  Tags,
  Tag,
} from "./style";
import bigDecimal from "js-big-decimal";
import { onDelete, onSelect } from "../../../src/store/slices/country";

const index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const { country, countries, isLoading } = useSelector(
    (state) => state.country
  );
  
  const selectedCountries = useSelector((state) => state.country.selected);

  useEffect(() => {
    if (id) dispatch(getCountry(id));
  }, [id]);

  const handleSelect = () => dispatch(onSelect(country));
  const handleDelete = () => dispatch(onDelete(country.cioc));
  const handleBack = () => router.push("/countries");

  let isSelected = false;
  const findSelected = selectedCountries?.find((x) => x.cioc === country.cioc);
  if (findSelected) {
    isSelected = true;
  }

  return (
    <Layout>
      {isLoading ? (
        <Conatiner>Loading ...</Conatiner>
      ) : (
        <Conatiner>
          <Row>
            <Col>
              <ButtonBack onClick={handleBack} variant="contained">
                <ChevronRightIcon />
                بازگشت
              </ButtonBack>
            </Col>
            <Col>
              {isSelected ? (
                <ButtonDelete onClick={handleDelete} variant="contained">
                  حذف
                </ButtonDelete>
              ) : (
                <ButtonSelect onClick={handleSelect} variant="contained">
                  انتخاب کشور
                </ButtonSelect>
              )}
            </Col>
          </Row>
          <Details>
            <RightSection>
              <Flag src={country?.flags?.svg} alt="next" />
            </RightSection>
            <LeftSection>
              <Title>{country?.name?.common}</Title>
              <Detail>
                <Info>
                  <Item>
                    <Label>نام اصلی</Label>
                    <Value>
                      {Object.values(country?.name?.nativeName || {})
                        .map((x) => x.common)
                        .join(" | ")}
                    </Value>
                  </Item>
                  <Item>
                    <Label>جمعیت</Label>
                    <Value>
                      {bigDecimal.getPrettyValue(country?.population)}
                    </Value>
                  </Item>
                  <Item>
                    <Label>قاره</Label>
                    <Value>{country?.region}</Value>
                  </Item>
                  <Item>
                    <Label>محدوده قاره</Label>
                    <Value>{country?.subregion}</Value>
                  </Item>
                  <Item>
                    <Label>پایتخت</Label>
                    <Value>{country?.capital?.join(" | ")}</Value>
                  </Item>
                </Info>
                <Info>
                  <Item>
                    <Label>دامنه وبسایت</Label>
                    <Value>{country?.tld?.join(" | ")}</Value>
                  </Item>
                  <Item>
                    <Label>واحد پولی</Label>
                    <Value>
                      {Object.values(country?.currencies || {})
                        ?.map((x) => x.symbol)
                        ?.join(" | ")}
                    </Value>
                  </Item>
                  <Item>
                    <Label>زبان</Label>
                    <Value>
                      {Object.values(country?.languages || {})?.join(" | ")}
                    </Value>
                  </Item>
                </Info>
              </Detail>
              <Seperator />
              <Label>کشورهای همسایه</Label>
              <Tags>
                {country?.borders?.map((item) => {
                  const _country = countries.find((x) => x.cioc === item);
                  if (_country)
                    return <Tag key={item}>{_country.name.common}</Tag>;
                  return <Tag key={item}>{item}</Tag>;
                })}
              </Tags>
            </LeftSection>
          </Details>
        </Conatiner>
      )}
    </Layout>
  );
};

export default index;
