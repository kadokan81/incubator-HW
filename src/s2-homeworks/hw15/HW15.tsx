import { useEffect, useState } from "react";
import s2 from "../../s1-main/App.module.css";
import s from "./HW15.module.css";
import axios from "axios";
import SuperPagination from "./common/c9-SuperPagination/SuperPagination";
import { useSearchParams } from "react-router-dom";
import SuperSort from "./common/c10-SuperSort/SuperSort";
import { Loader } from "../hw10/Loader";

/*
 * 1 - дописать SuperPagination
 * 2 - дописать SuperSort
 * 3 - проверить pureChange тестами
 * 3 - дописать sendQuery, onChangePagination, onChangeSort в HW15
 * 4 - сделать стили в соответствии с дизайном
 * 5 - добавить HW15 в HW5/pages/JuniorPlus
 * */

type TechType = {
  id: number;
  tech: string;
  developer: string;
};

type ParamsType = {
  sort: string;
  page: number;
  count: number;
};

const getTechs = (params: ParamsType) => {
  return axios
    .get<{ techs: TechType[]; totalCount: number }>(
      "https://samurai.it-incubator.io/api/3.0/homework/test3",
      { params },
    )
    .catch((e) => {
      alert(e.response?.data?.errorText || e.message);
    });
};

const HW15 = () => {
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(4);
  const [idLoading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(100);
  const [searchParams, setSearchParams] = useSearchParams();
  const [techs, setTechs] = useState<TechType[]>([]);

  const sendQuery = (params: any) => {
    setLoading(true);
    getTechs(params).then((res) => {
      //@ts-ignore
      setTechs([...res.data.techs]);
      setLoading(false);
      // делает студент
      // сохранить пришедшие данные
      //
    });
  };

  const onChangePagination = (newPage: number, newCount: number) => {
    const newCountOnPage = newCount ? newCount : count;
    setSort("");

    sendQuery({ page: newPage, count: newCount });
    setPage(newPage);
    searchParams.set("page", newPage.toString());

    setCount(newCountOnPage);
    searchParams.set("count", newCountOnPage.toString());

    setSearchParams(searchParams);
  };

  const onChangeSort = (newSort: string) => {
    const newTech = [...techs];
    const newSortValue =
      sort === ``
        ? `1${newSort}`
        : sort === `1${newSort}`
        ? `0${newSort}`
        : sort === `0${newSort}`
        ? ""
        : `1${newSort}`;

    const sortWay = newSortValue[0] === "0";

    setSort(newSortValue);

    // newTech.sort((a: TechType, b: TechType) => {
    //   const techA =
    //     newSort === "tech" ? a.tech.toLowerCase() : a.developer.toLowerCase();
    //   const techB =
    //     newSort === "tech" ? b.tech.toLowerCase() : b.developer.toLowerCase();

    //   if (sortWay) {
    //     if (techA < techB) {
    //       return -1; // a should come before b
    //     } else if (techA > techB) {
    //       return 1; // a should come after b
    //     } else {
    //       return 0; // names are equal
    //     }
    //   } else {
    //     if (techA < techB) {
    //       return 1; // a should come before b
    //     } else if (techA > techB) {
    //       return -1; // a should come after b
    //     } else {
    //       return 0; // names are equal
    //     }
    //   }
    // });
    setPage(1);
    setTechs(newTech);
    searchParams.set("sort", newSortValue);

    setSearchParams(searchParams);
    sendQuery(searchParams);

    // делает студент
    // setSort(
    // setPage(1) // при сортировке сбрасывать на 1 страницу
    // sendQuery(
    // setSearchParams(
    //
  };

  useEffect(() => {
    const params = Object.fromEntries(searchParams);

    sendQuery({ page: params.page, count: params.count });
    setPage(+params.page || 1);
    setCount(+params.count || 4);
  }, []);

  const mappedTechs = techs.map((t) => (
    <div key={t.id} className={s.row}>
      <div id={"hw15-tech-" + t.id} className={s.tech}>
        {t.tech}
      </div>

      <div id={"hw15-developer-" + t.id} className={s.developer}>
        {t.developer}
      </div>
    </div>
  ));

  return (
    <div id={"hw15"} className={s.hw15}>
      <div className={s2.hwTitle}>Homework #15</div>

      <div className={s2.hw}>
        {idLoading && (
          <div id={"hw15-loading"} className={s.loading}>
            <Loader />
          </div>
        )}

        <SuperPagination
          page={page}
          itemsCountForPage={count}
          totalCount={totalCount}
          onChange={onChangePagination}
        />
        <div className={s.techTable}>
          <div className={s.rowHeader}>
            <div className={s.techHeader}>
              tech
              <SuperSort sort={sort} value={"tech"} onChange={onChangeSort} />
            </div>
            <div className={s.developerHeader}>
              developer
              <SuperSort
                sort={sort}
                value={"developer"}
                onChange={onChangeSort}
              />
            </div>
          </div>

          {mappedTechs}
        </div>
      </div>
    </div>
  );
};

export default HW15;
