import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSelect, onDelete } from "../../store/slices/country";
import bigDecimal from "js-big-decimal";
import {
  Conatiner,
  Title,
  Flag,
  Col,
  Row,
  ButtonView,
  ButtonDelete,
  Actions,
  Label,
  ButtonSelect,
} from "./style";
import { useTranslation } from "react-i18next";

const Card = (props) => {
  const { name, flags, continents, population, capital, cioc } = props;
  const selectedCountries = useSelector((state) => state.country.selected);
  const dispatch = useDispatch();
  const router = useRouter();
  const { t } = useTranslation();

  const handleDelete = () => dispatch(onDelete(cioc));
  const handleSelect = () => dispatch(onSelect(props));
  const handleViewDetail = () => router.push(`/countries/${cioc}`);

  let isSelected = false;
  const findSelected = selectedCountries?.find((x) => x.cioc === cioc);
  if (findSelected) {
    isSelected = true;
  }

  return (
    <Conatiner>
      <Flag src={flags.svg} alt="next" />
      <Title>{name.common}</Title>
      <Row>
        <Col>
          <Label>{t("country.population")}</Label>
        </Col>
        <Col>
          <Label>{bigDecimal.getPrettyValue(population)}</Label>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label>{t("country.continents")}</Label>
        </Col>
        <Col>
          <Label>{continents[0]}</Label>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label>{t("country.capital")}</Label>
        </Col>
        <Col>
          <Label>{capital?.[0]}</Label>
        </Col>
      </Row>
      <Actions>
        <ButtonView onClick={handleViewDetail} variant="contained">
          {t("country.view")}
        </ButtonView>
        {isSelected ? (
          <ButtonDelete onClick={handleDelete} variant="contained">
            {t("country.delete")}
          </ButtonDelete>
        ) : (
          <ButtonSelect onClick={handleSelect} variant="contained">
            {t("country.select")}
          </ButtonSelect>
        )}
      </Actions>
    </Conatiner>
  );
};

export default Card;
