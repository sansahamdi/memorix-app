import React from "react";
import Card from "./Card";
import { useLocation } from "react-router-dom";
import data from "../../data/data";
import { useTranslation } from "react-i18next";

import "./card.css";
function ListAnime() {
  const { t } = useTranslation();
  const location = useLocation();
 
  return (
    <div>
      <h1> {t("choixAnime")}</h1>
      <div class="listAnime-container">
        {data.map((anime, index) => {
          return (
            <Card
              anime={anime}
              key={index}
              mode={location.state}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ListAnime;
